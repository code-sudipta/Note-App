const getInput=()=>{
    document.getElementsByClassName('screen')[0].style.display = "none"
    let userNote = document.getElementById('userInput').value;
    let notes;
    if(localStorage.getItem("user_notes") == null)
        notes = ["demo"]
    else
        notes = JSON.parse(localStorage.getItem("user_notes"))

    notes.push(userNote)
    // console.log(typeof(notes));
    
    localStorage.setItem("user_notes", JSON.stringify(notes))

    document.getElementById('modal-container1').style.display = "none"
    showNotes()
}

const createNote=()=>{
    document.getElementById('modal-container1').style.display = "flex"
    document.getElementById('userInput').value = ""
    document.getElementById("modaltitle").innerHTML = `Note ${(JSON.parse(localStorage.getItem("user_notes"))).length}` 
    document.getElementsByClassName('screen')[0].style.display = "block"
}

const closeModal=()=>{
    document.getElementById('modal-container1').style.display = "none"
    document.getElementsByClassName('screen')[0].style.display = "none"
}

const deleteNote=(nodeID)=>{
    let notes = JSON.parse(localStorage.getItem("user_notes"))
    let id = nodeID.substring(4)
    // console.log(Number.parseInt(id))
    notes.splice(Number.parseInt(id), 1)
    localStorage.setItem("user_notes", JSON.stringify(notes))
    showNotes()
    // console.log(id)
}

const showNotes=()=>{
    let userNote = JSON.parse(localStorage.getItem('user_notes'));
    let len = userNote.length
    let ihtml = ""
    for(let i = 1; i <len; i++)
    {
        ihtml += `<div class="notes scale-up-center2">
            <b>${i}</b>
            <div>
                ${userNote[i]}
            </div>
            <i class="delete fas fa-trash-alt" style="color: red; font-size: 24px; cursor: pointer;"  id="note${i}"; onclick = "deleteNote(this.id)"></i>
        </div>`
    }
    document.getElementsByClassName("notes-container")[0].innerHTML = ihtml
}

showNotes()