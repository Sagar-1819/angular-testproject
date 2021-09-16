import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthenicateService } from 'src/app/service/authenicate.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;
  url:any;
  sub:any;

  showimage:boolean=true

  constructor(public fb:FormBuilder , public router:Router, public auth:AuthenicateService, public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.formBuilder()
  }

  formBuilder(){
    this.form = this.fb.group({

      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      Email : ['',[Validators.required,Validators.email]],
      phoneNumber : ['',[Validators.required]],
      userName: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],


    });
  }




  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  onSelectFile(event:any) {
    const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result as string

    }
  }

  submitForm(){

    if(this.form.invalid){
      return
    }
    console.log(this.form.value)

    let temp = this.form.value
    let obj:any={}
    obj.firstName = temp.firstName,
    obj.lastName = temp.lastName,
    obj.Email = temp.Email,
    obj.userName = temp.userName,
    obj.password = temp.password


     this.sub=this.auth.registeruser(obj).subscribe((data)=>{
       console.log(data)
      this.router.navigate(['/login'])

     })

      this.success("successfully registered")

  }

  onreset(){
    this.form.reset()
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


  signin(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/register'])
  }
  image ="https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg"

  imageObject = [{
    images: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    }]


onChange(){

    this.showimage=false


}
onClick(){
  this.showimage = true
}

}




