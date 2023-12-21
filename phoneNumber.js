/* write a fxn that accepts an array of 10 integers
(between 0 and 9), that returns a string of those numbers 
in the form of a phone number*/


function createPhoneNumber(array) {
    let phoneNumber = "(";

    for (let i=0; i<array.length; i +=1) {
        phoneNumber += String(array[i]);
        if (i === 2) {
            phoneNumber += ") ";
        }
        else if (i === 5) {
            phoneNumber += "-"
        }
    }
    console.log(phoneNumber);
}

createPhoneNumber([2,2,4,3,2,3,1,8,3,4]);



