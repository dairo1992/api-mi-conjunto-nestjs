/**
 * Mensajes de validación personalizados en español
 */
export const ValidationMessages = {
  // Mensajes generales
  REQUIRED: 'Este campo es requerido',
  INVALID_FORMAT: 'El formato proporcionado no es válido',

  // Email
  EMAIL_REQUIRED: 'El email es requerido',
  EMAIL_INVALID: 'Debe proporcionar un email válido',
  EMAIL_ALREADY_EXISTS: 'El email ya está registrado',

  // Contraseña
  PASSWORD_REQUIRED: 'La contraseña es requerida',
  PASSWORD_TOO_SHORT: 'La contraseña debe tener al menos 8 caracteres',
  PASSWORD_TOO_WEAK:
    'La contraseña debe contener al menos una mayúscula, una minúscula y un número',

  // Nombres
  FIRST_NAME_REQUIRED: 'El nombre es requerido',
  LAST_NAME_REQUIRED: 'El apellido es requerido',
  NAME_TOO_SHORT: 'El nombre debe tener al menos 2 caracteres',
  NAME_TOO_LONG: 'El nombre no puede exceder 50 caracteres',

  // Autenticación
  LOGIN_SUCCESS: 'Inicio de sesión exitoso',
  REGISTER_SUCCESS: 'Usuario registrado exitosamente',
  INVALID_CREDENTIALS: 'Credenciales inválidas',
  USER_NOT_FOUND: 'Usuario no encontrado',
  UNAUTHORIZED: 'No autorizado',

  // Teléfono
  PHONE_INVALID: 'El número de teléfono no es válido',

  // Generales de servidor
  INTERNAL_ERROR: 'Error interno del servidor',
  FORBIDDEN: 'Acceso denegado',
  NOT_FOUND: 'Recurso no encontrado',
  CONFLICT: 'Conflicto con el estado actual del recurso',
};
