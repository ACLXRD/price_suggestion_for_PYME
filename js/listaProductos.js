productos = [];
productosAux = [];
inputId = document.getElementById('referenciaI');
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        var ref = document.getElementById('referenciaI').value;
        console.log('Enter')
        asignarDatos(ref);
        

    }
    
});
function asignarDatos(referencia) {
    var ViCod = referencia;
    var ViProd = ('m&m');
    var ViPreSD = ('3000');
    var ViPreF = ('3000');
    var ViDto = ('0');
    producto = {
        "cod": ViCod,
        "prod": ViProd,
        "preSD": ViPreSD,
        "preF": ViPreF,
        "dto": ViDto
    }
   
    productos.push(producto);
    console.log(productos);
    pintarProducto(productos);
   
}

function total(totalCompra) {
    console.log(totalCompra)
    
    $("#montoPago").empty();

        var divTotal = `Total: $ ${totalCompra} `
    
    $("#montoPago").append(divTotal)
}

function pintarProducto(productos) {
    var totalCompra = 0;
    $("#pro").empty();
    for (let i = 0; i <= productos.length; i++) {
        let divProducto =
            `
            <tr id="FilaProducto">
            <th scope="row">${i + 1}</th>
            <td id="Creferencia">${productos[i].cod}</td>
            <td>${productos[i].prod} </td>
            <td>${productos[i].preSD}</td>
            <td><input id="${i}" type="text" value=${productos[i].dto}></td>
            <td>${productos[i].preF}</td>
            </tr>
            `
        $("#pro").append(divProducto)

        inputDTO = document.getElementById(i);
        var descuento = 0
        totalCompra = totalCompra + parseFloat(productos[i].preF)
        inputDTO.addEventListener('keyup', function onEvent(e) {
            if (e.keyCode === 13) {
                productos[i].dto = document.getElementById(i).value;
                console.log(productos)
                descuento = (parseFloat(productos[i].dto) * parseFloat(productos[i].preSD)) / 100;
                console.log(descuento)
                productos[i].preF = parseInt(productos[i].preSD) - descuento;
                console.log('EnterDto')
                console.log(Creferencia);
                pintarProducto(productos);
                total(totalCompra);
            }
        });
        total(totalCompra);
    }
}

const facturar = document.getElementById("btnFacturar2").onclick = () =>{
    location.href = "mediosPago.html";
};











