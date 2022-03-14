$(document).ready(function () {
    $(".card").hover(
        function () {
            $(this).css({
                "background-color": "#f0f0f0",
                "transition": "all .5s"
            });
        },
        function () {
            $(this).css({
                "background-color": "#fff",
                "transition": "all .5s"
            });
        }
    );
});