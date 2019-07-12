import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
var UsuarioService = /** @class */ (function () {
    function UsuarioService(db) {
        this.db = db;
    }
    UsuarioService.prototype.save = function (usuario) {
        return this.db.list("usuario").push(usuario);
    };
    UsuarioService.prototype.getAll = function () {
        return this.db.list("usuario").snapshotChanges()
            .pipe(map(function (noCopyIsDocs) {
            return noCopyIsDocs.map(function (c) { return (tslib_1.__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    UsuarioService.prototype.get = function (key) {
        return this.db.object("usuario/" + key).valueChanges();
    };
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map