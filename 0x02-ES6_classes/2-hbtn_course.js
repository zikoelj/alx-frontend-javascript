export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return (this._name);
  }

  get length() {
    return (this._length);
  }

  get students() {
    return (this._students);
  }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(Length) {
    if (typeof Length === 'number') {
      this._length = Length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(Students) {
    if (Students instanceof Array) {
      this._students = Students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
