$("#btn").on("click", function () {
    const seach = $("#movieSearch5").val()
    console.log(seach)
    var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach + "&plot=full";
    const detalheFilme = document.querySelector('#cardFilm')
    console.log(detalheFilme)

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",


        success(resposta) {
            console.log(resposta)
            detalheCard(resposta)
        }

    })

    const detalheCard = resposta => {
        let detalheFilmePrincipal = ""
        
        detalheFilmePrincipal += `<div class="boxMovies">
            <div class="moviesPic">
                <img id="movieRes" src="${resposta.Poster}">                
                <!-- ================ editar=============== passar filme por URL-->
                <a href="../html/movieResults.html?name=${resposta.Title}">
                <h3>${resposta.Title}</h3>
                </a>
            </div>
        </div>`
        detalheFilme.innerHTML = detalheFilmePrincipal
    }
})

