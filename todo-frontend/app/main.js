const BACKEND_ROOT = "http://localhost:8080";

loadTodos();

function deleteTodo(id) {

    fetch(BACKEND_ROOT + "/todos/" + id, {
        method: 'DELETE',
        mode: 'cors'
    }).then(_ => loadTodos());

}

function loadTodos() {

    document.querySelector('#tasks').innerHTML = 'Loading...';

    fetch(BACKEND_ROOT + "/todos")
        .then(res => res.json())
        .then(body => {
            document.querySelector('#tasks').innerHTML = '';
            let content = body.content;
            for(let todo of content){
                if(todo.id === undefined){
                    continue;
                }
                document.querySelector('#tasks').innerHTML += `
                    <div class="task">
                        <span style="flex-grow: 8"id="taskname">
                            ${todo.name}
                        </span>
                        <button onclick="deleteTodo(${todo.id})" style="flex-grow: 1"class="complete">
                            &#x2713;
                        </button>
                        <button onclick="deleteTodo(${todo.id})" style="flex-grow: 1"class="delete">
                            &#x2715;
                        </button>
                    </div>`;
            }
        });

}

document.querySelector('#add').onclick = function(){
    if(document.querySelector('#addTask input').value.length == 0){
        alert("Please Enter a Task");
    }else{
        fetch(BACKEND_ROOT + "/todos", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: document.querySelector('#addTask input').value})
        }).then(_ => loadTodos());
    }
}