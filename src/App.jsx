import { Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";


function App() {

  return (
    <>
    <Route path="/signupUser" element={<SignupForm/>} />
    </>
  )

}

export default App
