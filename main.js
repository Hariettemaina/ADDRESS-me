//business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}


function Address( street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
}

let jane = new Contact('Jane', 'Njeri');
let home = new Address("671 Ngong Road", "Nairobi", "Nairobi");
jane.addresses.push(home)

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

//user interface logic
// $(document).ready(function() {
//     $("form#new-contact").submit(function(event) {
//         event.preventDefault();


//         let inputtedFirstName = $("input#new-first-name").val();
//         let inputtedLastName = $("input#new-last-name").val();

//         let newContact = new Contact(inputtedFirstName, inputtedLastName);
        

//         $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li");

//         $("input#new-first-name").val("");
//         $("input#new-last-name").val("");
//     });

//     $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $("#show-contact h2").text(newContact.firstName);
//         $(".first.name").text(newContact.firstName);
//         $(".last.name").text(newContact.lastName);
//     });
// });