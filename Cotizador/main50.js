function calcularPrecio() {
  var tipoMampara = document.getElementById('tipoMampara').value;
  var tipoVidrio = document.getElementById('tipoVidrio').value;
  var tirador = document.getElementById('Tirador').value;
  var ancho = parseFloat(document.getElementById('ancho').value);
  var alto = parseFloat(document.getElementById('alto').value);
  var cantidad = parseInt(document.getElementById('cantidad').value);

  var preciosMampara = {
    Collio: 1,
    1408: 0,
    19408: 0,
  };

  var preciosVidrio = {
    Inc: 2,
    Opa: 0,
    Dream: 0,
    Pacific: 0,
    Stipolite: 0,
  };

  var preciosTirador = {
    Si: 3,
    Collio: 0,
    ALUMINIO: 1,
  };

  
  var precioAlto = 1; 
  var precioAncho = 11; 

  if (
    !preciosMampara.hasOwnProperty(tipoMampara) ||
    !preciosVidrio.hasOwnProperty(tipoVidrio) ||
    !preciosTirador.hasOwnProperty(tirador)
  ) {
    alert("Tipo de mampara, tipo de vidrio o tirador no válido");
    return;
  }

  var precioMamparaPorMetroCuadrado = preciosMampara[tipoMampara];
  var precioVidrioPorMetroCuadrado = preciosVidrio[tipoVidrio];
  var precioTirador = preciosTirador[tirador];

  
  var precioTotalSinIVA =
    (precioMamparaPorMetroCuadrado + precioVidrioPorMetroCuadrado + precioTirador) *
    (alto * precioAlto) *
    (ancho * precioAncho) *
    cantidad;

  var iva = 21;
  var montoIVA = precioTotalSinIVA * iva;
  var precioTotalConIVA = precioTotalSinIVA + montoIVA;
  var neto = precioTotalSinIVA;

  
  const divResultado = document.createElement('div');
  divResultado.classList.add('resultado-flotante');

  divResultado.innerHTML = `
    <div class="factura-header">
      <img class="logo" src="mendo.jpg" alt="Logo de la empresa">
      <p class="empresa-nombre">MendoGlass</p>
      <p class="empresa-direccion">Pque. Ind. Norte 5 y 6 Las Heras, Mendoza</p>
      <p class="empresa-telefono">(261) 4473001</p>
      <button class="cerrar-btn" onclick="cerrarResultado()">Cerrar</button>
    </div>
    <p><strong>Tipo de Mampara:</strong> ${tipoMampara}</p>
    <p><strong>Tipo de Vidrio:</strong> ${tipoVidrio}</p>
    <p><strong>Tirador:</strong> ${tirador}</p>
    <p><strong>Alto:</strong> ${alto} metros</p>
    <p><strong>Ancho:</strong> ${ancho} metros</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <hr>
    <p><strong>Resultado Total:</strong> $ ${precioTotalConIVA.toFixed(2)} (Incluye IVA)</p>
    <p><strong>Porcentaje de IVA:</strong> ${iva}%</p>
    <p><strong>Neto:</strong> $ ${neto.toFixed(2)}</p>
    <button onclick="generarPDF()">Descargar PDF</button>
  `;

  document.body.appendChild(divResultado);
}

function cerrarResultado() {
  var resultadoFlotante = document.querySelector('.resultado-flotante');
  if (resultadoFlotante) {
    resultadoFlotante.remove();
  }
}

function generarPDF() {
  var tipoMampara = document.getElementById('tipoMampara').value;
  var tipoVidrio = document.getElementById('tipoVidrio').value;
  var tirador = document.getElementById('Tirador').value;
  var ancho = parseFloat(document.getElementById('ancho').value);
  var alto = parseFloat(document.getElementById('alto').value);
  var cantidad = parseInt(document.getElementById('cantidad').value);

  var preciosMampara = {
    Collio: 1,
    1408: 0,
    19408: 0,
  };

  var preciosVidrio = {
    Inc: 2,
    Opa: 0,
    Dream: 0,
    Pacific: 0,
    Stipolite: 0,
  };

  var preciosTirador = {
    Si: 3,
    Collio: 0,
    ALUMINIO: 1,
  };

  
  var precioAlto = 1; 
  var precioAncho = 11; 
  if (
    !preciosMampara.hasOwnProperty(tipoMampara) ||
    !preciosVidrio.hasOwnProperty(tipoVidrio) ||
    !preciosTirador.hasOwnProperty(tirador)
  ) {
    alert("Tipo de mampara, tipo de vidrio o tirador no válido");
    return;
  }

  var precioMamparaPorMetroCuadrado = preciosMampara[tipoMampara];
  var precioVidrioPorMetroCuadrado = preciosVidrio[tipoVidrio];
  var precioTirador = preciosTirador[tirador];

  var precioTotalSinIVA =
    (precioMamparaPorMetroCuadrado + precioVidrioPorMetroCuadrado + precioTirador) *
    (alto * precioAlto) *
    (ancho * precioAncho) *
    cantidad;

  var iva = 21;
  var montoIVA = precioTotalSinIVA * iva;
  var precioTotalConIVA = precioTotalSinIVA + montoIVA;
  var neto = precioTotalSinIVA;

  // Crear el PDF
  var pdf = new jsPDF();

  // Logo y encabezado
  var logo = new Image();
  logo.src = 'mendo.jpg';
  pdf.addImage(logo, 'JPEG', 15, 10, 40, 40);
  pdf.setFontSize(12);
  pdf.text('MendoGlass', 60, 30);
  pdf.text('Pque. Ind. Norte 5 y 6 Las Heras, Mendoza', 60, 40);
  pdf.text('(261) 4473001', 60, 50);

  // Información de la factura
  pdf.text('Factura de Compra', 15, 80);
  pdf.text(`Tipo de Mampara: ${tipoMampara}`, 15, 90);
  pdf.text(`Tipo de Vidrio: ${tipoVidrio}`, 15, 100);
  pdf.text(`Tirador: ${tirador}`, 15, 110);
  pdf.text(`Alto: ${alto} metros`, 15, 120);
  pdf.text(`Ancho: ${ancho} metros`, 15, 130);
  pdf.text(`Cantidad: ${cantidad}`, 15, 140);

  // Línea separadora
  pdf.line(15, 150, 195, 150);

  // Resultados
  pdf.text(`Resultado Total: $${precioTotalConIVA.toFixed(2)} (Incluye IVA)`, 15, 160);
  pdf.text(`Porcentaje de IVA: ${iva}%`, 15, 170);
  pdf.text(`Neto: $${neto.toFixed(2)}`, 15, 180);

  // Logo y línea de firma
  pdf.addImage(logo, 'JPEG', 15, 200, 40, 40);
pdf.text('MendoGlass', 60, 210);  // Agregar el nombre de la empresa
pdf.text('Pque. Ind. Norte 5 y 6 Las Heras, Mendoza', 60, 220);  // Agregar la dirección
pdf.text('(261) 4473001', 60, 230);  // Agregar el número de teléfono

  // Guardar el PDF con un nombre específico
  pdf.save('Mendoglass.pdf');
}
