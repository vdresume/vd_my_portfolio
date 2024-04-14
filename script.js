const toggler = document.getElementById("toggler");
const aside = document.querySelector("aside");

toggler.addEventListener("click", function () {
  document.body.classList.toggle("hide-aside");
});

//creatElement closeToggler

let closeToggler = document.createElement("closeToggler");
closeToggler.innerHTML =
  '<a href="#"><span class="material-symbols-outlined">close</span> </a>';
aside.append(closeToggler);
closeToggler.classList.add("close");
closeToggler.addEventListener("click", function () {
  document.body.classList.toggle("hide-aside");
});

// // add plugging
// let body = document.querySelector("body");
// let pligging = document.createElement("pligging");

// pligging.innerHTML =
//   '<a href="#"><span class="material-symbols-outlined">arrow_circle_up</span> </a>';
//   body.before(pligging)
//   pligging.addEventListener('click',function(){
//     document.body.classList.add('up');
//   })

var name=document.querySelector('#name').Value;
var email=document.querySelector('#email').Value;
var phone=document.querySelector('#phone').Value;
// var message=document.querySelector('message').Value;

// var messageBody= "Name" + userName +
//  "<br/> phone" + phone +
//  "<br/>email" +email;
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mrvdparmar96@gmail.com",
    Password : "B4677CFC02509A2013F9FFAF4D608E2FB0FB",
    To : 'mrvdparmar96@gmail.com',
    From :'mrvdparmar96@gmail.com',
    Subject : "new contact from",
    Body : " messageBody"
  }).then(
  message => alert(message)
  )
};

// 499C38414693D724B22023D1D4E8620CCDF4
// ajhyklclnjeyfkgv
// qqsd ouyx ohdr pzoi
// B4677CFC02509A2013F9FFAF4D608E2FB0FB 