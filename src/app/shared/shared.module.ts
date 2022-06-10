
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 



@NgModule({
  declarations: [
    SideBarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports:[
    SideBarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
