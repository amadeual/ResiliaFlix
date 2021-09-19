const seach = "the mask"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach + "&plot=full";
const detalheName = new URLSearchParams(document.location.search)
const nome = detalheName.get("name");
const detalheFilme = document.querySelector('.detalhes')
console.log(detalheFilme)

//tela 1

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img1").val(resposta.Title);
        $('#img1').attr("src", resposta.Poster)
        $("#a1").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }
})



// Tela 2
const seach2 = "harry potter"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach2 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img2").val(resposta.Title);
        $('#img2').attr("src", resposta.Poster)
        $("#a2").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 3
const seach3 = "transformers"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach3 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img3").val(resposta.Title);
        $('#img3').attr("src", resposta.Poster)
        $("#a3").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 4
const seach4 = "cidade de deus"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach4 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img4").val(resposta.Title);
        $('#img4').attr("src", resposta.Poster)
        $("#a4").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 5
const seach5 = "iron man 2"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach5 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img5").val(resposta.Title);
        $('#img5').attr("src", resposta.Poster)
        $("#a5").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})


// tela 6
const seach6 = "tropa de elite"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach6 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img6").val(resposta.Title);
        $('#img6').attr("src", resposta.Poster)
        $("#a6").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 7
const seach7 = "fast"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach7 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img7").val(resposta.Title);
        $('#img7').attr("src", resposta.Poster)
        $("#a7").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})


// tela 8
const seach8 = "driven"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach8 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img8").val(resposta.Title);
        $('#img8').attr("src", resposta.Poster)
        $("#a8").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})


// tela 9
const seach9 = "drive"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach9 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img9").val(resposta.Title);
        $('#img9').attr("src", resposta.Poster)
        $("#a9").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})


// tela 10
const seach10 = "drive"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach10 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img10").val(resposta.Title);
        $('#img10').attr("src", resposta.Poster)
        $("#a10").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 11
const seach11 = "drive"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach11 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img11").val(resposta.Title);
        $('#img11').attr("src", resposta.Poster)
        $("#a11").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})

// tela 12
const seach12 = "drive"
var url = "https://www.omdbapi.com/?apikey=d248abfd&t=" + seach12 + "&plot=full";

$.ajax({
    url: url,
    type: "get",
    dataType: "json",


    success(resposta) {
        $("#img12").val(resposta.Title);
        $('#img12').attr("src", resposta.Poster)
        $("#a12").attr("href", `../html/movieResults.html?name=${resposta.Title}`)
    }

})



