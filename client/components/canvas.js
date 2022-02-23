import React, {useEffect, useRef} from "react";
// import mobileMenu from '../../public/images/mobileMenu.png'


const Canvas = props => {

let speed = 20;
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
  x: 200,
  y: 300,
  xspeed: 5,
  yspeed: 5,


};


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
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        ctx.font      = "normal 36px Verdana";
ctx.fillStyle = "#ffffff";
ctx.fillText(hire, 50, 50);
        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

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
