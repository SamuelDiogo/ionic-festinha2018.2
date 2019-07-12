import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'listUsuario',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/list-usuario/list-usuario.module#ListUsuarioPageModule'
                    }
                ]
            },
            {
                path: 'addUsuario',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/add-usuario/add-usuario.module#AddUsuarioPageModule'
                    }
                ]
            },
            {
                path: 'perfilUsuario/:key',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule'
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map