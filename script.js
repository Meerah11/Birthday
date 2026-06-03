function openGift(){

    document
    .getElementById("welcome")
    .classList.add("hidden");

    document
    .getElementById("birthday")
    .classList.remove("hidden");

    createHearts();

    startConfetti();
}

function createHearts(){

    const sparkles = ["✨", "⭐", "💫"];

    setInterval(() => {

        const sparkle =
        document.createElement("div");

        sparkle.classList.add("heart");

        sparkle.innerHTML =
        sparkles[Math.floor(Math.random() * sparkles.length)];

        sparkle.style.left =
        Math.random() * 100 + "vw";

        sparkle.style.fontSize =
        (15 + Math.random() * 25) + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 6000);

    }, 200);
}

/* CONFETTI */

const canvas =
document.getElementById("confetti");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let pieces = [];

function startConfetti(){

    pieces = [];

    for(let i=0;i<150;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            r:Math.random()*6+2,

            speed:Math.random()*3+1

        });
    }

    animate();
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    //ctx.fillStyle="";

    pieces.forEach(p=>{

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.r,
            0,
            Math.PI*2
        );

        //ctx.fill();

        p.y += p.speed;

        if(p.y > canvas.height){

            p.y = -10;
        }

    });

    requestAnimationFrame(
        animate
    );
}