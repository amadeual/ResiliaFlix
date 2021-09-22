class CriaCapa {

    constructor(url, num) 
    {
        this.solicitaAPI(url, num)
        this.url = url,
        this.type = "get",
        this.dataType = "json"
    }
    // faz a solicitação  para API  pela url
    solicitaAPI(url, num) {
        try {
            $.ajax({
                url: url,
                type: this.type,
                dataType: this.dataType,

                success(resposta) {
                    $(`#img${num}`).val(resposta.Title);                    
                    $(`#a${num}`).attr("href", `./html/movieResults.html?name=${resposta.Title}`)
                },
            })
        } catch (err) {
            alert('error')
        }
    }
}

// criando stâncias dos filmes, o numero  passado junto com a url é para  posição do carrosel
const filme1 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=the mask&plot=full", 1)
const filme2 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=harry potter&plot=full", 2)
const filme3 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=transformers&plot=full", 3)
const filme4 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=cidade de deus&plot=full", 4)
const filme5 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=iron man 2&plot=full", 5)
const filme6 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=the godfather&plot=full", 6)
const filme7 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=fast&plot=full", 7)
const filme8 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=drive&plot=full", 8)
const filme9 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=peppa pig&plot=full", 9)
const filme10 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=the boss baby&plot=full", 10)
const filme11 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=ralph breaks the internet&plot=full", 11)
const filme12 = new CriaCapa("https://www.omdbapi.com/?apikey=d248abfd&t=monsters inc&plot=full", 12)

const filmes = [ filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10, filme11, filme12]
// chama função que faz a requisição para Api 
for (const filme of filmes) {
    filme.solicitaAPI()
}