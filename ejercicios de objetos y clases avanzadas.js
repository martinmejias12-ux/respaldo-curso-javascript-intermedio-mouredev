

/**
 * Prototipos: Dado el objeto constructor 
 * function Robot(nombre, modelo) { this.nombre = nombre; this.modelo = modelo; }, 
 * añade una función al prototipo llamada saludar que imprima un mensaje incluyendo el nombre del 
 * robot.
 */
// 1. Agrega una función al prototipo de un objeto

console.log();
console.log('<-------1. Agrega una función al prototipo de un objeto---------->');
console.log();

function Robot(nombre, modelo) { 
    this.nombre = nombre; 
    this.modelo = modelo; 
}

Robot.prototype.saludar = function (){
    return "Hola mi nombre es: " + this.nombre + " y soy un robot modelo: " + this.modelo;
}


const resultado = new Robot ('arturito', 'R2');

console.log();
console.log(resultado.saludar());
console.log();

/**
 * Herencia: Crea un objeto llamado vehiculoPadre que tenga las propiedades marca con valor 
 * "Toyota" y encendido en false. Luego, crea un objeto autoHijo que herede directamente de 
 * vehiculoPadre y añade una propiedad propia llamada puertas con valor 4.
 */
// 2. Crea un objeto que herede de otro

console.log();
console.log('<-----------2. Crea un objeto que herede de otro------------------->');
console.log();

let vehiculoPadre = {
    marca : 'Toyota',
    encendido : false
};

let vehiculoHijo = Object.create(vehiculoPadre);
vehiculoHijo.puertas = 4;

console.log();
console.log('marca del vehículo: ' + vehiculoHijo.marca);
console.log();
console.log('el vehículo esta encendido: ' + vehiculoHijo.encendido);
console.log();
console.log('el vehículo tiene: ' + vehiculoHijo.puertas + ' puertas');
console.log();


/**
 * Métodos de instancia: Define un objeto literal llamado calculadoraFinanciera que contenga las 
 * propiedades montoPrincipal (1000) y tasaInteres (0.05). Agrega un método de instancia llamado 
 * calcularTotal que multiplique ambas propiedades y devuelva el resultado.
 */
// 3. Define un método de instancia en un objeto

console.log();
console.log('<---------3. Define un método de instancia en un objeto---------->');
console.log();

let calculadoraFinanciera = {
    montoPrincipal :  1000,
    tasaInteres : 0.05,

    calcularTotal(){
        return this.montoPrincipal*this.tasaInteres;
    }
}

console.log();
console.log(`el resultado de los intereses es de : ${calculadoraFinanciera.calcularTotal()}`);
console.log();


/**
 * Getters y Setters: Crea un objeto perfilUsuario que tenga una propiedad privada _edad inicializada en 25. 
 * Define un get para leerla y un set que valide que el nuevo valor sea un número positivo antes 
 * de actualizar la propiedad.
 */
// 4. Haz uso de get y set en un objeto

let perfilUsuario = {
    _edad : 25,

    get edad(){
        return this._edad
    },

    set edad (dato){

        if (typeof dato === 'number' && dato > 0){
            this._edad = dato;
        }else{
            console.log('Error: el dato debe ser un numero positivo');
        }

    }

}


console.log();
console.log('<----------------4. Haz uso de get y set en un objeto--------------------------------->');
console.log();

let obtenerDato = perfilUsuario.edad;

console.log(`El dato privado de la edad: ${obtenerDato}`);

perfilUsuario.edad = 35;

let obtenerDatoModificado = perfilUsuario.edad;

console.log(`El dato privado de la edad modificado:  ${obtenerDatoModificado}`);


/**
 * Object.assign: Dados los objetos datosBasicos = { id: 101, estado: "activo" } y 
 * detallesTecnicos = { nucleos: 8, ram: "16GB" }, 
 * utiliza la operación Object.assign para crear un nuevo objeto llamado 
 * servidorCompleto que combine ambos.
 */
// 5. Utiliza la operación assign en un objeto

let datosBasicos ={
    id:101,
    estado:'activo'
}

let detallesTecnicos={
    nucleos: 8, 
    ram: '16GB'
}


console.log();
console.log('<--------5. Utiliza la operación assign en un objeto---------------->');
console.log();

let servidorCompleto={};

Object.assign(servidorCompleto, datosBasicos, detallesTecnicos);

console.log();
console.log('datos básicos de la pc:',datosBasicos);
console.log();
console.log('datos técnicos de la pc: ',detallesTecnicos);
console.log();
console.log('datos completos: ',servidorCompleto);
console.log();



/**
 * Clases abstractas: Define una clase llamada BaseDeDatos que lance un error en 
 * su constructor si se intenta instanciar directamente. Debe incluir un método 
 * vacío llamado conectar que obligue a las clases hijas a proporcionar su propia 
 * implementación.
 */
// 6. Crea una clase abstracta


console.log();
console.log('<--------6. Crea una clase abstracta---------------->');
console.log();

class BaseDeDatos {
    constructor(nombre, id, direccion) {

        if (this.constructor === BaseDeDatos){

            throw new Error("Esta clase no se puede instanciar directamente");
        } 
        
        this.nombre = nombre;
        this.id =  id;
        this.direccion = direccion;
        
    }

    mostrarDatos (){
               
    }
   

    conectar(){
        throw new Error("El método 'conectar' debe ser implementado obligatoriamente desde las clases que heredan");
        
    }
}



class DatosCliente1 extends BaseDeDatos{

    constructor(nombre, id, direccion, datoCelular){
        super(nombre, id, direccion)

        this.datoCelular = datoCelular
    }

    conectar(){
        console.log();
        console.log('Estos son los datos necesarios de la base de datos:');
        console.log(`nombre: ${this.nombre}`);
        console.log(`id: ${this.id}`);
        console.log(`dirección: ${this.direccion}`);
        console.log(`dato del celular: ${this.datoCelular}`);
        console.log();
    }
}


try {

    let respuestaBaseDeDatos= new BaseDeDatos;

    let mostrarDatosCliente1 = new DatosCliente1('martin',10146222,'paraparal','+584123405194')
    mostrarDatosCliente1.conectar();


} catch (error) {
    console.error('Mensaje de error: ', error.message);
    
}



/**
 * Polimorfismo: Crea una clase Instrumento con un método tocar(). 
 * Luego, crea las clases Guitarra y Tambor que hereden de ella, 
 * donde cada una implemente el método tocar() de forma que impriman 
 * sonidos diferentes ("Strum!" y "Boom!", respectivamente).
 */
// 7. Utiliza polimorfismo en dos clases diferentes


console.log();
console.log('<--------7. Utiliza polimorfismo en dos clases diferentes---------------->');
console.log();

class Instrumento {
    
    tocar(){

    }
}


class Guitarra extends Instrumento{

    constructor(sonido) {
        super()

        this.sonido = sonido;

    }
    tocar(){
        console.log('La guitarra hace ', this.sonido);
    }


}
class Tambor extends Instrumento{

    constructor(sonido){
        super()
        this.sonido = sonido
    }


    tocar(){
        console.log('El tambor hace ', this.sonido);
    }


}

const instrumentoGuitarra = new Guitarra("Strum!")
instrumentoGuitarra.tocar();
console.log();

const instrumentoTambor = new Tambor("Boom!")
instrumentoTambor.tocar();
console.log();


/**
 * Mixins: Define un objeto literal accionesVuelo que contenga un método despegar(). 
 * Implementa este Mixin en una clase llamada Dron para que las instancias de Dron 
 * puedan acceder a dicha funcionalidad sin heredar de una clase padre.
 */
// 8. Implementa un Mixin

console.log();
console.log('<--------8. Implementa un Mixin---------------->');
console.log();

const accionesVuelo = {
    despegar(){
        console.log('el dron ha despegado');

    }
}

const accionesDefensa = {

    ataque(){
        console.log('el dron tiene sistema de defensa');

    }
}

class Dron {

}

Object.assign(Dron.prototype,accionesVuelo, accionesDefensa)

let accionesDron = new Dron()
accionesDron.despegar()
accionesDron.ataque()



/**
 * Singleton: Crea un objeto llamado ConfiguracionGlobal utilizando el patrón Singleton, 
 * asegurando que no importa cuántas veces se intente crear una nueva instancia, siempre 
 * se devuelva la misma referencia que contiene la propiedad idioma: "es".
 */
// 9. Crea un Singleton





/**
 * Proxy: Dado el objeto almacen = { stock: 50, precio: 100 }, desarrolla un Proxy que intercepte 
 * las operaciones de escritura. Si se intenta modificar el stock con un valor menor a 0, debe 
 * lanzar un mensaje de error y cancelar la operación.
 */
// 10. Desarrolla un Proxy