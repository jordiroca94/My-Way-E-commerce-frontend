import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Signup from "./pages/Signup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <Signup />}
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
