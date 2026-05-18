

const dados = {
    "Maceió": [-9.66625, -35.7351],
    "Arapiraca": [-9.75164, -36.6604], 
    "MarechalDeodoro": [-9.71801, -35.9022]
};

// 1. Variável global que vai guardar a instância do mapa
var map = null;

// 2. PEGA A GEOLOCALIZAÇÃO APENAS UMA VEZ (Sem setInterval!)
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Coordenadas atuais do cliente (caso queira usar para iniciar o mapa nele)
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            
            // Inicializa o mapa na posição atual do cliente
            map = new L.Map('map').setView([userLat, userLng], 13);

            // Adiciona a camada de visualização (tiles)
            new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Opcional: Adiciona um marcador onde o cliente está
            L.marker([userLat, userLng]).addTo(map).bindPopup("Você está aqui!").openPopup();
        },
        (error) => {
            console.error(`Erro (${error.code}): ${error.message}`);
            // Caso o usuário recuse o GPS, inicializa o mapa em Maceió como padrão
            inicializarMapaPadrao();
        }
    );
} else {
    console.log("Geolocalização não suportada.");
    inicializarMapaPadrao();
}

// Função reserva caso o GPS falhe
function inicializarMapaPadrao() {
    map = new L.Map('map').setView([dados["Maceió"][0], dados["Maceió"][1]], 13);
    new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
}


// 3. ATUALIZA O MAPA TODA VEZ QUE O VALOR MUDAR (Sem setInterval!)
document.getElementById("cidades").addEventListener('change', function(event) {
    var valor = event.target.value;
    
    // Verifica se o mapa já foi criado e se a cidade existe no objeto dados
    if (map && dados[valor]) {
        var lat = parseFloat(dados[valor][0]);
        var lng = parseFloat(dados[valor][1]);
        
        // Atualiza o mapa existente movendo para a cidade selecionada
        map.flyTo([lat, lng], 13); 
        
        // Se preferir um movimento instantâneo sem efeito, use: map.setView([lat, lng], 13);
    }
});


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

           //latitude e longitude de maceio//

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

