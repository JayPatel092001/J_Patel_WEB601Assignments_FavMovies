import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MoviefilterPipe } from './moviefilter.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { DefaultTypePipe } from './default-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MoviefilterPipe,
    ContentListComponent,
    DefaultTypePipe,
    HoverAffectDirective,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
