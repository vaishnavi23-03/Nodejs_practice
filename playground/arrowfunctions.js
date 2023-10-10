const square = (x)=>console.log(x*x);
square(4);
const event ={
    name:'birthday party',
    guestlist:['Mia',"tia","sia"],
//     printguestList : ()=>console.log('Guest list for'+ this.name),
// }undefined becuse dont bind this 
printguestList(){
    console.log('Guest list for '+ this.name);
    this.guestlist.forEach((guest)=>console.log(`${guest} is attending ${this.name}`))
    // arrowfunction lets access to parent function this binding

},
}
event.printguestList();

// arrow funcpoor candidates for methods but great for else
//ES6 for methods

