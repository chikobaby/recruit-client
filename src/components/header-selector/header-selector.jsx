import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon: null
  }

  constructor(props) {
    super(props)

    this.headerList = []
    for (let i = 0; i < 20; i++) {
      this.headerList.push({
        text: 'Avatar'+(i+1),
        icon: require(`../../assets/images/Avatar${i+1}.png`)
      })
    }
  }

  handleClick = ({text, icon}) => {
    this.setState({icon})
    this.props.setHeader(text)
  }

  render () {
    const {icon} = this.state
    const listHeader = !icon ? 'Avatar' : (
      <div>
        Avatar:<img src={icon}/>
      </div>
    )

    return (
      <List renderHeader={() => listHeader}>
        <Grid data={this.headerList}
              columnNum={5}
              onClick={this.handleClick}/>
      </List>
    )
  }
}