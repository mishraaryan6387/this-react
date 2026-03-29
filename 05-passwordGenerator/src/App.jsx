import { useState , useCallback,useEffect,useRef} from 'react'


function App() {
  const[ length , setlength] = useState(8);
  const [ numbersAllowed , setNumbersAllowed] = useState(false);
  const [ charactersAllowed , setCharactersAllowed] = useState(false);
  const [ password , setPassword] = useState("");
  // use ref
  const passwordRef = useRef("");
const  passwordGenerator = useCallback(() => {
    let password = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str += "0123456789";
    if(charactersAllowed) str += "!@#$%^&*()_+";

      for (let i = 0; i <length; i++) {
      const element = Math.floor(Math.random()*str.length);
        password = password + str.charAt(element);
      }
      setPassword(password);
      passwordRef.current = password;
    }, [charactersAllowed, numbersAllowed, length, ]);


   
useEffect(() => {
  passwordGenerator();
}, [passwordGenerator,numbersAllowed,charactersAllowed,length]);

  return (
    <>
     

      <div className=" w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-5 text-orange-500 justify-center bg-amber-100" >
        <div className=' flex text-2xl justify-center' ><h3> Password generator</h3></div>
      <div className="flex shawdow rounded-lg overflow-hiddden mb-4 bg-white">
      <input type="text"
      value={password}
      className='outline-none w-full py-2 px-3'
      placeholder='password'
      readOnly
       />


       // copy button 

       <button 
       className='outline-none bg-blue-700 text-white rounded-2xl px-3 py-1 shadow-mist-800'>
        copy
       </button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className = " flex items- centre gap-x-1"> 
            <input type="range" 
            min={6} 
            max={100}
            value={length}
            className=' cursor-pointer -bg-conic-150'
            onChange={(e)=>{
            setlength(e.target.value)
          }}/>
          < label > Length :{length}</label>
        </div>
        <div>
            <input type="checkbox" 
            defaultChecked = {numbersAllowed}
            id = "numberInput"
            onChange={()=>{
              setNumbersAllowed((prev)=> !prev);
            }}
          />
          <label htmlFor="nuberInput">Numbers</label>
        </div>
         <div>
          <input type="checkbox" 
          defaultChecked = {charactersAllowed}
          id = "characterInput"
          onChange={()=>{
            setCharactersAllowed((prev)=> !prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>


      </div>
        </div>
    
    </>
  )
}

export default App
