import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";

export const getData = (user_id)=>{
    return new Promise(async (resolve,reject)=>{
        const {data: user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`,{
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
                });
        const {data: post} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`,{
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
                });
                resolve (user);
                resolve (post);
                
                const newArray = [1]
                newArray.length =0;
                (async()=>{
                try{
                      newArray.push(user)
                      newArray.push(post)
                        }
                        catch(error){
                            console.log(error);
                        }
                        console.log(newArray)
                    })();
    })
 
}