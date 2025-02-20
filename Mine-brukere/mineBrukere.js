function leggTilPremie() {
    let navnInput = document.getElementById('premieNavn').value;
    let poengInput = document.getElementById('premiePoeng').value;

    if (navnInput && poengInput) {
        let premieListe = document.getElementById('premieListe');
        let nyPremie = document.createElement('li');
        nyPremie.className = 'list-group-item d-flex justify-content-between align-items-center';
        nyPremie.innerHTML = `${navnInput} - ${poengInput} poeng 
                              <button class="btn btn-danger btn-sm" onclick="slettPremie(this)">Slett</button>`;
        premieListe.appendChild(nyPremie);

        // Tøm inputfeltene
        document.getElementById('premieNavn').value = '';
        document.getElementById('premiePoeng').value = '';
    } else {
        alert('Vennligst fyll ut alle feltene.');
    }
}

function slettPremie(button) {
    let li = button.parentElement;
    li.remove();
}
