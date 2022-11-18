/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  let today = new Date().toLocaleDateString("en-CA");
  const overdue = () => {
    /*let due = [];
    for (let i = 0; i < all.length; ++i) {
      if (all[i].dueDate == yesterday) {
        due.push(all[i]);
      }*/
    return all.filter((ob) => {
      return ob.dueDate < today;
    });
  };
  //return due;
  // Write the date check condition here and return the array of overdue items accordingly.
  // FILL YOUR CODE HERE
  // ..
  // ..
  // ..

  const dueToday = () => {
    /*let t = [];
    for (let i = 0; i < all.length; ++i) {
      if (all[i].dueDate == today) {
        t.push(all[i]);
      }*/
    return all.filter((ob) => {
      return ob.dueDate === today;
    });
  };
  //return t;
  // Write the date check condition here and return the array of todo items that are due today accordingly.
  // FILL YOUR CODE HERE
  // ..
  // ..
  // ..

  const dueLater = () => {
    /*let later = [];
    for (let i = 0; i < all.length; ++i) {
      if (all[i].dueDate == tomorrow) {
        later.push(all[i]);
      }*/
    return all.filter((ob) => {
      return ob.dueDate > today;
    });
  };
  //return later;
  // Write the date check condition here and return the array of todo items that are due later accordingly.
  // FILL YOUR CODE HERE
  // ..
  // ..
  // ..

  /*const toDisplayableList = (list) => {
    let result = [];
    for (let i = 0; i < list.length; ++i) {
      let str1 = list[i].title;
      let str2 = list[i].dueDate;
      if (list[i].completed == true) {
        if (list[i].dueDate == today) {
          let str3 = "[x] " + str1;
          result.push(str3);
        } else {
          let str3 = "[x] " + str1 + " " + str2;
          result.push(str3);
        }
        //result.push('[x]');
        //result.push(str1);
        //result.push(str2);
      } else {
        if (list[i].dueDate == today) {
          let str4 = "[ ] " + str1;
          result.push(str4);
        } else {
          let str4 = "[ ] " + str1 + " " + str2;
          result.push(str4);
        }
        //return str4;

        //result.push('[]');
        //result.push(str1);
        //result.push(str2);
      }
    }*/
  const toDisplayableList = (list) => {
    return list
      .map((ob) => {
        disp_status = ob.completed ? "[x]" : "[ ]";
        disp_date = ob.dueDate == today ? "" : ob.dueDate;

        return `${disp_status} ${ob.title} ${display_date}`;
      })
      .join("\n");
  };
  //return result.toString().split(",").join("\n");
  // Format the To-Do list here, and return the output string as per the format given above.
  // FILL YOUR CODE HERE
  // ..
  // ..
  // ..
  // return OUTPUT_STRING

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

/*const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
  */
module.exports = todoList;
