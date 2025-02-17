import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // Inyectar el servicio FormBuilder
  private fb = inject( FormBuilder);
  public color:string = 'red';

  public myForm: FormGroup = this.fb.group({

    name: ['',[Validators.required, Validators.minLength(6), Validators.email],], 
  }); 



  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));;
  }



}
