// console.log('you are in ');

let btn = document.getElementById('addBtn');
showNotes()
// function to add text
btn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes()
});


// function to show notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
    })

    let notesElm = document.getElementById("notes");
    // console.log(html)
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<p>Nothing to show! Use "Add a Note" section above to add notes.<p>`;
    }
}

//function to delete notes

function deleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    notesObj.splice(index, 1);
    // console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// function to serch txt

let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {
    console.log('i am in search')
    let inputVal = search.value;
    let notesCards = document.getElementsByClassName('noteCard');

    Array.from(notesCards).forEach(function (element) {

        let cardText = element.getElementsByTagName('p')[0].innerText;

        if (cardText.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })

})