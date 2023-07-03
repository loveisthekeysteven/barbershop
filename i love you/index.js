

var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu") 

sideNav.style.right = "-250px"


  menuBtn.onclick = function(){
      if(sideNav.style.right == "-250px") {
               sideNav.style.right = "0";
               menu.src = "images/close.png"
      } 
      else{
               sideNav.style.right = "-250px";
               menu.src = "images/menu.png";
      }      
}
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


document.getElementById("currentYear").textContent = new Date().getFullYear();

// Update current time dynamically
setInterval(updateTime, 1000);

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var formattedTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("currentTime").textContent = formattedTime;
}

fetch("https://ipapi.co/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.getElementById("visitorCity").textContent = data.city;
    document.getElementById("visitorCountry").textContent = data.country_name;
  })
  .catch(function (error) {
    console.log("Error fetching visitor's location:", error);
  });

  function openWhatsApp(event) {
    event.preventDefault();
  
    var message = encodeURIComponent("I'm interested in booking a home service");
    var phoneNumber = event.target.getAttribute('href');
  
    window.open(phoneNumber + message);
  }
  