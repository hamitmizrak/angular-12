import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerText'
})
export class LowerTextPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toLocaleLowerCase();
  }

}
