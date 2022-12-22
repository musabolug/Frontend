// object Destructuring
let settings = {
    userName: "musabolug",
    password: "musabolugsifre",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// obje içindeki bilgilerin tek seferde çıkarılması
let userName = settings.userName
console.log(userName)


//rename && destructuring
let {userName: user, password, isActive, ip:ServerIP, serverName} = settings;
console.log(user,password,isActive,ServerIP,serverName);
console.log(settings)
console.log(user)

//obje içindeki bazı bilgilerin çıkarılması
let{userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
// userName bilgisi userName2 değişkenine aktarıldı password -> passeord2 , isActive -> isActive2
//geri kalan ip ve serverName bilgileri başka bir obje olarak newSettings in içine aktarıldı
console.log("new settings")
console.log(userName2, password2, isActive2, newSettings); 

// objenin destructuring ile kopyalanması 
let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log("settings",settings)
console.log("settings2",settings2)

let score = [100,200,300,400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2,otherScore)

// object kopyalama ile aynı... let settings = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)