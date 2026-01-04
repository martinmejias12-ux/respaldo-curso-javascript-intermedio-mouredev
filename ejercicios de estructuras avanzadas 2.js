/*


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();




*/

/**
 * 1. Gestión de Inventario con Map
    Enunciado: Actualiza el stock en el almacén basándote en el arreglo ventas. 
    Si el stock llega a 0, elimina el producto del Map.

    JavaScript

    const almacen = new Map([
    [1, { nombre: "Monitor", stock: 5 }],
    [2, { nombre: "Teclado", stock: 10 }],
    [3, { nombre: "Ratón", stock: 3 }]
    ]);

    const ventas = [
    { id: 1, cantidad: 5 },
    { id: 3, cantidad: 2 }
    ];
*/

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Gestión de Inventario con Map----->');



const almacen = new Map([
    [1, { nombre: "Monitor", stock: 5 }],
    [2, { nombre: "Teclado", stock: 10 }],
    [3, { nombre: "Ratón", stock: 3 }]
]);

const ventas = [
{ id: 1, cantidad: 5 },
{ id: 3, cantidad: 2 }
];


console.log();
console.log('Estado inicial del almacén', almacen);
console.log();
console.log();
console.log('Ventas realizadas', ventas);
console.log();


ventas.forEach(elemento => {

    // primero valido por cada elemento de ventas si el elemento se encuentra en el Map de almacén
    if (almacen.has(elemento.id)){

        let objetoHallado = almacen.get(elemento.id)
        
        let stockActualizado = objetoHallado.stock-elemento.cantidad
        
        if (stockActualizado > 0){
            objetoHallado.stock = stockActualizado
            almacen.set(elemento.id, objetoHallado)
        }else{
            almacen.delete(elemento.id)
        }

        //console.log();
        //console.log(stockActualizado);
        //console.log();
    }
    
    
});




console.log();
console.log('Estado final del almacén', almacen);
console.log();


/**
 * 2. Filtrado de Usuarios Únicos con Set
    
    Enunciado: Crea una lista de correos electrónicos sin duplicados a partir del arreglo registros y conviértela nuevamente en un arreglo.

    JavaScript

    const registros = [
    "usuario1@correo.com",
    "usuario2@correo.com",
    "usuario1@correo.com",
    "usuario3@correo.com",
    "usuario2@correo.com"
    ];
*/


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Filtrado de Usuarios Únicos con Set----->');

const registros = [
"usuario1@correo.com",
"usuario2@correo.com",
"usuario1@correo.com",
"usuario3@correo.com",
"usuario2@correo.com"
];


let listaCorreosUnicos = [...new Set(registros)]




console.log();
console.log(listaCorreosUnicos);
console.log();




/** 
 * 3. Desestructuración Profunda y Valores por Defecto
    Enunciado: Extrae en variables independientes los valores de calle, ciudad y pais. Si pais no existe en el objeto, debe tomar el valor "Desconocido".

    JavaScript

    const cliente = {
    id: 501,
    contacto: {
        nombre: "Persona Generica",
        ubicacion: {
        calle: "Avenida Principal 123",
        ciudad: "Ciudad Central"
        }
    }
    };
*/


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Desestructuración Profunda y Valores por Defecto----->');

const cliente = {
    id: 501,
    contacto: {
        nombre: "Persona Genérica",
        ubicacion: {
            calle: "Avenida Principal 123",
            ciudad: "Ciudad Central"
        }
    }
};

console.log();
console.log('datos del cliente: ', cliente);
console.log();

const {id, contacto} = cliente

let datosIdentificacion = id
let datosContacto = contacto

const {ubicacion} = datosContacto

let datosDeUbicacion = ubicacion

let datosDeUbicacionNuevo = {...datosDeUbicacion, pais: 'Desconocido'}

const {calle : calleObjeto,ciudad : ciudadObjeto, pais : paisObjeto} = datosDeUbicacionNuevo



console.log();
console.log(datosIdentificacion);
console.log();
console.log(datosContacto);
console.log();
console.log(datosDeUbicacion);
console.log();
console.log('calle del objeto: ',calleObjeto);
console.log();
console.log('ciudad del objeto: ',ciudadObjeto);
console.log();
console.log('país del objeto: ',paisObjeto);


/**
 * 4. Agrupación con Reduce
    Enunciado: Agrupa los objetos del arreglo productos por su propiedad categoría, 
    devolviendo un objeto donde cada llave sea la categoría y su valor un arreglo 
    de productos asociados.

    JavaScript

    const productos = [
    { nombre: "Manzana", categoria: "Frutas" },
    { nombre: "Lechuga", categoria: "Verduras" },
    { nombre: "Pera", categoria: "Frutas" },
    { nombre: "Zanahoria", categoria: "Verduras" }
    ];
*/


console.log();
console.log('<----------------------------------------->');
console.log('<----4. Agrupación con Reduce----->');

const productos = [
{ nombre: "Manzana", categoria: "Frutas" },
{ nombre: "Lechuga", categoria: "Verduras" },
{ nombre: "Pera", categoria: "Frutas" },
{ nombre: "Zanahoria", categoria: "Verduras" },
{ nombre: "sardinas", categoria: "articulos" },
{ nombre: "atun", categoria: "articulos" },
{ nombre: "cebollin", categoria: "hortalizas" }
];


const agruparCategoria = productos.reduce((acumulado, valor) => {


    if (valor.categoria){

        if (!acumulado[valor.categoria]) {
            acumulado[valor.categoria] = [];
        }

        acumulado[valor.categoria].push(valor.nombre)

        return acumulado
    }

},{});


console.log();
console.log(productos);
console.log();
console.log(agruparCategoria);
console.log();





/** 
 * 5. Fusión de Objetos (Deep Merge)
    Enunciado: Combina ajustesBase con ajustesUsuario de tal manera que las propiedades de usuario sobrescriban las base, incluyendo los objetos anidados.

    JavaScript

    const ajustesBase = {
    tema: "claro",
    notificaciones: { email: true, sms: false },
    idioma: "es"
    };

    const ajustesUsuario = {
    tema: "oscuro",
    notificaciones: { sms: true }
    };
*/




console.log();
console.log('<----------------------------------------->');
console.log('<----5. Fusión de Objetos (Deep Merge)----->');

const ajustesBase = {
tema: "claro",
notificaciones: { email: true, sms: false },
idioma: "es"
};

const ajustesUsuario = {
tema: "oscuro",
notificaciones: { sms: true }
};

Object.assign(ajustesBase, ajustesUsuario)

console.log();
console.log(ajustesBase);
console.log();


/** 
 * 6. Transformación de Matrices a Objetos
    Enunciado: Transforma la matriz matrizDatos en un arreglo de objetos, utilizando los elementos del primer arreglo como nombres de propiedades.

    JavaScript

    const matrizDatos = [
    ["nombre", "puesto", "nivel"],
    ["Empleado A", "Desarrollador", "Senior"],
    ["Empleado B", "Diseñador", "Junior"],
    ["Empleado C", "Analista", "Mid"]
    ];
*/


console.log();
console.log('<----------------------------------------->');
console.log('<-----6. Transformación de Matrices a Objetos---->');

const matrizDatos = [
    ["nombre", "puesto", "nivel"],
    ["Empleado A", "Desarrollador", "Senior"],
    ["Empleado B", "Diseñador", "Junior"],
    ["Empleado C", "Analista", "Mid"]
];

// 1. Extraemos los encabezados (primera fila)
const llaves = matrizDatos[0];

// 2. Extraemos los datos (resto de filas) y mapeamos
const resultado = matrizDatos.slice(1).map((fila) => {
    const objetoUnitario = {};
    
    // 3. Asociamos cada valor de la fila con su llave correspondiente
    llaves.forEach((llave, indice) => {
        objetoUnitario[llave] = fila[indice];
    });
    
    return objetoUnitario;
});

console.log("Matriz original:");
console.table(matrizDatos);

console.log("\nResultado transformado:");
console.log(resultado);


/** 
 * 7. Contador de Frecuencia con Map
    Enunciado: Cuenta la frecuencia de aparición de cada palabra en el string párrafo y almacena los resultados en un Map donde la palabra es la llave y el conteo el valor.

    JavaScript

    const párrafo = "javascript es un lenguaje y javascript es versátil";
*/


const párrafo = "javascript es un lenguaje y javascript es versátil";

// 1. Convertimos el párrafo en una lista de palabras
const palabras = párrafo.split(" ");

// 2. Creamos el Map que servirá como nuestro contador
const contador = new Map();

// 3. Recorremos la lista de palabras una por una
palabras.forEach((palabra) => {
    
    // Revisamos si ya tenemos esta palabra en nuestro contador
    if (contador.has(palabra)) {
        // Si ya existe, leemos cuánto tiene y le sumamos 1
        let cuentaActual = contador.get(palabra);
        contador.set(palabra, cuentaActual + 1);

    } else {
        // Si no existe, es la primera vez que la vemos, así que ponemos 1
        contador.set(palabra, 1);
    }
});

// Mostramos el resultado final
console.log(contador);


/** 
 * 8. Búsqueda en Estructuras Anidadas
    Enunciado: Crea una función que busque y retorne el objeto que coincida con un id específico dentro de una estructura de árbol.

    JavaScript

    const estructuraEmpresa = {
    id: 1,
    nombre: "Director",
    subordinados: [
        {
        id: 2,
        nombre: "Gerente A",
        subordinados: [{ id: 4, nombre: "Asistente A", subordinados: [] }]
        },
        {
        id: 3,
        nombre: "Gerente B",
        subordinados: []
        }
    ]
    };
 
*/

const estructuraEmpresa = {
    id: 1,
    nombre: "Director",
    subordinados: [
        {
            id: 2,
            nombre: "Gerente A",
            subordinados: [{ id: 4, nombre: "Asistente A", subordinados: [] }]
        },
        {
            id: 3,
            nombre: "Gerente B",
            subordinados: []
        }
    ]
};

function buscarEmpleado(estructura, id_buscado) {
    // REGLA DEL RECIPIENTE: Creamos una lista plana para "aplanar" el árbol
    let lista_plana = [];
    console.log('lista_plana vacia');
    console.log(lista_plana);

    // 1. Metemos al primer nivel (Director)
    lista_plana.push(estructura);    
    console.log('lista_plana con el primer nivel');
    console.log(lista_plana);

    // 2. MOTOR: Recorremos los subordinados del nivel 1
    estructura.subordinados.forEach(gerente => {
        lista_plana.push(gerente); // Metemos al gerente

        // 3. MOTOR ANIDADO: Recorremos los subordinados del nivel 2
        gerente.subordinados.forEach(asistente => {
            lista_plana.push(asistente); // Metemos al asistente
        });
    });

    // 4. PATRÓN DE BÚSQUEDA: Ahora que la lista es fácil de manejar
    // Buscamos dentro de nuestro recipiente el objeto que coincida
    let resultado = lista_plana.find(empleado => empleado.id === id_buscado);

    // Si el resultado existe, lo devuelve; si no, devuelve undefined
    return resultado;
}

// Ejecución y Salida
const empleado_encontrado = buscarEmpleado(estructuraEmpresa, 4);
console.log("Datos del empleado encontrado:");
console.log(empleado_encontrado);




/** 
 * 9. Intersección de Conjuntos
    Enunciado: Encuentra los elementos comunes entre los arreglos grupoA y grupoB utilizando la estructura Set para optimizar la búsqueda.

    JavaScript

    const grupoA = [10, 20, 30, 40, 50];
    const grupoB = [30, 50, 70, 90];
*/

const grupoA = [10, 20, 30, 40, 50];
const grupoB = [30, 50, 70, 90];

// 1. Convertimos el primer grupo en un Set para buscar rápido
const guiaA = new Set(grupoA);

// 2. Creamos el lugar donde guardaremos los repetidos
const comunes = [];

// 3. Revisamos cada número del segundo grupo
grupoB.forEach((numero) => {
    
    // 4. Le preguntamos a la guía si tiene ese número
    if (guiaA.has(numero)) {
        // Si lo tiene, significa que es común en ambos
        comunes.push(numero);
    }
});

console.log("Elementos comunes encontrados:");
console.log(comunes);
// Resultado esperado: [30, 50]



/** 
 * 10. Aplanado de Arreglos Multinivel (Flat)
    Enunciado: Dado un arreglo con múltiples niveles de anidación, transformarlo en un solo arreglo plano de un solo nivel sin utilizar el método .flat() nativo.

    JavaScript

    const datosAnidados = [1, [2, [3, [4, 5]]], 6, [7, 8]];
*/

const datosAnidados = [1, [2, [3, [4, 5]]], 6, [7, 8]];

function aplanarArreglo(arregloOriginal) {
    // 1. El resultado final
    const plano = [];
    
    // 2. Nuestra lista de trabajo (copia de los datos originales)
    // Usamos el spread [...] para no modificar el arreglo original
    const pila = [...arregloOriginal];

    console.log('pila');
    console.log(pila);

    // 3. Mientras haya elementos por procesar
    while (pila.length > 0) {
        
        // Sacamos el último elemento de la pila
        const actual = pila.pop();

        // 4. ¿Es un arreglo o un número?
        if (Array.isArray(actual)) {
            // Si es un arreglo, metemos sus elementos de vuelta a la pila
            // para que sean revisados uno por uno
            pila.push(...actual);
        } else {
            // Si es un número, lo agregamos al inicio de nuestro resultado
            // (Usamos unshift porque sacamos del final de la pila con pop)
            plano.unshift(actual);
        }
    }

    return plano;
}

// Ejecución
const resultado3 = aplanarArreglo(datosAnidados);

console.log("Arreglo aplanado:");
console.log(resultado3);