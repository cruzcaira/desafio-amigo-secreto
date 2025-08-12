# Amigo Secreto

# Descripción
Este es un proyecto de una aplicación web para sortear un Amigo Secreto entre un listado de participantes. 

# Características 
Esta aplicación te permitirá:
- Añadir participantes
- Visualizar en una lista a quienes participaran
- Sortear un amigo secreto de la lista

# Requisitos
- Es necesario disponer de un navegador web moderno que soporte JavaScript. 

# Código Principal en JavaScript

```javascript
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
```

# Licencia
La documentación de este proyecto esta bajo la licencia [MIT](https://github.com/cruzcaira/desafio-amigo-secreto/blob/main/LICENSE).

# Autor
Creador por: [cruzcaira](https://github.com/cruzcaira)
