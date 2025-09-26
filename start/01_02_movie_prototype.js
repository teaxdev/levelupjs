// Write your code here

function Movie(title, director, genre, release, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.release = release;
    this.rating = rating;
}
    
Movie.prototype.getOverview = function() {
    return `${this.title} was directed by ${this.director} It is a ${this.genre} film released in ${this.release}. It has a rating of ${this.rating}/10.`;
}


const incep = new Movie("Inception", "Christopher Nolan", "sci-fi", 2010, 8.8);
console.log(incep.getOverview());