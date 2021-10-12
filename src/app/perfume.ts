export interface Perfume {
   
    id: number;
    nome: string;
    marca:[
        id: number,
        nome: string
    ];
    essencia: [
        id: number,
        descricao: string
    ];
    
}
