import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {

  transform(value: string, extrastr?: string): string {
    return value.split("").reverse() + (extrastr ? extrastr : '');
  }

}
