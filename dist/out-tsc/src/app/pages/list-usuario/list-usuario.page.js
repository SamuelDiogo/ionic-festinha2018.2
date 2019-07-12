import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
var ListUsuarioPage = /** @class */ (function () {
    function ListUsuarioPage(usuarioService) {
        this.usuarioService = usuarioService;
    }
    ListUsuarioPage.prototype.ngOnInit = function () {
        this.usuarios = this.usuarioService.getAll();
    };
    ListUsuarioPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    ListUsuarioPage.prototype.atualizar = function () { };
    ListUsuarioPage.prototype.remover = function () { };
    ListUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-list-usuario',
            templateUrl: './list-usuario.page.html',
            styleUrls: ['./list-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], ListUsuarioPage);
    return ListUsuarioPage;
}());
export { ListUsuarioPage };
//# sourceMappingURL=list-usuario.page.js.map