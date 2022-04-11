import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CalendarScreen from '../components/calendar/CalendarScreen'
import {LoginScreen} from '../components/auth/LoginScreen'
export default function AppRouter() {
  return (
    <Router>
        <div>
            <Switch>
                <Route path="/login" exact component={LoginScreen}/>
                <Route path="/" exact component={CalendarScreen}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    </Router>
  )
}
