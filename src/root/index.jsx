
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../component/layout/Navbar';
function Root() {
  return (

<Routes>
      <Route path="/" element={<Navbar />}/>
    </Routes>
  );
}

export default Root;
