import React, {useEffect, useRef} from "react";
// import mobileMenu from '../../public/images/mobileMenu.png'


const Canvas = props => {

let speed = 20;
let letterSpeed = 20;
let scale = 0.50; // Image scale (I work on 1080p monitor)

let ctx;
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    img: new Image(),

};

let hire = {
  text:'Hire me!',
  x: 200,
  y: 300,
  xspeed: 5,
  yspeed: 5,
  height: 30

};
// var x = 300;
// var y = 200;
// var dx = 3;
// var dy = 3;
// var height = 30;
// var text = "hire me";


const canvasRef = useRef(null)

useEffect(() => {




   let canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    dvd.img.src = './images/hireMe.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;




function update() {
    setTimeout(() => {
        //Draw the canvas background

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
        function animate () {
          var metrics = ctx.measureText(hire.text);
          var width = metrics.width;
          // requestAnimationFrame(animate);
          // ctx.clearRect(0, 0, innerWidth, innerHeight);

          ctx.font = "bold 30px Helvetica";
          ctx.fillStyle = logoColor;
          ctx.fillText(hire.text, hire.x, hire.y);


          if ((hire.x + width > innerWidth)||(hire.x <= 0)) {
              hire.xspeed = -hire.xspeed;
              pickColor();
          }

          if ((hire.y > innerHeight)||(hire.y <= hire.height/2)) {
              hire.yspeed = -hire.yspeed;
              pickColor();
          }
          hire.x += hire.xspeed;
          hire.y += hire.yspeed;
      }
      animate();
        // checkHitBoxx()
        checkHitBox();
        update();
    }, speed)


}

// function checkHitBoxx(){
//   if(hire.xspeed >= canvas.width || hire.x <= 0){
//       letterSpeed *= -1;
//       pickColor();
//   }

//   if(hire.yspeed >= canvas.height || hire.y <= 0){
//       letterSpeed *= -1;
//       pickColor();
//   }
// }


//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }

    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }
}

//Pick a random color in RGB format
function pickColor(){
    let r = Math.random() * (254 - 0) + 0;
    let g = Math.random() * (254 - 0) + 0;
    let b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}

pickColor();
update();

},[])



 return <canvas ref={canvasRef} {...props}/>
}
export default Canvas;