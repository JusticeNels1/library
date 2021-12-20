let myLibrary = [
                // { 
                // title: "Moby Dick",
                // author:"Ernest Hemmingway",
                // pages: 0,
                // read: false
                // },
                // {
                // title: "From The Westside",
                // author: "Yo Momma",
                // pages: 0,
                // read: true
                // },
                // {
                // title: "Killa Coppas",
                // author: "Da Feds",
                // pages:0,
                // read: false
                // }
];

class Book {

    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
};

// const deleteBtn = document.getElementById("delete")
const submit = document.getElementById("submit")

submit.addEventListener('click',e => {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value    
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked
    
    changeDOM(addBookToLibrary(title,author,pages,read))
})


function addBookToLibrary (title,author,pages,read) {
    
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    return [title,author,pages,read];
};

const table = document.getElementById("table")

//Functionality For Previous Entryies Stored in MyLibrary on startup
// function titleDisplay(library) {
//     library.forEach(ele => {
//         changeDOM(ele.title,ele.author,ele.pages,ele.read)
//     });
// };

let changeDOM = (arr) => {
    let newRow = document.createElement("tr")

    //Table Content
    const bookTitle = document.createElement("td")
    const bookAuthor = document.createElement("td")
    const bookPages = document.createElement("td")
    
    //Read Button
    const bookRead = document.createElement("td")
    const readBtn = document.createElement("input");
    const readImg = document.createAttribute("type");
    
    readImg.value = "image";
    readBtn.className = "readbtn";
    arr[3] == true ? (readBtn.src = "images/checkmark.png" ,  readBtn.checked = true) : readBtn.src = "images/circled-x.png";

    //Trash Button
    const deleteEntry = document.createElement("td")
    const deleteBtn = document.createElement("input");
    const deleteImg = document.createAttribute("type");
    
    
    deleteImg.value = "image";
    deleteBtn.className = "deletebtn";
    deleteBtn.src = "images/red_trash_can.png";
    
    table.append(newRow);
    
    //Table Book Data
    newRow.append(bookTitle);
    newRow.append(bookAuthor);
    newRow.append(bookPages);
    newRow.append(bookRead);
    
    newRow.append(deleteEntry);
    
    bookTitle.append(arr[0]);
    bookAuthor.append(arr[1]);
    bookPages.append(arr[2]);
    bookRead.append(readBtn);

    readBtn.setAttributeNode(readImg);
    
    deleteEntry.append(deleteBtn);
    deleteBtn.setAttributeNode(deleteImg);
}


            
function openNav(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}


table.addEventListener("click",e => {
    let readBtns = Array.from(document.querySelectorAll(".readbtn"))
    
    if (e.target.classList.contains("readbtn")){
        const idx = readBtns.indexOf(e.target)
        
        if (e.target.checked == true) {
            e.target.checked = false
            e.target.src = "images/circled-x.png"
            myLibrary[idx].read = false
        }
        
        else if (e.target.checked == false) {
            e.target.checked = true
            e.target.src = "images/checkmark.png"
            myLibrary[idx].read = true
        };
        
        console.log("------------------");
    }   
    
    if (e.target.classList.contains("deletebtn")){
        let elem = e.target.parentElement.parentElement
        elem.parentNode.removeChild(elem);
        
    }
})




