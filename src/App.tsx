import './App.css';
import ZakatForm from './form/ZakatForm';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { AuthContextProvider, useAuthState } from './firebase'

import AdminArea from './adminArea/AdminArea';
import SignUp from './loginRoutes/SignUp';
import SignIn from './loginRoutes/SignIn';



const AuthRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/signin" />
      }
    />
  )
}

const UnAuthRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        // !isAuthenticated ? 
        <C {...routeProps} /> 
        // : <Redirect to="/" />
      }
    />
  )
}




function App() {
  return (
    <AuthContextProvider>
    <Router>
      <div color="secondary" className="flexIt">
        <Link to="/" className='link'>Home</Link> 
        <Link to="/signin" className='link'>SignIn</Link> 
        <Link to="/signup" className='link'>SignUp</Link> 
        <Link to="/admin" className='link'>Admin</Link> 
      </div>
      <UnAuthRoute exact path="/" component={ZakatForm} />
      <AuthRoute  exact path="/admin" component={AdminArea}   />
      <UnAuthRoute exact path="/signup" component={SignUp}   />
      <UnAuthRoute  exact path="/signin" component={SignIn}   />
    </Router>
  </AuthContextProvider>
  );
};


export default App;
