import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function TypeValidator(type: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const hasError = !type.includes(control.value);
        return hasError ? {notInType: {value: control.value}} : null;
    };
}