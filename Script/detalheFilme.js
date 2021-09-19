const detalheName = new URLSearchParams(document.location.search)
const nome = detalheName.get("name");
const detalheFilme = document.querySelector('.detalhes')
console.log(detalheFilme)

document.addEventListener('DOMContentLoaded', () => {
    detalheApi()
})

const detalheApi = async () => {
    /*const res = await fetch(`https://restcountries.eu/rest/v2/name/${nome}`)*/
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    const apiFiltrada = data.filter(item => item.name === nome)
    detalheCard(apiFiltrada)
    console.log(apiFiltrada)

}

const detalheCard = apiFiltrada => {
    let detalheFilmePrincipal = ""
    for (let [index, item] of apiFiltrada.entries()) {
        detalheFilmePrincipal += `
        <div class="divBox">
        <div class="imgDiv">
          <img class="imgMovieRes" src="">
        </div>
        <article class="movieInfo">
          <h2>AQUI VAI O TITULO</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quibusdam, vitae excepturi magni labore quaerat qui quia adipisci odio sint aut officia assumenda consequatur molestiae! Optio quia voluptatem eveniet maxime! </p>
          <p>Aqui vai autor</p>
        </article>
      </div>`
    }
    detalheFilme.innerHTML = detalheFilmePrincipal
}