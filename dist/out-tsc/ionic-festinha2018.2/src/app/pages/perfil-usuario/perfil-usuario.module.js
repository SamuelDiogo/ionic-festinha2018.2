import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilUsuarioPage } from './perfil-usuario.page';
var routes = [
    {
        path: '',
        component: PerfilUsuarioPage
    }
];
var PerfilUsuarioPageModule = /** @class */ (function () {
    function PerfilUsuarioPageModule() {
    }
    PerfilUsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerfilUsuarioPage]
        })
    ], PerfilUsuarioPageModule);
    return PerfilUsuarioPageModule;
}());
export { PerfilUsuarioPageModule };
//# sourceMappingURL=perfil-usuario.module.js.map