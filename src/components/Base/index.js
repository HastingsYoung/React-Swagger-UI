/**
 * Created by hastings on 30/09/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './base.css'

export default class Base extends Component {
  render() {
    return (
      <div className="base">
        <h1 className="title">{this.props.title}</h1>
        <span className="subTitle">{this.props.subTitle}</span>
        <div className="desc">{this.props.children}</div>
      </div>
    )
  }
}

Base.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}
