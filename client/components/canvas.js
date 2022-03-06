import React, { useEffect, useRef } from "react";
// import mobileMenu from '../../public/images/mobileMenu.png'

const Canvas = (props) => {
  let speed = 30;

  let ctx;
  let logoColor;

  var background = new Image();
  background.src = "/images/pinball.jpeg";

  // let dvd = {
  //   x: 200,
  //   y: 300,
  //   xspeed: 5,
  //   yspeed: 5,
  //   img: new Image(),
  // };

  let hire = {
    text: "Dubbs Designs",
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
    // dvd.img.src = "./images/hireMe.png";

    //Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


// Make sure the image is loaded first otherwise nothing will draw.
// background.onload = function(){
//     ctx.drawImage(background,0,0);
// }



    function update() {
      setTimeout(() => {
        //Draw the canvas background


         ctx.fillStyle = "#00ffffff";
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         ctx.clearRect(0,0,canvas.width,canvas.height);
// Make sure the image is loaded first otherwise nothing will draw.





        //Draw DVD Logo and his background
        // ctx.fillStyle = logoColor;
        // ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        // ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        // dvd.x+=dvd.xspeed;
        // dvd.y+=dvd.yspeed;
        //         ctx.font      = "normal 36px Verdana";
        // ctx.fillStyle = "#ffffff";

        // ctx.fillText(hire.text, letterSpeed, letterSpeed);

        //Check for collision
        function animate() {
          var metrics = ctx.measureText(hire.text);
          var width = metrics.width;
          // requestAnimationFrame(animate);
          // ctx.clearRect(0, 0, innerWidth, innerHeight);


//     var background = new Image();
// background.src = "/images/pinball.jpeg";

// // Make sure the image is loaded first otherwise nothing will draw.
// background.onload = function(){
//     ctx.drawImage(background,0,0);
// }


          ctx.font = "bold 40px Helvetica";
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
        // checkHitBoxx()
        // checkHitBox();
        // background.onload()
        update();
      }, speed);
    }

    //Check for border collision
    // function checkHitBox() {
    //   if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
    //     dvd.xspeed *= -1;
    //     pickColor();
    //   }

    //   if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
    //     dvd.yspeed *= -1;
    //     pickColor();
    //   }
    // }

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

  return <div>
    <img className="bgPic" src="images/pinball.jpeg"/>
    <canvas ref={canvasRef} {...props} />
    </div>
};
export default Canvas;
