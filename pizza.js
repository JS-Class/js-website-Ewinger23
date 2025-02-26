const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    $("#submit").addEventListener("click", () => {
        const name = $("#name").value;
        const address = $("#address").value;
        const phone = $("#phone").value;
        const notes = $("#notes").value;
        
        let errorMessage = "";

        if (name == "") {
            errorMessage += "Please enter your name.\n";
            $("#name").focus();
        };
        if (address == "") {
            errorMessage += "Please enter your address.\n";
            $("#address").focus();
        }
        if (phone == "") {
            errorMessage += "Please enter your phone number.\n";
            $("#phone").focus();
        }

        if (errorMessage == "") {
            $("#submit").submit();
        } else {
            alert(errorMessage);            
        }
    });


    $("#clear").addEventListener("click", () => {
        $("#name").value = "";
        $("#address").value = "";
        $("#phone").value = "";
        $("#notes").value = "";

       $("#name").focus();
    });
});