import * as React from 'react';

type Props = {
  name: string
}

export default class Hello extends React.Component<Props, void> {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}