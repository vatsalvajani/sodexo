$(document).ready(function () {
    $('input[name="option"]').on('change', function () {
        const targetDiv = $('#' + this.id + '-div');
        const label = $('label[for="' + this.id + '"]');

        if ($(this).is(':checked')) {
            targetDiv.stop(true, true).slideDown(200);
            label.addClass('active');
        } else {
            targetDiv.stop(true, true).slideUp(200);
            label.removeClass('active');
        }
    });

    $(".upload-box").on("click", function(e){
        e.stopPropagation(); // stop bubbling
        $("#fileInput").trigger("click");
    });

    // Open sidebar
    $(".toggle-sidebar-icon").on("click", function(){
        $("body").addClass("sidebar-open");
        $(".sidebar").addClass("active");
    });

    // Close sidebar
    $(".close-sidebar").on("click", function(){
        $("body").removeClass("sidebar-open");
        $(".sidebar").removeClass("active");
    });
});