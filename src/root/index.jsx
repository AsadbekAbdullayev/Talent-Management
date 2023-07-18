
import {
  Routes,
  Route,
} from "react-router-dom";
import View from '../component/layout/View'
import SignUp from '../component/SignUp'
import Register from '../component/Register'
import Generic from '../component/layout/Generic';
// test
function Root() {
  return (

<Routes>
      <Route path="/" element={<View />}>
      <Route path="/signUp" element={<SignUp />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Generic />}/>

      </Route>
    </Routes>
  );
}

export default Root;
