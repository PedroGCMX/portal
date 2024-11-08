function revealPhotos() {
  const photoGallery = document.querySelector(".galeria");
  const title = document.querySelector(".box-title");
  const msg = document.getElementById("msg-dica");
  const audio = document.getElementById("myAudio");

  // Verificação dos elementos antes de manipulá-los
  if (photoGallery && title && msg && audio) {
    // Controle de reprodução do áudio
    toggleAudio(audio);

    // Exibe a galeria e o título, e esconde a mensagem de dica
    title.classList.add("visible");
    photoGallery.classList.add("visible");
    msg.style.display = "none";
  } else {
    console.warn("Um ou mais elementos não foram encontrados na página.");
  }
}

function toggleAudio(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Seleciona o overlay, a polaroid e o texto da legenda dentro do overlay
const overlay = document.getElementById("polaroidOverlay");
const overlayImage = document.getElementById("overlayImage");
const overlayCaption = document.getElementById("overlayCaption");

// Adiciona um evento de clique em todas as polaroids
document.querySelectorAll(".polaroid").forEach((polaroid) => {
  polaroid.addEventListener("click", () => {
    const img = polaroid.querySelector("img"); // Seleciona a imagem dentro da polaroid clicada
    const caption = polaroid.querySelector(".caption"); // Seleciona a legenda dentro da polaroid clicada

    overlayImage.src = img.src; // Define a imagem do overlay como a mesma da polaroid clicada
    overlayCaption.textContent = caption.textContent; // Define a legenda do overlay
    overlay.classList.add("visible"); // Exibe o overlay
  });
});

// Fecha o overlay ao clicar fora da polaroid ou pressionar "Esc"
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    // Garante que apenas o clique fora da polaroid feche o overlay
    overlay.classList.remove("visible");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Fecha o overlay ao pressionar "Esc"
    overlay.classList.remove("visible");
  }
});
