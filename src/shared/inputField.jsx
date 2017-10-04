import React from 'react'

export default class InputField extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      type: 'text',
      cssClass: ''
    }
  }

  render () {
    return (
      <div>
        <input type={this.state.type} className={this.state.cssClass} />
      </div>
    )
  }
}
