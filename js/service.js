const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

$( document ).ready(function() {
    document.getElementById("current_date").innerHTML = tomorrow.toLocaleDateString('en-GB');
});