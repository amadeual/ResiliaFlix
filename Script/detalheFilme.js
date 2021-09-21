const detalheName = new URLSearchParams(document.location.search)
const nome = detalheName.get("name");
const detalheFilme = document.querySelector('.detalhes')
console.log(detalheFilme)

document.addEventListener('DOMContentLoaded', () => {

  var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + nome + "&plot=full";
  detalheApi(url)

})




const detalheApi = (url) => {
  /*const res = await fetch(`https://restcountries.eu/rest/v2/name/${nome}`)*/
  /*
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await res.json()
  const apiFiltrada = data.filter(item => item.name === nome)
  detalheCard(apiFiltrada)
  console.log(apiFiltrada)
*/
  try {
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",


      success(resposta) {
        detalheCard(resposta)
      }
    })
  } catch (err) {
    alert('error')
  }


}

const detalheCard = resposta => {
  let detalheFilmePrincipal = ""
  detalheFilmePrincipal += `
        <div class="divBox">
        <div class="imgDiv">
          <img class="imgMovieRes" src="${resposta.Poster}">
        </div>
        <article class="movieInfo">
          <h2>${resposta.Title}</h2>
          <p class="p1">${resposta.Plot}</p>
          <p class="p2">${resposta.Actors}</p>
          <p class="p2">${resposta.Year}</p>
        </article>
      </div>`
  detalheFilme.innerHTML = detalheFilmePrincipal
}