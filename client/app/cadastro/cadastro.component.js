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
const foto_component_1 = require('../foto/foto.component');
const http_1 = require('@angular/http');
let CadastroComponent = class CadastroComponent {
    constructor(http) {
        this.foto = new foto_component_1.FotoComponent();
        this.http = http;
    }
    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers }) // propriedade headers: valor headers
            .subscribe(() => {
            this.foto = new foto_component_1.FotoComponent();
            console.log('Foto salva com sucesso');
        }, erro => console.log(erro));
    }
};
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './cadastro.component.html'
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map