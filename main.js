$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    
        $('.top-nav .nav-link').on('click', function () {
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });

            $('nav a[href*="#"]').on('click', function () {
                $("href").click(function() { 
                    $("html, body").animate({ 
                        scrollTop: $( 
                          'html, body').get(0).scrollHeight 
                    }, 2000); 
                }); 

            });

            $('#up').on('click', function () {
                $("html, body").animate( 
                    { scrollTop: "0" }, 3000); 
            });

            AOS.init({
                easing: 'ease',
                duration: 1800
            });
            

  });

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCrW8ebpdgc1rVGdiqnyCpXc5tlKiqq2Ho",
      authDomain: "messages2020-b0394.firebaseapp.com",
      databaseURL: "https://messages2020-b0394.firebaseio.com",
      projectId: "messages2020-b0394",
      storageBucket: "messages2020-b0394.appspot.com",
     
      };
  
      firebase.initializeApp(config);
  
      // Create a variable to reference the database.
      var database = firebase.database();
  
      // Initial Values
      var name = "";
      var email = "";
      // var age = 0;
      var comment = "";
      var services = "";
  
      // Capture Button Click
      $("#add-user").on("click", function(event) {
        event.preventDefault();
        
        
     
  
        // Grabbed values from text-boxes
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        // age = $("#age-input").val().trim();
        comment = $("#comment-input").val().trim();
        services = $("#services").val().trim();
  
        //creates temp object for holding data
        var newComment = {
          name: name,
          email: email,
          comment: comment,
          services: services,
         
      };
  
        // Code for "Setting values in the database"
        database.ref().push(newComment);
        alert("message sent!");
      console.log(alert);
     
  
      $("#search-name").val("");
      $("#search-email").val("");
      $("#search-comment").val("");
      $("#search-services").val("");
      
  
      return false;
        // database.ref().set({
        //   name: name,
        //   email: email,
        //   // age: age,
        //   comment: comment
          
        // });
       
  
      });
     
  
      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("value", function(snapshot) {
  
        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().email);
        // console.log(snapshot.val().age);
        console.log(snapshot.val().comment);
        console.log(snapshot.val().services);
  
        // Change the HTML to reflect
        $("#name-display").text(snapshot.val().name);
        $("#email-display").text(snapshot.val().email);
        // $("#age-display").text(snapshot.val().age);
        $("#comment-display").text(snapshot.val().comment);
        $("#services-display").text(snapshot.val().services);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
      
  
  

   
// (function() {

//     var width, height, landingText, canvas, ctx, circles, target, animateSection = true;

//     // Main
//     initSection();
//     addListeners();

//     function initSection() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         target = {x: 0, y: height};
      
//         landingText = document.getElementById('co');
//         landingText.style.height = height+'px';

//         canvas = document.getElementById('c');
//         canvas.width = width;
//         canvas.height = height;
//         ctx = canvas.getContext('2d');

//         // create particles
//         circles = [];
//         for(var x = 0; x < width*0.5; x++) {
//             var c = new Circle();
//             circles.push(c);
//         }
//         animate();
//     }

//     // Event handling
//     function addListeners() {
//         window.addEventListener('scroll', scrollCheck);
//         window.addEventListener('resize', resize);
//     }

//     function scrollCheck() {
//         if(document.body.scrollTop > height) animateSection = false;
//         else animateSection = true;
//     }

//     function resize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         landingText.style.height = height+'px';
//         canvas.width = width;
//         canvas.height = height;
//     }

//     function animate() {
//         if(animateSection) {
//             ctx.clearRect(0,0,width,height);
//             for(var i in circles) {
//                 circles[i].draw();
//             }
//         }
//         requestAnimationFrame(animate);
//     }

//     // Canvas manipulation
//     function Circle() {
//         var _this = this;

//         // constructor
//         (function() {
//             _this.pos = {};
//             init();
//             console.log(_this);
//         })();

//         function init() {
//             _this.pos.x = Math.random()*width;
//             _this.pos.y = height+Math.random()*100;
//             _this.alpha = 0.1+Math.random()*0.3;
//             _this.scale = 0.1+Math.random()*0.3;
//             _this.velocity = Math.random();
//         }

//         this.draw = function() {
//             if(_this.alpha <= 0) {
//                 init();
//             }
//             _this.pos.y -= _this.velocity;
//             _this.alpha -= 0.0005;
//             ctx.beginPath();
//             ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
//             ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
//             ctx.fill();
//         };
//     }

// })();