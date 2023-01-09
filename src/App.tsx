import React, {useContext, useEffect} from 'react';
import './assets/css/App.scss';
import routes from './config/routes';
import 'react-notifications-component/dist/theme.css'
import
{
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Redirect
} from "react-router-dom";

function App() {
  const authUser = true;


  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            {
              routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) =>
                      authUser ? (
                        <route.component
                          name={route.name}
                          {...props}
                          {...route.props}
                        />
                      ) : (
                        <Redirect to={{
                          pathname: '/login'
                        }}/>

                      )
                    }
                  />
                );
              })
            }
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
