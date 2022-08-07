/* Author: 

*/
let items = document.getElementsByClassName("accordion-item");
for (x in items)
    items[x].addEventListener("click",showDescription);

function showDescription() {
    if(this.counter !=1){
        this.childNodes[3].classList.add('active');
        this.counter = 1;
    }
    else {
        this.childNodes[3].classList.remove('active');
        this.counter = 0;
    }
        
}





















