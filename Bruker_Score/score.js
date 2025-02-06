function visPremieSkjema() {   //Hviser selve boksen:
    let premieSkjema = document.getElementById('premieSkjema');
    premieSkjema.classList.remove('d-none');
}

function skjulPremieSkjema() { //skjuler selve boksen:
    let premieSkjema = document.getElementById('premieSkjema');
    premieSkjema.classList.add('d-none');
}
//Lager en premie:
function leggTilPremie() {
    let navnInput = document.getElementById('premieNavn').value;  //Henter elementer:
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

function slettPremie(button) {  //Sletter premiene som er lagt til.
    let li = button.parentElement;
    li.remove();
}