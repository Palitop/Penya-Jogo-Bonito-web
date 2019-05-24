//al cargar por completo la página...
window.onload = function(){
    document.getElementById("boton").onclick = function() {
        console.log(document.getElementById("texto").value);
    };
}
