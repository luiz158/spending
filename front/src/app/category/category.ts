export class Category {

  id: string;
  name: string;
  pattern: string[];

  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }

}
