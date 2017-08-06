document.getElementById('submit').addEventListener('click', sendForm);

function sendForm(e) {
	e.preventDefault();
    const form = document.getElementById('form');
    if (form.checkValidity()) {
    	alert('Form is OK');  
    } else {
    	alert('Form is not OK');
    }   
}

$(function() {
    $('form input[type=submit]').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/cypherian09@gmail.com", 
        method: "POST",
        data: {
            email: $('#email').val(),
            
        },
        dataType: "json"
    });
}
