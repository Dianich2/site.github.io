$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "uplotniteli.xml",
      dataType: "xml",
      success: function(xml) {
        // Найдем все элементы "uplotnitel" внутри "car_uplotniteli"
        var $uplotnitelItems = $(xml).find('uplotnitelis > samokley_uplotniteli > uplotnitel');
        var itemsPerPage = 10; // количество товаров на странице
        var currentPage = 1;
        var totalPages = Math.ceil($uplotnitelItems.length / itemsPerPage);
  
        // Функция для отображения товаров на странице
        function displayProducts(page) {
          $('table#products tbody').empty(); // Очищаем содержимое таблицы
          var startIndex = (page - 1) * itemsPerPage;
          var endIndex = startIndex + itemsPerPage;
          $uplotnitelItems.slice(startIndex, endIndex).each(function() {
            // Создаем новую строку таблицы
            var newRow = $('<tr>');
            var adr = 'product.html?id=' + $(this).find('id').text();
            // Добавляем данные из XML в ячейки строки
            newRow.append($('<td>').attr('class', 'first').append($('<a>').attr('href', adr).append($('<img>').attr('src', $(this).find('img').text()))));
            newRow.append($('<td>').attr('class', 'second').append($('<a>').attr('href', adr).text($(this).find('number').text())));
            newRow.append($('<td>').attr('class', 'third').append($('<a>').text('Заказать').attr('href', adr).attr('class', 'last')));
  
            // Добавляем новую строку в таблицу
            $('table#products tbody').append(newRow);
          });
  
          // Отображаем пагинацию
          displayPagination(page, totalPages);
        }
  
        // Функция для отображения пагинации
        function displayPagination(currentPage, totalPages) {
          var $pagination = $('#pagination');
          $pagination.empty(); // Очищаем пагинацию
  
          // Создаем ссылки для пагинации
          for (var i = 1; i <= totalPages; i++) {
            var $pageLink = $('<a>').attr('href', '#').text(i);
            if (i === currentPage) {
              $pageLink.addClass('active');
            }
            $pageLink.click(function() {
              currentPage = parseInt($(this).text());
              displayProducts(currentPage);
            });
            $pagination.append($pageLink);
          }
        }
  
        // Отображаем первую страницу
        displayProducts(currentPage);
      }
    });
  });