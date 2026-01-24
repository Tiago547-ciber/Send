function Enviar() {
    window.alert("Orçamento Enviado");
    window.location.href = "index.html";
}
setInterval( () => {
     var tamanho = document.getElementById("t1").value;
    var peso = document.getElementById("inp1").value;
      var tamanho2 = document.getElementById("t2").value;
    var peso2 = document.getElementById("inp2").value;
     var tamanho3 = document.getElementById("t3").value;
    var peso3 = document.getElementById("inp3").value;
     var tamanho4 = document.getElementById("t4").value;
    var peso4 = document.getElementById("inp4").value;
     var tamanho5 = document.getElementById("t5").value;
    var peso5 = document.getElementById("inp5").value;
     var tamanho6 = document.getElementById("t6").value;
    var peso6 = document.getElementById("inp6").value;
   
    var cidade = document.getElementById("cidades").value;
    const dict = {
        Pequeno: 3.50,
        Médio: 7.50,
        Grande: 15
    }
    const city = {
        Maceió: 5,
        Arapiraca: 40,
        MarechalDeodoro: 50
    } 
        valor = dict[tamanho]*peso*city[cidade] + dict[tamanho2]*peso2*city[cidade] + dict[tamanho3]*peso3*city[cidade] + dict[tamanho4]*peso4*city[cidade] + dict[tamanho5]*peso5*city[cidade] + dict[tamanho6]*peso6*city[cidade];
    document.getElementById("valor").innerText = valor;

}, 100)

function Form(){
    
    window.location.href = "pagina2.html";

}

