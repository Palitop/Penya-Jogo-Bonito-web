//al cargar por completo la página...
window.onload = function(){
    document.getElementById("boton").onclick = function() {
        console.log(document.getElementById("texto").value);
    };

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });
}
