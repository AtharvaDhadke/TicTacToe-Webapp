 let count = 1;

 function clickfunc(xo) {
     if (count <= 9) {
         if (count % 2 != 0) {
             document.getElementById(xo.id).innerHTML = "X";
         } else {
             document.getElementById(xo.id).innerHTML = "O";
         }

         count++;
         if (letscheckwinner()) {
             document.getElementById("winner").style.display = "block";
             dontclickanything();
             // resetgame();
         }

     } else {
         document.getElementById("winner").style.display = "block";
         document.getElementById("winner").innerHTML = "Draw";
         dontclickanything();
         // resetgame();

     }

     displaywhosturn();
 }
 

 function displaywhosturn() {
     if (count % 2 != 0) {
         document.getElementById("turn").innerHTML = "Next Turn X";
     } else {
         document.getElementById("turn").innerHTML = "Next Turn O";
     }
 }

 function resetgame() {
     for (let i = 1; i <= 9; i++) {
         document.getElementById("GameBox" + i).innerHTML = "";
     }
     count = 1;
     document.getElementById("turn").innerHTML = "First Turn for X";
     document.getElementById("winner").style.display = "none";
     //     clickfunc(this);
     //location.reload();

 }

 function letscheckwinner() {
     if (document.getElementById('GameBox1').innerHTML != "" && document.getElementById('GameBox2').innerHTML != "" && document.getElementById('GameBox3').innerHTML != "" && document.getElementById('GameBox1').innerHTML == document.getElementById('GameBox2').innerHTML && document.getElementById('GameBox2').innerHTML == document.getElementById('GameBox3').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox4').innerHTML != "" && document.getElementById('GameBox5').innerHTML != "" && document.getElementById('GameBox6').innerHTML != "" && document.getElementById('GameBox4').innerHTML == document.getElementById('GameBox5').innerHTML && document.getElementById('GameBox5').innerHTML == document.getElementById('GameBox6').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox7').innerHTML != "" && document.getElementById('GameBox8').innerHTML != "" && document.getElementById('GameBox9').innerHTML != "" && document.getElementById('GameBox7').innerHTML == document.getElementById('GameBox8').innerHTML && document.getElementById('GameBox8').innerHTML == document.getElementById('GameBox9').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox1').innerHTML != "" && document.getElementById('GameBox4').innerHTML != "" && document.getElementById('GameBox7').innerHTML != "" && document.getElementById('GameBox1').innerHTML == document.getElementById('GameBox4').innerHTML && document.getElementById('GameBox4').innerHTML == document.getElementById('GameBox7').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox2').innerHTML != "" && document.getElementById('GameBox5').innerHTML != "" && document.getElementById('GameBox8').innerHTML != "" && document.getElementById('GameBox2').innerHTML == document.getElementById('GameBox5').innerHTML && document.getElementById('GameBox5').innerHTML == document.getElementById('GameBox8').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox3').innerHTML != "" && document.getElementById('GameBox6').innerHTML != "" && document.getElementById('GameBox9').innerHTML != "" && document.getElementById('GameBox3').innerHTML == document.getElementById('GameBox6').innerHTML && document.getElementById('GameBox6').innerHTML == document.getElementById('GameBox9').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox1').innerHTML != "" && document.getElementById('GameBox5').innerHTML != "" && document.getElementById('GameBox9').innerHTML != "" && document.getElementById('GameBox1').innerHTML == document.getElementById('GameBox5').innerHTML && document.getElementById('GameBox5').innerHTML == document.getElementById('GameBox9').innerHTML) {
         return true;
     } else if (document.getElementById('GameBox3').innerHTML != "" && document.getElementById('GameBox5').innerHTML != "" && document.getElementById('GameBox7').innerHTML != "" && document.getElementById('GameBox3').innerHTML == document.getElementById('GameBox5').innerHTML && document.getElementById('GameBox5').innerHTML == document.getElementById('GameBox7').innerHTML) {
         return true;
     }
 }

 function dontclickagain() {
     if (document.getElementById('GameBox1').innerHTML != "") {
         document.getElementById('GameBox1').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox2').innerHTML != "") {
         document.getElementById('GameBox2').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox3').innerHTML != "") {
         document.getElementById('GameBox3').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox4').innerHTML != "") {
         document.getElementById('GameBox4').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox5').innerHTML != "") {
         document.getElementById('GameBox5').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox6').innerHTML != "") {
         document.getElementById('GameBox6').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox7').innerHTML != "") {
         document.getElementById('GameBox7').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox8').innerHTML != "") {
         document.getElementById('GameBox8').onclick = "event.cancelBubble = True";
     } else if (document.getElementById('GameBox9').innerHTML != "") {
         document.getElementById('GameBox9').onclick = "event.cancelBubble = True";
     }
 }

 function dontclickanything() {
     for (let i = 1; i <= 9; i++) {
         document.getElementById("GameBox" + i).onclick = "event.cancelBubble = True";
     }

 }
