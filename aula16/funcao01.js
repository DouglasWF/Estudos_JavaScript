function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(121)

console.log(`O numero ${res}`)