# API Mi Conjunto

## Descripción

API REST desarrollada con NestJS para la gestión de conjuntos residenciales. La aplicación incluye autenticación JWT, gestión de usuarios y está preparada para conectarse a una base de datos MySQL.

## Características Principales

- 🔐 **Autenticación JWT**: Sistema completo de registro y login
- 👥 **Gestión de Usuarios**: CRUD de usuarios con validaciones
- 🗄️ **Base de Datos MySQL**: Integración con TypeORM
- ✅ **Validación de Datos**: Usando class-validator
- 🛡️ **Seguridad**: Encriptación de contraseñas con bcrypt
- 📝 **Documentación**: Código bien documentado y tipado
- 🧪 **Testing**: Configurado para pruebas unitarias y e2e
- 🎯 **TypeScript**: Completamente tipado con TypeScript

## Tecnologías Utilizadas

- **NestJS** v11 - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **TypeORM** - ORM para base de datos
- **MySQL** - Base de datos
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas
- **class-validator** - Validación de DTOs
- **ESLint + Prettier** - Linting y formateo
- **Jest** - Testing

## Instalación

```bash
# Clonar el repositorio
$ git clone <url-del-repositorio>
$ cd api-mi-conjunto

# Instalar dependencias
$ pnpm install
```

## Configuración

1. **Crear archivo de variables de entorno:**
```bash
$ cp .env.example .env
```

2. **Configurar las variables de entorno en el archivo .env:**
```env
# Puerto de la aplicación
PORT=3001

# Configuración de la base de datos MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=mi_conjunto_db

# Configuración JWT
JWT_SECRET=tu_clave_secreta_muy_segura_aqui
JWT_EXPIRATION=24h
```

3. **Crear la base de datos MySQL:**
```sql
CREATE DATABASE mi_conjunto_db;
```

## Ejecución del Proyecto

```bash
# Desarrollo
$ pnpm start:dev

# Producción
$ pnpm build
$ pnpm start:prod

# Modo debug
$ pnpm start:debug
```

## API Endpoints

### Autenticación

#### Registro de Usuario
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "Juan",
  "lastName": "Pérez",
  "email": "juan@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "password123"
}
```

### Rutas Protegidas

#### Obtener Perfil
```http
GET /profile
Authorization: Bearer <token>
```

#### Página Principal
```http
GET /
Authorization: Bearer <token>
```

## Estructura del Proyecto

```
src/
├── auth/                 # Módulo de autenticación
│   ├── dto/             # DTOs para login y registro
│   ├── guards/          # Guards JWT
│   ├── strategies/      # Estrategias de Passport
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── users/               # Módulo de usuarios
│   ├── entities/        # Entidad User
│   ├── users.service.ts
│   └── users.module.ts
├── app.controller.ts    # Controlador principal
├── app.service.ts       # Servicio principal
├── app.module.ts        # Módulo principal
└── main.ts             # Punto de entrada
```

## Scripts Disponibles

```bash
# Desarrollo
pnpm start:dev          # Inicia en modo desarrollo con watch
pnpm start:debug        # Inicia en modo debug

# Construcción
pnpm build              # Construye el proyecto
pnpm start:prod         # Inicia en modo producción

# Testing
pnpm test               # Ejecuta pruebas unitarias
pnpm test:watch         # Ejecuta pruebas en modo watch
pnpm test:cov           # Ejecuta pruebas con cobertura
pnpm test:e2e           # Ejecuta pruebas e2e

# Linting y Formateo
pnpm lint               # Ejecuta ESLint
pnpm format             # Formatea el código con Prettier
```

## Base de Datos

### Entidad User

La aplicación maneja una entidad `User` con los siguientes campos:

- `id`: ID único autoincremental
- `uuid`: UUID único para identificación externa
- `email`: Email único del usuario
- `password`: Contraseña encriptada
- `firstName`: Nombre del usuario
- `lastName`: Apellido del usuario
- `phone`: Teléfono (opcional)
- `profileImageUrl`: URL de imagen de perfil (opcional)
- `emailVerifiedAt`: Fecha de verificación de email
- `phoneVerifiedAt`: Fecha de verificación de teléfono
- `isActive`: Estado activo del usuario
- `lastLoginAt`: Última fecha de login
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de última actualización

## Validaciones

### Registro
- Email debe ser válido
- Contraseña mínimo 8 caracteres
- Nombre y apellido son requeridos
- Email debe ser único

### Login
- Email debe ser válido
- Contraseña mínimo 6 caracteres
- Credenciales deben ser correctas

## Seguridad

- Contraseñas encriptadas con bcrypt
- JWT con expiración configurable
- Validación de entrada con class-validator
- CORS habilitado
- Guards para proteger rutas

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
