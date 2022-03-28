interface messagesInterface {
  [key: string]: string;
}

class ApiError {
  code: number;

  constructor(code: number) {
    this.code = code;
  }

  get message() {
    return this.strategicMessage[this.code];
  }

  strategicMessage: messagesInterface = {
    400: 'Solicitud incorrecta',
    401: 'No autorizado',
    403: 'Permisos insuficientes',
    404: 'Página no encontrada',
    406: 'Los valores enviados no son aceptables',
    409: 'Conflicto con el estado actual del servidor',
    500: 'Error interno, intentalo de nuevo',
    503: 'Excedido el número de peticiones',
  };
}

export { ApiError };
