function hayWhiskey() {
  // Activar la librería Cheerio
  // En "Bibliotecas" presionar el "+",
  // Y poner como "ID de Secuencia de Comandos"
  // 1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0
  // Luego "Buscar" y "Añadir"
  
  webhook = 'REEMPLAZAR POR LA URL PROPIA';
  // URL donde se va a fijar si hay figuritas
  url = "https://www.cotodigital3.com.ar/sitios/cdigi/browse/catalogo-bebidas-bebidas-con-alcohol-whiskys/_/N-t0seih?Dy=1&Nf=product.endDate%7CGTEQ%2B1.685664E12%7C%7Cproduct.startDate%7CLTEQ%2B1.685664E12&Nr=AND(product.sDisp_200%3A1004%2Cproduct.language%3Aespa%C3%B1ol%2COR(product.siteId%3ACotoDigital))";
  var html = UrlFetchApp.fetch(url).getContentText();
  var $ = Cheerio.load(html);
  var stock = $("//h5[contains(text(), 'OFERTAS')]");
  
  if(stock){
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
