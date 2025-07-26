function toggleMenu() {
    const menu = document.getElementById("menu-slide");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
  }

  function toggleTextoFinneo() {
    const curta = document.querySelector('.texto-finneo.curta');
    const completa = document.querySelector('.texto-finneo.completa');
    const botao = document.querySelector('.btn-vermais');

    if (completa.classList.contains('hidden')) {
      completa.classList.remove('hidden');
      botao.textContent = 'Ver menos';
    } else {
      completa.classList.add('hidden');
      botao.textContent = 'Ver mais';
    }
  }