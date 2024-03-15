// Função para atualizar o valor com base na seleção da modalidade e revelar outras divs

const defaultAmount = 60;
const amountSalao = 70;
const number = 21983619249;
const desconto = 10;

function updateValue() {
    var checkboxes = document.querySelectorAll('input[name="modalities[]"]');
    var amount = 0;
    var update = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            update++;
            if (checkbox.value === "salao") {
                amount += amountSalao;
            } else {
                amount += defaultAmount;
            }
        }
    });

    if (update > 1) {
        amount -= update * desconto; 
    }

    if (amount > 0) {
        document.getElementById("display-amount").textContent = amount.toFixed(2);
        document.getElementById("payment-amount").style.display = "block";
        document.getElementById("pix-estabelecimento").style.display = "block";
        document.getElementById("extra-info").style.display = "block";
        document.getElementById("pay-btn").style.display = "block";

        document.getElementById("amount").textContent = amount.toFixed(2);
    } 

}
function copyPix(){
    const element = document.getElementById('pix');
    const innerText = element.innerText;

    navigator.clipboard.writeText(innerText)
        .then(() => {
            alert("Pix Copiado", + innerText);
        })
        .catch(err => {
            console.error("Não foi possível copiar", err);
        })
}

function submitWhats() {
    
    document.getElementById("payment-form").addEventListener("submit", function (event) {
        event.preventDefault();
        var checkboxes = document.querySelectorAll('input[name="modalities[]"]');
        var modalidades = "";
        checkboxes.forEach(checkbox => {
           if (checkbox.checked) {
                modalidades += checkbox.value + ", ";
           }
        });
        modalidades = modalidades.slice(0,-2);
        var name = document.getElementById("name").value;
        var valor = document.getElementById("display-amount").textContent;
        var message = `**Pagamento de mensalidade**
Nome completo: ${name}

Modalidade: *${modalidades}*

Valor: *${valor}*

*Comprovante: a enviar...*`;

        var whatsappLink = `https://wa.me/55${number}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappLink;
    })
};