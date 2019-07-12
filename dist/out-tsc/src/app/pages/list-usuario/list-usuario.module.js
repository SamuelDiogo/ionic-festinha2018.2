import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListUsuarioPage } from './list-usuario.page';
var routes = [
    {
        path: '',
        component: ListUsuarioPage
    }
];
var ListUsuarioPageModule = /** @class */ (function () {
    function ListUsuarioPageModule() {
    }
    ListUsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListUsuarioPage]
        })
    ], ListUsuarioPageModule);
    return ListUsuarioPageModule;
}());
export { ListUsuarioPageModule };
//# sourceMappingURL=list-usuario.module.js.map