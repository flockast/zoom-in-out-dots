class Dot {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
    this.maxRadius = 12
    this.minRadius = 2
    this.radius = this.maxRadius
    this.fillStyle = '#2d2e31'
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = this.fillStyle
    ctx.fill()
  }

  update (x, y, radius, soundPop) {
    const a = x - this.x
    const b = y - this.y
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    const diff = (radius + this.radius) - c

    if (diff >= 0) {
      this.zoomOut(soundPop)
    } else {
      this.zoomIn()
    }
  }

  zoomIn () {
    if (this.radius <= this.maxRadius) {
      this.radius *= 1.04
    }
  }

  zoomOut (soundPop) {
    if (this.radius >= this.minRadius) {
      this.radius *= 0.01
      soundPop.play()
    }
  }
}

export default Dot
