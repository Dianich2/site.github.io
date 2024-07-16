var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults column');
    var len = 0;
    fetch('uplotniteli.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'application/xml');
      const uplotniteliElements = doc.getElementsByTagName('uplotnitel');
      const catalog = Array.from(uplotniteliElements).map(element => ({
        id: parseInt(element.querySelector('id').textContent),
        img: element.querySelector('img').textContent,
        number: element.querySelector('number').textContent,
        material: element.querySelector('material').textContent,
        color: element.querySelector('color').textContent,
        postavka: element.querySelector('postavka').textContent
      }));

      searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        const matchingItems = catalog.filter(item =>
          item.number.toLowerCase().includes(searchTerm) ||
          item.material.toLowerCase().includes(searchTerm) ||
          item.color.toLowerCase().includes(searchTerm) ||
          item.postavka.toLowerCase().includes(searchTerm)
        );
        len = matchingItems.length;
        matchingItems.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.number}`;
          listItem.addEventListener('click', () => {
            // Перенаправление на страницу с подробной информацией об уплотнителе
            searchResults.style.display = 'none';
            window.location.href = `product.html?id=${item.id}`;
          });
          searchResults.appendChild(listItem);
        });
      });
      searchInput.addEventListener('input', function() {
        if (searchInput.value.length === 0 || len === 0) {
          searchResults.style.display = 'none';
          searchResults.style.zIndex = '0';
        }
        else{
          searchResults.style.display = 'block';
          searchResults.style.zIndex = '10';
        }
      });
    })
    .catch(error => {
      console.error('Ошибка загрузки данных:', error);
    });

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const searchValue = searchInput.value.toLowerCase();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'uplotniteli.xml', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        var t = false;

        const uplotniteli = xmlDoc.getElementsByTagName('uplotnitel');

        for (let i = 0; i < uplotniteli.length; i++) {
          const upl = uplotniteli[i];

          const name = upl.getElementsByTagName('number')[0].textContent.toLowerCase();
          const id = upl.getElementsByTagName('id')[0].textContent.toLowerCase();

          if (name.includes(searchValue)) {
            window.location.href = `product.html?id=${id}`;
            t = true;
            break; 
          }
        }
        if(!t){
          window.location.href = `copy.html`;
        }
      }
    };
    xhr.send();
  }
});
const but = document.getElementsByTagName('button')[0];
but.addEventListener('click', function(event) {
    const searchValue = searchInput.value.toLowerCase();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'uplotniteli.xml', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var t = false;
        const xmlDoc = xhr.responseXML;
        const uplotniteli = xmlDoc.getElementsByTagName('uplotnitel');

        for (let i = 0; i < uplotniteli.length; i++) {
          const upl = uplotniteli[i];

          const name = upl.getElementsByTagName('number')[0].textContent.toLowerCase();
          const id = upl.getElementsByTagName('id')[0].textContent.toLowerCase();

          if (name.includes(searchValue)) {
            window.location.href = `product.html?id=${id}`;
            t = true;
            break; 
          }
        }
        if(!t){
          window.location.href = `copy.html`;
        }
      }
    };
    xhr.send();
});
