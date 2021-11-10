import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import TodoContainer from "./components/TodoContainer";
import { LoginPage } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { News } from "./pages/News";


export const useRoutes = isAuthenticated => {


    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/" exact>
                    <TodoContainer/>
                </Route>
                <Route path="/profile" exact>
                    <Profile/>
                </Route>
                <Route path="/news" exact>
                    <News/>
                </Route>
                <Redirect to="/profile"/>
            </Switch>
        )
    }
    return(
          <Switch>
            <Route path="/" exact>
                <TodoContainer/>
            </Route>
            <Route path="/login" exact>
              <LoginPage/>
            </Route>
            <Route path="/news" exact>
                    <News/>
            </Route>
            <Redirect to="/login"/>
          </Switch>  
        ) 
}