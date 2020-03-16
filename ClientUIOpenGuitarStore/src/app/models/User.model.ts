export class User {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public pseudo: string,
    public email: string,
    public mdp: string
  ) {
  }
}
