import Canvas from './Canvas'
import Dot from './Dot'
import Mouse from './Mouse'

const { canvas, ctx, clear, width, height } = Canvas({
  defaultBackground: '#1d1e21',
  full: true
})

const mouse = new Mouse(canvas)
const distanceCell = 30
const dots = []

for (let y = 0; y <= height; y += distanceCell) {
  for (let x = 0; x <= width; x += distanceCell) {
    dots.push(new Dot(x, y))
  }
}

function draw () {
  dots.forEach(dot => {
    dot.draw(ctx)
  })
}

function update () {
  dots.forEach(dot => {
    dot.update(mouse.x, mouse.y, mouse.radius)
  })
}

const raf = () => {
  clear()
  draw()
  update()
  requestAnimationFrame(raf)
}

raf()
