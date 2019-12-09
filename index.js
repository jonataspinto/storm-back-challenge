const {indexOfSoma, Profit, CompareBracket} = require('./Modules')

// QUESTÃO 1
const nums = [7,11,15,2]
const alvo = 9
// indexOfSoma(nums, alvo)

// QUESTAO 2
const comp1= ['{','[','(',')',']','}']
const comp2= ['{','[','(',']',')','}']
const comp3= ['{','{','[','[','(','(',')',')',']',']','}','}']
CompareBracket(comp2)

// QUESTÃO 3
actions = [7,1,5,3,6,4]
actions2 = [7,6,4,3,1]
// Profit(actions)
// Profit(actions2)