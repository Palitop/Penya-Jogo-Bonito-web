window.onload = function(){
    document.getElementById("upload").onclick = function() {
        var name = document.getElementById("name").value;
        var text = document.getElementById("textfield").value;
        newpost(name, text);
        document.getElementById("name").value = null;
        document.getElementById("textfield").value = null;
    };
}

function newpost (name, text) {
    var newdiv = document.createElement("div");
    var newname = document.createElement("h2");
    var newtext = document.createElement("p");

    // add new div in the body
    document.body.appendChild(newdiv);

    // set newname and newtext with the user vars
    newname.innerHTML = name;
    newtext.innerHTML = text;

    // add the new vars into the new div
    newdiv.appendChild(newname);
    newdiv.appendChild(newtext);    
}