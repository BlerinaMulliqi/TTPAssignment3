
  function hover() {
  alert("Hey, I told you not to hover over me");
}

function CheckPassword() 
{ 
    let passw=
  document.getElementById("checkpas").value;

if(passw==="12345678") 
{ 
  
    document.getElementById("correct").innerHTML= "You're logged in ";
 return true;
  
}
else
{ 
alert('Wrong...!')
return false;
}
}

//  question 6
function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;