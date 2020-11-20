$(".video-btn").click(function () {
    $('#video').get(0).play();
    $("#video").prop("controls", true);
    $(".video-btn").addClass('video-btn--hide');
    $(".video-wrapper").addClass('video-btn--hide');
})