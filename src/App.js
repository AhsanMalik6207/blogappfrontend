import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import PostDetail from './components/PostDetail'
import CreateUserprofile from './components/CreateUserprofile'
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Navbar />
        <Box style={{ margintop: 64 }}>
          <Switch>
          <Route
              path="/createuserprofile"
              render={props =>
                user ? (
                  <CreateUserprofile {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/createpost"
              render={props =>
                user ? (
                  <CreatePost {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
             <Route
              exact
              path="/updatepost/:id"
              render={(props) =>
                user ? (
                  <UpdatePost {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/postdetail/:id' component={PostDetail} />
            <Route exact path='/about' component={About} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
};
export default App;
