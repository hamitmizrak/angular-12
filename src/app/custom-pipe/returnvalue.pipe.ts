import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'returnvalue'
})
export class ReturnvaluePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value)
    return value.concat(".deneme")+' '+value.length ;
  }

}
