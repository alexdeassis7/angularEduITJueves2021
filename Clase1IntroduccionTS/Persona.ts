
export class Persona {
    //defino los atributos de la clase 
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;
    noSeQueMeviene : miInterface ;

    caminar(kilometros: number): void{
        console.log('estoy caminando ' + this.kilometros + ' a la semana');
    }

    constructor(name:string , apelli: string , edad: number , km :number){
        this.nombre = name;
        this.apellido = apelli;
        this.edad = edad;
        this.kilometros= km;       
        this.noSeQueMeviene = {
            "id": "889560fe-9e23-4a2d-a00f-e3468ac0f907",
            "productNumber": 1,
          
            "weekDays": 5,
            "maxAmount": 1,
            "startTime": "11:00",
            "endTime": "10:30",
            "serviceOperator": "SYTRAL",
            "startDate": "20211231",
            "endDate": "20231230"
        }
        
    }



}
//JSON : respuesta de una API Rest Java Script object notation

export interface miInterface{
    id: string;
    productNumber: number;
    passengerQty?: number;
    weekDays: number,
    maxAmount: number,
    startTime: string,
    endTime: string,
    serviceOperator:string,
    startDate: string,
    endDate: string ,
}

