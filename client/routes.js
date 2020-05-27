import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Home, BannerFormatter, StoreListFormatter, SubjectlineFormatter } from './components'
import fetchContacts from './store'


class Routes extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/banner" component={BannerFormatter} />
        <Route exact path="/storelist" component={StoreListFormatter} />
        <Route exact path="/subjectlines" component={SubjectlineFormatter} />
        {/* Displays our Login component as a fallback */}
        {/*<Route component={Construction} /> */}
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {return{}}

const mapDispatch = (dispatch) => {return{}}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
