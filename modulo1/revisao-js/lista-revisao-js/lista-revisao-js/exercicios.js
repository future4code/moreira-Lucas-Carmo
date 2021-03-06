// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){return a-b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for(let element of array){
        if (element % 2 === 0){
            arrayPares.push(element)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((item)=>{
        if (item % 2 === 0)
        return item
    }).map((item)=>{
        return item ** 2
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(i = 0; i < array.length; i++){
      if (array[i] > maiorNumero){
          maiorNumero = array[i]
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numerosComparados = {}
    let subtracao = num1 - num2
    if (num1 > num2){
        return {...numerosComparados, maiorNumero: num1, maiorDivisivelPorMenor: num1 % num2 === 0, diferenca: subtracao}
    }else if (num2 > num1){
        subtracao = num2 - num1
        return {...numerosComparados, maiorNumero: num2, maiorDivisivelPorMenor: num2 % num1 === 0, diferenca: subtracao}
    }else if (num1 === num2){
        return {...numerosComparados, maiorNumero: num2, maiorDivisivelPorMenor: num2 % num1 === 0, diferenca: subtracao}
    }
    return numerosComparados
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPares = []
   for (i = 0; arrayPares.length < n; i++){
       i % 2 === 0 ? arrayPares.push(i) : null
   }
   return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let equilatero = ladoA === ladoB && ladoA === ladoC
    let escaleno = ladoA !== ladoB && ladoA !== ladoC
    let isosceles = (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) && (ladoA !== ladoB || ladoA !== ladoC || ladoB !== ladoC)
   if (equilatero){
     return "Equilátero"
   }else if (isosceles){
     return "Isósceles"
   }else if (escaleno){
     return "Escaleno"
   }
   } 

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayFinal = []
    const arrayDecrescente = array.sort(function(a, b){return b - a})
        arrayFinal.push(arrayDecrescente[1])
    const arrayCrescente = array.sort(function(a, b){return a - b})
        arrayFinal.push(arrayCrescente[1])
    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.` //a array de atores aparentemente foi separada sem espaço dentro das strings. por isso, é impossível retornar exatamente o que pede o boilerplate.
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const podeEntrar = pessoas.filter((item) =>{
        for (i = 0; i < pessoas.length; i++){
           if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60){
             return item
         }
    }})
 return podeEntrar
 }
 

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoPodeEntrar = pessoas.filter((item) =>{
        for (i = 0; i < pessoas.length; i++){
           if (item.altura < 1.5 || (item.idade <= 14 || item.idade >= 60)){
             return item
         }
    }})  
return naoPodeEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((item) =>{
        let totalGasto = 0
        item.compras.forEach((comprinha) =>{
            totalGasto += comprinha
        })
    item.saldoTotal -= totalGasto
    item.compras = []
    })
return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(x, y){
        let a = x.nome.toUpperCase(),
            b = y.nome.toUpperCase()
        return a == b ? 0 : a > b ? 1 : -1
    })
return consultas
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function compare(a, b){
        return a.dataDaConsulta > b.dataDaConsulta
    }
return consultas.sort(compare)
}