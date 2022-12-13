function hello(name){
    console.log(`Merhaba ${name}`)
}
hello("JavaScrpit")

const helloFunctionV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFunctionV1("HelloFunctionV1")

const helloFunctionV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFunctionV2("HelloFucntionV2")

const helloFunctionV3 = (firstName, LastName) => {
    console.log(`Merhaba ${firstName} ${LastName}`)
}
helloFunctionV3("Musab","Oluğ")

const helloFunctionV4 = (firstName, LastName) => {
    let info = `Merhaba ${firstName} ${LastName}`
    console.log(info)
    return info
}
helloFunctionV4("Musab","Oluğ")
