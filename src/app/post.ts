export class Post {
  public content = '';
  public date: Date;
  public from = '';
  public to = '';
  public imageUrl = '';

  constructor() {
    // default values.
    this.from = 'Doug';
    this.to = 'Everyone';
    this.date = new Date(); // current date time
  }
}
