import { Component, Input } from '@angular/core';
// adicionar Input quando receber o "titulo" como parametro

@Component({
    moduleId: module.id,
    //module id é necessário para usar pasta relativa
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent{

    @Input() titulo: string;
}