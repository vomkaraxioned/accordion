/* Author: 

*/
let items = document.getElementsByClassName("accordion-item");
for (x in items)
    items[x].addEventListener("click",showDescription);

function showDescription() {
    let para = document.getElementsByClassName("description");
    alert(this.childNodes[3].style.display = 'block');
}





















