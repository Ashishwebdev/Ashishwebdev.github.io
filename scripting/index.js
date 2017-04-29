/**
 * Created by dinesh on 25/4/17.
 */
var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign)
    { angle = angle + 45; }
    else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
