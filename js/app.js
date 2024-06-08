let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


// function adicionar() {
//     let amigoSorteado = document.getElementById('nome-amigo').value;
//     let amigoIncluido = document.getElementById('lista-amigos');

//     amigoIncluido.innerHTML = amigoIncluido.innerHTML + ', ' + `${amigoSorteado}`;
// }

// function sortear() {
//     let listaDeAmigos = [];
//     listaDeAmigos = document.getElementById('lista-amigos').textContent;

   
//     let sorteio = document.getElementById('lista-sorteio');
//     sorteio.innerHTML = `${listaDeAmigos}`
// }

// function reiniciar() {
//     document.getElementById('lista-amigos').textContent = '';
//     document.getElementById('lista-sorteio').textContent = '';
//     document.getElementById('nome-amigo').value = '';

// }

// function deixarArrayAleatorio() {
   
// for (let i = listaDeAmigos.length - 1; i > 0; i--) {
//        const j = Math.floor(Math.random() * (i + 1));
//        [listaDeAmigos[i], listaDeAmigos[j]] = [listaDeAmigos[j], listaDeAmigos[i]];
// }
// return listaDeAmigos;
// }