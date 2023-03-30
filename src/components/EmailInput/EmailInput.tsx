import React, { Component } from 'react'
// import './EmailInput.scss'

interface State {
  inputValue: string
}

interface Props {
  theme: string
}

export class EmailInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }
  updateInputValue = (value: string) => {
    this.setState({
      inputValue: value,
    })
  }
  render() {
    const { theme } = this.props
    return (
      <div className="input-container">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.updateInputValue(e.target.value)
          }
        />
        {this.state.inputValue}
      </div>
    )
  }
}

export default EmailInput
