function hayWhiskey() {
  // Activar la librería Cheerio
  // En "Bibliotecas" presionar el "+",
  // Y poner como "ID de Secuencia de Comandos"
  // 1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0
  // Luego "Buscar" y "Añadir"
  
  webhook = 'REEMPLAZAR POR LA URL PROPIA';
  // URL donde se va a fijar si hay oferta en whisky
  const url = "https://www.cotodigital3.com.ar/sitios/cdigi/browse/catalogo-bebidas-bebidas-con-alcohol-whiskys/_/N-t0seih/";
  var html = UrlFetchApp.fetch(url).getContentText();
  var $ = Cheerio.load(html);
  var hay_oferta = false;
  var headings = $('h5').text();
  
  if (headings.includes('OFERTAS')) {
    hay_oferta = true;    
  }

  if(hay_oferta){
    var now = new Date();
    var fechayhora = Utilities.formatDate(now, 'America/Argentina/Buenos_Aires', 'dd/MM/yyyy HH:mm')
    var mensaje = "*ATENCIÓN* | Se encontraron ofertas de Whiskey en " + url + "\n" + fechayhora;
    var payload = {"text": mensaje};
    
    var options = {
      "method": "post", 
      "contentType": "application/json", 
      "muteHttpExceptions": true, 
      "payload": JSON.stringify(payload) 
    };

    try {
      UrlFetchApp.fetch(webhook, options);
    } catch(err) {
      Logger.log(err);
    }   
  }
}
