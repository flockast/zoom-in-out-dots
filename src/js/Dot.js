class Dot {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
    this.maxRadius = 8
    this.minRadius = 2
    this.radius = this.minRadius
    this.fillStyle = 'white'
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = this.fillStyle
    ctx.fill()
  }

  update (x, y, radius) {
    const a = Math.abs(x - this.x)
    const b = Math.abs(y - this.y)
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    const diff = (radius + this.radius) - c

    if (diff >= 0) {
      this.zoomIn()
    } else {
      this.zoomOut()
    }
  }

  zoomIn () {
    if (this.radius <= this.maxRadius) {
      this.radius += 0.4
    }
  }

  zoomOut () {
    if (this.radius >= this.minRadius) {
      this.radius -= 0.02
    }
  }
}

export default Dot
