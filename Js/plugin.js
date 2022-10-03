

$('.navbar-nav .nav-item a').click(function(e) {

    $('.navbar-nav .nav-item a').removeClass('active');

    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "anas.coding404@gmail.com",
        Password : "734914929Anas",
        To : 'anes.nasser@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("name").value,
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}