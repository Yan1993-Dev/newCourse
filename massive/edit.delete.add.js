// добавление элементов

const salariesOfDevelopers = [400, 500, 600, 2000, 350]

const newSeniorDeveloperSalary = 5000

salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002, 5003)

salariesOfDevelopers.unshift(100, 101, 102, 103)



// удаление элементов

const firstRemoveElement = salariesOfDevelopers.shift()
salariesOfDevelopers.shift()

const lastRemoveElement = salariesOfDevelopers.pop()

// console.log('firstRemoveElement', firstRemoveElement)
// console.log('lastRemoveElement', lastRemoveElement)
// console.log('salariesOfDevelopers', salariesOfDevelopers)

// изменение элементов

salariesOfDevelopers[4] = 6000
console.log('salariesOfDevelopers', salariesOfDevelopers)