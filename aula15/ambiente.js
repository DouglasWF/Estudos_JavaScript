let num = [5, 8, 2, 9, 3]
num[5] = 7
num.push(1)
num.sort()

console.log(`O vetor tem ${num} posições`)
console.log(`O primeiro valor do vetor é ${num[5]}`)
let pos = num.indexOf(9)
if ( pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

//console.log(`O valor 8 está na posição ${pos}`)