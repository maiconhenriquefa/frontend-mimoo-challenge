import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom"
import Login from "../pages/Login"

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Login />} />
      </RoutesDom>
    </BrowserRouter>
  )
}

export default Routes