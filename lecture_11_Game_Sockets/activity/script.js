const d = document;

const bar1 = d.querySelector("#one");
const bar2 = d.querySelector("#two");
const bal1 = d.querySelector("#ball");
const body = d.querySelector("body");


body.addEventListener("keydown", function (e) {
    // console.log(e);
    const bound = body.clientHeight;
    // console.log(bound);
    // let b1top = bar1.style.top;
    // console.log(b1top);
    let b1Top = Number(bar1.style.top.slice(0,-2));
    // console.log(b1Top);
    if(event.key=="w" && b1Top > 0) {
        bar1.style.top = (b1Top - 100) + "px";
    }
    if(event.key=="s" && b1Top < (bound - 176)) {
        bar1.style.top = (b1Top + 100) + "px";
    }

    let b2Top = Number(bar2.style.top.slice(0,-2));
    
    if(event.key=="ArrowUp" && b2Top > 0) {
        bar2.style.top = (b2Top - 100) + "px";
    }
    if(event.key=="ArrowDown" && b2Top < (bound - 176)) {
        bar2.style.top = (b2Top + 100) + "px";
    }
})
    

let xd = true;
let yd = true;
function moveBall() {
    // top
    let bodyheight = body.clientHeight;
    let bodyWidth = body.clientWidth;
    // console.log(bodyheight);
    let ballTop = Number(ball.style.top.slice(0, -2));
    let ballLeft = Number(ball.style.left.slice(0, -2));
    let ballBottom = Number(ball.style.top.slice(0, -2)) + 100;
    let ballRight = Number(ball.style.left.slice(0, -2)) + 100;

    let b1=Number(bar1.style.top.slice(0,-2));
    
    let b2=Number(bar2.style.top.slice(0,-2));

    console.log(b2);
    console.log(b2+100);

    if (ballTop == 0 || ballBottom == bodyheight) {
        yd = !yd
    }
    
    if ((ballLeft == 0 || ballRight == bodyWidth) && ((b2 < ballBottom && (b2+100) > ballTop) || (b1 < ballBottom && (b1+100) > ballTop))) {
        xd = !xd;
    }
    // (b2 <= ballRight && (b2+100) >= ballRight)
    
    // && (bar1.style.top < ballBottom && bar1.style.bottom > ballTop)
    //  if (ballLeft < bar1.style.right ||| ballright > bar2.style.left) {
    //     xd = !xd;
    // }

    ball.style.top=yd==true?(ballTop-1)+"px":(ballTop+1)+"px"

    ball.style.left=xd==true?(ballLeft+1)+"px":(ballLeft-1)+"px"


}
setInterval(moveBall, 1);