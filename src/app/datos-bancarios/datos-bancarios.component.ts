import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  formGroup!: FormGroup;
  sucursalGroup = new FormControl ('0000', [Validators.required, this.myValidador]);

  constructor(private formBuilder: FormBuilder) { 
        this.formGroup = formBuilder.group(
          {
          entidad: '', 
          sucursal: this.sucursalGroup, 
          dc:'', 
          cuenta:''
        }
        )
        this.sucursalGroup.valueChanges.subscribe(x => console.log(x))
  }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this);
  }

  myValidador(formControl:FormControl){
    return formControl.value === '0000' ? {error:"bad value, 0000 does not exist"} : null ;
  }  
}
