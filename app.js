document.getElementById("mybtn").addEventListener("click", random);


function random() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    document.getElementById("img").setAttribute("src", "images/dice-"+num+".png");
    document.getElementById("disptext").innerText = "You Got "+num;
}

