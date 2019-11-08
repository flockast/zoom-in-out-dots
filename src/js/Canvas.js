class Canvas {
  constructor ({ element, background, width, height }) {
    let canvas = document.querySelector(element)
    if (canvas == null) {
      canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
    }
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.background = background || 'white'
    if (width && height) {
      this.setSize(width, height)
    }
  }

  setSize (width, height) {
    this.width = width
    this.height = height
    this.scaleCanvas()
  }

  scaleCanvas () {
    // assume the device pixel ratio is 1 if the browser doesn't specify it
    const devicePixelRatio = window.devicePixelRatio || 1

    // determine the 'backing store ratio' of the canvas context
    const backingStoreRatio = (
      this.ctx.webkitBackingStorePixelRatio ||
      this.ctx.mozBackingStorePixelRatio ||
      this.ctx.msBackingStorePixelRatio ||
      this.ctx.oBackingStorePixelRatio ||
      this.ctx.backingStorePixelRatio || 1
    )

    // determine the actual ratio we want to draw at
    const ratio = devicePixelRatio / backingStoreRatio

    if (devicePixelRatio !== backingStoreRatio) {
      // set the 'real' canvas size to the higher width/height
      this.canvas.width = this.width * ratio
      this.canvas.height = this.height * ratio

      // ...then scale it back down with CSS
      this.canvas.style.width = this.width + 'px'
      this.canvas.style.height = this.height + 'px'
    } else {
      // this is a normal 1:1 device; just scale it simply
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.canvas.style.width = ''
      this.canvas.style.height = ''
    }

    // scale the drawing context so everything will work at the higher ratio
    this.ctx.scale(ratio, ratio)
  }

  clear () {
    this.ctx.fillStyle = this.background
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export default Canvas
