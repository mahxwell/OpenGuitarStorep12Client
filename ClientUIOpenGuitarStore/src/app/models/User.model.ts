export class User {
  id: number;
  name: string;
  surname: string;
  pseudo: string;
  mail: string;
  password: string;
  newsletter: boolean;


  constructor(id: number, name: string, surname: string, pseudo: string, mail: string, password: string, newsletter: boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.pseudo = pseudo;
    this.mail = mail;
    this.password = password;
    this.newsletter = newsletter;
  }
}
