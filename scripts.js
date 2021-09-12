const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

const setClock = () => {
  const currentDate = new Date()
  const secondRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12

  setRotation(hourHand, hourRatio)
  setRotation(minHand, minutesRatio)
  setRotation(secHand, secondRatio)
}

const setRotation = (element, rotationRatio) => {
  if (element !== null && element.style !== null)
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000)

setClock()
