

import { NgModule } from "@angular/core";
import  {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';




@NgModule({
   exports:[

       MatIconModule,
       MatCardModule,
       MatListModule,
       MatButtonModule,
       MatFormFieldModule,
       MatInputModule,
       MatToolbarModule,
       MatSidenavModule,
       MatListModule,
       MatTabsModule,
       MatDatepickerModule,
       MatSnackBarModule,
       MatSelectModule,
       MatTableModule





   ]

})



export class MaterialModule{}
