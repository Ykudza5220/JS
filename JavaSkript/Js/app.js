        /* 1 задание*/
    let firstName ="Ihor"
    let lastName="Plus"
    let fullName = `${firstName} ${lastName}`
    console.log (fullName)
        /* 2 задание*/
    let sideOne = 2;
    let sideTwo = 4;
    console.log (sideOne*sideTwo);
        /* 3 задание*/
    console.log (Math.pow (10, 6))
        /* 4задание*/
    console.log (Math.floor (Math.random()*50))
        /* 5 задание*/
        let number = 0;
    if ( number < 0) {
    console.log("negative value")}
     else {
    console.log("positive value")
    }
        /* 6 задание */
        /* 7 задание*/
        let month = 1;

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("month not found!")

} 
    /* 8 задание */
    let password = "1452fga$";
    if (password.length > 5 && password.indexOf ("&") > -1) {
    console.log("this password is strong")}
      else {
    console.log("this password is weak")
}
    /*задание9*/
let a = 4;
let b = 2;
if (typeof a == "number" && typeof b == "number") {
    console.log(a+b)
} else {
    console.log ("Sum of those items can’t be counted")
}

    /* задание10*/
let textOne = "five";
let textTwo = "seven";
    if ( typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
        console.log("those items are strings and they’re equal")
    }
    else {
        console.log("items are not compareble")
    }