/*
  https://www.codewars.com/kata/5844e0890d3bedc5c5000e54/train/javascript
*/

class FileMaster {
  constructor(filepath) {
    this.path=filepath
  }

  extension() {
    return this.path.match(/\.(.+$)/)[1]
  }

  filename() {
    return this.path.match(/\/(\w+)\./)[1]
  }

  dirpath() {
    return this.path.match(/^\/?.+\//)
  }
}