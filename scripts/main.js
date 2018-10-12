



var aboutMe = document.getElementById('aboutme');

aboutMe.onclick = function () {
  document.getElementById('hiddenelement1').style.display = "block";
 }



  var mySelf = document.getElementById('jas');

  mySelf.onclick = function () {
    document.getElementById('hiddenelement1').style.display = "block";
   }




var myImage = document.getElementById('jorrit');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ik.png') {
      myImage.setAttribute ('src','images/gokyo.jpeg');
    } else {
      myImage.setAttribute ('src','images/ik.png');
    }
}
