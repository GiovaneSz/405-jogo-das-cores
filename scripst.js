// let numero = Math.round(2.4);

// console.log(numero);

// numero = Math.floor(5.5);

// numero = Math.ceil(25.5);

// numero = Math.pow(2, 3);

// numero = Math.sqrt(25)

// numero = Math.PI;

// numero = Math.E;

// let numero = Math.ceil(Math.random() * 1000);

// console.log(numero);



let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");


let cores = ["red", "blue", "yellow"];



function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    
    this.style.backgroundColor = cores[aleatorio];

    
    verificarFinal();
}

for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}


function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";

        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            quadrado.classList.add("virarQuadradinho");
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}


function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;