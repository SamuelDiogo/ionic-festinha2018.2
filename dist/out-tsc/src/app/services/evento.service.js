import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
var EventoService = /** @class */ (function () {
    function EventoService(db) {
        this.db = db;
    }
    EventoService.prototype.save = function (usuario) {
        return this.db.list("evento").push(usuario);
    };
    EventoService.prototype.getAll = function () {
        return this.db.list("evento").snapshotChanges()
            .pipe(map(function (sam) {
            return sam.map(function (c) { return (tslib_1.__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    EventoService.prototype.get = function (key) {
        return this.db.object("evento/" + key).valueChanges();
    };
    EventoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], EventoService);
    return EventoService;
}());
export { EventoService };
//# sourceMappingURL=evento.service.js.map