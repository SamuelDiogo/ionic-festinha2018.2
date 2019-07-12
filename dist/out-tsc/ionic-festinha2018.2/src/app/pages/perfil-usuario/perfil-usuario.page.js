import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
var PerfilUsuarioPage = /** @class */ (function () {
    function PerfilUsuarioPage(usuarioService, activeRouter) {
        this.usuarioService = usuarioService;
        this.activeRouter = activeRouter;
    }
    PerfilUsuarioPage.prototype.ngOnInit = function () {
        this.key = this.activeRouter.snapshot.paramMap.get("key");
        this.usuario = this.usuarioService.get(this.key);
    };
    PerfilUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-usuario',
            templateUrl: './perfil-usuario.page.html',
            styleUrls: ['./perfil-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            ActivatedRoute])
    ], PerfilUsuarioPage);
    return PerfilUsuarioPage;
}());
export { PerfilUsuarioPage };
//# sourceMappingURL=perfil-usuario.page.js.map