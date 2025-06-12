function gerarSenha() {
    const maiusculo = document.getElementById('maiusculo').checked;
    const minusculo = document.getElementById('minusculo').checked;
    const numero = document.getElementById('numero').checked;
    const simbolo = document.getElementById('simbolo').checked;

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=';

    let caracteres = '';
    const garantidos = [];

    // Adiciona caracteres selecionados e garante pelo menos um de cada tipo
    if (maiusculo) {
        caracteres += letrasMaiusculas;
        garantidos.push(letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]);
    }
    if (minusculo) {
        caracteres += letrasMinusculas;
        garantidos.push(letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]);
    }
    if (numero) {
        caracteres += numeros;
        garantidos.push(numeros[Math.floor(Math.random() * numeros.length)]);
    }
    if (simbolo) {
        caracteres += simbolos;
        garantidos.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }

    if (caracteres.length === 0) {
        alert('Por favor, selecione pelo menos uma característica para gerar a senha!');
        document.getElementById('campo-senha').value = '';
        return;
    }

    const comprimento = 12;
    let senha = garantidos;

    // Preenche o restante da senha com caracteres aleatórios
    for (let i = garantidos.length; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha.push(caracteres[indice]);
    }

    // Embaralha a senha
    senha = senha.sort(() => Math.random() - 0.5).join('');

    document.getElementById('campo-senha').value = senha;
}