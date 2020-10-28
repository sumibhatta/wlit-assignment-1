// Make a toDo app that takes input from user and appends the input( as an object) to an array
let newEntry = true;
let toDoArray = [];
while (newEntry === true) { //This loop continues untill the user wants to stop adding to the list


    let eTitle = prompt('Enter title');
    let eDescription = prompt('Enter description');

    function toDoApp(eTitle, eDescription) { // This function uses inputs (title and description) then turn it into object and push them into array
        let toDo = {
            title: eTitle,
            description: eDescription
        };

        toDoArray.push(toDo);
        return toDoArray;
    }
    if (confirm('Do you want to add new ToDo?')) { //Asks user for the confirmation to add new todo list
        newEntry = true; //If user wishes to add new list, the while loop repeats 
        toDoApp(eTitle, eDescription)
    } else {
        newEntry = false; //else the array of objects is displayed on console and I quit!!
        console.log(toDoApp(eTitle, eDescription));
    }
}