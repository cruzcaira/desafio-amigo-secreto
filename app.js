// Array para almanecar los nombres de los participantes
let listaAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById ("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return false;
    } else {
        listaAmigos.push(amigo);
        actualizarLista();
        limpiarCaja();
        return true;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; 

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear los amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Inserte al menos dos nombres para sortear.");
        return false;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSecreto = listaAmigos[indiceAleatorio];

        document.getElementById("resultado").innerHTML = `Tu Amigo Secreto es: ${amigoSecreto}`;
        return true;
    }
}