import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css';

const Card = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then(res => {
               console.log(res)
               setposts(res.data)
           })
           .catch(err => {
               console.log(err)
           })
},[])

return(
    <div className="json">
        <ul>
            {posts.map(post => (
                <li key={post.id}><h4>({post.name})</h4> ({post.phone}) ({post.website}) </li>
            ))}
        </ul>
        </div>
       
            )   
            }
            
               
            
        
    


            
export default Card;




