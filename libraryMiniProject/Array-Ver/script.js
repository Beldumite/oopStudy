const books = [
  {
    name: "The Hobbit",
    genre: "Fantasy",
    author: "J.R.R Tolkien",
    release: 1937,
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
  },
  {
    name: "1984",
    genre: "Dystopian",
    author: "George Orwell",
    release: 1949,
    image:
      "https://m.media-amazon.com/images/I/61WZT9dUtGL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    release: 1960,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVo4KYmcwAMzNQy2_Larrs0NfPGXuHEwkVQ&s",
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    author: "J.K. Rowling",
    release: 1997,
    image:
      "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg    ",
  },
  {
    name: "xavier",
    genre: "Psycological horror/depression",
    author: "Martian",
    release: 2008,
  },
];

const CardContainer = document.querySelector("#CardContainer");

books.map((book) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <a href=""
            ><img
              src="${book.image}"
              alt=""
            />
            <div class="cardDesc">
              <h3 class="name">${book.name}</h3>
              <p class="genre">${book.genre}</p>
              <p class="author">${book.author}</p>
              <p class="release">${book.release}</p>
            </div>
        </a>`;
  CardContainer.appendChild(card);
});
