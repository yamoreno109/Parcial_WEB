const obtenerValor = () =>{
    let inputTexto = document.getElementById('input_digimon')
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (digimon) =>{
    const baseURl = 'https://digimon-api.vercel.app/api/digimon/'
    const endpoint = `name/${digimon}`
    const url = `${baseURl}${endpoint}`
    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `
    <div class="digimon-info">
    <div class="name-digimon">
        <h3>Nombre del Digimon</h3>
        <h3>${data[0]['name']}</h3>
    </div>
    <div class="image-digimon">
        <h3>Imagen del Digimon</h3>
        <img src="${data[0]['img']}" alt="Digimon Image">
    </div>
    <div class="level-digimon">
        <h3>Nivel del Digimon</h3>
        <h3>${data[0]['level']}</h3>
    </div>
    </div>
    `;
}