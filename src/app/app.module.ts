import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'firebase/firestore';
import { HomeComponent } from './home/home.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RegistroUserComponent } from './registro-user/registro-user.component';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginEmailComponent,
    CrearProyectoComponent,
    ProyectosComponent,
    RegistroUserComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    PanelMenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ScrollingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AccordionModule,
    TabMenuModule,
    MessageModule,
    MenuModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
