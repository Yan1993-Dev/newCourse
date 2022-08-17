// const developerNames = ['Yan', 'Rustam', 'Dima', 'Ilya']

// for

// for (начальное значение; условие; шаг) {

// }

// console.log(developerNames[1])

// for (let i = 0; i < developerNames.length; i += 1) {
//     console.log('i', i)
//     console.log('item', developerNames[i])
// }

// for of

// for (const name of developerNames) {
//     console.log('name', name)
// }

// forEach

// developerNames.forEach((name, index, array) => {
//     // console.log('name', name)
//     // console.log('index', index)
//     console.log('array', array)
// })

// developerNames.forEach(function() {
    
// })

// map возвращает новый массив с измененными элементами функцией callback

const salariesOfDevelopers = [400, 500, 600, 2000, 350]

const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
    return salary ** 2
})

console.log('updatedSalaries', updatedSalaries)

// filter 

const filterSalaries = salariesOfDevelopers.filter((salary, index, array) => {
    return salary > 600
    // return index % 2 === 0 выводит четные числа
})

console.log('filterSalaries', filterSalaries)

// find

const searchSalary = salariesOfDevelopers.find((salary) => {
    return salary > 500
})
console.log('searchSalary', searchSalary)

// findIndex 

const searchedIndex = salariesOfDevelopers.findIndex((salary) => {
    return salary === 600
})
console.log('searchedIndex', searchedIndex)

// some(выводит true или false, есть ли значение), every(выводит true или false, удовлетворяют значению)

const elementExists = salariesOfDevelopers.some((salary) => {
    return salary > 1000
})
console.log('elementExists', elementExists)

const allElementExists = salariesOfDevelopers.every((salary) => {
    return salary > 0
})
console.log('allElementExists', allElementExists)

// reduce

const sumSalary = salariesOfDevelopers.reduce((acc, salary, index, array) => {
    console.log('acc/salary', acc, salary)
    return acc + salary
}, 0)

console.log('sumSalary', sumSalary)

// sort 
// < 0
// > 0
// = 0

salariesOfDevelopers.sort((a, b) => {
    return a - b
})
console.log('salariesOfDevelopers', salariesOfDevelopers)