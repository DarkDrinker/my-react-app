import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper, {text1,text2, text3} from "./file1";
import obj from "./file2";
import { males, females } from "./file2";
import { Welcome, MultiWelcome } from "./file3";
import JokeComponent from './Jokefunctions';
import SvgComponent from './assets/SvgComponent';


function App() {

  
  const {firstName, email} = obj;
  let text1test = text1;
  let text2test = text2;
  let text3test = text3;
  const arr = [...males, ...females];
  const arr2 = [...arr]
  arr2.push("Helle", "Tina");

  const [prevClickedElement, setPrevClickedElement] = useState(null);
  const [toRender, setToRender ] = useState(SvgComponent)
  const [countryName, setSelectedCountry] = useState('');

  const handleSVGClick = (event) => { 
  const clickedElement = event.target;
  if (prevClickedElement) {
    prevClickedElement.style.fill = "silver";
  }
  clickedElement.style.fill = "red";
  setPrevClickedElement(clickedElement);
  console.log(clickedElement.attributes.id.value);
  countryName = clickHandler(clickedElement.attributes.id.value)
  console.log(countryName);
}


const clickHandler = (countrycode) => {
  // State to store the joke
  const [countryName, setSelectedCountry] = useState('');
  // useEffect to fetch the joke
  useEffect(() => {
      fetch('https://restcountries.com/v3.1/alpha/'+ countrycode)
          .then(response => response.json())
          .then(data => {
            if(data){
              console.log(data[0].name.common);
              setSelectedCountry(data[0].name.common)
            
            }
          })
          .catch(error => console.error('Error fetching joke:', error));
  }, [countryName]); // Empty dependency array means this runs once on mount
  
}
 
  return (
    <>
    <h1>Exercises 0</h1>
    <h2>ex 1</h2>
    <p>{upper(text1test)}</p>
    <p>{upper(text2test)}</p>
    <p>{upper(text3test)}</p>

    <h2>ex 2</h2>
    <p>{firstName},{email}</p>
    <p>{arr}</p>
    <p>{arr2}</p>


    <h1>Exercises 1</h1>
    <h2>ex 1(props1)</h2>
    <h2><MultiWelcome></MultiWelcome></h2>

    <button onClick> Click me for a joke</button>
    {JokeComponent()}

    <div id='map'>
        <SvgComponent onClick={handleSVGClick}/>
        <p></p>
    </div>


    </>
  )
}

export default App
