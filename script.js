function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // SUBSTITUINDO O AVATAR
  // pegar a tag da img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg");
  } else {
    //se for dark mode, adiciona a imagem dark
    img.setAttribute("src", "./assets/avatar.jpg");
  }

  // SUBSTITUINDO TEXTO DO AVATAR
  const text = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    text.setAttribute("alt", "Foto do Rodrigo usando oculos escuros.");
  } else {
    text.setAttribute("alt", "Foto do Rodrigo.");
  }
}
