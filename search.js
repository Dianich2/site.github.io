var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
      const searchValue = searchInput.value.toLowerCase();
      searchResults.innerHTML = '';

      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'uplotniteli.xml', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const xmlDoc = xhr.responseXML;
          const uplotniteli = xmlDoc.getElementsByTagName('uplotnitel');

          for (let i = 0; i < uplotniteli.length; i++) {
            const upl = uplotniteli[i];
            const name = upl.getElementsByTagName('number')[0].textContent.toLowerCase();
            const id = upl.getAttribute('id');

            if (name.includes(searchValue)) {
              const li = document.createElement("li");
              const a = document.createElement("a");
              a.textContent = name;
              a.setAttribute('href', 'product.html?id=' + id);
              li.appendChild(a);
              searchResults.appendChild(li);
            }
          }
          searchResults.style.display = searchResults.children.length > 0 ? 'block' : 'none';
        }
      };
      xhr.send();
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