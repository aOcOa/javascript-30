const app = {
  init() {
    const canvas = document.getElementById("newCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext("2d");
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';

    this.lastX = 0;
    this.lastY = 0;
    this.isDraw = false;
    this.hue = 0;
    this.lineWidth = 0;
    this.widthDirection = true;

    canvas.addEventListener("mouseup", () => (this.isDraw = false));
    canvas.addEventListener("mousedown", evt => {
      this.isDraw = true;
      [this.lastX, this.lastY] = [evt.offsetX, evt.offsetY];
    });
    canvas.addEventListener("mouseleave", () => (this.isDraw = false));
    canvas.addEventListener("mousemove", this.draw.bind(this));
  },
  draw(evt) {
    if (this.isDraw) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(evt.offsetX, evt.offsetY);
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      this.ctx.stroke();

      [this.lastX, this.lastY] = [evt.offsetX, evt.offsetY];
      if(this.hue >= 360){
        this.hue = 0;
      } else{
        this.hue ++;
      }

      if(this.lineWidth > 40 || this.lineWidth < 0){
        this.widthDirection = !this.widthDirection;
      }

      if (this.widthDirection) {
        this.lineWidth ++;
      } else {
        this.lineWidth--;
      }
      
    }
  }
};

window.addEventListener("load", app.init());
