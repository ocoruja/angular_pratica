"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
// adicionar Input quando receber o "titulo" como parametro
let PainelComponent = class PainelComponent {
    ngOnInit() {
        this.titulo = this.titulo.length > 7
            ? this.titulo.substr(0, 7) + '...'
            : this.titulo;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PainelComponent.prototype, "titulo", void 0);
PainelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //module id é necessário para usar pasta relativa
        selector: 'painel',
        templateUrl: './painel.component.html'
    }), 
    __metadata('design:paramtypes', [])
], PainelComponent);
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map