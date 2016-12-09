console.log("Sanity check");

function hello() {
  console.log("hello");
  var changeDiv = document.getElementById('divElement');
  changeDiv.innerHTML = "HeheXD";
  console.log(changeDiv);
}

function soFast(){
  console.log('Hello');
  var classElements = document.getElementsByClassName('wow');
  console.log(classElements);
  classElements[0].innerHTML = "wat";
}