
$(document).ready(function(){
    $("#myCarousel").carousel();
});

$(document).ready(function(){
    $("#myCarousel").carousel({
        wrap: false
    });
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("cycle");
    });
});



$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("prev");
    });
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("next");
    });
});
$(document).ready(function(){
    $("#myCarousel").carousel("nextWhenVisible");
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myCarousel").carousel(2);
    });
});
$(document).ready(function(){
    $("#myBtn").click(function(){
        var myCarousel = bootstrap.Carousel.getInstance($("#myCarousel")[0]);
        console.log(myCarousel);
        // {_element: div#myCarousel.carousel.slide, _items: Array(3), _interval: 9, _activeElement: div.carousel-item.active, _isPaused: false, …}

        $("#myCarousel").carousel("dispose");
        console.log(myCarousel);
        // {_element: null, _items: null, _interval: null, _activeElement: null, _isPaused: null, …}
    });
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        var myCarousel = bootstrap.Carousel.getInstance($("#myCarousel")[0]);
        console.log(myCarousel);
        // {_element: div#myCarousel.carousel.slide, _items: Array(3), _interval: 9, _activeElement: div.carousel-item.active, _isPaused: false, …}
    });
});

$(document).ready(function(){
    $("#myBtn").click(function(){
        var myCarousel = bootstrap.Carousel.getOrCreateInstance($("#myCarousel")[0]);
        console.log(myCarousel);
        // {_element: div#myCarousel.carousel.slide, _items: Array(3), _interval: 9, _activeElement: div.carousel-item.active, _isPaused: false, …}
    });
});

$(document).ready(function(){
    $("#myCarousel").on("slid.bs.carousel", function(){
        alert("The sliding transition of previous carousel item has been fully completed.");
    }); 
});

