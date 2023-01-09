import React, {useContext, useEffect, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {isEmpty} from './utils/isEmptyObject';
import {login} from './store/reducers/Auth/AuthActionCreators';
import Notification from "./components/Notification";
import Loader from "./components/Loader";
import {timeOut} from "./utils/timeOut";

function App() {
  const dispatch = useAppDispatch()
  const {user} = useAppSelector(state => state.AuthSlice)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token') as string) || ""

    if (token) {
      dispatch(login(token))
    }

    timeOut(1000, () => setIsLoading(false))
  }, [])


  return (
    <div className="App">
      {isLoading && <Loader/>}
      <Notification title="Registration completed successfully" container="bottom-right"/>
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
                    !isEmpty(user) ? (
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
          <Route path="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App

