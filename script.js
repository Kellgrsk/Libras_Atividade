function envio() {
    let nome = document.getElementById('nomeDigitado').value
    console.log(nome)
    document.getElementById('texto1').innerHTML = "Nome: " + nome
    

    let sobrenome = document.getElementById('sobrenomeDigitado').value
    console.log(sobrenome)
    document.getElementById('texto2').innerHTML = "Sobrenome: " + sobrenome
}