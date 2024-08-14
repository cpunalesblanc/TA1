document.getElementById("regBtn").addEventListener("click", function() {
    const terminos = document.getElementById("terminos").checked;

    if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();
});


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}