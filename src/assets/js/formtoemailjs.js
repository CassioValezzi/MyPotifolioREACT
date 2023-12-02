const named = document.getElementById("from_name");
const email = document.getElementById("reply_to");
const message = document.getElementById("message");
const teste = document.getElementById("cel");

const submit = document.getElementById("submit");


(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('vu1cixeqH75TR5QAg');
})(); 

function Emailjs(){
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // these IDs from the previous steps
            emailjs.sendForm('service_uheapjg', 'template_3t3e87k', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }



submit.addEventListener('click',()=>{
    if (named.value == '' || email.value == '' || message.value == ''){
        alert("Campos vazios")
    }
    else{
        alert("Sucesso! Sua Mensagem foi enviada.")
        Emailjs()
    }
})