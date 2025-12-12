class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((element) => {
      if(element.style.color === this.color) {
        element.remove();
      }
    });
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

// new CreatePencil("Nataraj", "Nataraj Ltd.", 10, "blue");
let p1 = new CreatePencil("Nataraj", "Nataraj Ltd.", 10, "blue");
let p2 = new CreatePencil("Apsara", "Apsara Ltd.", 15, "red");


