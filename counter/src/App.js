
import axios from 'axios';
import React from 'react'


export default function App() {
 const [data,setData]=React.useState([]);
 React.useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users")
 .then((response)=>{setData(response.data)}).catch(error=>console.log(error))},[])
 console.log("data",data);
  return (
   <>
   <table>
   <th>ID</th> <th>Name</th> <th>UserName</th><th>Website</th>
    {data.map((a)=>{return <tr>
      <td>{a.id}</td>
      <td>{a.name}</td>
      <td>{a.username}</td>
      <td>{a.website}</td>
      </tr>})}
    </table>
</>
  )
}