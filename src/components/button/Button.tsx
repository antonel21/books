import React, { Component, MouseEventHandler } from 'react'

interface ButtonProps {
  handleClick: MouseEventHandler
  label: any
  type: 'submit' | 'reset' | 'button' | undefined
  class: string
  disabled?: boolean
  visibility?: 'visible' | 'hidden' | 'collapse'
}
class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        style={{ visibility: this.props.visibility }}
        className={this.props.class}
        type={this.props.type}
        onClick={this.props.handleClick}
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button
