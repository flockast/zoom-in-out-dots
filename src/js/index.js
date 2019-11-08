import Canvas from './Canvas'
import Dot from './Dot'
import Mouse from './Mouse'
import soundPopUrl from '../sounds/pop.mp3'

// initial canvas
const art = new Canvas({
  background: 'black',
  width: window.innerWidth,
  height: window.innerHeight
})

// responsive canvas
window.addEventListener('resize', () => {
  art.setSize(window.innerWidth, window.innerHeight)
  initial(window.innerWidth, window.innerHeight)
})

// start data
const soundPop = new Audio(soundPopUrl)
const mouse = new Mouse(art.canvas)
let distanceCell = 0
let dots = []

// fill start data
function initial (width, height) {
  dots = []
  distanceCell = innerWidth * 2.6 / 100
  for (let y = 0; y <= height; y += distanceCell) {
    for (let x = 0; x <= width; x += distanceCell) {
      dots.push(new Dot(x, y))
    }
  }
}

function draw () {
  dots.forEach(dot => {
    dot.draw(art.ctx)
  })
}

function update () {
  dots.forEach(dot => {
    dot.update(mouse.x, mouse.y, mouse.radius, soundPop)
  })
}

// infinity request animation frame
const render = () => {
  art.clear()
  draw()
  update()
  requestAnimationFrame(render)
}

// initial
initial(art.width, art.height)

// start infinity loop
render()
