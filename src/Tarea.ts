/*funcion interface donde definimos un molde,esta por si sola no ejecuta nada,le pasamos como funcion getter y setter donde esta retorna una tarea en los setter
con fecha para poder cambiar su fecha de ultima modificacion*/
export interface interfazTarea {
    id: string; //el id es un uuid
    titulo: string;
    descripcion: string;
    dificultad: Dificultad;
    vencimiento: Vencimiento;
    fechaCreacion: Date;
    ultimaModificacion: Date;
    estado: Estado;
    eliminado: boolean;

    getId(): string;

    getFechaCreacion(): Date;
    
    getTitulo(): string;
    setTitulo(nuevoTitulo: string, fecha: Date): interfazTarea;

    getDescripcion(): string;
    setDescripcion(nuevaDescripcion : string, fecha: Date) : interfazTarea;

    getVencimiento() : Vencimiento;
    setVencimiento(nuevo: Vencimiento, fecha: Date): interfazTarea;

    getDificultad() : Dificultad;
    setDificultad(nueva: Dificultad, fecha: Date): interfazTarea;

    getEstado(): Estado;
    setEstado(nuevoEstado: Estado, fecha: Date): interfazTarea;

    getUltimaModificacion(): Date;
    
    setEliminado(eliminado: boolean): interfazTarea;
}
//tipados fuertes,donde creamos nuevos tipos para poder cumplir con los requerimientos
export type Dificultad = '⭐' | '⭐⭐' | '⭐⭐⭐';
export type Vencimiento = string | "No especificado";
export type Estado = '❗ Pendiente' | '🛠 En curso' | '✔ Terminada' | "❌ Cancelada";

//creamos funcion contructora que es quien realmente crea la tarea,aca asigno la tarea mediante el prototipo
export function constructorTarea(
    this: interfazTarea,
    id : string,
    titulo : string,
    descripcion : string,
    dificultad: Dificultad,
    vencimiento: Vencimiento,
    fechaCreacion: Date,
    ultimaModificacion: Date,
    estado: Estado,
    eliminado: boolean
)
{
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.vencimiento = vencimiento;
    this.fechaCreacion = fechaCreacion;
    this.ultimaModificacion = ultimaModificacion;
    this.estado = estado;
    this.eliminado = eliminado;
}

/*getter,los getter hacemos llamado de la funcion prototipica que su ventaja es que todos los objetos comparten metodos ahorrando memoria,la interfaz definen
los metodos que deben existir la funcion contructora los implementa*/
constructorTarea.prototype.getId = function(this: interfazTarea) : string {
    return this.id;
}

constructorTarea.prototype.getFechaCreacion = function(this: interfazTarea) : Date {

    return this.fechaCreacion;
}

constructorTarea.prototype.getTitulo = function(this: interfazTarea) : string {
    return this.titulo;
}

/*
Los setter reciben los atributos necesarios y retornan objetos nuevos tarea, con una copia (usando spread ...) de los
atributos que no son modificados
*/
constructorTarea.prototype.setTitulo = function (this: interfazTarea, nuevoTitulo: string, fecha: Date): interfazTarea {
    const copia = {
    ...this,
    titulo: nuevoTitulo,
    ultimaModificacion: fecha,
    };
    /*
    Copia es un objeto literal creado con spread. Ese objeto pierde los métodos del prototipo de constructorTarea
    de modo que mediante setPrototypeOf le indico al programa que ese objeto plano obtenga todos los metodos
    del prototipo, dicho de otras palabras setprototypeod significa: hacer que ese objeto sea un objeto del 
    prototipo de constructorTarea
    */
    
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    //hacemos freeze para respetar la encapsulacion,donde no se puede editar los atributos de forma directa
    Object.freeze(copia);

    return copia;
};

constructorTarea.prototype.getDescripcion = function(this: interfazTarea) : string {
    return this.descripcion;
}

// ...this copia todo, menos lo que vas a modificar.

constructorTarea.prototype.setDescripcion = function(this: interfazTarea, nuevaDescripcion : string, fecha: Date) : interfazTarea {
    const copia = {
    ...this,
    descripcion: nuevaDescripcion,
    ultimaModificacion: fecha,
    };
    
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    Object.freeze(copia);

    return copia;
}

constructorTarea.prototype.getEstado = function(this: interfazTarea) : Estado {
    return this.estado;
}

constructorTarea.prototype.setEstado = function (
    this: interfazTarea,
    nuevoEstado: Estado,
    fecha: Date
): interfazTarea {
    const copia = {
    ...this,
    estado: nuevoEstado,
    ultimaModificacion: fecha,
    };
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    Object.freeze(copia);

    return copia;
};

constructorTarea.prototype.getDificultad = function(this: interfazTarea) : Dificultad {
    return this.dificultad;
}

constructorTarea.prototype.setDificultad = function (
    this: interfazTarea,
    nuevaDificultad: Dificultad,
    fecha: Date
): interfazTarea {
    const copia = {
    ...this,
    dificultad: nuevaDificultad,
    ultimaModificacion: fecha,
    };
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    Object.freeze(copia);

    return copia;
};

constructorTarea.prototype.getVencimiento = function(this: interfazTarea) : Vencimiento {
    return this.vencimiento;
}

constructorTarea.prototype.setVencimiento = function (
    this: interfazTarea,
    nuevoVencimiento: Vencimiento,
    fecha: Date
): interfazTarea {
    const copia = {
    ...this,
    vencimiento: nuevoVencimiento,
    ultimaModificacion: fecha,
    };
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    Object.freeze(copia);

    return copia;
};

constructorTarea.prototype.getUltimaModificacion = function(this: interfazTarea) : Date {
    return this.ultimaModificacion;
}

constructorTarea.prototype.setEliminado = function ( this: interfazTarea, eliminado: boolean
): interfazTarea {
    const copia = {
        ...this,
        eliminado,
        
    };
    Object.setPrototypeOf(copia, constructorTarea.prototype);
    Object.freeze(copia);

    return copia;
};