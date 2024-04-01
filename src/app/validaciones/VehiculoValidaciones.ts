import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codigoV.test(value)) {
      return null;
    }
    return { codigoValidate: true };
  };
}
