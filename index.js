const round = document.querySelector(`.round`)
const line = document.querySelector(`.line`)
const turner = document.querySelector(`.turner`)
const view = document.querySelector(`.views`)
const prices = document.querySelectorAll(`.price`)

// round-move
let perc = 3
let priceArr = [8, 12, 16, 24, 36]
let viewArr = [`10K`, `50K`, `100K`, `500K`, `1M`]

// function change() {
line.addEventListener(`input`, () => {
  perc = line.value
  line.style.backgroundImage = `linear-gradient( to right, rgba(164, 243, 235, 1)${
    (perc - 1) * 25
  }%, rgba(236, 240, 251, 1)${(perc - 1) * 25}%)`
  view.textContent = `${viewArr[perc - 1]} PAGEVIEWS`
  changePrice()
})
// }

// switch-period
turner.addEventListener(`click`, (e) => {
  turner.classList.toggle(`active`)
  changePrice()
})

function changePrice() {
  prices.forEach((price) => {
    if (turner.classList.contains(`active`)) {
      price.textContent = `$${priceArr[perc - 1] * 12 * 0.75}.00`
    } else {
      price.textContent = `$${priceArr[perc - 1]}.00`
    }
  })
}
