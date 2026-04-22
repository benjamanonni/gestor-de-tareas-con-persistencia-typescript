# Gestor de tareas con persistencia en TypeScript

Aplicación de consola desarrollada en TypeScript para gestionar tareas con almacenamiento persistente en archivo JSON.

## Descripción

Este proyecto implementa un sistema de gestión de tareas por consola.  
Permite crear, visualizar, buscar, modificar, eliminar y analizar tareas, manteniendo los datos guardados en un archivo JSON para conservar la información entre ejecuciones.

El diseño del proyecto está dividido en módulos con responsabilidades separadas, incorporando validaciones, tipado fuerte y persistencia local.

## Funcionalidades

- Agregar nuevas tareas
- Visualizar todas las tareas
- Filtrar tareas por estado
- Mostrar tareas vencidas
- Buscar tareas
- Modificar tareas existentes
- Eliminar tareas
- Generar estadísticas por estado y dificultad
- Guardar y recuperar tareas desde archivo JSON

## Estructura del proyecto

- `src/index.ts`: punto de entrada de la aplicación
- `src/Menus.ts`: menú principal y navegación
- `src/Tarea.ts`: definición del modelo de tarea y comportamiento asociado
- `src/AgregarTarea.ts`: creación e inserción de nuevas tareas
- `src/BuscarTarea.ts`: búsqueda de tareas
- `src/ModificarTarea.ts`: modificación de tareas existentes
- `src/EliminarTarea.ts`: eliminación lógica de tareas
- `src/Mostrar.ts`: visualización de tareas
- `src/Estadisticas.ts`: generación de reportes estadísticos
- `src/Validadores.ts`: validaciones de datos
- `src/archivo.ts`: lectura y escritura de persistencia en JSON
- `src/archivo.json`: almacenamiento de tareas

## Modelo de datos

Cada tarea contiene:

- `id`
- `titulo`
- `descripcion`
- `dificultad`
- `vencimiento`
- `fechaCreacion`
- `ultimaModificacion`
- `estado`
- `eliminado`

## Conceptos aplicados

- TypeScript con tipado fuerte
- Modularización por responsabilidades
- Interfaces y tipos unión
- Persistencia local con JSON
- Programación asíncrona con `async/await`
- Validación de entradas
- Enfoque de actualización inmutable en la modificación de tareas
- Uso de prototipos para compartir comportamiento entre objetos tarea

## Decisiones de diseño

Durante el desarrollo del proyecto se tomaron algunas decisiones de diseño orientadas a reforzar la organización del código y la claridad del modelo de dominio:

- **Modelado con interfaz y prototipos:** las tareas se definen mediante una interfaz y se crean a través de una función constructora, reutilizando comportamiento compartido mediante el prototipo.
- **Actualización inmutable:** las modificaciones sobre una tarea no alteran directamente el objeto original, sino que generan una nueva versión con los cambios aplicados.
- **Separación entre lógica e interacción con el entorno:** se buscó distinguir entre funciones orientadas a transformación de datos y funciones que interactúan con entrada por consola, generación de identificadores o persistencia.
- **Persistencia en JSON:** las tareas se almacenan en un archivo local y, al recuperarse, se reconstruyen para conservar el comportamiento definido en el modelo.
- **Modularización:** las operaciones del sistema están divididas en módulos específicos como agregado, búsqueda, modificación, eliminación, visualización y estadísticas.

Estas decisiones permitieron construir una aplicación de consola con una lógica más organizada, reutilizable y fácil de extender.

## Tecnologías utilizadas

- TypeScript
- Node.js
- prompt-sync
- uuid

## Instalación y ejecución

1. Instalar dependencias:

```bash
npm install

2. Compilar proyecto:
npx tsc

3.Ejecutar la aplicación:

node dist/index.js
