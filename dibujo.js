export class Draw {
	constructor() {
		this.document = document.getElementById('root');
		this.lienzo = this.document.getContext('2d');
		this.lines = 1000;
		this.coordinates = { yi: 0, xf: 0, yf: 0, xi: 0 };
		this.color = '#FAA';
	}

	draw(color, xinicial, yinicial, xfinal, yfinal) {
		this.lienzo.beginPath();
		this.lienzo.strokeStyle = color;
		this.lienzo.moveTo(xinicial, yinicial);
		this.lienzo.lineTo(xfinal, yfinal);
		this.lienzo.stroke();
		this.lienzo.closePath();
	}

	drawCircle() {
		for (let l = 0; l < this.lines; l++) {
			this.coordinates.yi = 10 * l;
			this.coordinates.xf = 10 * (l + 1);
			this.draw(this.color, 0, this.coordinates.yi, this.coordinates.xf, 300);
		}

		for (let l = 0; l < this.lines; l++) {
			this.coordinates.xi = 10 * l;
			this.coordinates.yf = 10 * (l + 1);
			this.draw(this.color, this.coordinates.xi, 0, 300, this.coordinates.yf);
		}
	}
}
