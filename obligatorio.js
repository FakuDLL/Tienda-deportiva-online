
// Contadores
let cantidadAdministradores = 0
let cantidadCompradores = 0
let cantidadProductos = 0
let cantidadCompras = 0

// Variables
let usuarioConectado = null


// Clases
class Sistema {
    // Listas (arrays)
    listaAdministradores = new Array()
    listaCompradores = new Array()
    listaProductos = new Array()
    listaCompras = new Array()


    // Metodos de la clase Sistema
    existeAdmin(unNombre) {
        for (let unAdmin of this.listaAdministradores) {
            if (unAdmin.adminUsuario == unNombre) return true
        }
        return false
    }

    hallarAdmin(unNombre) {
        for (let unAdmin of this.listaAdministradores) {
            if (unAdmin.adminUsuario == unNombre) return unAdmin
        }
        return null
    }

    existeComprador(unNombre) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.compradorUsuario == unNombre) return true
        }

        return false
    }

    hallarComprador(unNombre) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.compradorUsuario == unNombre) return unComprador
        }
        return null
    }

    hallarProducto(unId) {
        for (let unProducto of this.listaProductos) {
            if (unProducto.productoId == unId) return unProducto
        }
        return null
    }

    // Metodos para funcion validar compra

    saldoComprador(compradorId) {
        for (let unComprador of this.listaCompradores) {
            if (unComprador.compradorId == compradorId) return unComprador.saldo
        }
        return null
    }
    obtenerStock(productoId) {
        for (let unProducto of this.listaProductos) {
            if (unProducto.productoId == productoId) return unProducto.stock
        }
        return null
    }

    clienteCompra(comprasId) {

        for (let unaCompra of this.listaCompras) {

            if (unaCompra.comprasId == comprasId) return unaCompra.idComprador

        }
    }
    productoCompra(comprasId) {
        for (let unaC of this.listaCompras) {
            if (unaC.comprasId == comprasId) return unaC.idProducto
        }
    }
    montoCompra(comprasId) {
        for (let unaC of this.listaCompras) {
            if (unaC.comprasId == comprasId) return unaC.monto
        }
    }
    cantidadCompra(comprasId) {
        for (let unaC of this.listaCompras) {
            if (unaC.comprasId == comprasId) return unaC.cantidad
        } return null
    }


    pausarProducto(productoId) {
        for (let unProd of this.listaProductos) {
            if (unProd.productoId == productoId) unProd.estado == "pausado"
        }

    }

    estadoProducto(productoId) {
        for (let unProd of this.listaProductos) {
            if (unProd.productoId == productoId) return unProd.estado
        }

    }
    actualizarCompra(comprasId, unEstado) {
        for (let unaC of this.listaCompras) {
            if (unaC.comprasId == comprasId) unaC.estado = unEstado
        }
    }
    actualizarProducto(productoId, unStock) {
        for (let unProd of this.listaProductos) {
            if (unProd.productoId == productoId) unProd.stock = unStock
        }

    }

    modificarsaldoCliente(compradorId, nuevoValor) {
        for (let unCli of this.listaCompradores) {
            if (unCli.compradorId == compradorId) unCli.saldo = nuevoValor
        }
    }



}




class Administrador {
    constructor(unAdminUsuario, unAdminPassword) {
        this.adminId = cantidadAdministradores
        cantidadAdministradores++

        this.adminUsuario = unAdminUsuario.toLowerCase()
        this.adminPassword = unAdminPassword
    }

}

class Compradores {
    constructor(unCompradorNombre, unCompradorApellido, unCompradorUsuario, unCompradorPassword, unCompradorTarjeta, unCompradorCvc) {
        this.compradorId = cantidadCompradores
        cantidadCompradores++

        this.compradorNombre = unCompradorNombre
        this.compradorApellido = unCompradorApellido
        this.compradorUsuario = unCompradorUsuario.toLowerCase()
        this.compradorPassword = unCompradorPassword
        this.compradorTarjeta = unCompradorTarjeta
        this.compradorCvc = unCompradorCvc
        this.saldo = 3000
    }


}

class Productos {
    constructor(unNombre, unaDescripcion, unPrecio, unStock, unaImagen) {
        this.productoId = "Prod_ID_" + cantidadProductos
        cantidadProductos++

        this.nombre = unNombre
        this.descripcion = unaDescripcion
        this.precio = unPrecio
        this.stock = unStock
        this.imagen = unaImagen
        this.oferta = false
        this.estado = "activo"
    }
}


class Compras {
    constructor(idComprador, idProducto, cantidad, monto) {
        this.comprasId = cantidadCompras
        cantidadCompras++

        this.idComprador = idComprador
        this.idProducto = idProducto
        this.cantidad = cantidad
        this.monto = monto
        this.estado = "Pendiente"

    }
}


// Objetos preCargados!!!!

// Sistema preCargado
let sistema = new Sistema()

// Admins preCargados
let admin1 = new Administrador("fRobayna", "12345")
let admin2 = new Administrador("alangelan", "12345")
let admin3 = new Administrador("mGonzalez", "12345")
let admin4 = new Administrador("cMartinez", "12345")
let admin5 = new Administrador("lFernandez", "12345")


// Compradores preCargados
let comprador1 = new Compradores("Matias", "Perez", "MatiasPro", "12345A", "5555555555554444", "333")
let comprador2 = new Compradores("Felipe", "Rodriguez", "FeliRodriguez", "12345B", "5105105105105100", "435")
let comprador3 = new Compradores("Juan", "Alpaca", "JuanitoKratos", "12345C", "5105105105105108", "123")
let comprador4 = new Compradores("Ana", "Lopez", "AnaL123", "12345D", "4012888888881881", "456")
let comprador5 = new Compradores("Laura", "Martinez", "LauMartinez", "12345E", "4111111111111111", "789")


// Productos preCargados

let p1 = new Productos("Campera de Nacional", "Campera del club mas grande del mundo", 5000, 5, "img/camperonNacional.png")
let p2 = new Productos("Mochila de Nacional", "Mochila del club mas grande del mundo", 1750, 9, "img/mochilaNacional.png")
let p3 = new Productos("Short de Nacional", "Short del club mas grande del mundo", 1299, 12, "img/shortNacional.png")
let p4 = new Productos("Gorro de Nacional", "Gorro del club mas grande del mundo", 790, 8, "img/gorroNacional.png")
let p5 = new Productos("Medias de Nacional", "Medias del club mas grande del mundo", 350, 6, "img/mediasNacional.png")
let p6 = new Productos("Remera de Nacional", "Remera del club mas grande del mundo", 2500, 10, "img/remeraNacional.png")
let p7 = new Productos("Buzo de Nacional", "Buzo del club mas grande del mundo", 4500, 7, "img/buzoNacional.png")
let p8 = new Productos("Pantalón de Nacional", "Pantalón del club mas grande del mundo", 3200, 4, "img/pantalonNacional.png")
let p9 = new Productos("Camiseta de Nacional", "Camiseta del club mas grande del mundo", 2800, 15, "img/camisetaNacional.png")
let p10 = new Productos("Botines de Nacional", "Botines del club mas grande del mundo", 6000, 3, "img/botinesNacional.png")



p2.estado = "pausado"


// Productos en oferta

p4.oferta = true
p5.oferta = true

//Compras Precargadas

let compra1 = new Compras("1", "Prod_ID_4", 2, 5000, "Pendiente")
let compra2 = new Compras("2", "Prod_ID_3", 1, 1750, "Pendiente")
let compra3 = new Compras("3", "Prod_ID_1", 3, 1299, "Pendiente")
let compra4 = new Compras("4", "Prod_ID_2", 5, 3200, "Pendiente")
let compra5 = new Compras("5", "Prod_ID_5", 2, 4500, "Pendiente")


compra1.estado = "Cancelada"

// Guardar datos preCargados

// Guardar admins preCargados
sistema.listaAdministradores.push(admin1, admin2, admin3, admin4, admin5 )

// Guardar compradores preCargados

sistema.listaCompradores.push(comprador1, comprador2, comprador3, comprador4, comprador5 )

// Guardar productos preCargados

sistema.listaProductos.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)

// Guardar compras preCargadas

sistema.listaCompras.push(compra1, compra2, compra3, compra5, compra4)


// Funciones

inicio()

function inicio() {
    ocultarTodo()
    document.querySelector("#F02").style.display = "block"

    // Escuchas de botones
    document.querySelector("#btnIraRegistro").addEventListener("click", irARegistro)
    document.querySelector("#bntIraLogin").addEventListener("click", irALogin)
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin)
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion)
    document.querySelector("#btnVerProductos").addEventListener("click", mostrarListadoProductos)
    document.querySelector("#btnCarrito").addEventListener("click", mostrarCarrito)
    document.querySelector("#btnFlechaAtras").addEventListener("click", flechaAtras)
    document.querySelector("#btnRegistro").addEventListener("click", hacerRegistro)
    document.querySelector("#btnCrearProducto").addEventListener("click", crearProducto)
    document.querySelector("#btnVerAprobarCompras").addEventListener("click", verCompras)
    document.querySelector("#btnVerProductosOferta").addEventListener("click", productosOfertas)
    document.querySelector("#btnAdministrarProducots").addEventListener("click", administrarProductos)
    document.querySelector("#btnVerLIstadoCompras").addEventListener("click", verLIstadoCompras)
    document.querySelector("#btnInformeGanancias").addEventListener("click", informeGanancias)

}

function ocultarTodo() {

    document.querySelector("#btnCerrarSesion").style.display = "none"
    document.querySelector("#btnCarrito").style.display = "none"
    document.querySelector("#btnFlechaAtras").style.display = "none"
    document.querySelector("#F01").style.display = "none"
    document.querySelector("#F02").style.display = "none"
    document.querySelector("#F03").style.display = "none"
    document.querySelector("#F04").style.display = "none"
    document.querySelector("#F05").style.display = "none"
    document.querySelector("#F07").style.display = "none"
    document.querySelector("#F08").style.display = "none"
    document.querySelector("#F09").style.display = "none"
    document.querySelector("#F10").style.display = "none"

}

function mostrarAdmin() {

    document.querySelector("#btnCerrarSesion").style.display = "block"
    document.querySelector("#F01").style.display = "none"
    document.querySelector("#F02").style.display = "none"
    document.querySelector("#F07").style.display = "block"
    document.querySelector("#F08").style.display = "block"
    document.querySelector("#F09").style.display = "block"
    document.querySelector("#F10").style.display = "block"

}

function mostrarComprador() {
    ocultarTodo()
    document.querySelector("#btnCerrarSesion").style.display = "block"
    document.querySelector("#btnCarrito").style.display = "block"
    document.querySelector("#F01").style.display = "none"
    document.querySelector("#F02").style.display = "none"
    document.querySelector("#F03").style.display = "block"
    document.querySelector("#F05").style.display = "block"

}

function mostrarCarrito() {
    ocultarTodo()
    document.querySelector("#F04").style.display = "block"
    document.querySelector("#btnFlechaAtras").style.display = "block"
    document.querySelector("#btnCerrarSesion").style.display = "block"

}

function flechaAtras() {
    ocultarTodo()
    document.querySelector("#btnCerrarSesion").style.display = "block"
    document.querySelector("#btnCarrito").style.display = "block"
    document.querySelector("#F01").style.display = "none"
    document.querySelector("#F02").style.display = "none"
    document.querySelector("#F03").style.display = "block"
    document.querySelector("#F05").style.display = "block"
}



function irARegistro() {
    document.querySelector("#F01").style.display = "block"
    document.querySelector("#F02").style.display = "none"

}

function irALogin() {
    document.querySelector("#F01").style.display = "none"
    document.querySelector("#F02").style.display = "block"

}

function hacerLogin() {
    let nombreUsuario = document.querySelector("#txtNombreUsuarioLogin").value.toLowerCase()
    let pass = document.querySelector("#passContrasenaLogin").value

    if (sistema.existeAdmin(nombreUsuario)) {
        let elAdmin = sistema.hallarAdmin(nombreUsuario)
        if (elAdmin.adminPassword == pass) {
            usuarioConectado = elAdmin
            mostrarAdmin()
        } else {
            alert("Error de Inicio de Sesión. Por favor, verifica que tu nombre de usuario y contraseña sean correctos e inténtalo nuevamente.")
        }
    } else {
        if (sistema.existeComprador(nombreUsuario)) {
            let elComprador = sistema.hallarComprador(nombreUsuario)
            if (elComprador.compradorPassword == pass) {
                usuarioConectado = elComprador
                mostrarComprador()
                verLIstadoCompras()
            } else {
                alert("Error de Inicio de Sesión. Por favor, verifica que tu nombre de usuario y contraseña sean correctos e inténtalo nuevamente.")
            }
        } else {
            alert("Error de Inicio de Sesión. Por favor, verifica que tu nombre de usuario y contraseña sean correctos e inténtalo nuevamente.")
        }
    }
}




function cerrarSesion() {

    ocultarTodo()
    document.querySelector("#F02").style.display = "block"
    document.querySelector("#formLogin").reset()
    usuarioConectado = null
}

function mostrarListadoProductos() {
    let miTabla = ""
    miTabla += `
    <table border="1">
        <thead>
            <td> ID Producto </td>
            <td> Imagen </td>
            <td> Nombre </td>
            <td> Descripcion </td>
            <td> Precio </td>
            <td> Stock </td>
            <td> Cantidad </td>
            <td> Oferta </td>
            <td> Comprar </td>
        </thead>
    `
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.estado === "activo") {
            miTabla += ` <tr>
                        <td>${unProducto.productoId}</td>
                        <td><img src="${unProducto.imagen}" width="100" height="100"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td>${unProducto.stock}</td>
                        <td> <input type="number" id="numCantidad${unProducto.productoId}"> </td>
                        <td> ${convertir(unProducto.oferta)} </td>
                        <td> <input type="button" value="Comprar" class="botonAccion" id="boton${unProducto.productoId}"> </td>
                    </tr>`
        }
    }
    miTabla += `</table>`
    document.querySelector("#msgVerProductos").innerHTML = miTabla

    let listaInputs = document.getElementsByClassName("botonAccion")
    for (let unInput of listaInputs) {
        unInput.addEventListener("click", hacerCompra)
    }
}




function hacerCompra() {
    let idBoton = this.id
    let idProd = idBoton.substring(5)
    //traer el stock en una variable
    let objProducto = sistema.hallarProducto(idProd)
    let stock = objProducto.stock

    let idCantidad = `#numCantidad${idProd}`
    let cantidadInput = document.querySelector(idCantidad)
    let cantidad = Number(cantidadInput.value)
    if (cantidad <= 0 || stock < cantidad) {
        alert("Error de compra")
        return
    } else {

        let idUsuario = usuarioConectado.compradorId

        let precio = precioProducto(idProd)
        if (precio !== null) {
            let monto = cantidad * precio
            let miCompra = new Compras(idUsuario, idProd, cantidad, monto)
            sistema.listaCompras.push(miCompra)
            alert("La compra fue realizada con éxito")
        }
    }
    //  else {
    //         alert("Producto no encontrado.")
    //     }
    // } else {
    //     alert("Cantidad no válida.")
    // }
}


function precioProducto(idProd) {

    for (let unProducto of sistema.listaProductos) {

        if (unProducto.productoId == idProd) return unProducto.precio

    }
    return null

}

function hacerRegistro() {
    let tarjetaDeCredito = document.querySelector("#txtNumeroTarjeta").value
    let nombre = document.querySelector("#txtNombre").value
    let apellido = document.querySelector("#txtApellido").value
    let contraseña = document.querySelector("#passContrasena").value
    let cvc = document.querySelector("#numCVC").value
    let usuario = document.querySelector("#txtNombreUsuario").value.toLowerCase()
    //Errores de ingreso
    let errorNombre = document.querySelector("#errorNombre")
    let errorApellido = document.querySelector("#errorApellido")
    let errorUsuario = document.querySelector("#errorUsuario")
    let errorContrasena = document.querySelector("#errorContrasena")
    let errorTarjeta = document.querySelector("#errorTarjeta")
    let errorCVC = document.querySelector("#errorCVC")
    let msgRegistro = document.querySelector("#msgRegistro")

    // Reiniciar mensajes de error y clases
    errorNombre.innerHTML = ""
    errorNombre.style.display = "none"
    errorApellido.innerHTML = ""
    errorApellido.style.display = "none"
    errorUsuario.innerHTML = ""
    errorUsuario.style.display = "none"
    errorContrasena.innerHTML = ""
    errorContrasena.style.display = "none"
    errorTarjeta.innerHTML = ""
    errorTarjeta.style.display = "none"
    errorCVC.innerHTML = ""
    errorCVC.style.display = "none"
    msgRegistro.innerHTML = ""
    msgRegistro.style.display = "none"
    errorNombre.classList.remove("error", "correct")
    errorApellido.classList.remove("error", "correct")
    errorUsuario.classList.remove("error", "correct")
    errorContrasena.classList.remove("error", "correct")
    errorTarjeta.classList.remove("error", "correct")
    errorCVC.classList.remove("error", "correct")
    msgRegistro.classList.remove("error", "correct", "success")
    document.querySelector("#txtNombre").classList.remove("input-error", "input-correct")
    document.querySelector("#txtApellido").classList.remove("input-error", "input-correct")
    document.querySelector("#txtNombreUsuario").classList.remove("input-error", "input-correct")
    document.querySelector("#passContrasena").classList.remove("input-error", "input-correct")
    document.querySelector("#txtNumeroTarjeta").classList.remove("input-error", "input-correct")
    document.querySelector("#numCVC").classList.remove("input-error", "input-correct")

    let hayError = false

    if (nombre.trim() === "") {
        errorNombre.innerHTML = "El nombre no puede estar vacío."
        errorNombre.style.display = "block"
        errorNombre.classList.add("error")
        document.querySelector("#txtNombre").classList.add("input-error")
        hayError = true
    } else if (!validarNombre(nombre)) {
        errorNombre.innerHTML = "Nombre inválido."
        errorNombre.style.display = "block"
        errorNombre.classList.add("error")
        document.querySelector("#txtNombre").classList.add("input-error")
        hayError = true
    } else {
        errorNombre.innerHTML = "Correcto"
        errorNombre.style.display = "block"
        errorNombre.classList.add("correct")
        document.querySelector("#txtNombre").classList.add("input-correct")
    }

    if (apellido.trim() === "") {
        errorApellido.innerHTML = "El apellido no puede estar vacío."
        errorApellido.style.display = "block"
        errorApellido.classList.add("error")
        document.querySelector("#txtApellido").classList.add("input-error")
        hayError = true
    } else if (!validarApellido(apellido)) {
        errorApellido.innerHTML = "Apellido inválido."
        errorApellido.style.display = "block"
        errorApellido.classList.add("error")
        document.querySelector("#txtApellido").classList.add("input-error")
        hayError = true
    } else {
        errorApellido.innerHTML = "Correcto"
        errorApellido.style.display = "block"
        errorApellido.classList.add("correct")
        document.querySelector("#txtApellido").classList.add("input-correct")
    }

    if (usuario.trim() === "") {
        errorUsuario.innerHTML = "El nombre de usuario no puede estar vacío."
        errorUsuario.style.display = "block"
        errorUsuario.classList.add("error")
        document.querySelector("#txtNombreUsuario").classList.add("input-error")
        hayError = true
    } else if (validarUsuario(usuario)) {
        errorUsuario.innerHTML = "El nombre de usuario ya existe."
        errorUsuario.style.display = "block"
        errorUsuario.classList.add("error")
        document.querySelector("#txtNombreUsuario").classList.add("input-error")
        hayError = true
    } else {
        errorUsuario.innerHTML = "Correcto"
        errorUsuario.style.display = "block"
        errorUsuario.classList.add("correct")
        document.querySelector("#txtNombreUsuario").classList.add("input-correct")
    }

    if (contraseña.trim() === "") {
        errorContrasena.innerHTML = "La contraseña no puede estar vacía."
        errorContrasena.style.display = "block"
        errorContrasena.classList.add("error")
        document.querySelector("#passContrasena").classList.add("input-error")
        hayError = true
    } else if (!esValidaPass(contraseña)) {
        errorContrasena.innerHTML = "Contraseña inválida. Debe tener al menos 5 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
        errorContrasena.style.display = "block"
        errorContrasena.classList.add("error")
        document.querySelector("#passContrasena").classList.add("input-error")
        hayError = true
    } else {
        errorContrasena.innerHTML = "Correcto"
        errorContrasena.style.display = "block"
        errorContrasena.classList.add("correct")
        document.querySelector("#passContrasena").classList.add("input-correct")
    }

    if (tarjetaDeCredito.trim() === "") {
        errorTarjeta.innerHTML = "El número de tarjeta de crédito no puede estar vacío."
        errorTarjeta.style.display = "block"
        errorTarjeta.classList.add("error")
        document.querySelector("#txtNumeroTarjeta").classList.add("input-error")
        hayError = true
    } else if (!validarTarjeta(tarjetaDeCredito)) {
        errorTarjeta.innerHTML = "Tarjeta de crédito inválida."
        errorTarjeta.style.display = "block"
        errorTarjeta.classList.add("error")
        document.querySelector("#txtNumeroTarjeta").classList.add("input-error")
        hayError = true
    } else {
        errorTarjeta.innerHTML = "Correcto"
        errorTarjeta.style.display = "block"
        errorTarjeta.classList.add("correct")
        document.querySelector("#txtNumeroTarjeta").classList.add("input-correct")
    }

    if (cvc.trim() === "") {
        errorCVC.innerHTML = "El CVC no puede estar vacío."
        errorCVC.style.display = "block"
        errorCVC.classList.add("error")
        document.querySelector("#numCVC").classList.add("input-error")
        hayError = true
    } else if (!validarCvc(cvc)) {
        errorCVC.innerHTML = "CVC inválido. Debe ser un número de 3 dígitos."
        errorCVC.style.display = "block"
        errorCVC.classList.add("error")
        document.querySelector("#numCVC").classList.add("input-error")
        hayError = true
    } else {
        errorCVC.innerHTML = "Correcto"
        errorCVC.style.display = "block"
        errorCVC.classList.add("correct")
        document.querySelector("#numCVC").classList.add("input-correct")
    }

    if (!hayError) {
        msgRegistro.innerHTML = "Usuario creado con éxito, ya puede iniciar sesión"
        msgRegistro.style.display = "block"
        msgRegistro.classList.add("success")

        let nuevoUsuario = new Compradores(nombre, apellido, usuario, contraseña, tarjetaDeCredito, cvc)
        sistema.listaCompradores.push(nuevoUsuario)
    }
}


function esValidaPass(unaContraseña) {

    if (unaContraseña.length >= 5 && contieneUnaMayuscula(unaContraseña) && contieneUnaMinuscula(unaContraseña) && contieneUnDigito(unaContraseña) && contieneCaracterRaro(unaContraseña)) {
        return true
    } else {
        return false
    }

}

function contieneUnaMayuscula(unaContraseña) {
    let contador = 0
    for (let unCaracter of unaContraseña) {
        if (unCaracter == unCaracter.toUpperCase() && unCaracter != " ") return true
    }
    return false
}

function contieneUnaMinuscula(unaContraseña) {
    let contador = 0
    for (let unCaracter of unaContraseña) {
        if (unCaracter == unCaracter.toLowerCase() && unCaracter != " ") return true
    }
    return false
}

function contieneUnDigito(unaContraseña) {
    let contador = 0
    for (let unCaracter of unaContraseña) {
        if (!isNaN(unCaracter) && unCaracter != " ") return true
    }
    return false
}

function contieneCaracterRaro(unaContraseña) {

    // Todos los que quieras aceptar como caracter
    let conjunto = "@_-#!.:"

    for (let unCaracter of unaContraseña) {
        if (conjunto.includes(unCaracter)) return true
    }

    return false
}

function quitarGuionesTarjeta(tarjeta) {

    let tarjetaLimpia = ""

    for (let i of tarjeta) {
        if (i != "-") {
            tarjetaLimpia += i
        }
    }
    return tarjetaLimpia


}

function validarTarjeta(nro) {
    nro = quitarGuionesTarjeta(nro)
    let suma = 0
    let impar = true

    for (let i = 0; i < nro.length; i++) {

        let n = Number(nro[i])
        if (impar && nro != "") {
            n = n * 2
            if (n > 9) {
                n = n - 9
            }


        }
        suma = suma + n
        impar = !impar

    }
    return (suma % 10 == 0)
}

function validarNombre(unNombre) {

    if (unNombre != "") {

        return true
    }

    return false

}

function validarApellido(unApellido) {

    if (unApellido != "") {

        return true
    }

    return false

}

function validarCvc(unCvc) {

    if (unCvc < 1000 && unCvc.length == 3) {

        return true
    }

    return false

}

function validarUsuario(unUsuario) {

    for (let i of sistema.listaCompradores) {

        if (unUsuario == i.compradorUsuario.toLowerCase() && unUsuario != "") {

            return true

        }

    }
    return false

}
function crearProducto() {
    let nombre = document.querySelector("#txtNombreProducto").value
    let descripcion = document.querySelector("#txtDescripcionProducto").value
    let precio = Number(document.querySelector("#numPrecioProducto").value)
    let stock = Number(document.querySelector("#numCantidadStockProducto").value)
    let imagen = document.querySelector("#slcCrearImagen").value
    if (validarNombre(nombre) && validarDescripcion(descripcion) && validadPrecio(precio) && validarStock(stock) && validarImagen(imagen)) {
        let nuevoProducto = new Productos(nombre, descripcion, precio, stock, imagen)
        sistema.listaProductos.push(nuevoProducto)

        alert("Producto creado con exito")
        mostrarListadoProductos()

    } else {
        alert("Error de datos")
    }



}

function validarDescripcion(unaDesc) {
    if (unaDesc !== "") {
        return true
    }
    return false
}

function validadPrecio(unPrecioValidar) {
    if (unPrecioValidar > 0) {
        return true
    }
    return false
}

function validarStock(unStockValidar) {
    if (unStockValidar > 0) {
        return true
    }
    return false
}

function validarImagen(unaImagenValidar) {
    if (unaImagenValidar !== "opciones") {
        return true
    }
    return false
}

function verCompras() {
    let miTabla = `
    <select id="filtroComprasAdmin">
        <option value="todas">Todas</option>
        <option value="Aprobada">Aprobadas</option>
        <option value="Cancelada">Canceladas</option>
        <option value="Pendiente">Pendientes</option>
    </select>
    <div id="contenedorComprasAdmin">
        ${generarTablaComprasAdmin("todas")}
    </div>
    `;
    document.querySelector("#msgAprobarCompras").innerHTML = miTabla;

    document.querySelector("#filtroComprasAdmin").addEventListener("change", filtrarComprasAdmin);
    agregarEventosValidarCompra();
}

function generarTablaComprasAdmin(filtro) {
    let miTabla = `
    <table border="1">
        <thead>
            <tr>
                <td>Imagen</td>
                <td>ID Compra</td>
                <td>ID Comprador</td>
                <td>ID Producto</td>
                <td>Cantidad</td>
                <td>Monto</td>
                <td>Estado</td>
                <td>Oferta</td>
                <td>Acción</td>
            </tr>
        </thead>
        <tbody id="tablaComprasAdmin">
    `;

    for (let unaCompra of sistema.listaCompras) {
        if (filtro === "todas" || unaCompra.estado.toLowerCase() === filtro.toLowerCase()) {
            miTabla += `
            <tr>
                <td><img src="${encontrarImagen(unaCompra.idProducto)}" width="100" height="100"></td>
                <td>${unaCompra.comprasId}</td>
                <td>${unaCompra.idComprador}</td>
                <td>${unaCompra.idProducto}</td>
                <td>${unaCompra.cantidad}</td>
                <td>${unaCompra.monto}</td>
                <td>${unaCompra.estado}</td>
                <td>${convertir(encontrarOferta(unaCompra.idProducto))}</td>`;

            if (unaCompra.estado == "Pendiente") {
                miTabla += `
                <td> <input type="button" value="Validar" class="botonValidar" id="boton${unaCompra.comprasId}"> </td>
                </tr>`;
            }
        }
    }

    miTabla += `
        </tbody>
    </table>`;
    return miTabla;
}

function filtrarComprasAdmin() {
    let filtro = document.querySelector("#filtroComprasAdmin").value;
    let contenedorCompras = document.querySelector("#contenedorComprasAdmin");
    contenedorCompras.innerHTML = generarTablaComprasAdmin(filtro);
    agregarEventosValidarCompra();
}

function agregarEventosValidarCompra() {
    let botonesValidar = document.getElementsByClassName("botonValidar");
    for (let unaValidacion of botonesValidar) {
        unaValidacion.addEventListener("click", validarCompra);
    }
}


function encontrarImagen(idProducto) {
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.productoId == idProducto) {
            return unProducto.imagen;
        }
    }
    return null;
}

function convertir(unValor) {
    return unValor ? "Sí" : "No";
}


function validarCompra() {
    let idBoton = this.id;
    let idCompra = idBoton.substring(5);

    let idCliente = sistema.clienteCompra(idCompra);
    let monto = sistema.montoCompra(idCompra);
    let idProducto = sistema.productoCompra(idCompra);
    let cantidad = sistema.cantidadCompra(idCompra);
    let stock = sistema.obtenerStock(idProducto);
    let estado = sistema.estadoProducto(idProducto);
    let saldo = sistema.saldoComprador(idCliente);

    let nuevoEstado;

    if (estado === "activo" && saldo >= monto && stock >= cantidad) {
        let nuevoStock = stock - cantidad;
        let nuevoSaldo = saldo - monto;

        if (nuevoStock == 0) {
            sistema.pausarProducto(idProducto);
        }

        nuevoEstado = "aprobada";
        sistema.actualizarCompra(idCompra, nuevoEstado);
        sistema.actualizarProducto(idProducto, nuevoStock);
        sistema.modificarsaldoCliente(idCliente, nuevoSaldo);
        totalAprobadas++;

    } else {
        nuevoEstado = "cancelada";
        sistema.actualizarCompra(idCompra, nuevoEstado);
    }

    verCompras();
}




function encontrarImagen(unIdProducto) {
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.productoId == unIdProducto) {
            return unProducto.imagen
        }
    }
    return null
}

function encontrarOferta(unIdProducto) {
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.productoId == unIdProducto) {
            return unProducto.oferta
        }
    }
    return null
}

function productosOfertas() {
    let miTabla = ""
    miTabla += `
    <table border="1">
        <thead>
            <td> ID Producto </td>
            <td> Imagen </td>
            <td> Nombre </td>
            <td> Descripcion </td>
            <td> Precio </td>
            <td> Stock </td>
            <td> Cantidad </td>
            <td> Oferta </td>
            <td> Comprar </td>
        </thead>
    `
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.estado === "activo" && unProducto.oferta) {
            miTabla += ` <tr>
                        <td>${unProducto.productoId}</td>
                        <td><img src="${unProducto.imagen}" width="100" height="100"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td>${unProducto.stock}</td>
                        <td> <input type="number" id="numCantidad${unProducto.productoId}"> </td>
                        <td> ${convertir(unProducto.oferta)} </td>
                        <td> <input type="button" value="Comprar" class="botonAccion" id="boton${unProducto.productoId}"> </td>
                    </tr>`
        }
    }
    miTabla += `</table>`
    document.querySelector("#msgProductosOferta").innerHTML = miTabla

    let listaInputs = document.getElementsByClassName("botonAccion")
    for (let unInput of listaInputs) {
        unInput.addEventListener("click", hacerCompra)
    }
}



function convertir(unValor) {

    if (unValor == true) return "Si"
    if (unValor == false) return "No"

}

function administrarProductos() {
    let miTabla = ""
    miTabla += `
    <table border="1">
        <thead>
            <tr>
                <td>ID Producto</td>
                <td>Imagen</td>
                <td>Nombre</td>
                <td>Descripcion</td>
                <td>Precio</td>
                <td>Stock</td>
                <td>Estado</td>
                <td>Oferta</td>
                <td>Acción</td>
            </tr>
        </thead>
    `

    for (let unProducto of sistema.listaProductos) {
        miTabla += `<tr>
                        <td>${unProducto.productoId}</td>
                        <td><img src="${unProducto.imagen}" width="100" height="100"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td><input type="number" id="txtStock${unProducto.productoId}" value="${unProducto.stock}"></td>
                        <td><select id="slcEstado${unProducto.productoId}">
                            <option value="activo" ${unProducto.estado == "activo" ? "selected" : ""}>activo</option>
                            <option value="pausado" ${unProducto.estado == "pausado" ? "selected" : ""}>pausado</option>
                        </select></td>
                        <td><select id="slcOferta${unProducto.productoId}">
                            <option value="true" ${unProducto.oferta ? "selected" : ""}>Sí</option>
                            <option value="false" ${!unProducto.oferta ? "selected" : ""}>No</option>
                        </select></td>
                        <td><input type="button" value="Modificar" class="botonModificar" id="boton${unProducto.productoId}"></td>
                    </tr>`
    }

    miTabla += `</table>`
    document.querySelector("#msgAdministrarProductos").innerHTML = miTabla

    let listaInputs = document.getElementsByClassName("botonModificar");
    for (let unInput of listaInputs) {
        unInput.addEventListener("click", hacerCambios);
    }
}

function hacerCambios() {
    let idBoton = this.id;
    let idProd = idBoton.substring(5);
    let idStock = `#txtStock${idProd}`;
    let idEstado = `#slcEstado${idProd}`;
    let idOferta = `#slcOferta${idProd}`;

    let nuevoStock = document.querySelector(idStock)?.value;
    let nuevoEstado = document.querySelector(idEstado)?.value;
    let nuevaOferta = document.querySelector(idOferta)?.value === 'true';

    if (nuevoStock !== null && nuevoEstado !== null && nuevaOferta !== null) {
        for (let unProducto of sistema.listaProductos) {
            if (unProducto.productoId == idProd) {
                unProducto.stock = Number(nuevoStock);
                unProducto.estado = nuevoEstado;
                unProducto.oferta = nuevaOferta;
            }
        }
        administrarProductos();
        mostrarListadoProductos();
        productosOfertas();
    } else {
        console.error("No se pudieron obtener los datos para el producto con ID:", idProd);
    }

    alert("Producto modificado con éxito");
    agregarEventosValidarCompra(); // Agregar los eventos nuevamente
}


let totalAprobadas = 0
function verLIstadoCompras() {
    let contenidoHTML = `
    <select id="filtroCompras">
        <option value="todas">Todas</option>
        <option value="Aprobada">Aprobadas</option>
        <option value="Cancelada">Canceladas</option>
        <option value="Pendiente">Pendientes</option>
    </select>
    <div id="contenedorCompras">
        ${generarTablaCompras("todas")}
    </div>
    `
    document.querySelector("#msgListadoCompras").innerHTML = contenidoHTML

    document.querySelector("#filtroCompras").addEventListener("change", filtrarCompras)
    agregarEventosCancelarCompra()
}

function generarTablaCompras(filtro) {
    let tabla = `
    <table border="1">
        <thead>
            <tr>
                <td>Nombre del producto</td>
                <td>Cantidad</td>
                <td>Monto Total</td>
                <td>Estado</td>
                <td>Acción</td>
            </tr>
        </thead>
        <tbody id="tablaCompras">
    `


    for (let unaCompra of sistema.listaCompras) {
        if (unaCompra.idComprador === usuarioConectado.compradorId) {
            let producto = encontrarProducto(unaCompra.idProducto)
            if (producto) {
                let montoTotal = unaCompra.cantidad * producto.precio
                if (filtro === "todas" || unaCompra.estado.toLowerCase() === filtro.toLowerCase()) {
                    tabla += `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${unaCompra.cantidad}</td>
                        <td>${montoTotal}</td>
                        <td>${unaCompra.estado}</td>
                        <td>${unaCompra.estado === "Pendiente" ? `<input type="button" value="Cancelar" class="botonCancelar" id="boton${unaCompra.comprasId}">` : ''}</td>
                    </tr>
                    `
                }
                if (unaCompra.estado === "Aprobada") {
                    totalAprobadas += montoTotal
                }
            }
        }
    }

    tabla += `
        </tbody>
    </table>
    <p>Total de compras aprobadas: ${totalAprobadas}</p>
    <p>Saldo disponible: ${usuarioConectado.saldo}</p>
    `
    return tabla
}

function encontrarProducto(idProducto) {
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.productoId === idProducto) {
            return unProducto
        }
    }
    return null
}

function cancelarCompra() {
    let idBoton = this.id
    let idCompra = parseInt(idBoton.replace("boton", ""))

    for (let unaCompra of sistema.listaCompras) {
        if (unaCompra.comprasId === idCompra) {
            if (unaCompra.estado === "Pendiente") {
                unaCompra.estado = "Cancelada"
                alert("Compra cancelada con éxito")
                filtrarCompras()
                return
            }
        }
    }
}

function filtrarCompras() {
    let filtro = document.querySelector("#filtroCompras").value
    let contenedorCompras = document.querySelector("#contenedorCompras")
    contenedorCompras.innerHTML = generarTablaCompras(filtro)
    agregarEventosCancelarCompra()
}

function agregarEventosCancelarCompra() {
    let botonesCancelar = document.getElementsByClassName("botonCancelar")
    for (let unBoton of botonesCancelar) {
        unBoton.addEventListener("click", cancelarCompra)
    }
}
function unidadesVendidas(idProducto) {
    let total = 0;
    for (let unaCompra of sistema.listaCompras) {
        if (unaCompra.idProducto === idProducto && unaCompra.estado === "aprobada") {
            total += unaCompra.cantidad;
        }
    }
    return total;
}

function devolverNombreArticulo(productoId) {
    for (let unProducto of sistema.listaProductos) {
        if (unProducto.productoId === productoId) {
            return unProducto.nombre;
        }
    }
    return null;
}

function informeGanancias() {
    document.querySelector("#msgInformeGanancias").innerHTML = "";
    let aprobados = new Set();  // Utilizar Set para evitar duplicados
    let total = 0;

    for (let unaCompra of sistema.listaCompras) {
        if (unaCompra.estado === "aprobada") {
            if (!aprobados.has(unaCompra.idProducto)) {
                let totalVendido = unidadesVendidas(unaCompra.idProducto);
                document.querySelector("#msgInformeGanancias").innerHTML += `${devolverNombreArticulo(unaCompra.idProducto)} -- ${totalVendido} <br>`;
                aprobados.add(unaCompra.idProducto);
            }
            total += unaCompra.monto;
        }
    }

    document.querySelector("#msgInformeGanancias").innerHTML += `<hr> Ganancia total: ${total}`;
}





