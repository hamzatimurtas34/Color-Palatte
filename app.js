let text = document.getElementById('text')
let btn = document.getElementById('btn')

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',]

let random = () => {
    let hexCode = '#'
    for (let x = 0; x < 6; x++) {

        hexCode += hex[Math.floor(Math.random() * hex.length)]

    }

    return hexCode
}

btn.addEventListener('click', () => {
    let renk = random()
    text.innerText = renk
    document.body.style.backgroundColor = renk
})