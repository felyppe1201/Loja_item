/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const gender = document.getElementById("gender").value;
        const email = document.getElementById("email").value;

        if (name === "" || gender === "" || email === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Simulação de envio de dados (exibir no console)
        console.log("Nome:", name);
        console.log("Gênero:", gender);
        console.log("Email:", email);

        alert("Cadastro realizado com sucesso! Você será notificado no lançamento do produto.");

        // Limpar o formulário após o envio
        form.reset();
    });
});
