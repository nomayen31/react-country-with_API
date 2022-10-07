// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

















// function LoadCountries() {
//   const [Countres, setCountries] = useState([]);
//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data =>setCountries(data))
//   }, [])
//   return (
//     <div>
        























      {/* <h1>Visiting Every Country of the world!!!!!!</h1>
      <h3>Available Countries : {Countres.length}</h3>
    {
      Countres.map(country => <Country name={country.name.common} population={country.population}></Country>)
    } */}

//     </div>
//   )
// }
// function Country(props) {
//   return(
//     <div>
//       <h2>Name :{props.name}</h2>
//       <h2>Population :{props.population}</h2>
//     </div>
//   )
// }
export default App;
