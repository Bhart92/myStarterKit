import React, {Component} from 'react'

import ReactDOM from 'react-dom'

class Layout extends Component{

  constructor(){
    super()
    this.state = {
      name: 'Brandon'
    }
  }
  render(){
    return (<div className='home'>
            <h3> this is my homepage yo</h3>
            </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
