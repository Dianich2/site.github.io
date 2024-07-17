const openFormButton = document.getElementById('openForm');
    const overlay = document.getElementById('overlay');
    const closeFormButton = document.getElementById('closeForm');

    openFormButton.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeFormButton.addEventListener('click', () => {
      overlay.style.display = 'none';
    });