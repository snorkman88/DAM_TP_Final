import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valvula'
})
export class ValvulaPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1){
      return "ABIERTA"}
    if (value == 0){
      return "CERRADA"}
  }

}
