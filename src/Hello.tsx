import * as React from 'react'
import * as t from 'io-ts'

type Props = {
  name: number
}

export default class HelloWorld extends React.Component<Props, void> {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

type Person = {
  name: string,
  surname: string
}

const fra: Person = ({ name: 'frag', surname: 'gio' })
