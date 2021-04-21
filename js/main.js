document.getElementById('purple').onclick = purple
document.getElementById('green').onclick = green
document.getElementById('blue').onclick = blue
document.getElementById('yellow').onclick = yellow

function purple() {
    document.querySelector('body').style.backgroundColor = 'purple' 
    document.querySelector('body').style.color = 'white' 
}

function green() {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'white'
}

function blue() {
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'white'
}

function yellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('body').style.color = 'black'
}