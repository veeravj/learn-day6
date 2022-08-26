//  1) class movie
 class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
 }
 const film1 = new movie("Casino Royal","Eon Production","PG13");
const movieArr=[film1,new movie("Avengers","Disney"),new movie("KGF 2","Thirumalai","PG10"),new movie("SpiderMan","Stan lee"),new movie("Vikram","RajKamal","PG15")];
let result=[];
function getPG(allMovies){
    allMovies.forEach((movie)=>{
        for(key in movie){
            if(movie[key]==="PG"){
                return result.push(movie);
            }
        }
    })
}
getPG(movieArr);
console.log(result);
 
//  const film2 = new movie("Avengers","Disney");
//  const film3 = new movie("KGF 2","Thirumalai","PG10");
//  const film4 = new movie("SpiderMan","Stan lee");
//  const film5 = new movie("Vikram","RajKamal","PG15");
//  console.log(film1);
//  console.log(movie);
// <------------------------------------------------------------------------>

// 2) UML diagram to class
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get details(){
        console.log(this.getRadius());
        console.log(this.getColor());
        console.log(this.getArea());
        console.log(this.getCircumference());
    }
    getRadius(){
        return `The radius of the circle:${this.radius}`;
    }
    getColor(){
           return `The color of the circle:${this.color}`;
    }
    toString(){
        //  return JSON.stringify()
    }
    getArea(){
        return `Area of the circle:${((4*Math.PI*Math.pow(this.radius,3))/3).toFixed(2)}`;
    }
    getCircumference(){
        return `Circumference of the circle:${(2*this.radius*Math.PI).toFixed(2)} `;
    }

}
 let circle1 = new circle(2,"red");
 circle1.details;
// <-------------------------------------------------------------------------------------------------->
// 3)class Person 

class person{
    constructor(name,age,qualification,gender,nationality,language){
        this.name=name;
        this.age=age;
        this.qualification=qualification;
        this.gender=gender;
        this.nationality=nationality;
        this.language=language;
    }
}

const person1 = new person("veera",28,"EEE","male","Indian","Tamil");
console.log(person1,typeof person1);
//<------------------------------------------------------------------------------------------------------------>

// 4) calculate the uber price 

class bookUber{
    constructor(name,car,distance,){
        this.name=name;
        this.car=car; 
        this.distance=distance;

    }
    get cost(){
        return this.fare();
    }
    fare(){
        if(this.distance<3){
            return `The fare is 100 Rupees`;
        }
        else{
            return `The fare is ${30*this.distance} Rupees`;
        }
    }

}
const book1=new bookUber('rahul','Tavera',5);
console.log(book1.cost);
const book2=new bookUber('ratna','toyota',2);
console.log(book2.cost);