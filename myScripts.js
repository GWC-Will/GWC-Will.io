function getPersonality(){
  var typeOneScore = 0;
  var typeTwoScore = 0;

  if(document.getElementById("color1").checked){
    typeOneScore += 1;
  }
  else if (document.getElementById("color2").checked) {
    typeTwoScore += 1;
  }

  if(document.getElementById("iceCream1").checked){
    typeOneScore += 1;
  }
  else if (document.getElementById("iceCream2").checked) {
    typeTwoScore += 1;
  }

  if(document.getElementById("movie1").checked){
    typeOneScore += 1;
  }
  else if (document.getElementById("movie2").checked) {
    typeTwoScore += 1;
  }


  if(typeOneScore > typeTwoScore){
    document.getElementById("MainDiv").innerHTML += "Your personality is type 1!";
  }
  else{
    document.getElementById("MainDiv").innerHTML += "Your personality is type 2!";
  }
}
