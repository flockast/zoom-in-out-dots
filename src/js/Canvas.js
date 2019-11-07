import scaleCanvas from './scaleCanvas'

function Canvas ({ element, defaultBackground = 'white', fullScreen = false }) {
  const canvas = document.querySelector(element)
  const ctx = canvas.getContext('2d')
  const canvasFullScreen = () => {
    scaleCanvas(canvas, ctx, window.innerWidth, window.innerHeight)
  }
  const clearCanvas = () => {
    ctx.fillStyle = defaultBackground
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  if (fullScreen) {
    window.onresize = function () {
      canvasFullScreen()
    }
    canvasFullScreen()
  }

  return {
    canvas,
    ctx,
    clearCanvas
  }
}

export default Canvas
