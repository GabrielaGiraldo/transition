let contador = 0;
let palabra = ['Hola','Buenas','Noches','Caballero']
let h = (-1)

const valor = document.querySelector('#Valor')
const botones = document.querySelectorAll('.Boton')
const inputElement = document.getElementById('inputElement');
const addButton = document.getElementById('addButton');

botones.forEach(boton=>{
    boton.addEventListener('click',function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains('Disminuir')){
            h = h-1
            contador = palabra[h]
        }
        else if(estilos.contains('Aumentar')){
            h = h+1
            contador = palabra[h]
        }
            valor.textContent = contador

        
    })
})

addButton.addEventListener('click', function() {
    const inputValue = inputElement.value;
    palabra.push(inputValue);
    inputElement.value = ''
})


if (contador >0){
    valor.style.color = '#fff'
}else if (contador < 0){
    valor.style.color = '#ba215e'
}
else if(contador === 0){
    valor.style.color = '#000'
}