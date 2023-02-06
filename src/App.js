import {Routes,Route} from 'react-router-dom';
import Home from "./Routes/Home/Home.component";
const Shop = () =>{
  return(<h2>This is Home Page</h2>)
}
const App = () => {


 return(
  <Routes>
  <Route path='/home' element={<Home />} >
  <Route path='shop' element={<Shop/>} />
  </Route>
  </Routes>
  );
}  
export default App;