const PI2RAD  = Math.PI / 180;

var canvas    = document.createElement('canvas');
var ctx       = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

var l =
{
	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
	l:  40,
	s:  7,
	d:  28
};

function line(x1, y1, x2, y2, s)
{
	ctx.beginPath();
	ctx.moveTo(x1 + (canvas.width / 2), y1 + (canvas.height / 2));
	ctx.lineTo(x2 + (canvas.width / 2), y2 + (canvas.height / 2));
	ctx.lineWidth = s;
	ctx.strokeStyle = 'black';
	ctx.stroke();
};

function render(x, y, i, a, s, itr)
{
	if(i > 0)
	{
		i --;
		s --;

		if(i == itr)
		{
			l.x1 = l.x2;
			l.y1 = l.y2;
			l.x2 = l.x1 - (l.l * 3 * Math.cos((-135 + a) * PI2RAD));
			l.y2 = l.y1 - (l.l * 3 * Math.sin((-135 + a) * PI2RAD));

			line(l.x1, l.y1, l.x2, l.y2, s);
		}



		l.x1 = x;
		l.y1 = y;
		l.x2 = l.x1 - (l.l * Math.cos((90 + a) * PI2RAD));
		l.y2 = l.y1 - (l.l * Math.sin((90 + a) * PI2RAD));

		line(l.x1, l.y1, l.x2, l.y2, s);
		setTimeout(render, 50, l.x2, l.y2, i, l.d + a, s, itr);



		l.x1 = x;
		l.y1 = y;
		l.x2 = l.x1 - (l.l * Math.cos(a * PI2RAD));
		l.y2 = l.y1 - (l.l * Math.sin(a * PI2RAD));

		line(l.x1, l.y1, l.x2, l.y2, s);
		setTimeout(render, 50, l.x2, l.y2, i, -l.d + a, s, itr);
	}
};

function main()
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	var iterations = 6;

	render(l.x2, l.y2, iterations, 45, l.s, iterations - 1);
};

main();

