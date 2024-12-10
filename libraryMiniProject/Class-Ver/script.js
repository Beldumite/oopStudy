// ini secara dasar adalah website daftar buku berbasis card yang dinamis
// cardnya itu ga manual di tambah di html tapi di js
// ini gw pake class, ada versi yang make array tapi gw belum coba
class book {
  constructor(name, genre, author, release, image) {
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.release = release;
    this.image = image;
  }

  // main function
  createCard() {
    const container = document.querySelector("#cardContainer");
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <a href=""
            ><img
              src="${this.image}"
              alt=""
            />
            <div class="cardDesc">
              <h3 class="name">${this.name}</h3>
              <p class="genre">${this.genre}</p>
              <p class="author">${this.author}</p>
              <p class="release">${this.release}</p>
            </div>
          </a>
    `;
    container.appendChild(card);
  }
}

function createNewBook(name, genre, author, release, image) {
  const newBook = new book(name, genre, author, release, image);
  newBook.createCard();
}

createNewBook(
  "Between Earth and Sky",
  "Fantasy",
  "Rebecca Roanhorse",
  2024,
  "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534437708/mirrored-heavens-9781534437708.jpg"
);

createNewBook(
  "The Hobbit",
  "Fantasy",
  "J.R.R. Tolkien",
  1937,
  "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG"
);

createNewBook(
  "Dune",
  "Science Fiction",
  "Frank Herbert",
  1965,
  "https://static.wixstatic.com/media/e61731_f2bae0ff5ad04a749992a7e923fec0cc~mv2.jpg/v1/fill/w_980,h_1527,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e61731_f2bae0ff5ad04a749992a7e923fec0cc~mv2.jpg"
);

createNewBook(
  "Harry Potter and the Philosopher’s Stone",
  "Fantasy",
  "J.K. Rowling",
  1997,
  "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg"
);
