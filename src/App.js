// import logo from './logo.svg';
// import './App.css';
import NewLayout from "./layout.js";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    //   <NewLayout/>
    <BrowserRouter>
      <Route path="/" component={NewLayout}></Route>
    </BrowserRouter>
  );
}

// class App extends Component{
//     render(){
//         return (<div>Hello app class</div>)
//     }
// }
export default App;
