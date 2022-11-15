function limpar(){
	location.reload();
}

function calcular(){

    let numero1 = Number(document.querySelector('.n1').value);    
    let numero2 = Number(document.querySelector('.n2').value);
    let numero3 = Number(document.querySelector('.n3').value);
    let numero4 = Number(document.querySelector('.n4').value);
    let numero5 = Number(document.querySelector('.n5').value);
    let numero6 = Number(document.querySelector('.n6').value);
    let numero7 = Number(document.querySelector('.n7').value);
    let numero8 = Number(document.querySelector('.n8').value);
    let numero9 = Number(document.querySelector('.n9').value);
    let numero10 = Number(document.querySelector('.n10').value);

    let sequenciaDigitada = [numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10];
    document.querySelector('.sequenciaDigitada').innerHTML = "Sequência Digitada = " + sequenciaDigitada + ".";

    let somaSequenciaDigitada = 0;
    
    for(let i = 0; i < 10; i++){        
        somaSequenciaDigitada += sequenciaDigitada[i];          
    }
    
    let sequenciaOrdenada = sequenciaDigitada.sort((a,b)=> a - b);
    document.querySelector('.sequenciaOrdenada').innerHTML = "Sequência Ordenada = " + sequenciaOrdenada + ".";

    let mediana = (sequenciaOrdenada[4] + sequenciaOrdenada[5])/2;
    document.querySelector('.mediana').innerHTML = "Mediana = " + mediana;
    
    let media = somaSequenciaDigitada/sequenciaDigitada.length;  
    document.querySelector('.media').innerHTML = "Media = " + media;
    
    let DPp = Math.sqrt((Math.pow((numero1 - media),2) + Math.pow((numero2 - media),2) + Math.pow((numero3 - media),2)
    + Math.pow((numero4 - media),2) + Math.pow((numero5 - media),2) + Math.pow((numero6 - media),2)
    + Math.pow((numero7 - media),2) + Math.pow((numero8 - media),2) + Math.pow((numero9 - media),2)
    + Math.pow((numero10 - media),2))/sequenciaDigitada.length);
    document.querySelector('.DPp').innerHTML = "Desvio Padrão - (População) = " + DPp;

    let DPa = Math.sqrt((Math.pow((numero1 - media),2) + Math.pow((numero2 - media),2) + Math.pow((numero3 - media),2)
    + Math.pow((numero4 - media),2) + Math.pow((numero5 - media),2) + Math.pow((numero6 - media),2)
    + Math.pow((numero7 - media),2) + Math.pow((numero8 - media),2) + Math.pow((numero9 - media),2)
    + Math.pow((numero10 - media),2))/(sequenciaDigitada.length-1));
    document.querySelector('.DPa').innerHTML = "Desvio Padrão - (Amostra) = " + DPa;
}
