import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Home,
  BannerFormatter,
  StoreListFormatter,
  SubjectlineFormatter,
  ReynoldsFormatter,
  UTFEmojiConverter,
  BadStores
} from './components'


class Routes extends Component {

  render () {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        <Route exact path="/" component={BannerFormatter} />
        <Route exact path="/home" component={BannerFormatter} />
        <Route exact path="/banner" component={BannerFormatter} />
        <Route exact path="/badstores" component={BadStores} />
        <Route exact path="/storelist" component={StoreListFormatter} />
        <Route exact path="/utfconverter" component={UTFEmojiConverter} />
        <Route exact path="/rjr" component={ReynoldsFormatter} />
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
