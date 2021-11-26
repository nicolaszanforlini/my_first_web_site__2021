
class User {

  constructor(pseudo, email, password) {
    this.setPseudo(pseudo);
    this.setEmail(email);
    this.setPassword(password);
  }

  setPseudo(pseudo) {
    this.pseudo = pseudo;
  }
  getPseudo() {
    return this.pseudo;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setPassword(pass) {
    this.password(pass);
  }
  getPassword() {
    return this.password;
  }


}
