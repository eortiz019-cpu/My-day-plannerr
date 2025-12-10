const chatBubble = document.getElementById("chat-bubble");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

chatBubble.addEventListener("click", () => {
    chatBox.classList.toggle("active");
});

closeChat.addEventListener("click", () => {
    chatBox.classList.remove("active");
});

/* ============================================================
   NUEVA FUNCIÓN – Agregar imágenes dinámicas a la galería
============================================================ */

const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

btnAgregarImagen.addEventListener("click", function () {
  const url = inputImagen.value.trim();

  if (!url) {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  const col = document.createElement("div");
  col.classList.add("col-md-4");

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen agregada por el usuario";
  img.classList.add("img-fluid", "rounded", "shadow");

  col.appendChild(img);
  galeria.appendChild(col);

  inputImagen.value = "";
});