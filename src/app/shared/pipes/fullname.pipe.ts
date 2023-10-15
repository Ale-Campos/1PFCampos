import { Pipe, PipeTransform } from '@angular/core';
import { IAlumn } from 'src/data/Alumns';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: IAlumn, ...args: IAlumn[]): string {
    return `${value.name} ${value.lastName}`;
  }

}
