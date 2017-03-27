/**
 * Created by josh on 25/3/17.
 */

$(document).ready(function() {
    $("select#category option").each(function(index, el) {
        if (location.pathname.indexOf($(el).val()) == 0) {
            $(el).attr("selected", "selected");
            $("select#category").change(function() {
                window.location.href = $("select#category").val();
            })
        }
    });

    setInterval(function() {
        $(".sale-time").each(function(index, el) {
            var timenow = Date.now() / 1000;
            var timeend = Date.parse($(el).data("sale-time")) / 1000;
            var difference = (timeend - timenow);

            if (difference < 0) {
                $(el).html("Sale Has Ended - More Info");
                return;
            }
            var hours = Math.floor(difference / 3600);
            difference %= 3600;
            var minutes = Math.floor(difference / 60);
            var seconds = Math.floor(difference % 60);
            $(el).html("Sale Ends In " + (hours > 0 ? hours + 'h ' : '') + minutes + "m " + seconds + "s");
        }
    )}, 1000);
});