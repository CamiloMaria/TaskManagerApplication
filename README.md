# TaskManagerApplication Backend - Administrador de Tareas

¡Bienvenido al backend de TaskManagerApplication! Aquí te explicare en qué consiste el administrador de tareas desarrollado con Node.js y Express. Prepárate para gestionar tus tareas de manera eficiente y organizada.

# ¿Qué es TaskManagerApplication?

TaskManagerApplication es una poderosa aplicación de administración de tareas que te permitirá organizar tu trabajo de manera efectiva. Con esta herramienta, podrás asignarte tareas, así como asignar tareas a otros usuarios, establecer fechas de entrega, prioridades y estados, para tener un control total sobre tus responsabilidades.

## Tecnologías y librerías utilizadas
Para brindar funcionalidades avanzadas y seguridad en nuestro backend, he utilizado las siguientes librerías:

- **Cors**: Utilice cors para habilitar la política de mismo origen (CORS) en nuestra aplicación. Esto permite que el frontend se comunique con el backend sin restricciones de seguridad.
- **Bcrypt**: Implemente bcrypt para asegurar que las contraseñas de los usuarios se almacenen de manera segura mediante el hash y el salting.
- **Jsonwebtoken**: He integrado jsonwebtoken para generar y verificar tokens de autenticación. Esto nos permite implementar un sistema seguro de autenticación basado en tokens.
- **Mongoose**: Utilice mongoose como la librería de modelado de objetos de MongoDB. Con mongoose, podemos definir esquemas y modelos para nuestras tareas y usuarios, lo que facilita la interacción con la base de datos.
- **Dotenv**: Implemente dotenv para cargar variables de entorno desde un archivo .env. Esto me permite configurar de manera segura y sencilla las variables sensibles, como las credenciales de la base de datos o la clave secreta para firmar los tokens.

# Modelos de datos

El backend utiliza el framework de MongoDB, Mongoose, para gestionar los datos de manera estructurada. Aquí están los modelos de datos que utilizamos para representar las tareas en nuestra aplicación:

## Modelo de tarea (Task)
```javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  status: {
    type: String,
    enum: ['to start', 'in progress', 'completed'],
    default: 'to start',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

```

## Modelo de usuario (User)
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

# Características destacadas

## 1. Flexibilidad en la priorización

No todas las tareas son iguales, por eso, TaskManagerApplication te permite establecer prioridades para tus tareas. Puedes elegir entre 'low' (baja), 'medium' (media) o 'high' (alta) para garantizar que las tareas más importantes se aborden primero.

## 2. Estado de las tareas

Con nuestro administrador de tareas, nunca te perderás en el proceso. Puedes indicar si una tarea está 'to start' (por empezar), 'in progress' (en progreso) o 'completed' (completada). ¡Mantén un registro claro y actualizado de cada tarea!

## 3. Asignación de tareas

La colaboración es fundamental en cualquier proyecto. Con TaskManagerApplication, no solo puedes asignarte tareas, sino que también puedes asignar tareas a otros usuarios de la aplicación. ¡Trabaja en equipo y alcanza tus objetivos juntos!

## 4. Fechas de entrega

No más preocupaciones por las fechas límite. En la aplicación, puedes definir una fecha de entrega para cada tarea, lo que te ayudará a planificar tu trabajo y mantener todo en orden.

## Instrucciones de instalación

Para empezar a utilizar TaskManagerApplication, sigue estos sencillos pasos:

1. Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
2. Clona este repositorio en tu máquina local.
3. Navega a la carpeta del proyecto y ejecuta npm install para instalar las dependencias.
4. Asegúrate de que tu servidor de MongoDB esté en funcionamiento.
5. Ejecuta npm start para iniciar el servidor.

¡Listo! Ahora puedes acceder a las rutas del backend y comenzar a gestionar tus tareas.

## Contribuye

TaskManagerApplication es un proyecto de código abierto y me contar con tu contribución. Si encuentras errores, tienes ideas para mejoras o deseas agregar nuevas características, no dudes en enviar tus Pull Requests.

## Soporte

Si tienes alguna pregunta, problema o simplemente quieres compartir tus comentarios, no dudes en contactarme.

¡Gracias por elegir TaskManagerApplication para gestionar tus tareas de manera eficiente y productiva! Espero que disfrutes usando la aplicación tanto como yo disfrute desarrollándola.
