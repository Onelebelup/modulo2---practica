let name = "";

const nameInput = document.getElementById("nameInput");
const parrafo = document.getElementById("parrafo")

function updateparrafo() {
    if (name.trim()) {
        parrafo.textContent = `esto es un ejemplo de uso de JS ${name}`;
    } else {
        parrafo.textContent = `esto es un ejemolo de uso de JS`;
    }
}

nameInput.addEventListener('input', function(event) {
    name = event.target.value;
    updateparrafo();
})
updateparrafo();