form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const newToDo = input.value;
    if (newToDo) {
        todoList.push({
            text: newToDo,
            complete: false
        });
        localStorage.setItem("todo", JSON.stringify(todoList))
        document.getElementById("input").value = null;
    } else {
        alert("chưa nhập thông tin");
    }
    render();
});