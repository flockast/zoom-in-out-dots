class Mouse {
  constructor (canvas) {
    this.radius = 50
    this.x = -this.radius
    this.y = -this.radius
    canvas.addEventListener('mousemove', (e) => {
      this.x = e.clientX
      this.y = e.clientY
    })
  }
}

export default Mouse
