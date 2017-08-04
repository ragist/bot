$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/cypherian09@gmail.com", 
        method: "POST",
        data: {
             email: $('.btnn').val(),
        },
        dataType: "json"
    })
 