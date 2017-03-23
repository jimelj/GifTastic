var apiKey = 'dc6zaTOxFJmzC';
var queryUrlBase = 'http://api.giphy.com/v1/gifs/search?api_key=' + apiKey;
var Animals = ["Dog", "Cat", "Snake", "Parrot", "Whale", "Dolphin", "Monkey", "Rat", "Lion", "Tiger"];
// var limit = 10;


function giphyImages() {
    $("#animalsDiv").empty();


    var animal = $(this).attr('data-name');
    var queryURL = queryUrlBase + "&q=" + animal + '&limit=10';
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(GiphyData) {
                console.log(GiphyData);
                console.log(queryURL);
                console.log(GiphyData.data.length);



                //Create HTML
                for (var i = 0; i < GiphyData.data.length; i++) {
                    var imageHolder = $('<div>');
                    imageHolder.addClass('imgDiv pull-left text-center');
                    imageHolder.attr('id', 'image#' + i);
                    var h3 = $('<h3>');
                    h3.addClass('ratingsTag');
                    $('#animalsDiv').append(imageHolder);



                    console.log(GiphyData.data[i].images.original.url);
                    console.log(GiphyData.data[i].images.original_still.url);
                    console.log(GiphyData.data[i].rating);

                    $(imageHolder).append("<img src='" + GiphyData.data[i].images.original_still.url + "'>");
                    $(imageHolder).append(h3);
                    $(h3).append('Rating: ' + GiphyData.data[i].rating);


                    }




                });

        }








    function renderButtons() {

        // (this is necessary otherwise you will have repeat buttons)
        $("#buttonHolder").empty();

        for (var i = 0; i < Animals.length; i++) {
            var a = $('<button>');
            a.addClass('animal btn btn-success');
            a.attr('data-name', Animals[i]);
            a.text(Animals[i]);
            $("#buttonHolder").append(a);
        }

    }


    $('#addAnimal').on('click', function() {

        var userAnimal = $('#animalInput').val().trim();
        console.log(userAnimal);
        event.preventDefault();
        Animals.push(userAnimal);
        renderButtons();
        $('#animalInput').val('');

    });




    renderButtons();

    $(document).on("click", ".animal", giphyImages);
