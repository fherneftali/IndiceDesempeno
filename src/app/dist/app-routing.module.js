"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crear_proyecto_component_1 = require("./crear-proyecto/crear-proyecto.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var login_email_component_1 = require("./login-email/login-email.component");
var proyectos_component_1 = require("./proyectos/proyectos.component");
var registro_user_component_1 = require("./registro-user/registro-user.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'loginCorreo', component: login_email_component_1.LoginEmailComponent },
    { path: 'registroUsuario', component: registro_user_component_1.RegistroUserComponent },
    { path: 'crearProyecto', component: crear_proyecto_component_1.CrearProyectoComponent },
    { path: 'proyectos', component: proyectos_component_1.ProyectosComponent },
    { path: 'header', component: header_component_1.HeaderComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
