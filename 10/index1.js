const button = document.querySelector("button")

const fetchDl = () => {
    return new Promise((res, rej) => {
        console.log('Я выполнился')
        setTimeout(() => {
            rej('Я не успел')
        }, 3000)
        button.addEventListener('click', () => {
            const obj = {key: 'Value'}
            res(JSON.stringify(obj))
        })
    })  
}

fetchDl()
.then(response => {
    return new Promise((res, rej) => {
        if (typeof response === 'string') {
            res(JSON.parse(response))
        }
        rej('not a string')
    })
}).then(parseData => {
    console.log(parseData)
})
.catch((err) => {
    console.log(err)
})