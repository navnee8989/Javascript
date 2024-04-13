const { users } = require("./array");
// get and set method are used to updating 
// A get method allows you to retrieve the value of a property.



// const sortData = users.map(users => users.name)
// console.log(sortData);
 


class UpdateData {
    constructor() {
        this._users = [...users];
        this.currentIndex = 0;
    }

    get allusers() {
        return this._users;
    }

    setNextUser(newName) {
        if (this.currentIndex < this._users.length) {
            this._users[this.currentIndex].name = newName;
            this.current1Index++;
        }
    }
}

const newUserData = new UpdateData();

document.getElementById("updatebtn").addEventListener("click", function()  {
    console.log("done");
    const newName = prompt("Enter new Name:");
    newUserData.setNextUser(newName);

    const updatenewData = document.getElementById("updatenewData");

    updatenewData.textContent = `username: ${newUserData.users[newUserData.currentIndex - 1].name}`;
});



const 