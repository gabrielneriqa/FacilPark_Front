const API_URL = "http://localhost:8080";

async function registrarEntrada() {
    const tipo = document.getElementById("entrada-tipo").value;
    const placa = document.getElementById("entrada-placa").value;

    const response = await fetch(`${API_URL}/entrada`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, placa })
    });

    const data = await response.json();
    document.getElementById("entrada-resposta").innerText =
        `Entrada registrada: ${data.tipo.toUpperCase()} - ${data.placa}`;
}

async function registrarSaida() {
    const placa = document.getElementById("saida-placa").value;

    const response = await fetch(`${API_URL}/saida`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placa })
    });

    const data = await response.json();
    document.getElementById("saida-resposta").innerText =
        `Valor total: R$ ${data.valor}`;
}

async function listarVagas() {
    const response = await fetch(`${API_URL}/vagas`);
    const vagas = await response.json();

    const lista = document.getElementById("lista-vagas");
    lista.innerHTML = "";

    vagas.forEach((vaga, index) => {
        const item = document.createElement("li");
        item.textContent = vaga.ocupada
            ? `Vaga ${index + 1}: OCUPADA (${vaga.placa})`
            : `Vaga ${index + 1}: livre`;
        lista.appendChild(item);
    });
}