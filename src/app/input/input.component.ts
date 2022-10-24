import { AfterViewInit, Component, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import ControlValueAccessorImpl from '../classes/ControlValueAccessorImpl';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ControlValueAccessorImpl implements AfterViewInit {

  @ViewChild('input') input: any;

  @Input('attributes') attributes: Partial<HTMLInputElement> = {};

  constructor(private renderer2: Renderer2) {
    super();
  }

  ngAfterViewInit(): void {
    this.addAttributes();
  }

  addAttributes() {
    for(const attr in this.attributes) {
      const value = (this.attributes as any)[attr];
      if (typeof value == 'string') {
        if (attr == 'className') {
          this.renderer2.addClass(this.input.nativeElement, value);
        } else {
          this.renderer2.setAttribute(this.input.nativeElement, attr, value);
        }
      }
    }
  }
}
