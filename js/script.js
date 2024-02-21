// Função para atualizar o valor com base na seleção da modalidade e revelar outras divs
const amountBallet = 60;
const amountJazz = 65;
const amountSalao= 70;
const number = 21983619249;

function updateValue() {
    var modality = document.getElementById("modality").value;
    if (modality !== "") {
        var amount = amountBallet;
        if (modality === "jazz"){
            amount = amountJazz;
        } else if (modality === "salao") {
            amount = amountSalao;
        }

        document.getElementById("display-amount").textContent = amount.toFixed(2);
        document.getElementById("payment-amount").style.display = "block";
        document.getElementById("pix-estabelecimento").style.display = "block";
        document.getElementById("extra-info").style.display = "block";
        document.getElementById("pay-btn").style.display = "block";
    }        
    document.getElementById("amount").textContent = amount.toFixed(2);
}

// Função de envio do formulário 
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var modality = document.getElementById("modality").value;
    var message = `**Pagamento de mensalidade**
Nome completo: ${name}

Modalidade: *${modality}*

*Comprovante: a enviar...*`;

    var whatsappLink = `https://wa.me/55${number}?text=${encodeURIComponent(message)}`;
    window.location.href= whatsappLink;
});
