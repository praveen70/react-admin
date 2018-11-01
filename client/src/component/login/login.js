import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
 import './index.css'
import React from 'react';
import { Row, Col } from 'antd';
// import {Animated} from "react-animated-css";
// import logo from '../image/logo.jpg'
import { withRouter } from 'react-router'
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from '../../queries/index';
import { Alert, Result } from 'antd';



const FormItem = Form.Item;

const inintialState = {
  username:'',
  password:'',
  message:'Sucessfuly Logged In ',
  loading: false


}


class Login extends React.Component {
 state = {...inintialState}

  handleChange = (event) =>{
    const { name, value } = event.target;
    
    this.setState({[name]: value})
  };
  
  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(({ data }) => {
      console.log(data);
      //console.log('Data:::', this.state)
      localStorage.setItem('token', data.signinUser.token) 
      message.info(this.state.message);
      this.props.history.push('/home')
      
      this.clearState();
      console.log('Data:::', this.state)
    })
    
  }

  validateForm =()=>{
    const  { username,password } = this.state;
    const isInvalid = !username ||  password ;
    return isInvalid;
 }

  render() {
    const { username, password } = this.state;
  
    return (
      <div >
     
      <image src={{backgroundImage:'../image/background.jpg'}}></image>
     
        <Row>
        <Col span={12} offset={6}>
    
        <div className="login-form{" style={{display:"flex"}}>
        <div style={{margin:130}}>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password}}>
        {(signinUser, { data, loading, error }) => {
              return (

      <Form className="login-form" style={{ width:400, backgroundColor:'white'}} onSubmit={event =>this.handleSubmit(event, signinUser)}> 
    <div style={{paddingTop:30}}>
      <strong><span className="login100-form-title p-b-51" style={{paddingLeft:80}}>
      <img style={{width:80}} src={require('../image/logo.jpg')} alt="" />
              Signin
            </span></strong></div>
         <FormItem style={{paddingLeft:50, paddingTop:50}}> 
        <FormItem>
          
            <Input className='input-sigin' name='username'
            value={username}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Username" />
        </FormItem>
        <FormItem>
         
            <Input className='input-sigin' 
            name='password'
            value={password}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" placeholder="Password" />
        
        </FormItem>
        </FormItem>
        <FormItem>
        
            <Checkbox className='checkBox' style={{float:"left"}}>Remember me</Checkbox>
        </FormItem>
         
          <FormItem style={{ paddingLeft:80}}>
          <Button type="primary" htmlType="submit" 
          className="login-form-button" style={{ width:210, paddingLeft:50}} 
         
         
          // onClick={event =>this.handleSubmit(event, signinUser)}
          >
          <Icon type="login"/>
            Sign in
          </Button>
          <FormItem>
          {/* {error && <Result
              type="error"
              title="Error"
              description={error.message}
              actions={<Button size="large" type="primary">OK</Button>}
            />} */}
            {error && <Alert
                      style={{marginRight:20}}
                        message="Error"
                        description={error.message}
                        type="error"
                        showIcon
                      />}
                </FormItem>
          </FormItem>
          <FormItem className='register'>
          <a href="/CreateEmployee" style={{float:"left"}}>Create Employee!</a>
          </FormItem>
   
      </Form>
      )
            }}
            
      </Mutation>
      </div>
      </div>
      </Col>
      </Row>
   
     
      </div>
    );
  }
}

export default withRouter(Login);