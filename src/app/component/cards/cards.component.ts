import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  url:any;
  showimage:boolean=true


  showFiller = false;

  constructor(public fb:FormBuilder , public router:Router) { }

  ngOnInit(): void {

  }

 onSelectFile(event:any) {
    const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result as string

    }
  }

  delete(){

    this.url=null;
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
