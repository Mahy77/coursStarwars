import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})
export class FirstCharPipe implements PipeTransform {

  transform(value: string, args: any[]): any {
    const nameTab = value.split(' ');
    return nameTab[0][0] + '.' + nameTab[1][0];
  }
}
