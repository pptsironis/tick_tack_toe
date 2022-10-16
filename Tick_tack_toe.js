var inside = document.querySelectorAll("td")
var restart = document.querySelector("#restart")

function clearBoard(){
    for (var i=0;i<inside.length;i++){
        inside[i].textContent="";
    }
}
restart.addEventListener('click', clearBoard)

function Event(){
    if (this.textContent === ""){
        this.textContent = "X"
    }
    else if (this.textContent ==="X"){
        this.textContent = "O"
    }
    else{this.textContent = ""}
}

for (var i = 0; i < inside.length; i++) {
    inside[i].addEventListener('click', Event);
}