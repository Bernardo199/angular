import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    LoginComponent
  ],
 
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
