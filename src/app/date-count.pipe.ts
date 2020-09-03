import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any){
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = Math.round(dateDifferenceSeconds/secondsInDay);

    if (dateCounter >= 1 && todayWithNoTime > value){
      return (dateCounter + " Days ago");
    }else{
      return 'Today';
    }
  }
}