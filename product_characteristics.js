$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);

    const articul = urlParams.get('id');
    $.ajax({
      type: "GET",
      url: "uplotniteli.xml",
      dataType: "xml",
      success: function(xml) {
        $(xml).find('uplotnitel').each(function() {
            if ($(this).find('id').text() === articul) {
            var imgSrc = $(this).find('img').text();
            var name = $(this).find('number').text();
            var color = $(this).find('color').text();
            var material = $(this).find('material').text();
            var r1 = $(this).find('R1').text();
            var r2 = $(this).find('R2').text();
            var r3 = $(this).find('R3').text();
            var r4 = $(this).find('R4').text();
            var flanec = $(this).find('flanec').text();
            var lenta = $(this).find('lenta').text();
            var postavka = $(this).find('postavka').text();
            $('title').text('Уплотнитель ' + name);
            $('img.prod').attr('src', imgSrc);
            $('h2').text('Уплотнитель ' + name);
            $('div.characteristics').append($('<p>').text("Уплотнитель: ").append($('<span>').text(name)));
            $('div.characteristics').append($('<p>').text("Цвет: ").append($('<span>').text(color)));
            $('div.characteristics').append($('<p>').text("Материал: ").append($('<span>').text(material)));
            if(r1 != 0){
                $('div.characteristics').append($('<p>').text("R1: ").append($('<span>').text(r1)));
            }
            if(r2 != 0){
                $('div.characteristics').append($('<p>').text("R2: ").append($('<span>').text(r2)));
            }
            if(r3 != 0){
                $('div.characteristics').append($('<p>').text("R3: ").append($('<span>').text(r3)));
            }
            if(r4 != 0){
                $('div.characteristics').append($('<p>').text("R4: ").append($('<span>').text(r4)));
            }
            if(flanec !=  '-' && flanec){
                $('div.characteristics').append($('<p>').text("Фланец: ").append($('<span>').text(flanec)));
            }
            if(lenta !=  '-' && lenta){
                $('div.characteristics').append($('<p>').text("Лента: ").append($('<span>').text(lenta)));
            }
            if(postavka !=  '-'){
                $('div.characteristics').append($('<p>').text("Поставка: ").append($('<span>').text(postavka)));
            }
        }
        });
      }
    });
  });