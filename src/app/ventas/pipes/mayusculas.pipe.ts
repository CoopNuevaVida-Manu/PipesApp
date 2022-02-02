import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(valor:string, enMayusculas:boolean = true): string {
        if(enMayusculas){
            return valor.toUpperCase();
        }else{
            return valor.toLowerCase();
        }
        
    }
}