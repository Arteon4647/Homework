//  Завдання: Використовуючи fetch зробіть запит на посилання
// `https://jsonplaceholder.typicode.com/albums`
//  Виведіть дані з альбомів на екран, описавши функцію renderAlbums

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((albums) => renderAlbums(albums))
  .catch((err) => console.log(err));

function renderAlbums(albums) {
    albums.forEach((album) => {
        const {userId, id, title} = album;
        document.body.innerHTML += `
        <div>
        <p>${userId}</p>
        <p>${id}</p>
        <p>${title}</p>
        </div>
        `;
    });
}
