let header = document.createElement('header')
let topp = document.createElement('div')
let down = document.createElement('div')
let footer = document.createElement('div')
let img = document.createElement('img')
let quantity = document.createElement('p')

let h1 = document.createElement('h1')
let p = document.createElement('p')
let h2 = document.createElement('h2')
let s = document.createElement('s')
let left = document.createElement('left')
let right = document.createElement('right')

// let a = document.createElement('a')
// let a_two = document.createElement('a')
// let a_three = document.createElement('a')

for (let k = 1; k <= 5; k++) {
    let div = document.createElement('div')
    let star = document.createElement("img");
    div.classList.add('item2')
    star.src = "./img/star.png"
    star.style.width = '20px'
    div.append(star);
    down.append(div)
}

for (let h = 1; h <= 1; h++) {
    let div = document.createElement('div')
    let button = document.createElement("button");
    div.classList.add('item4')
    div.append(button);
    button.classList.add('button')
    footer.append(div)
    button.innerText = '-'
}

for (let i = 1; i <= 1; i++) {
    let div = document.createElement('div')
    let button = document.createElement("button");
    div.classList.add('item3')
    div.append(button);
    button.classList.add('button')
    footer.append(div)
    button.innerText = '+'

}

for (let i = 1; i <= 1; i++) {
    let div = document.createElement('div')
    let button = document.createElement("button");
    div.classList.add('buy')
    div.append(button);
    button.classList.add('buy-buuton')
    footer.append(div)
    button.innerText = 'В КОРЗИНУ'
}

img.src = "./img/kinder.jpg"

img.style.width = '70%'
img.style.height = '70%'
img.style.margin = '50px 41px'
img.style.textAlign = 'center';
h1.style.margin = '30px 0px 0px 0px'
h1.style.position = 'absolute'
h1.style.width = '250px'

header.classList.add('header')
topp.classList.add('top')
down.classList.add('down')
down.classList.add('h1')
footer.classList.add('footer')
quantity.classList.add('text')
quantity.innerText = '1'


h1.innerHTML = "Пирожное 'Kinder Delice' с Молочной Начинкой 39 гр"
p.innerHTML = "Мало"
h2.innerHTML = "6 320 UZS/шт"
s.innerHTML = "5100UZS"
left.innerHTML = "-20px"
right.innerHTML = "Экономия 1 020 UZS"


document.body.append(header)
header.append(topp)
header.append(down)
header.append(footer)
topp.append(img)
down.append(h1)
down.append(p)
down.append(h2)
down.append(s)
down.append(left)
down.append(right)
footer.append(quantity)


let next = document.querySelectorAll('.item3')
let prev = document.querySelectorAll('.item4')
let score = document.querySelectorAll('.text')


next.forEach((item, index) => {
    item.onclick = () => {
        score.forEach((item2, index2) => {
            if (index === index2) {
                let prevScore = +item2.innerText
                item2.innerText = prevScore + 1
                console.log(item2.innerText);
            }
        })
    }
})

prev.forEach((item, index) => {
    item.onclick = () => {
        score.forEach((item2, index2) => {
            if (index === index2) {
                let prevScore = +item2.innerText
                if (prevScore > 0) item2.innerText = prevScore - 1
                console.log(item2.innerText);
            }
        })
    }
})






