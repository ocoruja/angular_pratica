import { Component, Input, OnInit } from '@angular/core';
// adicionar Input quando receber o "titulo" como parametro

@Component({
    moduleId: module.id,
    //module id é necessário para usar pasta relativa
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent implements OnInit{

    @Input() titulo: string;
    
    ngOnInit() {
        this.titulo = this.titulo.length > 7
        ? this.titulo.substr(0,7) + '...'
        : this.titulo;
    }
}