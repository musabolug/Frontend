import {useContext, useState} from 'react'
import UserContext from "../Context/UserContext"
function Profile() {
    const {user, setUser} = useContext(UserContext);
    const [loading,setLoading] =useState(false)
    const [logout,setLogout] = useState(false)
    const handleLogin = () => { 
        setLoading(true);
        setTimeout(() => {
            setUser({id:1, username:"musabolug",bio:"Merhaba ben Musab"})
            setLoading(false);
        }, 1500)
    }
        const handleLogout= () => {
            setLogout(true);
            setTimeout(() =>{
                setUser(null);
                setLogout(false)
            }, 1500)
        }
  return (
    <div>
        {!user &&<button onClick={handleLogin}>{loading ? "Loading...": "Login"}</button>
}
        <br/>
        <code>{JSON.stringify(user)}</code>
        <br/>
        {
            user && <button onClick={handleLogout}>{logout ? "logging out...":"Logout"}</button>
        }
    </div>
  )
}

export default Profile