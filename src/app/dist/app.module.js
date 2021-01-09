"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
require("firebase/firestore");
var home_component_1 = require("./home/home.component");
var login_email_component_1 = require("./login-email/login-email.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_spinner_1 = require("ngx-spinner");
var panelmenu_1 = require("primeng/panelmenu");
var menubar_1 = require("primeng/menubar");
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var crear_proyecto_component_1 = require("./crear-proyecto/crear-proyecto.component");
var scrolling_1 = require("@angular/cdk/scrolling");
var proyectos_component_1 = require("./proyectos/proyectos.component");
var fire_1 = require("@angular/fire");
var auth_1 = require("@angular/fire/auth");
var firestore_1 = require("@angular/fire/firestore");
var environment_1 = require("../environments/environment");
var registro_user_component_1 = require("./registro-user/registro-user.component");
var accordion_1 = require("primeng/accordion");
var tabmenu_1 = require("primeng/tabmenu");
var message_1 = require("primeng/message");
var header_component_1 = require("./header/header.component");
var menu_1 = require("primeng/menu");
var tabview_1 = require("primeng/tabview");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_email_component_1.LoginEmailComponent,
                crear_proyecto_component_1.CrearProyectoComponent,
                proyectos_component_1.ProyectosComponent,
                registro_user_component_1.RegistroUserComponent,
                header_component_1.HeaderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_spinner_1.NgxSpinnerModule,
                panelmenu_1.PanelMenuModule,
                menubar_1.MenubarModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                scrolling_1.ScrollingModule,
                auth_1.AngularFireAuthModule,
                firestore_1.AngularFirestoreModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                accordion_1.AccordionModule,
                tabmenu_1.TabMenuModule,
                message_1.MessageModule,
                menu_1.MenuModule,
                tabview_1.TabViewModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
