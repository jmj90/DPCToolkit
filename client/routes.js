import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { Lander, Contact, Events, About, Scholarships, Donations, Photos } from './components'


class Routes extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/home" component={Lander} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about" component={About} />
        <Route exact path="/scholarships" component={Scholarships} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/photos" component={Photos} />
        {/* Displays our Login component as a fallback */}
        <Route component={Lander} />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
