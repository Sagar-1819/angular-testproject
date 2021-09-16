import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthenicateService } from 'src/app/service/authenicate.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showimage:boolean=true
  form: any;
  constructor(public fb:FormBuilder , public router:Router , private auth:AuthenicateService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.formBuilder()
  }

  formBuilder(){
    this.form = this.fb.group({


      userName: ['',[Validators.required]],
      password: ['',[Validators.required]],


    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }


  submitForm(){

    if(this.form.invalid){
      return
    }
    this.router.navigate(['/cards'])
    this.success("successfully login")

  }

  config:MatSnackBarConfig = {
    duration:3000,
    horizontalPosition:"center",
    verticalPosition:"top"
  }

   success(msg:any){
     this.config['panelClass'] = ['notification', 'success']
     this.snackbar.open(msg,'', this.config)
   }

   onChange(){

    this.showimage=false


}
onClick(){
  this.showimage = true
}




}
