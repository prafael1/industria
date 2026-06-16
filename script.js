function gerarQRCode() {

    const op = document.getElementById("op").value;
    const pa = document.getElementById("PA").value;
    const pt = document.getElementById("PT").value;
    const centro = document.getElementById("Centro_de_Trabalho").value;

    const campo1 = document.getElementById("campo1").value;
    const campo2 = document.getElementById("campo2").value;
    const campo3 = document.getElementById("campo3").value;
    const campo4 = document.getElementById("campo4").value;
    const campo5 = document.getElementById("campo5").value;
    const campo6 = document.getElementById("campo6").value;
    const campo7 = document.getElementById("campo7").value;

    const texto =
        `N |PA|${op},${pa},` +
        `|CT|${centro},${pt},${campo1}` +
        `|CT|${campo2},${campo3},${campo4}` +
        `|CT|${campo5},${campo6},${campo7}`;

    document.getElementById("textoGerado").textContent = texto;

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: texto,
        width: 300,
        height: 300
    });
    document.getElementById("qrcode").scrollIntoView({
    behavior: "smooth",
    block: "center"
});
}