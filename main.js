function presionarBoton (numero)
{
    if (numero == 'c') {
        $('#inputOperacion').val('');
    }
    else if (numero == '=')
    {
        var resultado = eval ($('#inputOperacion').val());
        $('#inputOperacion').val(resultado);
    }
    else {
        $('#inputOperacion').val($('#inputOperacion').val() + numero);
    }
}