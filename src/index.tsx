import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Hello extends React.Component<{}, void> {
  render() {
    return <div>Hello</div>
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))