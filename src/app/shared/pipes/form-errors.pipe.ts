import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors|null|undefined , ...args: string[]): unknown {
    if(value) {
      const errorMessages: string[] = [];
    
      if('required' in value) {
        errorMessages.push("Este campo es requerido")
      }

      if('email' in value ) {
        errorMessages.push("Este email es inválido")
      }
      return errorMessages[0];
    } else {
      return "";
    }
  }
}
