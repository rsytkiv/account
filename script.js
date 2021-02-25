var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
document.getElementById('f2').style.visibility = 'hidden';
document.getElementById('sign').disabled = true;
function fun1() {
var chbox;
chbox = document.getElementById('agree');
  if (chbox.checked)
  document.getElementById('sign').disabled = false;
}
function fun2(){
  document.getElementById('f1').style.visibility = 'hidden';
  document.getElementById('f2').style.visibility = 'visible';
  firstnm.textContent = f1.firstName.value + ' ' + f1.lastName.value;
  mail.textContent = f1.email.value;
  pos.textContent = f1.position.value; 
}

function maleFun(){
  document.getElementById('logo').src = 'img/male1.png';
}
function femaleFun(){
  document.getElementById('logo').src = 'img/female.png';
}