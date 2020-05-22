import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector'

import {updateUser} from '../../redux/actions'

class LaobanInfo extends Component {

  state = {
    header: '',
    post: '',
    info: '',
    company: '',
    salary: '',
  }

  setHeader = (header) => {
    this.setState({
      header
    })
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    this.props.updateUser(this.state)
  }

  render () {
    const {header, type} = this.props.user

    if(header) {
      const path = type==='dashen' ? '/dashen' : '/laoban'
      return <Redirect to={path}/>
    }

    return (
      <div>
        <NavBar>Boss</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem placeholder='Recruit Position' onChange={val => {this.handleChange('post', val)}}>Recruit Position:</InputItem>
        <InputItem placeholder='Company Name' onChange={val => {this.handleChange('company', val)}}>Company Name:</InputItem>
        <InputItem placeholder='Position Salary' onChange={val => {this.handleChange('salary', val)}}>Position Salary:</InputItem>
        <TextareaItem title="MUST:"
                      placeholder='Info'
                      rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='primary' onClick={this.save}>save</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(LaobanInfo)