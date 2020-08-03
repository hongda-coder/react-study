import React, { PureComponent } from 'react'

import  "./App.css"
import {  Route,  NavLink, Switch, withRouter} from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import Mine from './views/mine/Mine'
import User from './views/user/User'
import Error from './views/error/Error'
import Login from './views/login/Login'
import Jobe from './views/jobe/Jobe'
import Details from './views/details/Details'

 class App extends PureComponent {
  constructor(props) {
    super(props)
 
  }

  toJobe () {
    console.log(this.props.history.push)
    this.props.history.push("/jobe")
  }
 
  render() { 
    return (
      <div> 
          {/* <Link to="/" >首页</Link>
          <Link to="/about" >关于</Link>
          <Link to="/mine" >我的</Link> */}
          <NavLink exact to="/" activeClassName="active-router">首页</NavLink>
          <NavLink to="/about" activeClassName="active-router">关于</NavLink>
          <NavLink to="/mine" activeClassName="active-router">我的</NavLink>
          <NavLink to="/user" activeClassName="active-router">用户</NavLink> 
          <NavLink to="/aaa" activeClassName="active-router">54154</NavLink> 
          <button onClick={e => this.toJobe()}>职位</button>

          <Switch>          
            <Route exact path="/" component={Home}  />
            <Route path="/about" component={About} />
            <Route path="/mine" component={Mine} />
            <Route path="/user" componident={User} />
            <Route path="/login" component={Login} />
            <Route path="/jobe/" component={Jobe} /> 
            <Route path="/details/id" component={Details} />

            <Route component={Error} />
          </Switch> 
 
      </div>
    )
  }
}
  
export default withRouter(App)