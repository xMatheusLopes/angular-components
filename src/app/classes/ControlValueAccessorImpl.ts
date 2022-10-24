import { ControlValueAccessor } from "@angular/forms";

export default class ControlValueAccessorImpl implements ControlValueAccessor {
    public value = '';
    public isDisabled = false;
    public onChange: any = () => {};
    public onTouched: any = () => {};

    writeValue(value: any): void {
        this.value = value
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}