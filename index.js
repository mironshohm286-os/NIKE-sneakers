const cardOne = document.getElementById("card-one")
const cardTwo = document.getElementById("card-two")
const cardThree = document.getElementById("card-three")
const cardFour = document.getElementById("card-four")
let buttonsCardOne = document.querySelectorAll("#card-one .sizes button")
let buttonsCardTwo = document.querySelectorAll("#card-two .sizes button")
let buttonsCardThree = document.querySelectorAll("#card-three .sizes button")
let buttonsCardFour = document.querySelectorAll("#card-four .sizes button")
let buyButtons = document.querySelectorAll(".price button")
let buyWindow = document.getElementById("buy-window")
const close = document.getElementById("close")

const promiseOne = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            cardOne.style.opacity = "1"
            cardOne.style.transform = "translateX(0)"
            resolve()
        }, 3500);
    })
}

const promiseTwo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            cardTwo.style.opacity = "1"
            cardTwo.style.transform = "translateX(0)"
            resolve()
        }, 500);
    })
}

const promiseThree = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            cardThree.style.opacity = "1"
            cardThree.style.transform = "translateX(0)"
            resolve()
        }, 500);
    })
}

const promiseFour = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            cardFour.style.opacity = "1"
            cardFour.style.transform = "translateX(0)"
            resolve()
        }, 500)
    })
}

const allPromises = async() => {
    try{
        const task1 = await promiseOne()
        const task2 = await promiseTwo()
        const task3 = await promiseThree()
        const task4 = await promiseFour()     
    } catch(err) {
        console.log(err)
    }
}

allPromises()


buttonsCardOne.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonsCardOne.forEach(b => b.classList.remove("active-red"));
        btn.classList.toggle("active-red")
    })
})

buttonsCardTwo.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonsCardTwo.forEach(b => b.classList.remove("active-green"));
        btn.classList.toggle("active-green")
    })
})

buttonsCardThree.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonsCardThree.forEach(b => b.classList.remove("active-white"));
        btn.classList.toggle("active-white")
    })
})

buttonsCardFour.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonsCardFour.forEach(b => b.classList.remove("active-pink"));
        btn.classList.toggle("active-pink")
    })
})

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        buyWindow.style.display = "block"
    })
})

close.addEventListener('click', () => {
    buyWindow.style.display = "none"
})