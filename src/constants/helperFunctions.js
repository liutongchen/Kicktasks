export function findClickedTodo(e) {
    const clickedTodoId = parseInt(e.target.parentNode.getAttribute("id"));
    return clickedTodoId;
}

export function changeTimer(inpId, operationType) {
    const inpDiv = document.getElementById(inpId);
    let value = inpDiv["value"] === "" ? inpDiv.getAttribute("placeholder") : inpDiv["value"];
    value = +value;
    if (operationType === "+") {
        value += 1;
    } else if (operationType === "-" && value - 1 >= 0) {
        value -= 1;
    }
    inpDiv["value"] = value;
}

export function isTimerValid(inp) {
    return (inp >= 0);
}

export function chooseOther(parentNodeId) {
    //create <option>Other</option>
    const optionNode = document.createElement("option");
    const text = document.createTextNode("Other");

    optionNode.setAttribute("value", "");
    optionNode.appendChild(text);
    document.getElementById(parentNodeId).appendChild(optionNode);
}

export function getDurationNum(durationString) {
    let durationNum = +(durationString.slice(0, durationString.length - 3));
    return durationNum;
}

    /*
    //create an input node if "other" is chosen
    if (document.getElementById(parentNodeId).children.length === 1) {
        let event = new Event("change");
        document.getElementById(parentNodeId).dispatchEvent(event);
        updateOptions(parentNodeId);
    }
}



function updateOptions(parentNodeId) {
    const parentDiv = document.getElementById(parentNodeId);
    if (!parentDiv.value || parentDiv.value === "") {
        let other = prompt("Please add a new task: ");
        if (!other) {return false;}
        const node = document.createElement("option");
        const text = document.createTextNode(other);
        node.appendChild(text);
        parentDiv.insertBefore(node, parentDiv.firstChild);
        return other;
    }
}

/*
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
    const currentToDoList = this.state.todoList;
    nextProps.todoList.forEach((currentVal, index) => {
        if (currentToDoList.length < nextProps.todoList.length ||
            !objectsAreSame(currentVal, currentToDoList[index], ["doing", "done"])) {
            this.setState({
                todoList: nextProps.todoList
            });
        }
    });
}
    */