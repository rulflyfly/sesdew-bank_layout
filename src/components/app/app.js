import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LoginPage from '../login/login';
import Dashboard from '../dashboard/dashboard';
import  Nav  from '../nav/nav-main';
import NavBanks from '../nav/nav-banks';
import Banks from '../banks/banks';
import ClientList from '../client-list/client-list';
import NavClients from '../nav/nav-client';
import UserList from '../user-list/user-list';
import EditBank from '../edit-bank/edit-bank';
import NavProfile from '../nav/nav-user-profile';
import PageOne from '../user-pages/page-one';
import PageTwo from '../user-pages/page-two';
import PageThree from '../user-pages/page-three';
import PageFour from '../user-pages/page-four';

import './app.css';

export default class App extends Component {

    state = {
        isLoggedIn: false
    }
    

    onLogin = (validated) => {
            console.log('clicked')
            this.setState({isLoggedIn: validated})
            console.log(validated)
    }

    onLogout = () => {
        this.setState({isLoggedIn: false})
    }


    render() {
        
        const { isLoggedIn } = this.state;
       
        if (!isLoggedIn) {
            return ( 
            <LoginPage isLoggedIn={isLoggedIn}
            onLogin={this.onLogin}
            /> )
        }

        return (
            <div>
                <Router>
                    <Route path='/' exact render={() => {
                        return ( 
                        <LoginPage isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                        />
                        )
                    }} />
                    <div className="container">

                    <Route path='/main-page/:path?' exact render={() => <Nav onLogout={this.onLogout}/>} />

                    <Route path='/main-page/dashboard' render={() => <Dashboard />} />
                    <Route path='/main-page/nav-banks/:path?' render={() => <NavBanks />} />
                    <Route path='/main-page/nav-banks/bank-list' render={() => <Banks />} />
                    <Route path='/main-page/nav-client/:path?' render={() => <NavClients />} />
                    <Route path='/main-page/nav-client/client-list' render={() => <ClientList />} />
                    <Route path='/main-page/user-list' render={() => <UserList />} />
                    <Route path='/edit-bank' render={() => <EditBank />} />
                    <Route path='/main-page/nav-user-profile/:path?' render={() => <NavProfile />} />
                    <Route path='/main-page/nav-user-profile/page-one' render={() => <PageOne />} />
                    <Route path='/main-page/nav-user-profile/page-two' render={() => <PageTwo />} />
                    <Route path='/main-page/nav-user-profile/page-three' render={() => <PageThree />} />
                    <Route path='/main-page/nav-user-profile/page-four' render={() => <PageFour />} />
                    </div>
                </Router>
            </div>
        )

    }
}