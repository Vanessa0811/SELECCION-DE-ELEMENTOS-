function calcularMes() {
    let mes = Number(document.getElementById('input').value);

    switch (mes) {
        case 1:
            alert('El mes es Enero');
            break;
        case 2:
            alert('El mes es Febrero');
            break;
        case 10:
            alert('El mes es Octubre');
            break;
        default:
            alert('El mes no es Enero, febrero ni Octubre');
            break;
    }
}
