import React, { useEffect, useRef } from "react";
// import mobileMenu from '../../public/images/mobileMenu.png'

// const BgCanvas = (props) => {
//   let speed = 20;

//   let ctx;
//   let logoColor;

//   // let dvd = {
//   //   x: 200,
//   //   y: 300,
//   //   xspeed: 5,
//   //   yspeed: 5,
//   //   img: new Image(),
//   // };

//   let hire = {
//     text: "Hire me!",
//     x: 200,
//     y: 300,
//     xspeed: 5,
//     yspeed: 5,
//     height: 30,
//   };

//   const canvasRef = useRef(null);

//   var background = new Image();
//   background.src = "/images/pinball.jpeg";



//   useEffect(() => {
//     let canvas = canvasRef.current;
//     ctx = canvas.getContext("2d");
//     // dvd.img.src = "./images/hireMe.png";

//     //Draw the "tv screen"
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     function scaleToFit(img){
//       // get the scale
//       var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
//       // get the top left position of the image
//       var x = (canvas.width / 2) - (img.width / 2) * scale;
//       var y = (canvas.height / 2) - (img.height / 2) * scale;
//       ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
//   }


//     function update() {
//       setTimeout(() => {
//         //Draw the canvas background

//         ctx.fillStyle = "#000";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);



//         // Make sure the image is loaded first otherwise nothing will draw.
//         background.onload = function(){
//             ctx.drawImage(background,0,0);
//         }


//         //Draw DVD Logo and his background
//         // ctx.fillStyle = logoColor;
//         // ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
//         // ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
//         //Move the logo
//         // dvd.x+=dvd.xspeed;
//         // dvd.y+=dvd.yspeed;
//         //         ctx.font      = "normal 36px Verdana";
//         // ctx.fillStyle = "#ffffff";

//         // ctx.fillText(hire.text, letterSpeed, letterSpeed);

//         //Check for collision
//         // function animate() {
//         //   var metrics = ctx.measureText(hire.text);
//         //   var width = metrics.width;
//         //   // requestAnimationFrame(animate);
//         //   // ctx.clearRect(0, 0, innerWidth, innerHeight);

//         //   ctx.font = "bold 30px Helvetica";
//         //   ctx.fillStyle = logoColor;
//         //   ctx.fillText(hire.text, hire.x, hire.y);

//         //   if (hire.x + width > innerWidth || hire.x <= 0) {
//         //     hire.xspeed = -hire.xspeed;
//         //     pickColor();
//         //   }

//         //   if (hire.y > innerHeight || hire.y <= hire.height / 2) {
//         //     hire.yspeed = -hire.yspeed;
//         //     pickColor();
//         //   }
//         //   hire.x += hire.xspeed;
//         //   hire.y += hire.yspeed;
//         // }
//         // animate();
//         // checkHitBoxx()
//         // checkHitBox();
//         // background.onload()
//         update();
//         scaleToFit(background)
//       }, speed);
//     }

//     //Check for border collision
//     // function checkHitBox() {
//     //   if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
//     //     dvd.xspeed *= -1;
//     //     pickColor();
//     //   }

//     //   if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
//     //     dvd.yspeed *= -1;
//     //     pickColor();
//     //   }
//     // }

//     //Pick a random color in RGB format
//     function pickColor() {
//       let r = Math.random() * (254 - 0) + 0;
//       let g = Math.random() * (254 - 0) + 0;
//       let b = Math.random() * (254 - 0) + 0;

//       logoColor = "rgb(" + r + "," + g + ", " + b + ")";
//     }

//     pickColor();
//     update();
//   }, []);

//   return <canvas ref={canvasRef} {...props} />;
// };
// export default BgCanvas;

const BgCanvas = (props) => {

  const canvasRef = useRef(null);

useEffect(() => {


  let canvas = canvasRef.current;
  let ctx = canvas.getContext("2d");


    var xOffset=100; // image offset
    var fps=60;

    var img=document.createElement("img");
    img.onload=function(){
       animate();
    }
    img.src="/images/pinball.png";

    function draw(x){

            ctx.save();
            ctx.beginPath();

            // put text on canvas
            ctx.font="144pt Verdana";
            ctx.fillText("See",30,200);
            ctx.fill();
            ctx.beginPath();

            // use compositing to draw the background image
            // only where the text has been drawn
            ctx.globalCompositeOperation="source-in";
            ctx.drawImage(img,-x,0);
            ctx.restore();
    }


        function animate() {

            // change the background image offset
            xOffset+=3;
            if(xOffset>=img.width){xOffset=0;}

            // draw the text and background image
            draw(xOffset);

            // request another frame using fps intervals
            setTimeout(function() {
                requestAnimationFrame(animate);
                // Drawing code goes here
            }, 1000 / fps);
        }


// end $(function(){});
})

return <canvas ref={canvasRef} {...props} />;

};
 export default BgCanvas;
