import React from 'react';
import { withRouter } from 'react-router'
import Home from '../home/home'
import { Row, Col,  Form, Icon, Input, Button,Switch } from 'antd';
import { Steps } from 'antd';

const Step = Steps.Step;
const FormItem = Form.Item;


class Addemployee extends React.Component{


    onChange(checked) {
        console.log(`switch to ${checked}`);
      }
    render(){
        return(
            <div>
            <Steps>
                <Step status="finish" title="Personal Information" icon={<Icon type="user" />} />
                <Step status="finish" title="Employee Job" icon={<Icon type="solution" />} />
                <Step status="process" title="Previous Company Detiels" icon={<Icon type="loading" />} />
                <Step status="wait" title="Citizenship / Passport" icon={<Icon type="smile-o" />} />
            </Steps>
               <Row type="flex" justify="start">
                <Col span={10}>
                <Form>
                <h6>Epmloyee Information</h6>
                <FormItem>
          
                    <Input className='addForm' name='firstname'
                   
                    placeholder="FirstName" />
                </FormItem>
                <FormItem>
          
                    <Input name='middilname'
                   
                    placeholder="middilname" />
                </FormItem>
                <FormItem>
          
                    <Input name='lastname'
                   
                    placeholder="lastname" />
                </FormItem>
                <FormItem>
                <span>Gender</span>
                <Switch defaultChecked onChange={this.onChange} />Male
                <Switch  onChange={this.onChange} />Female
                </FormItem>
                <FormItem>
                    <Input name='email'
                   
                    placeholder="email" />
                </FormItem>
                <FormItem>
                    <Input name='mobilenumber'
                    
                    placeholder="mobilenumber" />
                </FormItem>
                <FormItem>
                    <Input name='address'
                    
                    placeholder="address" />
                </FormItem>
                <FormItem>
                    <Input name='state'
                    
                    placeholder="state" />
                </FormItem>
                </Form>
                </Col>
                
                </Row>
            
                
            </div>
        );
    }
}




export default withRouter(Addemployee);