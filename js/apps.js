const btnRegister = document.querySelector('.btnRegister');
const btnPayment = document.querySelector('.btnPayment');
const btnBook = document.querySelector('.btnBook');
const modal = document.querySelector('.modal');
const loader = document.querySelector('.load');
const textBold = document.querySelector('.text-b');
const textNormal = document.querySelector('.text-p');

window.addEventListener('click', () => {
    modal.style.display = "none";
})

btnRegister.addEventListener('click', () => {
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        textBold.innerHTML = "Successful !";
        textNormal.innerHTML = "Hello your Registration was successful Thank You.";
        modal.style.display = 'block';
    }, 3000);

})

btnPayment.addEventListener('click', () => {
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        textBold.innerHTML = "Payment Complete !";
        textNormal.innerHTML = "Your Order will get to you in a short time.";
        modal.style.display = 'block';
    }, 3000);

})

btnBook.addEventListener('click', () => {
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        textBold.innerHTML = "Booking Approved !";
        textNormal.innerHTML = "Thanks for reaching out to us.";
        modal.style.display = 'block';
    }, 3000);

})