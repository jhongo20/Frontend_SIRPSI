export interface IEmpresa {
    isSuccess:      boolean;
    result:         Empresa[];
    displayMessage: string;
    errorMessage:   null;
}
export interface Empresa {
    id:                 string;
    tipoDocumento:      string;
    digitoVerificacion: string;
    idTipoEmpresa:      string;
    documento:          string; 
    nombre:             string;       
    idEstado:           boolean;
    idMinisterio:       string; 
    ministerio:         Ministerio;
    fechaRegistro:      Date;
    fechaModifico:      Date;
}

export interface Ministerio {
    id:                 string;
    nombre:             string; 
    nit:                string; 
    fechaRegistro:      Date;
    fechaModifico:      Date;
}
