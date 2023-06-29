export interface IMinisterio {
    isSuccess:      boolean;
    result:         Ministerio[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Ministerio {
    id:                 string;
    nombre:             string; 
    nit:                string; 
    fechaRegistro:      Date;
    fechaModifico:      Date;
}


