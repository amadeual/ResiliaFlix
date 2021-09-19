const detalheName = new URLSearchParams(document.location.search)
const nome = detalheName.get("name");
const detalheFilme= document.querySelector('.detalhes')
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
        for (let [index, item] of apiFiltrada.entries()){
        detalheFilmePrincipal += `
        <!--
        <div class="divBox">
            <div class="imgDiv">
                <img src="${item.flag}" width="300px'  height="300px>
            </div>
            <article class="movieInfo">
                <h2>${item.name}</h2>
                <p><strong>Native Name:</strong> ${item.nativeName}</p>
                <p><strong>Population:</strong> ${item.population}</p>
                <p><strong>Region:</strong> ${item.region}</p>
                <p><strong>Sub Region:</strong> ${item.subregion}</p>
                <p><strong>Capital:</strong> ${item.capital}</p>
            </article>
        </div>-->
        
        <section>
            <img src="${item.flag}" alt="" srcset="">
        </section>
        <section>
        <div class="detalhe-name">
            <h2>${item.name}</h2>
        </div>
        <div class="detalhes-info">
            <div class="detalhes-info-item">
                <p><strong>Native Name:</strong> ${item.nativeName}</p>
                <p><strong>Population:</strong> ${item.population}</p>
                <p><strong>Region:</strong> ${item.region}</p>
                <p><strong>Sub Region:</strong> ${item.subregion}</p>
                <p><strong>Capital:</strong> ${item.capital}</p>
            </div>           
        </div>
        
    </section>`
        }
        detalheFilme.innerHTML = detalheFilmePrincipal
}