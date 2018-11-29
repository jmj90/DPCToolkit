import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Lander,
  Contact,
  Events,
  About,
  Scholarships,
  Donations,
  Photos,
  Confirmation,
  Construction,
  Error,
  Four04
} from './components'
import fetchContacts from './store'


class Routes extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        <Route exact path="/" component={Lander} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about" component={About} />
        <Route exact path="/scholarships" component={Scholarships} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/error_500" component={Error} />
        <Route exact path="/error_404" component={Four04} />

        {/* Displays our Login component as a fallback */}
        {/*<Route component={Construction} /> */}
        <Route component={Lander} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {return{}}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchContacts())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
}
