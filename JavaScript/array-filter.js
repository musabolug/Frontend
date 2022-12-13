// 5 harften fazla olanlar
const PRODUCTS = ["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanıcılar

const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: false},
    {fullName: "Furkan Ilbeyli", isActive: true},
    {fullName: "Musab Oluğ", isActive: true},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)
