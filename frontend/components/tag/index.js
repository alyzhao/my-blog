import React from 'react';
import './style.less'

export default class Tag extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <a className={'tag ' + (this.props.tagName).toLowerCase()}>{this.props.tagName}</a>
    );
  }
}
