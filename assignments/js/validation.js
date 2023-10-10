$(document).ready(function(){

    $("#btn").click(function(){
       if($("#name").val() == ""){
        $("#error").html("Please enter your name")
       }
       else if($("#email").val() ==""){
        $("#error2").html("Please enter your emai")
    }
   else if($("#phone").val() ==""){
        $("#error3").html("Please enter your phone")
    }
    else if($("#subject").val() ==""){
        $("#error4").html("Please enter your subject")
    }
    else if($("#message").val() ==""){
        $("#error5").html("Please enter your message")
    }
    else{
        $("form").submit()
    }

    })
})