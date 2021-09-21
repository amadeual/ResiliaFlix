// const seach = "the mask"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach + "&plot=full";
// const detalheName = new URLSearchParams(document.location.search)
// const nome = detalheName.get("name");
// const detalheFilme = document.querySelector('.detalhes')
// console.log(detalheFilme)

// //tela 1

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img1").val(resposta.Title);
//         // $('#img1').attr("src", resposta.Poster)
//         $("#a1").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }
// })



// // Tela 2
// const seach2 = "harry potter"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach2 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img2").val(resposta.Title);
//         // $('#img2').attr("src", resposta.Poster)
//         $("#a2").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 3
// const seach3 = "transformers"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach3 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img3").val(resposta.Title);
//         // $('#img3').attr("src", resposta.Poster)
//         $("#a3").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 4
// const seach4 = "cidade de deus"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach4 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img4").val(resposta.Title);
//         // $('#img4').attr("src", resposta.Poster)
//         $("#a4").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 5
// const seach5 = "iron man 2"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach5 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img5").val(resposta.Title);
//         // $('#img5').attr("src", resposta.Poster)
//         $("#a5").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })


// // tela 6
// const seach6 = "tropa de elite"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach6 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img6").val(resposta.Title);
//         // $('#img6').attr("src", resposta.Poster)
//         $("#a6").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 7
// const seach7 = "fast"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach7 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img7").val(resposta.Title);
//         // $('#img7').attr("src", resposta.Poster)
//         $("#a7").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })


// // tela 8
// const seach8 = "driven"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach8 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img8").val(resposta.Title);
//         // $('#img8').attr("src", resposta.Poster)
//         $("#a8").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })


// // tela 9
// const seach9 = "the godfather"
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach9 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img9").val(resposta.Title);
//         // $('#img9').attr("src", resposta.Poster)
//         $("#a9").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })


// // tela 10
// const seach10 = ""
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach10 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img10").val(resposta.Title);
//         // $('#img10').attr("src", resposta.Poster)
//         $("#a10").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 11
// const seach11 = ""
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach11 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img11").val(resposta.Title);
//         // $('#img11').attr("src", resposta.Poster)
//         $("#a11").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })

// // tela 12
// const seach12 = ""
// var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach12 + "&plot=full";

// $.ajax({
//     url: url,
//     type: "get",
//     dataType: "json",


//     success(resposta) {
//         $("#img12").val(resposta.Title);
//         // $('#img12').attr("src", resposta.Poster)
//         $("#a12").attr("href", `./html/movieResults.html?name=${resposta.Title}`)
//     }

// })



class CadastroLogin1 {

    constructor(url, img, tag) {

        this.solicitaAPI(url, img, tag)

        this.url = url,
            this.type = "get",
            this.dataType = "json",
            this.img = img,
            this.tag = tag
    }

    solicitaAPI(url, img, tag) {
        try {
            $.ajax({
                url: url,
                type: this.type,
                dataType: this.dataType,

                success(resposta) {
                    $(`${img}`).val(resposta.Title);
                    // $(`${img}`).attr("src", resposta.Poster)
                    $(`${tag}`).attr("href", `./html/movieResults.html?name=${resposta.Title}`)
                },
            })
        } catch (err) {
            alert('error')
        }
    }
}

const img1 = '#img1'
const tag1 = '#a1'
const filme1 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=the mask&plot=full", img1, tag1).solicitaAPI()

const img2 = '#img2'
const tag2 = '#a2'
const filme2 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=harry potter&plot=full", img2, tag2).solicitaAPI()

const img3 = '#img3'
const tag3 = '#a3'
const filme3 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=transformers&plot=full", img3, tag3).solicitaAPI()

const img4 = '#img4'
const tag4 = '#a4'
const filme4 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=cidade de deus&plot=full", img4, tag4).solicitaAPI()

const img5 = '#img5'
const tag5 = '#a5'
const filme5 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=iron man 2&plot=full", img5, tag5).solicitaAPI()

const img6 = '#img6'
const tag6 = '#a6'
const filme6 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=tropa de elite&plot=full", img6, tag6).solicitaAPI()

const img7 = '#img7'
const tag7 = '#a7'
const filme7 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=fast&plot=full", img7, tag7).solicitaAPI()

const img8 = '#img8'
const tag8 = '#a8'
const filme8 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=driven&plot=full", img8, tag8).solicitaAPI()

const img9 = '#img9'
const tag9 = '#a9'
const filme9 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=the godfather&plot=full", img9, tag9).solicitaAPI()

const img10 = '#img10'
const tag10 = '#a10'
const filme10 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=the boss baby&plot=full", img10, tag10).solicitaAPI()

const img11 = '#img11'
const tag11 = '#a11'
const filme11 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=ralph breaks the internet&plot=full", img11, tag11).solicitaAPI()

const img12 = '#img12'
const tag12 = '#a12'
const filme12 = new CadastroLogin1("https://www.omdbapi.com/?apikey=d248abfd&t=monsters inc&plot=full", img12, tag12).solicitaAPI()
