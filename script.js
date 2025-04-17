function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }


  function loadVideo(card, videoUrl) {
    card.innerHTML = `
      <iframe src="${videoUrl}?autoplay=1" frameborder="0" allowfullscreen style="width: 100%; aspect-ratio: 9 / 16; border-radius: 12px;"></iframe>
      <p>${card.querySelector('p')?.innerText || ''}</p>
    `;
  }

