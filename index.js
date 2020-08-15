function buttonClicked() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    console.log(firstName, lastName)
    document.getElementById('text').innerHTML = "shut up  " + firstName + ' ' + lastName
}

