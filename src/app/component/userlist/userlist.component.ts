import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthenicateService } from 'src/app/service/authenicate.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
form: any;

  constructor(public fb:FormBuilder , public router:Router , private auth:AuthenicateService,public snackbar:MatSnackBar) { }

todolist = [];
public one:any;
  ngOnInit(): void {

  }



onClick() {

  if(this.one == ''){

  }
  else{
      this.todolist.push(this.one);
      this.one = '';
  }

}

deleteTask(index:any){

   this.todolist.splice(index, 1)
}

    }



