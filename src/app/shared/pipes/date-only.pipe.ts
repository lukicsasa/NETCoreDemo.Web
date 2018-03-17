import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOnly'
})
export class DateOnlyPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    var dt =  new Date(value)
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
  }

}
