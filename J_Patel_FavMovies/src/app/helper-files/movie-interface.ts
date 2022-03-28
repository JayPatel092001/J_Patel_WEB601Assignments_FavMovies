export interface Movie{
    readonly id?: number;
    title?: string;
    description: string;
    creator: string;
    imageUrl?: string;
    type?: string;
    tags?: string[];
    
    }