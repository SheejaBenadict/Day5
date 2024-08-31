// Class - Movie
// a) Write a constructor for the class Movie, which takes a String representing
//  the title of the movie, a String representing the studio, and a String representing 
//  the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movieDetails = new movie("Maharaja","Maha Studio","PG-13");
console.log(movieDetails);

// b) The constructor for the class Movie will set the class property rating to
//  "PG" as default when no rating is provided.

class moviee {
    constructor(title, studio, rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movieeDetails = new moviee("Maharaja","Maha Studio",);
console.log(movieeDetails);

// c) Write a method getPG, which takes an array of base type Movie as its argument,
// and returns a new array of only those movies in the input array with a rating of
// "PG". You may assume the input array is full of Movie instances. The returned 
// array need not be full.

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(mo => mo.rating === "PG");
        return out;
    }
}

let movie1 = new Moviee("Maha Raja", "Raja Studio", "PG");
let movie2 = new Moviee("Maha Rani", "Ra Studio", "V");
let movie3 = new Moviee("Maha Ra", "Ra Studio", "PG");
let movie4 = new Moviee("Maha Raju", "Raj Studio", "PG-13");
let movie5 = new Moviee("Maha Veer", "Veer Studio", "PG");

let movieArray = [movie1, movie2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 

// d) Write a piece of code that creates an instance of the class Movie with 
// the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movieee {
    constructor(title, studio, rating){
this.title=title;
this.studio=studio;
this.rating=rating;
    }
}
const casinoRoyale = new movieee("Casino Royale","Eon Productions","PG13");
console.log(casinoRoyale);
// ------------------------------------------------------------------------------------

// CIRCLE
class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
   //-------------------------------------------------------------------------------------   
   
   //3.Write a “person” class to hold all the details.

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, country){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.country = country;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            country: ${this.country}`;
        }
    }
    let person1 = new Person("Fabio", "Ansel",11, "mechanical", "Fabio@gmail.com", "+973 56789053", "Bahrain");
    let person2 = new Person("Adhick","Ansel",22, "Civil", "Adhick@gmail.com", "+971 3454323", "Dubai");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());
    // ---------------------------------------------------------------------------------------


 //4.write a class to calculate the uber price

class UberPrice {
    constructor(totalDistance, totalTime, baseFare, costPerMile, costPerMinute) {
        this.totalDistance = totalDistance;
        this.totalTime = totalTime;
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    totalPrice() {
        return this.baseFare + (this.totalDistance * this.costPerMile) + (this.totalTime * this.costPerMinute);
    }
}
const myUber = new UberPrice(5, 10, 60, 14, 2);
console.log(myUber.totalPrice());
// -------------------------------------------------------------------------------------------













