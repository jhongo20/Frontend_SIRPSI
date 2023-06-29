export interface IUsuarioLogin {
    isSuccess:      boolean;
    result:         UsuarioLogin[];
    displayMessage: string;
    errorMessage:   null;
}

export interface UsuarioLogin {
    nit:       string;
    document:       string;    
    password:       string;
}
