let formulario = document.querySelector('#form');
let tabla = document.querySelector('#tablita');

formulario.addEventListener('submit', function (e){
    e.preventDefault();

    let nombreNuevo = document.getElementById('exampleInputName1').value;
    let apellidoNuevo = document.getElementById('exampleInputLastName1').value;
    let equipoFavorito = document.getElementById('team').value;

    let trNuevo = document.createElement('tr');
    let tdNombre = document.createElement('td');
    let tdApellido = document.createElement('td');
    let tdEquipo = document.createElement('td');

    tdNombre.textContent = nombreNuevo;
    tdApellido.textContent = apellidoNuevo;
    tdEquipo.textContent = equipoFavorito;
    trNuevo.appendChild(tdNombre);
    trNuevo.appendChild(tdApellido);
    trNuevo.appendChild(tdEquipo);

    tabla.appendChild(trNuevo);

    formulario.reset();
})