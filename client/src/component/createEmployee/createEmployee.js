import React from 'react';
import { Form, Icon, Input, Button} from 'antd';
import { Row, Col } from 'antd';
import { Menu, Dropdown, message, Select } from 'antd';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries/index';
import { Alert } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

const initialState = {
  username:'',
  email:'',
  password:'',
  confirmpassword:'',
  rollBased:'',
  message:'Sucessfuly Added Employee  '
}

class CreateEmployee extends React.Component{
  state= {...initialState}


  clearState =()=>{
    this.setState({ ...initialState });
}

    handleButtonClick =(e)=> {
        message.info('Click on left button.');
        //console.log('click left button', e);
      }
      
    handleMenuClick =(e)=> {
        message.info('Click on menu item.');
       // this.setState({rollBased: e.key})
       // message.info(this.state.rollBased);
        //console.log('click', e);
        // console.log("key", this.props.key)
      }
      handleChange = (event) =>{
        const { name, value } = event.target;
        
        this.setState({[name]: value})
      };
      
      handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(({ data }) => {
          console.log(data);
          console.log('Data:::', this.state)
          message.info(this.state.message);
          localStorage.setItem('token', data.signupUser.token) 
          this.clearState();
          this.props.history.push('/')
           
        })
        
      }
      validateForm =()=>{
        const  { username,email,  password, confirmpassword,rollBased } = this.state;
        const isInvalid = !username || !email ||  !rollBased || password!==confirmpassword   ;
        return isInvalid;
     }
     
      handleChange2(value) {
      console.log(`selected ${value}`);
      this.setState({rollBased: value})
    }


      render(){
        const  { username,email,  password, confirmpassword, rollBased } = this.state;
        // const menu = (
        //     <Menu onClick={this.handleMenuClick} name="rollBased" value={rollBased}
        //     onChange={event => this.handleChange(event)}>
        //       <Menu.Item key="1"><img style={{width:20}} src={require('../image/admin.png')} alt="" />Admin</Menu.Item>
        //       <Menu.Item key="2"><Icon type="user" />User</Menu.Item>
        //       {/* <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item> */}
        //     </Menu>
        //   );
        return(
            <div >
            {/* <image src={{backgroundImage:'../image/background.jpg'}}></image> */}
           
              <Row>
              <Col span={12} offset={6}>
          
              <div className="login-form{" style={{display:"flex"}}>
              <div style={{margin:100}}>
            <Mutation mutation={SIGNUP_USER} variables={{ username,email,  password, confirmpassword, rollBased }}>
            {(signupUser, { data, loading, error }) => {
              return (

            <Form className="login-form" style={{ width:500, backgroundColor:'white'}} onSubmit={event =>this.handleSubmit(event, signupUser)}> 
          <div style={{paddingTop:30}}>
            <strong><span className="login100-form-title p-b-51" style={{paddingLeft:50}}>
            <img style={{width:80}} src={require('../image/create.png')} alt="" />
                    Add Employee
                  </span></strong></div>
               <FormItem style={{paddingLeft:100, paddingTop:50}}> 
              <FormItem>
                
                  <Input className='input-sigin' name='username'
                  value={username}
                  onChange={event => this.handleChange(event)}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Employee Name" />
              </FormItem>
              <FormItem>
                
                <Input className='input-sigin' name='email'
                value={email}
                onChange={event => this.handleChange(event)}
                prefix={<Icon type="mail" theme="outlined" /> }
                placeholder="Email" />
            </FormItem>
              <FormItem>
               
                  <Input className='input-sigin' 
                  name='password'
                  value={password}

                  onChange={event => this.handleChange(event)}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="password" placeholder="Password" />
              
              </FormItem>
              <FormItem>
               
               <Input className='input-sigin' 
               name='confirmpassword'
               value={confirmpassword}
               onChange={event => this.handleChange(event)}
               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
               type="password" placeholder="Confirm Password" />
           
           </FormItem>
              {/* <FormItem>
              
                <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} 
                >
                  Create Roll
                </Dropdown.Button>
              </FormItem> */}
              <FormItem>
                <div>
                <Select defaultValue="-----NON SELECTED-----" style={{ width: 300 }}   
                
                onChange={event=> this.handleChange2(event)}>
                <Option name="admin" value="admin"><img style={{width:20}} src={require('../image/admin.png')} alt="" />Admin</Option>
              <Option name="user" value="user"><Icon style={{width:20}} type="user" />User</Option>
              
            </Select>
                </div>
              </FormItem>
              </FormItem>
                  
                <FormItem style={{ paddingLeft:130, paddingBottom:30}}>
                <Button type="primary" htmlType="submit" 
                className="login-form-button" style={{ width:210, paddingLeft:50}} 
                onClick={event =>this.handleSubmit(event, signupUser)}
                disabled={ loading || this.validateForm()}
                >
                  Submit
                </Button>
               {error && <Alert
                style={{marginRight:20}}
                  message="Error"
                  description={error.message}
                  type="error"
                  showIcon
                />}

                {/* {error &&<p>{error.message}</p>} */}
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

export default CreateEmployee;