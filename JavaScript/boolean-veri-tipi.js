    // 0 ve 1 i anlamak 
    let isActive = false // 0,
    isActive = true // 1

    let userName;
    let isUserName = Boolean(userName)
    console.log(isUserName) // False döndürür çümkü içi boş ve hiçbir değer atanmamiş

    Boolean("11") //true
    Boolean("0") //true
    Boolean("") //false


    Boolean(0) //false
    Boolean(-0) //false
    Boolean(0.1) //True
    Boolean(0 === 0 ) //true