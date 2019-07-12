import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddEventoPage } from './add-evento.page';
var routes = [
    {
        path: '',
        component: AddEventoPage
    }
];
var AddEventoPageModule = /** @class */ (function () {
    function AddEventoPageModule() {
    }
    AddEventoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddEventoPage]
        })
    ], AddEventoPageModule);
    return AddEventoPageModule;
}());
export { AddEventoPageModule };
//# sourceMappingURL=add-evento.module.js.map