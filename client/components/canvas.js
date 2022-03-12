import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  let speed = 40;

  let ctx;
  let logoColor;

  let hire = {
    text: "Happy Hour",
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    height: 30,
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function update() {
      setTimeout(() => {
        ctx.fillStyle = "#00ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        function animate() {
          var metrics = ctx.measureText(hire.text);
          var width = metrics.width;

          ctx.font = "bold 40px Cursive";
          ctx.fillStyle = logoColor;
          ctx.fillText(hire.text, hire.x, hire.y);

          if (hire.x + width > innerWidth || hire.x <= 0) {
            hire.xspeed = -hire.xspeed;
            pickColor();
          }

          if (hire.y > innerHeight || hire.y <= hire.height / 2) {
            hire.yspeed = -hire.yspeed;
            pickColor();
          }
          hire.x += hire.xspeed;
          hire.y += hire.yspeed;
        }
        animate();

        update();
      }, speed);
    }

    //Pick a random color in RGB format
    function pickColor() {
      let r = Math.random() * (254 - 0) + 0;
      let g = Math.random() * (254 - 0) + 0;
      let b = Math.random() * (254 - 0) + 0;

      logoColor = "rgb(" + r + "," + g + ", " + b + ")";
    }

    pickColor();
    update();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} {...props} />
      {/* <img src="images/espresso.jpeg"/> */}
    </div>
  );
};
export default Canvas;
