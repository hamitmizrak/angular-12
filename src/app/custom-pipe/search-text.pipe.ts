import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(value: any, yazilanVeri: string): any {
if(!yazilanVeri || !value ){
  return value;
}else{

  return value.filter(
    (value: any) => value.toLowerCase().indexOf(yazilanVeri.toLowerCase()) !== -1
    );
  }

}
}