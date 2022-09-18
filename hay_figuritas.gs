function hayFiguritas() {
  // Activar la librería Cheerio
  // En "Bibliotecas" presionar el "+",
  // Y poner como "ID de Secuencia de Comandos"
  // 1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0
  // Luego "Buscar" y "Añadir"
  
  webhook = 'REEMPLAZAR POR LA URL PROPIA';
  // URL donde se va a fijar si hay figuritas
  url = "https://www.zonakids.com/productos/pack-x-25-sobres-de-figuritas-fifa-world-cup-qatar-2022/";
  var html = UrlFetchApp.fetch(url).getContentText();
  var $ = Cheerio.load(html);
  var stock = $('input[data-store="product-buy-button"]').val();
  if(stock !="Sin stock"){
  var now = new Date();
  var fechayhora = Utilities.formatDate(now, 'America/Argentina/Buenos_Aires', 'dd/MM/yyyy HH:mm')
  var mensaje = "*ATENCIÓN* | Se encontraron figuritas en " + url + "\n" + fechayhora;
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
