export function findClickedTodo(e) {
    const clickedTodoId = parseInt(e.target.parentNode.getAttribute("id"));
    return clickedTodoId;
}

export function objectsAreSame(x, y, propertyNameList) {
    let objectsAreSame = true;
    for (let property in propertyNameList) {
        if (x[property] !== y[property]) {
            return objectsAreSame = false;
        }
    }
    return objectsAreSame;
}

function componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps!");//test
    console.log("B", this.state.todoList);//test
    const currentToDoList = this.state.todoList;
    nextProps.todoList.forEach((currentVal, index) => {
        if (currentToDoList.length < nextProps.todoList.length ||
            !objectsAreSame(currentVal, currentToDoList[index], ["doing", "done"])) {
            this.setState({
                todoList: nextProps.todoList
            });
        }
    });
    console.log("A", this.state.todoList);//test
}