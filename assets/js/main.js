$(document).ready(function () {
    $("#addtext").click(function () {
        const list = $('#addwindow').val();
        $("ol").append('<li>'+list+'</li>');
        $('#addwindow').val("")
    });
    $("#addbtn").click(function () {
        const text = $('#find').val().toLowerCase().trim();
        $("ol li").filter(function () {
            return $(this).text().toLowerCase().trim().indexOf(text) ==-1
        }).hide();
        $('#find').val("")
    });
})