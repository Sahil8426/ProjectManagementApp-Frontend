
import { DatePipe } from '@angular/common';

export interface Task{

    id:string;

     projectName: string;

     taskName: string;


    priority: number;
    
    startdate: Date;

    enddate: Date;

    //  startdate:Date;

    //  enddate:Date;

}