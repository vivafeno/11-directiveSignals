import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: false,
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  private _errors?: ValidationErrors | null | undefined;

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log(this._errors);
    this.setErrorMessage();
  }

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle() {
    if (this.htmlElement) {
      this.htmlElement.nativeElement.style.color = this._color;
    }
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }

    this.htmlElement.nativeElement.style.color = 'red';

    const errors = Object.keys(this._errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const currentLength = this._errors['minlength']['actualLength'];
      const requiredLength = this._errors['minlength']['requiredLength'];
      this.htmlElement.nativeElement.innerHTML = `Este campo debe tener al menos ${requiredLength} caracteres. Faltan: ${
        requiredLength - currentLength
      }`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo debe ser un email';
      return;
    }   
  }
}
