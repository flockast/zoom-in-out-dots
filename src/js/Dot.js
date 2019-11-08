import { getRandomRange } from "./helpers";

class Dot {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
    this.maxRadius = 12
    this.minRadius = .1
    this.radius = this.maxRadius
    this._fillStyle = '#313234'
    this.fillStyle = this._fillStyle
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
    if (this.radius < this.maxRadius) {
      this.radius *= 1.04
			if (this.fillStyle === this._fillStyle) {
				this.fillStyle = `hsl(${getRandomRange(180, 200)}, 80%, 38%)`;
			}
    }
  }

  zoomOut (soundPop) {
    if (this.radius > this.minRadius) {
      this.radius = this.minRadius;
      soundPop.play()
    }
  }
}

export default Dot
