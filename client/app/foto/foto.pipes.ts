import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPortTitulo'
})

export class FiltroPorTitulo implements PipeTransform {

    transform(fotos, digitado){
        digitado = digitado.toLowercase();
        return fotos.filter( foto => foto.titulo.toLowercase().includes(digitado));
    }
 }