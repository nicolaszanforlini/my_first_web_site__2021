
class Formulaire {

  constructor() {
    this.objet = "";
    this.message = "";
  }

  setObjet(objet) {
    this.objet = document.getElementById('objet').value;
  }
  getObjet() {
    return this.objet;
  }
  setMessage(msg) {
    this.message = document.getElementById('message').value;
  }
  getMessage() {
    return this.message;
  }



}
