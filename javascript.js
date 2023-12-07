let article1 = document.querySelector("#article1")
    article1.style.backgroundColor = "lightblue"

function setBackground (answ) {

    if (answ == "Red") {

        article1.style.backgroundColor = "darkred"

    }

    else if (answ == "Green") {

        article1.style.backgroundColor = "darkgreen"

    }  

    else if (answ == "Blue") {

        article1.style.backgroundColor = "darkblue"

    }

}

let bkChoice = document.querySelectorAll(".bgcolor")

console.log(bkChoice)

bkChoice.forEach(element => {

    element.addEventListener("click", () => {

        let answ = element.innerHTML

        console.log(answ)

        setBackground(answ)

    })

});

document.getElementById('copy-button').addEventListener('click', function() { 
    var text = document.getElementById('text-box').value; 
    document.getElementById('text-output').textContent = text; 
}); 

function getRandomOutputElement() { 
    var outputs = document.getElementsByClassName('text-output'); 
    var randomIndex = Math.floor(Math.random() * outputs.length); 
    return outputs[randomIndex]; 
} 
document.getElementById('copy-button').addEventListener('click', function() { 
    var text = document.getElementById('text-box').value; 
    var randomOutputElement = getRandomOutputElement(); 
    randomOutputElement.textContent = text; 
});

document.getElementById('copy-button').addEventListener('click', function() { 
    var targets = document.querySelectorAll('.text-output');
    var randomTarget = targets[Math.floor(Math.random() * targets.length)]; 
    var text = document.getElementById('text-box').value; 
    randomTarget.textContent = text; 
});