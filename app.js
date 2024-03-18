// Función para cambiar el escritorio
function cambioescritorio() {
    // Verificar si el campo de texto ya existe
    if (!document.querySelector('#cuadroTexto')) {
        
        document.querySelector('#rectangulo').id = 'rectangulodos';
        document.querySelector('.Personaje').classList.add('eliminarpersonaje');
        document.querySelector('.mensajederecha').classList.add('eliminarmensajederecha');
        document.querySelector('.ingresartexto').classList.add('ingresartextodos');
        document.querySelector('body').classList.add('bodydos');
        
        // Crear un textarea dentro del rectangulo
        var textarea = document.createElement('textarea');
        textarea.id = 'cuadroTexto';

        // Insertar el textarea justo después del muñeco
        var section = document.querySelector('#rectangulodos');
        section.insertBefore(textarea, section.childNodes[1]);

        // Crear el boton de copiar
        var boton = document.createElement('button');
        boton.classList.add('copiar');
        boton.addEventListener("click", copiartexto);

        // Crea un elemento <em>
        var em = document.createElement('em');
        em.textContent = 'Copiar';
        
        boton.appendChild(em); // Agrega el <em> como hijo del botón
    
        // Insertar el boton justo después de los textos
        var section = document.querySelector('#rectangulodos');
        section.insertBefore(boton, section.childNodes[2]);

    }
}

// Función de encriptar
function encriptar() {
    const text = document.getElementById('text').value;
    if(text == ''){
        document.getElementById('cuadroTexto').value = "No ha ingresado información para encriptar";
    }else if(/[A-ZÁÉÍÓÚÜáéíóúü]/.test(text)){
        document.getElementById('cuadroTexto').value = "Solo debe ingresar minusculas sin acentos";
        } else {
            const textoencriptado = text
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
            document.getElementById('cuadroTexto').value = textoencriptado;
    }
}

// Función de desencriptar
function desencriptar() {
    const textoencriptado = document.getElementById('text').value;
    if(textoencriptado == ""){
        document.getElementById('cuadroTexto').value = "No ha ingresado información para desencriptar";
    }else if(/[A-ZÁÉÍÓÚÜáéíóúü]/.test(textoencriptado)){
        document.getElementById('cuadroTexto').value = "Solo debe ingresar minusculas sin acentos";
        } else {
            const textodesencriptado = textoencriptado
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
            document.getElementById('cuadroTexto').value = textodesencriptado;
    }
}

function copiartexto() {
    const resultado = document.getElementById('cuadroTexto').value;
    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert('Texto copiado al portapapeles');
        });
}