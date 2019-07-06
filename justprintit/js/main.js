window.addEventListener("load", ()=>{

    // Remove Prealoder
    // document.querySelector(".loader-container").style.opacity = "0";
    // document.querySelector(".loader-container").style.zIndex = "-999999999999999999";

    // ================================================================================================ //

    // Side push menu
    document.querySelector(".toggle").addEventListener("click", ()=>{
        if(document.querySelector(".toggle").style.transform == "rotate(90deg)"){
            document.querySelector(".toggle").style.transform = "rotate(0deg)";
            document.querySelector(".navbar-collapse").style.left = "108px";
            document.querySelector(".navbar-collapse").style.opacity = "0";
        }else{
            document.querySelector(".toggle").style.transform = "rotate(90deg)";
            document.querySelector(".navbar-collapse").style.opacity = "1";
            document.querySelector(".navbar-collapse").style.left = "-108px";
        }

    });
    // ================================================================================================ //      
    // Slider auto play 
    $(function() {
        $('#dg-container').gallery({
            autoplay	:	true
        });
    });
    // ================================================================================================ //
    // designing section image effect
    $(".designing-item button").hover(        
        function(){
            var id = $(this).attr('id').substr(-1);
            // alert(id)
            $("#designing-item-"+id+" img").css("transform","scale(1.1)");
        },
        function(){
            var id = $(this).attr('id').substr(-1);
            $("#designing-item-"+id+" img").css("transform","scale(1)");
        }
    );
    // ================================================================================================ //
    // Startup section image effect
    $(".package-item button").hover(        
        function(){
            var id = $(this).attr('id').substr(-1);
            // alert(id)
            $(".package-"+id+" img").css("transform","scale(1.1)");
        },
        function(){
            var id = $(this).attr('id').substr(-1);
            $(".package-"+id+" img").css("transform","scale(1)");
        }
    );
    // ================================================================================================ //

});
