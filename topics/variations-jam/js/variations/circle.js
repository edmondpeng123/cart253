class Circle {
    constructor(x,y, dw, dh) {
        this.x = y;
        this.y = x;
        this.dw = dw;
        this.dh = dh;
    }


display() {
let distance = dist(mouseX, mouseY, this.x, this.y);

stroke(0);
strokeWeight(1);

fill(255);
ellipse(this.x, this.y, size, size)
fill(0);
ellipse(this.x, this.y, this.dw, this.dh)

}

}
