const WIDTH = 480;

const HEIGHT = 360;

//let draw = SVG('game').size(WIDTH, HEIGHT);
let draw = SVG().addTo('#game').size(WIDTH, HEIGHT);
let background = draw.image('desert.png').size(WIDTH, HEIGHT);
let background2 = draw.image('desert.png').size(WIDTH, HEIGHT).move(WIDTH, 0);
let dino = draw.image('dino1.png').size(84, 67).move(0, 180);
let cactus = draw.image('cactus2.png').size(50, 62).move(400, 180);
let text = draw.text("0").move(400, 0).font({ size: 40 }).fill("white");

let changeY = 0;

let isJump = false;

let score = 0;

let costum = 1;

document.addEventListener("keydown", function(event) {

    if (event.keyCode == 32 && isJump == false) {

        changeY = -14;

        isJump = true;

    }

});

function update() {

    if (isJump == true) {

        dino.dy(changeY);
        changeY = changeY + 0.4;

        if (dino.y() >= 180) {

            isJump = false;

        }

    }
    let collision =

        dino.x() + dino.width() > cactus.x() &&

        dino.x() < cactus.x() + cactus.width() &&

        dino.y() + dino.height() > cactus.y();

    if (collision) {

        alert("Динозаврик пострадал");

        background.load("desertGO.png");

        clearInterval(upd);

    }

    cactus.dx(-2);
    background.dx(-2);
    background2.dx(-2);
    if (cactus.x() <= 0) {
        score += 1;
        text.text("" + score);
        cactus.x(WIDTH);
    }
    if (background.x() <= -WIDTH) {
        background.x(WIDTH);
    }

    if (background2.x() <= -WIDTH) {
        background2.x(WIDTH);
    }
}

function animation() {

    if (costum == 1) {

        dino.load("dino2.png");
        costum = 2;

    } else if (costum == 2) {

        dino.load("dino3.png");
        costum = 3;

    } else {

        dino.load("dino1.png");
        costum = 1;

    }

}
let upd = setInterval(update, 10);

let anim = setInterval(animation, 100)