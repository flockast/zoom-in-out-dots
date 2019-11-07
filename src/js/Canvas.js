import scaleCanvas from './scaleCanvas'

function Canvas ({ element, defaultBackground = 'white', full, width = 500, height = 500 }) {
  let canvas = document.querySelector(element)
  if (!canvas) {
    canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
  }
  const ctx = canvas.getContext('2d')
  if (full) {
    width = window.innerWidth
    height = window.innerHeight
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      scaleCanvas(canvas, ctx, width, height)
      clear(width, height)
    })
  }
  scaleCanvas(canvas, ctx, width, height)

  function clear (width, height) {
    ctx.fillStyle = defaultBackground
    ctx.fillRect(0, 0, width, height)
  }
  clear(width, height)

  return {
    canvas,
    ctx,
    width,
    height,
    clear
  }
}

export default Canvas
