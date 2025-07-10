import { useState , useEffect } from "react";
import app from "./app.css"

function App() {

  const [count, setcount] = useState(0)
  const [prime,setprime] = useState("false")
  console.log(prime)

  const checkedPrime = (num) => {
    let isprime = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        isprime++;
      }
    }
    setprime(isprime === 2 ? "true" : "false");
  };

  useEffect(() => {
    checkedPrime(count);
  }, [count]);

  return (
    <div className="main_div">
      <h1>Welcome to Counter 2.0</h1>
      <div>
        <button data-testid="minusonebtn" disabled={count==0} onClick={() => {
          setcount(count - 1)
        }}>-1</button>
        <button data-testid="plusonebtn" onClick={() => {
          setcount(count + 1)
        }}>+1</button>
        <div>
          <button data-testid="resetbtn" onClick={() => {
            setcount(0)
          }}>Reset</button>
        </div>
      </div>
      <span data-testid="counter">Count : {count}</span>
      <div>
        <span data-testid="odd-or-even" style={{ display: "block" }}>This Number is : {count%2==0 ? "Even" : "Odd"} </span>
        <span data-testid="is-prime">Prime Number : {prime} </span>
      </div>
    </div>
  );

}

export default App;

