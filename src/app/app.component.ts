import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { TypeValidator } from './validators/enum';
import { EUserTypeKeys } from './enum/user-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    input: new FormControl('', [TypeValidator(EUserTypeKeys)])
  });

  public attributes: Partial<HTMLInputElement> = {};

  ngOnInit(): void {
    this.attributes.placeholder = 'Digite aqui';
    this.attributes.className = 'teste';
    this.attributes.type = 'tel';

    this.formGroup?.valueChanges.subscribe(changes => {
      console.log(this.formGroup.get('input')?.dirty)
    })
  }

  hasError(formControl: AbstractControl) {
    return formControl.invalid && formControl.touched;
  }
}
