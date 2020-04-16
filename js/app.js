$(document).ready(function() {
    $("#guardar").on("click", function() {
        var nombre = $("#nomb").val();
        var telefono = $("#telefono").val();
        var direccion = $("#direccion").val();
        $.ajax({
            url: 'php/guardar.php',
            type: 'POST',
            dataType: 'html',
            data: {
                nombre: nombre,
                telefono: telefono,
                direccion: direccion
            },
            beforeSend: function() {},
            success: function(response) {
                mostrar();
                $("#nomb").val("");
                $("#telefono").val("");
                $("#direccion").val("");
                $("#nomb").focus();
            }
        })
    })

    function mostrar() {
        $.ajax({
            url: 'php/buscar.php',
            type: 'POST',
            dataType: 'html',
            data: {},
            beforeSend: function() {},
            success: function(response) {
                var d = JSON.parse(response);
                var txt = "";
                for (var i in d) {
                    txt += '<option value="' + d[i].id + '">' + d[i].nombre + '</option>';
                }
                $("#nombre").html(txt);
            }
        })
    }
    mostrar();
});