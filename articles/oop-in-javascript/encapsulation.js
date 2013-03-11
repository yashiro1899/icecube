// class
var Book = (function() {
    // private static
    var numOfBooks = 0;

    // private static
    function checkIsbn(isbn) {
        // TODO
        return true;
    }
    // constructor
    return function(newIsbn, newTitle, newAuthor) {
        // private
        var isbn, title, author;

        // public (privileged)
        this.getIsbn = function() {
            return isbn;
        };
        this.setIsbn = function(newIsbn) {
            if (!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
            isbn = newIsbn;
        };

        // public (privileged)
        this.getTitle = function() {
            return title;
        };
        this.setTitle = function(newTitle) {
            title = newTitle || 'No title specified';
        };

        // public (privileged)
        this.getAuthor = function() {
            return author;
        };
        this.setAuthor = function(newAuthor) {
            author = newAuthor || 'No author specified';
        };

        // Constructor code.
        numOfBooks++;
        if (numOfBooks > 50) throw new Error('Book:\
            Only 50 instances of Book can be created.');

        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
    };
})();

// public static
Book.convertToTitleCase = function(inputString) {
    // TODO
    return inputString;
};

// public (non-privileged)
Book.prototype = {
    display: function() {
        console.log('"' + this.getTitle() + '" by ' + this.getAuthor());
    }
};

var b = new Book('978-7-115-19128-1',
    'Pro JavaScript Design Patterns',
    'Ross Harmes');
b.display();

