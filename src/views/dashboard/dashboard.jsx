import React, { Component } from 'react'
import Cookies from 'js-cookie'

export default class Dashboard extends Component {
  static propTypes = {
  }

  render() {
    console.log('Cookie', Cookies.get('token'))
    return (
      <div className="test">
        <p>Dashboard</p>
      </div>
    )
  }
}
