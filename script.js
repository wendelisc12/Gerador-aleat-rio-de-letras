alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function letra(){
    letraRandom = alfabeto[Math.floor(Math.random() * alfabeto.length)]
    document.getElementById('letraR').innerHTML = letraRandom
    document.getElementById('letras-hide').classList.remove('hide')
    document.getElementById('principal-box').style.height = '400px'
}

document.getElementById('botaoLetra').addEventListener('click', letra)