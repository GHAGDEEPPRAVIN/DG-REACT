import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { flushSync } from 'react-dom';

function App() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [count,setcount] = useState(1);
  const [err,seterr] = useState(true);
  const [displayerrmsg,setdisplayerrmsg] = useState("")

  async function FetchDataFromServer() {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`);
      setPost(res.data);
      setLoading(true);
    } catch (error) {
      setdisplayerrmsg(error.message);
      seterr(false)
      setLoading(true)
    }
  }

  useEffect(() => {
    FetchDataFromServer();
  }, [count]);

  return loading ? err ? (
    <div className="App">
        <h1>Posts below</h1>
        <div className='blages'>
          <button disabled={count==1} onClick={()=>setcount(count-1)}>Pervious</button>
          <span>{count}</span>
          <button disabled={count==10} onClick={()=>setcount(count+1)}>Next</button>
        </div>
      <hr />
      <div className='Card'>
      {post.map((el) => (
        <div key={el.id}>
          <span>{el.id}</span>
          <h3>{el.title}</h3>
          <p>{el.body}</p>
        </div>
      ))}
      </div>
    </div>
  ) : <h1>{displayerrmsg}</h1> : (
    <h1>Loading...</h1>
  );
}

export default App;
