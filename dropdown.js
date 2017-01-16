/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function main() {
    "use strict";
    var mainDiv = document.getElementById('formArea'),
        inputlbl = document.getElementById('inputlbl'),
        inputtxt = document.getElementById('inputtxt'),
        newlbl = document.createElement('divNewlbl'),
        newtxt = document.createElement('divNewtxt'),
        newlbl2 = document.createElement('divNewlbl2'),
        newtxt2 = document.createElement('divNewtxt2');
    newlbl.innerHTML = '<label>Please select your cost center: </label>';
    newtxt.innerHTML = '<select id="mycc1"> <option value="Testing1">Testing1</option> <option value="Dug">Dug</option> </select>';
    newlbl2.innerHTML = '<br><br><label>Please select your cost center: </label>';
    newtxt2.innerHTML = '<select id="mycc2"> <option value="Testing1">Testing1</option> <option value="Dug">Dug</option> </select>';
    inputlbl.style.display = 'none';
    inputtxt.style.display = 'none';
    mainDiv.parentNode.appendChild(newlbl);
    newlbl.style.color = 'white';
    mainDiv.parentNode.appendChild(newtxt);
    mainDiv.parentNode.appendChild(newlbl2);
    newlbl2.style.color = 'white';
    mainDiv.parentNode.appendChild(newtxt2);
});

/* function f1() {
    "use strict";
    var result1 = document.getElementById("mycc1"),
        result2 = document.getElementById("mycc2");
    alert((result2.value) + " " + " " + (result1.value));
}
*/