       // Initialise an empty canvas and place it on the page
       var canvas = document.getElementById("mainCanvas");
       var context = canvas.getContext("2d");
       canvas.width = 800;
       canvas.height = 380;

       // Inital starting position
       var posX = Math.random()*15,
           posY = Math.random()*5 + 5;

       // Initial velocities
       var vx = 10,
           vy = -15,
           gravity = 1;


       setInterval(function() {
           // Erase canvas
           context.fillStyle = "black";
           context.fillRect(0, 0, canvas.width, canvas.height);
           posX += vx;
           posY += vy;

           if (posY > canvas.height) {
               vy *= -0.85;
               vx *= 0.75;
           }
           if (posY <= 0)
               vy *= -0.2;

           if (posY < canvas.height)
               vy += gravity * 0.5;
           if (posX > canvas.width) {
               vx *= -0.8;
           }
           if (posX <= 0) {
               vx *= -0.4;
           }

           // Draw a circle particle on the canvas
           context.beginPath();
           context.fillStyle = "white";
           // After setting the fill style, draw an arc on the canvas
           context.arc(posX, posY, 10, 0, Math.PI * 2, true);
           context.closePath();
           context.fill();



       }, 20);
