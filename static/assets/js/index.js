document.addEventListener("DOMContentLoaded",()=>{
    var myElement = document.getElementById('pricing');
    var topPos = myElement.offsetTop;
    var myElement2 = document.getElementById('services');
    var topPos2 = myElement2.offsetTop;
    $("#price").click(()=>{
        $('html,body').animate({ scrollTop: topPos }, 'slow', function () {
                      });
    })
    $("#ser-op").click(()=>{
        $('html,body').animate({ scrollTop: topPos2-100 }, 'slow', function () {
                      });
    })
    $("#home").click(()=>{
        $('html,body').animate({ scrollTop: 0 }, 'slow', function () {
                      });
    })
})
document.addEventListener("DOMContentLoaded",()=>{
    
    $("#contact1").click(()=>{
        $('.ab-form').slideDown();
    })
    $("#contact2").click(()=>{
        $('.ab-form').slideDown();
    })
    $("#contact3").click(()=>{
        $('.ab-form').slideDown();
    })
    $("#contact4").click(()=>{
        $('.ab-form').slideDown();
    })
    $("#cancel-form").click(()=>{
        $('.ab-form').slideUp();
    })
    $("#form-sb").click(
    ()=>{
        console.log("hi")
        // $("#form-sb").attr("disabled","true")
        $("#load").css("display" , "flex");
    }
)
    
})