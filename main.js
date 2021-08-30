canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;

color = "blue";

width_of_line = 1;

var width = screen.width;

var height = screen.height;

new_width = width - 70;

new_height = height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;

    document.getElementById("myCanvas").height = new_height;

    document.body.style.overflow = "hidden";
}
/*
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) {
    
    color = document.getElementById("color").value;

    width_of_line = document.getElementById("width").value; 

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseUp);

function my_mouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
*/

canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e){
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;

    last_position_of_y = e.clientY[0].clientY - canvas.offsetTop;
}

/*
canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop; 

    if (mouseEvent = "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y coordinates = ");

        console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);

        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");

        console.log("x = "+ current_position_of_x + "y = "+ current_position_of_y);
        
        ctx.lineTo(current_position_of_x, current_position_of_y);     
        
        ctx.stroke();
    }

    last_position_of_x = current_position_of_x;

    last_position_of_y = current_position_of_y;
}
*/

canvas.addEventListener("touchmove" , my_touchmove)

function my_touchmove(e) {
    console.log("my_touchmove");

    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;

    current_position_of_y = e.touches[0].clientY - canvas.offsetTop; 


    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y coordinates = ");

        console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);

        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");

        console.log("x = "+ current_position_of_x + "y = "+ current_position_of_y);
        
        ctx.lineTo(current_position_of_x, current_position_of_y);     
        
        ctx.stroke();

    last_position_of_x = current_position_of_x;

    last_position_of_y = current_position_of_y;
}









function clear_screen() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}