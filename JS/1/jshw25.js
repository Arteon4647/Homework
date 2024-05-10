document.body.onmousemove = (event) => {
  coordinates.innerText = `Coordinates: X=${event.pageX}, Y=${event.pageY}`;
};

const coordinates = document.createElement("h1");
coordinates.textContent = coordinates;
document.body.appendChild(coordinates);
