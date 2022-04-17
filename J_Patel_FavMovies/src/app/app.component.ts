import { ApplicationInitStatus, ApplicationRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Movie } from './helper-files/movie-interface';
import { LogUpdateService } from './log-update.service';
import { MessageService } from './services/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  log: any;
  
  constructor(public messageSer: MessageService, public logService: LogUpdateService, 
    private _snackBar: MatSnackBar ,private appRef: ApplicationRef, private updates: SwUpdate)
  { }
  
  ngOnInit(): void {
    this.log.init();
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());
    }
}