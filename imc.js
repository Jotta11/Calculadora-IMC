function calcular(peso, altura) {
    var peso = document.getElementById('txtPeso').value;
    var altura = document.getElementById('txtAltura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById('abaixo').classList.add('destaque');
    } else if (imc <= 24.9) {
        document.getElementById('normal').classList.add('destaque');
    } else if (imc <= 29.9) {
        document.getElementById('sobrepeso').classList.add('destaque');
    } else if (imc <= 34.9) {
        document.getElementById('obesidade').classList.add('destaque');
    } else if (imc <= 39.9) {
        document.getElementById('severa').classList.add('destaque');
    } else if (imc > 40) {
        document.getElementById('morbida').classList.add('destaque');
    } else {
        document.getElementById('resultado').innerHTML = 'Digite um valor válido!';

    }
}




//*rgb(17, 209, 17);*//