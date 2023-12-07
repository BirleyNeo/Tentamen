function setBackground(answ) {
    let sb = document.getElementById("idsecondbox");
    if (answ == "Red") {

        sb.style.backgroundColor = "darkred"

    }

    else if (answ == "Green") {

        sb.style.backgroundColor = "darkgreen"

    }

    else if (answ == "Blue") {

        sb.style.backgroundColor = "darkblue"

    }

}; 

function copyText() {
    document.getElementById("idsecondbox").textContent= document.getElementById("idfirstbox").value;
};
  
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("mybutton").addEventListener("click", copyText);
    document.getElementById("red").addEventListener("click", () => {
        setBackground("Red");
    });
    document.getElementById("green").addEventListener("click", () => {
        setBackground("Green");
    });
    document.getElementById("blue").addEventListener("click", () => {
        setBackground("Blue");
    });
    document.getElementById("font").addEventListener ("click", () => {
        document.getElementById ("idsecondbox").style.fontFamily = "monospace";
    });
    document.getElementById("fontfarge").addEventListener ("click", () => {
        document.getElementById ("idsecondbox").style.color = "white";
    });
});
