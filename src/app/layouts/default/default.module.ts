import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PerfilComponent } from 'src/app/modules/perfil/perfil.component';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
