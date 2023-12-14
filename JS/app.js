const BODY = document.querySelector("body");

// understand this
BODY.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl1 = document.createElement("span");
  const spanEl2 = document.createElement("span");
  spanEl2.classList.add("fighter");
  spanEl1.style.left = xPos + "px";
  spanEl1.style.top = yPos + "px";
  spanEl2.style.left = xPos + "px";
  spanEl2.style.top = yPos + "px";
  let size = Math.floor(Math.random() * 100);
  spanEl1.style.width = size + "px";
  spanEl1.style.height = size + "px";
  spanEl2.style.width = size + "px";
  spanEl2.style.height = size + "px";
  BODY.append(spanEl1, spanEl2);
  setTimeout(() => {
    spanEl1.remove();
    spanEl2.remove();
  }, 5000);
});
