import React, { PureComponent } from 'react'

import { Route,  NavLink, Switch} from 'react-router-dom'
import Look from './Look'
import HomeCrlture from './Cultrue'
import HomeCase from './Case'
import HomeContast from './Contast'


export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="active-home">看点shou</NavLink>
        <NavLink exact to="/home/culture" activeClassName="active-home">看点文化</NavLink>
        <NavLink exact to="/home/case" activeClassName="active-home">案例</NavLink>
        <NavLink exact to="/home/contast" activeClassName="active-home">联系</NavLink> 
       
        <Switch>
          <Route exact path="/" component={Look} />
          <Route path="/home/culture" component={HomeCrlture} />
          <Route path="/home/case" component={HomeCase} />
          <Route path="/home/contase" component={HomeContast} /> 
        </Switch> 
      </div>
    )
  }
}
