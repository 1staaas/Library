function Library(title, author, pages) {
    this.title= title;
    this.author= author;
    this.pages= pages;
}
document.addEventListener("DOMContentLoaded", function() {
    const addBook= document.getElementById("addBook");
    const hide= document.getElementById("hide");
    const title= document.getElementById("title");
    const author= document.getElementById("author");
    const pages= document.getElementById("pages");
    const confirmBook= document.getElementById("confirmBook");
    const cancelBook= document.getElementById("cancelBook");

    let myLib= [];
    let bookCount= 0;

    addBook.addEventListener("click", function() {
        hide.style.display= "block";
    });

    cancelBook.addEventListener("click", function() {
        hide.style.display= "none";
    });


    confirmBook.addEventListener("click", function() {
        const Book= new Library(title.value, author.value, pages.value);
        bookCount++;
        addBookToLibrary(Book);
        displayLibrary(Book);
        InsertLibrary(Book);
        hide.style.display= "none";
    });

    function addBookToLibrary(Book) {
        for(let i=0; i < bookCount; i++) {
            myLib[i]= Book;
        }
    }

    function displayLibrary(Book) {
        for(let i=0; i < bookCount; i++) {
            console.log(`Book ${i+1}:`)
            console.log(`Title: ${myLib[i].title}`);
            console.log(`Author: ${myLib[i].author}`);
            console.log(`Pages: ${myLib[i].pages}`);
        }
    }

    function InsertLibrary(Book) {
        const lib= document.getElementById("lib");
        let bookElement= document.createElement("div");
        for(let i=0; i < bookCount; i++) {
            bookElement.innerHTML= `
                <div class="bookBox">
                    <p>Title: ${myLib[i].title}</p>
                    <p>Author: ${myLib[i].author}</p>
                    <p>Pages: ${myLib[i].pages}</p>
                </div>
                <br>
            `;
            lib.append(bookElement);
        }
    }

});

