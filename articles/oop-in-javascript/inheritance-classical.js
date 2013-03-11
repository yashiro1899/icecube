// Classical Inheritance
function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    // http://stackoverflow.com/questions/2686258/javascript-inheritance-extend-function
    if (superClass.prototype.constructor === Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

// class Person
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};

// class Author
function Author(name, books) {
    Author.superclass.constructor.call(this, name);
    this.books = books;
}
extend(Author, Person);
Author.prototype.getBooks = function() {
    return this.books;
};
Author.prototype.getName = function() {
    var name = Author.superclass.getName.call(this);
    return name + ', Author of ' + this.getBooks().join(', ');
};

var a = new Author('Dustin Diaz',
    ['Pro JavaScript Design Patterns']);
console.log(a.getName());

