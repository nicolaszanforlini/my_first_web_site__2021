

class User {

  constructor( login, password, email ) {
    this.setPseudo(login);
    this.setPassword(password);
    this.setEmail(email);
  }
  setPseudo(pseudo) {
    this.login = pseudo;
  }
  setPassword(pass) {
    this.password = password;
  }
  setEmail(email) {
    this.email = email;
  }
  getPseudo() {
    return this.pseudo;
  }
  getPassword() {
    return this.password;
  }
  getEmail() {
    return this.email;
  }

  display_infos() {
    console.log(this.getPseudo(),this.getPassword(),this.getEmail());
  }


}
