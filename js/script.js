

/*test avec une class*/
class Test {

  constructor() {
    this.objet = "";
    this.message = "";
  }

  setForm() {
    this.objet = document.getElementById('objet').value;
    this.message = document.getElementById('message').value;
    console.log(this.objet);
    console.log(this.message);
    }
}



let monTest = new Test();
