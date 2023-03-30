import React, { Component } from 'react'
interface Props {
  theme: string
}
class EmptyList extends Component<Props> {
  render() {
    const { theme } = this.props
    return (
      <div>
        <h1>Dommage...</h1>

        <h2>Il semblerait que vous n’ayez besoin d’aucune compétence</h2>
      </div>
    )
  }
}

export default EmptyList
