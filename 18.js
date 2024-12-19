let addbutton = document.getElementById('add-button')
let list = document.getElementById('list-box')
let searchBtn = document.getElementById('search-btn')

addbutton.addEventListener('click',function(event){
    event.preventDefault()
    let toDoItem = document.getElementById('add-text')
    // alert(toDoitem.value)
    if(toDoItem.value && toDoItem.value !=null && toDoItem.value !=undefined){
        let createdItem = createdItemToDo(toDoItem.value)
        // <div id="list-box">
           // <div class = "newDiv">
           // <p> Task daindau </p>
           //<button>ошыр</button>
           //</div>
        // </div>
        list.appendChild(createdItem)
    }else{
        alert("Siz task toltyrmadynyz")
    }

    toDoItem.value = ''

})

searchBtn.addEventListener('click',function(event){
   event.preventDefault()
   let searchItem = document.getElementById('search-text')
    let items = list.querySelectorAll('div')

    items.forEach(item => {
        let pItem = item.querySelector('p').textContent

        if(searchItem.value == '' || searchItem.value == null){
            item.style.display = 'block'
        }else if(pItem.toLowerCase() == searchItem.value.toLowerCase()){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    
        // console.log("Parapgrap manderi:", pItem);
        
    });
    // console.log(items);
    searchItem.value =''  
})




function  createdItemToDo(newToDoitem){
    //<div>
    //     <p>Ui jumysyn jasau</p>
    //     <button>Ошыр</button>
    // </div>
    let newDiv = document.createElement('div')
    let perapgraph = document.createElement('p')
    let deleteButton = document.createElement('Button')

    newDiv.className = "newDiv"
    deleteButton.textContent = "Ошыр"
    perapgraph.textContent = newToDoitem

    deleteButton.addEventListener('click',function(){
        list.removeChild(newDiv)
    })

    newDiv.appendChild(perapgraph)
    newDiv.appendChild(deleteButton)

    return newDiv
}