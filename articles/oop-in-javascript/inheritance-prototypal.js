// Prototypal Inheritance
function clone(object) {
    var F = function() {};
    F.prototype = object;
    return new F();
}

// Person Prototype Object
var Person = {
    name: 'default',
    getName: function() {
        return this.name;
    }
};

// Author Prototype Object
var Author = clone(Person);
Author.books = [];
Author.getBooks = function() {
    return this.books;
};


var ITAuthor = clone(Author);
ITAuthor.name = 'Dustin Diaz';
ITAuthor.books.push('Pro JavaScript Design Patterns');

console.log(Author.getName() + ', Author of ' + Author.getBooks().join(', '));

