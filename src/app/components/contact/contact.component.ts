import { group } from '@angular/animations';
import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
[x: string]: any;
  constructor(private _Renderer2:Renderer2 ,private _fb:FormBuilder){
    this.registrition(this.registerForm)
  }
  inBut:string=''
  vaild:boolean=true
@ViewChild('sendBtn') btnSend!:ElementRef

@ViewChildren('sendBtn') sendBtn!:QueryList<any>

  copy(input:any):void{
   
    // console.log(this.btnSend.nativeElement.innerHTML)
    // this._Renderer2!.removeClass(this.btnSend.nativeElement,'disabled')
    console.log(this.sendBtn.toArray())
    this.sendBtn.toArray().forEach((el:ElementRef)=>{
      el.nativeElement.innerHTML='mina'
    })
  }

  //form Bulider//

  registerForm:FormGroup=this._fb.group({
    first_name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
    last_name:['',[Validators.required ,Validators.maxLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required ,Validators.maxLength(6)]],
    age:['',[Validators.required ,Validators.maxLength(6)]]
  })


  registrition(registerForm:FormGroup){
    console.log(registerForm.value)
    registerForm.reset()
  }

  

  

  get firstName():AbstractControl|null{
    return  this.registerForm.get('first_name')
  }

  get LastName():AbstractControl|null{
    return  this.registerForm.get('last_name')
  }

    
    get email():AbstractControl| null {

      return this.registerForm.get('email')
    }
    
    get password():AbstractControl|null{
      return this.registerForm.get('password')
    }

    get age():AbstractControl|null{
      return this.registerForm.get('age')
    }
  }
  

