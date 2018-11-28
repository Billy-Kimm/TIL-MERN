import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const NewPost = () => <h2>NewPost</h2>;

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div>
                 <Header/>
                   <div className="container">
                    <Route exact={true} path="/" component={Landing}/>
                    <Route exact={true} path="/dashboard" component={Dashboard}/>
                    <Route exact={true} path="/posts/new" component={NewPost}/>
                  </div>
            </div>
         </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);