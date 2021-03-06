import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewRoutineComponent } from './view-routine/view-routine.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoutineFilterComponent } from './routine-filter/routine-filter.component';
import { RoutineCellComponent } from './routine-cell/routine-cell.component';
import { RoutineTableComponent } from './routine-table/routine-table.component';
import { LoginRoutineComponent } from './login-routine/login-routine.component';
import { LogoutRoutineComponent } from './logout-routine/logout-routine.component';
import { XyzComponent } from './xyz/xyz.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EntryPopupComponent} from './entry-popup/entry-popup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateRoutinePopupComponent } from './create-routine-popup/create-routine-popup.component';
import { EditRoutinePopupComponent } from './edit-routine-popup/edit-routine-popup.component';
import { CreateRoutineComponent } from './create-routine/create-routine.component';
import { FormsModule } from '@angular/forms';
//import {environment} from 'src/environments/environment';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  declarations: [
    AppComponent,
    ViewRoutineComponent,
    EditRoutineComponent,
    NavigationComponent,
    RoutineFilterComponent,
    RoutineCellComponent,
    RoutineTableComponent,
    LoginRoutineComponent,
    LogoutRoutineComponent,
    XyzComponent,
    EntryPopupComponent,
    CreateRoutinePopupComponent,
    EditRoutinePopupComponent,
    CreateRoutineComponent,
 
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule,
  
    HttpClientModule,
    //AlertsModule.forRoot()
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent ]
  })
  export class AppModule{}
