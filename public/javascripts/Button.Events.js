
/*click Event auf die Gamebar-Buttons, weiss nicht wie diese zu identifizieren sind*/
document.getElementsByClassName("btn btn-default").addEventListener("click", rules)
document.getElementsById("rules").addEventListener("click", rules)

/*click Event auf die Game-Buttons*/
document.getElementsById("button1").addEventListener("click", rules());

/*test Funktion*/
function rules() {
  alert('Klick');
}