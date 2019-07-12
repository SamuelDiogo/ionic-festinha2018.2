import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
var TabsPage = /** @class */ (function () {
    function TabsPage(usuarioService) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.nuser = 0;
        this.usuarioService.getAll()
            .subscribe(function (res) { return _this.nuser = res.length; }, function (err) { return _this.nuser = 0; });
    }
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map