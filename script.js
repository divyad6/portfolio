// navbar scroll animation
const header = document.querySelector(".navbar")
window.onscroll = function() {
  var top = window.scrollY;
  // var height = window.innerHeight;
  // var width = window.innerWidth;

  // figure out how to update color when window is small, avoid overlap
  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
}

// contact form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { name, email, subject, message } = event.target;

  // trigger endpoint
  // const endpoint = "https://9ifq3qed67.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";

  // function url
  const endpoint = "https://4t3slgj34wkpwg5m55amrhoa540jqbmv.lambda-url.us-east-2.on.aws/";

  // use JSON.stringify so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    senderSubject: subject.value,
    senderMessage: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result").innerText =
        "message sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result").innerText =
        "an unknown error occured.";
    });
});
// document.getElementById("contact").addEventListener("submit", function(event) {
//   // validate entered email address
//   function isValidEmail(email) {
//     // test using js regex for a valid email address
//     var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     return emailRegex.test(email);
//   }

//   // validate the contact form
//   function validateForm() {
//     // get values from form fields
//     var name = document.forms["contact"]["name"].value;
//     var email = document.forms["contact"]["email"].value;
//     var subject = document.forms["contact"]["subject"].value;
//     var message = document.forms["contact"]["message"].value;

//     // check if the required fields (name, email, and message) are empty
//     // If any of them are empty, return false to prevent form submission
//     if (!name || !email || !message) {
//       return false;
//     }

//     // Check if the email is valid using the isValidEmail function
//     // If the email is invalid, return false to prevent form submission
//     if (!isValidEmail(email)) {
//       return false;
//     }

//     return true;
//   }

//   // display a result message for valid/invalid forms
//   function displayMessage(message) {
//     // get the HTML element with ID "result" and set it to the given message
//     var msgElement = document.getElementById("result");
//     msgElement.innerHTML = message;

//     // change the display style of the result element to "block" to make it visible
//     msgElement.style.display = "block";
//   }

//   // if all the validations pass, allow form submission and display success message
//   if (validateForm()) {
//     displayMessage("your message was sent. thanks for reaching out!")
//   // otherwise, display error message and prevent form submission
//   } else {
//     event.preventDefault();
//     displayMessage("oops! missing field(s) or invalid email.")
//   }
// }
// });


// check if device is mobile for the animations
window.mobileCheck = function() {
  let check = false;
  (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// circular animation 
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");
  var radius = 80;
  var angle = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    var x = Math.cos(angle) * radius;
    var y = Math.sin(angle) * radius;
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    // moves faster if on mobile device
    if (window.mobileCheck()) {
      angle += 0.035;
    } else {
      angle += 0.01;
    }
  }
}
