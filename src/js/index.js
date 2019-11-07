import Canvas from './Canvas'
import Dot from './Dot'
import Mouse from './Mouse'

const { canvas, ctx, clearCanvas } = Canvas({
  element: 'canvas',
  defaultBackground: '#1d1e21',
  fullScreen: true
})

const mouse = new Mouse(canvas)

const distanceCell = 20
const dots = []

for (let y = 0; y <= canvas.height / 2; y += distanceCell) {
  for (let x = 0; x <= canvas.width / 2; x += distanceCell) {
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
  clearCanvas()
  draw()
  update()
  requestAnimationFrame(raf)
}

raf()
