// import PropTypes from "prop-types";
// function User({name, surname, age, isLoggedIn, friends}){
//     if(!isLoggedIn){
//         return <div>Giris yapamadiniz</div>
//     }
    
//     return(
//     <>
//         <h1>
//             {`${name} ${surname} (${age}) `}
//         </h1>
//         {address.title} {address.zip}
//         <br />
//         <br />
//         {friends && 
//         friends.map((friend)=>(<div key={friend.id}>{friend.name}</div>))}
//         </>
//     );
// }

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
//     friends: PropTypes.array,
// }

// User.defaultProps ={
//     // name:"isimsiz",
//     //! tanımlanmamış isim değişkenine default olarak atayacağı değer belirtilir
// }

// export default User;    