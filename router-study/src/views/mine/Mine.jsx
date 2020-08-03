import React, { PureComponent } from 'react' 
import { Route,  NavLink, Switch} from 'react-router-dom'
import Look from './Look'
import MineCrlture from './Cultrue'
import MineCase from './Case'
import MineContast from './Contast'
import MineHandle from './Handle'
export default class Mine extends PureComponent {
  constructor(props){
    super(props)
  }

  toHandle () {
    console.log(this.props)
    this.props.history.push("/mine/handle")
  }
  render() {
    return (
      <div>
        <NavLink exact to="/mine" activeClassName="active-mine">看点shou</NavLink>
        <NavLink exact to="/mine/culture" activeClassName="active-mine">看点文化</NavLink>
        <NavLink exact to="/mine/case" activeClassName="active-mine">案例</NavLink>
        <NavLink exact to="/mine/contast" activeClassName="active-mine">联系</NavLink>
          <button onClick={e => this.toHandle()}>手动跳转</button>
        <Switch>
          <Route exact path="/mine/" component={Look} />
          <Route path="/mine/culture" component={MineCrlture} />
          <Route path="/mine/case" component={MineCase} />
          <Route path="/mine/contase" component={MineContast} /> 
          <Route path="/mine/handle" component={MineHandle} />
        </Switch> 
      </div>
    )
  }
}
