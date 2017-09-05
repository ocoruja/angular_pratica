import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{
    fotos: Object[] = [];
    //fotos: Array<Object> = []; Essa sintaxe é a mesma da sintaxe acima
    constructor(http: Http) {
        //let stream = http.get('v1/fotos');
        //stream.subscribe(function(res){
        
        http
        .get('v1/fotos')
        .map(res => res.json())
        .subscribe(fotos =>{
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }
}