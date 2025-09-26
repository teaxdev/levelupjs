// Write your code here

class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }
    getAvailability() {
        if (this.numCopies === 0) {
            return "out of stock";
        } else if (this.numCopies < 10) {
            return "low stock";
        } else {
            return "in stock";
        }
    }
    sell(numSold=1) {
        this.numCopies -= numSold;
        return `${numSold} copies were sold, ${this.numCopies} remain`;
    }
    reStock(numRestock=5) {
        this.numCopies += numRestock;
        return `${numRestock} copies were added, ${this.numCopies} is the new total`;
    }
    
    
}

const babbel = new Book("yes", "patrick bateman", 420, 100);
// console.log(babbel.getAvailability())
// console.log(babbel.sell(5))
console.log(babbel.reStock(5))