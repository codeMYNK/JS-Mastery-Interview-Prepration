class User{
    constructor(name, address, username, email, role){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }

}

class Admin extends User{
    constructor(name, address, username, email, role){
        //To Call parent constuctor we use super kwyword
        super(name, address, username, email, role);
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function (element){
            element.remove();
        });
    }
}

let u1 = new User("Mayank", "India", "mayank123", "hey@hey.com", "user");
let u2 = new User("Admin", "USA", "admin123", "HH@HH.COM", "admin");
let a1 = new Admin("SuperAdmin", "India", "adminhai", "admin@admin", "admin");