import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from './../../model/usuario';
import { UsuarioService } from './../../services/usuario.service';
var AddUsuarioPage = /** @class */ (function () {
    function AddUsuarioPage(alertController, router, usuarioService) {
        this.alertController = alertController;
        this.router = router;
        this.usuarioService = usuarioService;
    }
    AddUsuarioPage.prototype.ngOnInit = function () {
        this.usuario = new Usuario;
    };
    AddUsuarioPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            // console.log("Cadastrado", this.usuario);
            this.usuarioService.save(this.usuario)
                .then(function (res) {
                _this.presentAlert("Aviso", "Cadastrado!");
                form.reset();
                _this.router.navigate(['/']);
            }, function (err) {
                _this.presentAlert("Epa!", "Erro ao cadastrar!");
            });
        }
    };
    AddUsuarioPage.prototype.presentAlert = function (titulo, texto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: titulo,
                            //subHeader: 'Subtitle',
                            message: texto,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-usuario',
            templateUrl: './add-usuario.page.html',
            styleUrls: ['./add-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            Router,
            UsuarioService])
    ], AddUsuarioPage);
    return AddUsuarioPage;
}());
export { AddUsuarioPage };
//# sourceMappingURL=add-usuario.page.js.map