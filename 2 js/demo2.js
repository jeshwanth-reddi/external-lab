// f1() is a function

function f1() {
    let f_name = "Alex";
    const ZIP = 560089;
    var age = 25;   
   }
   
   f1();
   
   console.log(f_name); // Uncaught ReferenceError: f_name is not defined
   console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
   console.log(age);  // Uncaught ReferenceError: age is not defined