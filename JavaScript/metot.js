// Object içine metot nasıl eklenir

let user1 = {
    firstName: "Musab",
    lastName:"Oluğ",
    score:[1,2,3,4,5],
    isActive: true, 
    shortName: function() {return `${this.firstName[0].toUpperCase()}.q ${this.lastName}`}
};

console.log(user1)

