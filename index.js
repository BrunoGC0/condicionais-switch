/*
    switch(parametro){
        case valor1:
            <bloco de declaração>
            break
        case valor2:
            <bloco de declaração>  
            break  
    }
*/

// let nomeFilme = "Vingadores"

// switch(nomeFilme){
//     case "Vingadores":
//         console.log("É o filme dos Vingadores")
//         break
//     case "Liga da justiça":
//         console.log("É o filme da Liga da Justica")
//         break
//     case "Avatar":
//         console.log("É o filme Avatar")
//         break
//     default:
//         console.log("Esse filme não existe")
//         break
// }

let avaliacao = 4

switch(avaliacao){
    case 1:
    case 2:
        console.log("Filme Ruim")
        break
    case 3:
    case 4:
        console.log("Filme Mediano")
        break
    case 5:
        console.log("Filme Exelente")
        break
    default:
        console.log("A nota é inválida")
        break
}