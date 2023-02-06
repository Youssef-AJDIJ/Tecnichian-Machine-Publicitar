
$(function () {
    $("#icon").click(function () {
        $("nav").slideToggle(function () {
            $("nav").mouseleave(function () {
                $("nav").show(500);
            })
        });
    })
})
$(function () {
    $("#segunda").click(function () {
        $("#segund").slideToggle(500, function () {
            $("#segund").mouseleave(function () {
                $("#segund").hide();
            })
        });
    })
})
$(function () {
    $("#mutoh").click(function () {
        $("#ladoVideo").html('<video src="videos/video mutoh xperjet 1641.mp4" controls autoplay>');
    })
})
$(function () {
    $("#cnc").click(function () {
        $("#ladoVideo").html('<video src="videos/video machine CNC Servo motors.mp4" controls autoplay>');
    })
})
$(function () {
    $("#summa").click(function () {
        $("#ladoVideo").html('<video src="videos/video machine plotter summa.mp4" controls autoplay>');
    })
})
$(function () {
    $("#bodor").click(function () {
        $("#ladoVideo").html('<video src="videos/Laser con camara.mp4" controls autoplay>');
    })
})
$(function () {
    $("#dtf").click(function () {
        $("#ladoVideo").html('<video src="videos/video machine dtf Erick.mp4" controls autoplay>');
    })
})
$(function () {
    $("#farmacia").click(function () {
        $("#ladoVideo").html('<video src="videos/decrencent Farmacia .mp4" controls autoplay>');
    })
})
$(function () {
    $("#plasma").click(function () {
        $("#ladoVideo").html('<video src="videos/video machine plasma.mp4" controls autoplay>');
    })
})
$(function () {
    $("#smtjet").click(function () {
        $("#ladoVideo").html('<video src="videos/Installation machine 320 SMT JET with four heads -starfire- impression 3 Pass.mp4" controls autoplay>');
    })
})
$(function () {
    $("#teneth").click(function () {
        $("#ladoVideo").html('<video src="videos/Machine Plotter Teneth.mp4" controls autoplay>');
    })
})