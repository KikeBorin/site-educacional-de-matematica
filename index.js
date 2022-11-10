//dropdown
$(document).ready(function() {
    var botao = $('.botao-principal'); //classe no a que vai ser clicado
    var dropDown = $('.ul-secundario');//classe do submenu que vai abrir
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   //cálculos da página operações com números decimais
   function clicarAd(){
	
	let ad1 = document.querySelector(".ad1").value;
	let ad2 = document.querySelector(".ad2").value;
	let calcular = parseFloat(ad1.toString().replace("," , ".")) + parseFloat(ad2.toString().replace("," , "."));
	document.querySelector(".resultadoAd").innerHTML = "O resultado da soma = " + 
	(calcular.toFixed(2).toString().replace(".",",")) + ".";
	}

function limparAd(){
	location.reload();
}

function clicarSub(){
	
	let sub1 = document.querySelector(".sub1").value;
	let sub2 = document.querySelector(".sub2").value;
	let calcular = parseFloat(sub1.toString().replace("," , ".")) - parseFloat(sub2.toString().replace("," , "."));
	document.querySelector(".resultadoSub").innerHTML = "O resultado da subtração = " + 
	(calcular.toFixed(2).toString().replace(".",",")) + ".";
	}

function limparSub(){
	location.reload();
}

function clicarMult(){
	
	let mult1 = document.querySelector(".mult1").value;
	let mult2 = document.querySelector(".mult2").value;
	let calcular = parseFloat(mult1.toString().replace("," , ".")) * parseFloat(mult2.toString().replace(",","."));
	document.querySelector(".resultadoMult").innerHTML = "O resultado da multiplicação = " +
	(calcular.toFixed(2).toString().replace(".",",")) + ".";
	}

function limparMult(){
	location.reload();
}

function clicarDiv(){
	
	let div1 = document.querySelector(".div1").value;
	let div2 = document.querySelector(".div2").value;
	let calcular = parseFloat(div1.toString().replace("," , ".")) / parseFloat(div2.toString().replace(",","."));
	document.querySelector(".resultadoDiv").innerHTML = "O resultado da divisão = " +
	(calcular.toFixed(2).toString().replace(".",",")) + ".";
	}

function limparDiv(){
	location.reload();
}