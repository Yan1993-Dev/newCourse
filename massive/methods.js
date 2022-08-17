// splice

const cars = ['BMW', ' Mersedes', 'Audi']

const removeElements = cars.splice(0, 1, 'WV', 'Bugatti')
console.log('removeElements', removeElements)

console.log('cars', cars)

// slice

const agesOfDevelopers = [27, 19, 44, 32]
console.log(agesOfDevelopers.slice(0, 2))