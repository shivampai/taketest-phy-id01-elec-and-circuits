function check() {
  var ans1 = document.getElementById("I-ans");
  var ans2 = document.getElementById("II-ans");
  var ans3 = document.getElementById("III-ans");
  var ans4 = document.getElementById("IV-ans");
  var ans5 = document.getElementById("V-ans");
  var ans6 = document.getElementById("VI-ans");
  var ans7 = document.getElementById("VII-ans");
  var ans8 = document.getElementById("VIII-ans");
  var score = 0;
  var wrongno = 0;
  var wrong = [""];
  var correct = [""];
  if(ans1.value == '300'){
    correct.push("1");
    score = score + 1;
  }else{
    wrong.push("1");
    wrongno = wrongno + 1;
  }
  if(ans2.value == '16000'){
    correct.push("2");
    score = score + 1;
  }else{
    wrong.push("2");
    wrongno = wrongno + 1;
  }
  if(ans3.value == 'periodic'){
    correct.push("3");
    score = score + 1;
  }else{
    wrong.push("3");
    wrongno = wrongno + 1;
  }
  if(ans4.value == 'periodic'){
    correct.push("4");
    score = score + 1;
  }else{
    wrong.push("4");
    wrongno = wrongno + 1;
  }
  if(ans5.value == 'circular'){
    correct.push("5");
    score = score + 1;
  }else{
    wrong.push("5");
    wrongno = wrongno + 1;
  }
  if(ans6.value == 'straight'){
    correct.push("6");
    score = score + 1;
  }else{
    wrong.push("6");
    wrongno = wrongno + 1;
  }
  if(ans7.value == 'position'){
    correct.push("7");
    score = score + 1;
  }else{
    wrong.push("7");
    wrongno = wrongno + 1;
  }
  if(ans8.value == 'meter'){
    correct.push("8");
    score = score + 1;
  }else{
    wrong.push("8");
    wrongno = wrongno + 1;
  }
  document.getElementById("qs").style.display = "none";
 document.getElementById("var-score").innerHTML = score;
  document.getElementById("array-correct").innerHTML = correct;
  document.getElementById("var-wrong").innerHTML = wrongno;
  document.getElementById("array-wrong").innerHTML = wrong;
document.getElementById("score").style.display = "block";
 }
