export class User {
    id: number;
    name: string;
    surname: string;
    pseudo: string;
    mail: string;
    password: string;
    newsletter: string;


  constructor(name: string, surname: string, pseudo: string, mail: string, password: string, newsletter: string) {
    this.name = name;
    this.surname = surname;
    this.pseudo = pseudo;
    this.mail = mail;
    this.password = password;
    this.newsletter = newsletter;
  }
}
