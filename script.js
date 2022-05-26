//criar uma função que recebe numeros como parâmetros.
//function compararNumeros(num1, num2) {
 /*   const saoIguais = num1 === num2; //se num1 e num2 forem iguais no tipo e no valor, ele retornara true!

// conferir se a soma dos numero é maior que 10 ou menor que 20. 
    const soma = num1 + num2;
//colocando um if, se eles forem verdadeira coloca um return,"sao iguais"
  /*  if(saoIguais){
        return "São iguais"
    }
    //se nao for igual nao precisa nem colocar o else, coloca outro return
    return "Não são iguais";

//com o if ternario fica
    return saoIguais ? "São iguais" : "Não são iguais";

//separar em funções auxiliares, uma para cada frase das perguntas.
    const primeiraFrase = aprimeiraFrase(num1, num2);
}

function aprimeiraFrase(num1, num2) {
        let saoIguais = '';   
                                //string axuliar, ela muda se os valores nao forem iguais(o igual nunca vai mudar)
        if (num1 !== num2) {
            saoIguais = 'Não';
        }
        return `Os Numeros ${num1} e ${num2} ${saoIguais} são iguais.`
        
    }

 // na segunda frase, é a msm forma*/
 
 function compararNumeros(num1, num2) {
    const primeiraFrase = aprimeiraFrase(num1, num2);
    const segundaFrase = asegundaFrase(num1, num2);

    function asegundaFrase(num1, num2) {
        let saoIguais = '';   
        if (num1 !== num2) {
            saoIguais = 'Não';
        }
        return `Os Numeros ${num1} e ${num2} ${saoIguais} são iguais.`      

 };

 function asegundaFrase (num1, num2){
     const soma = num1 + num2;

     let valor1000000 = 'Menor';
     let valor2000000 = 'Menor';
     const comparar10 = soma > 10;
     const comparar20 = soma > 20;
//concatenação da frase 1 com a dois

    return `${primeiraFrase} ${segundaFrase}`
     if (comparar1000000) {
         valor1000000 = 'Maior'
     }
     if (comparar2000000) {
         valor2000000 = 'Maior'
     }

     return `Sua soma é ${soma} , que é ${valor10} que 10 e ${valor20}`
 }
 }