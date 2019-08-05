// var juanito = "esternocleidomastoideo"
// alert(juanito)
// var a = document.getElementById("mostaza");
// a.style.color="red";
// a.style.fontSize="30px";
var numero =5
var mostrar = document.getElementById('mostrar')

for (var j = 1; j <= 12; j++) {
	for (var i = 1; i <= 12; i++) {
		//console.log(j*i);
		mostrar.innerHTML += j + " * "+i+" = "+i*j+"<br>" 
	}
	mostrar.innerHTML+= "<br>"
}