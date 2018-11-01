import React from 'react';
import './home.css'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge , Popover} from 'antd';
import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../../../queries/index';
import { withRouter } from 'react-router'
import { Addemployee } from '../addEmployee/addEmployee';
import { Link } from "react-router-dom";

// import { Row, Col } from 'antd';

import Map from '../maps'
//import logo from '../../image/logo.jpg'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  signout =(event) =>{
    event.preventDefault();
    this.props.history.push('/');
  }

 
  render() {
  
    const content = (
      <div>
        <p style={{marginBottom: 0}} onClick={event =>this.signout(event)}>Signout</p>
       
      </div>
    );
    return (
      
      <Query query={GET_CURRENT_USER}>
      {({ data, loading }) =>{
          console.log("Data::", data.getCurrentUser.rollBased);
          if(loading) return null;
          
         
    return (
     
      <Layout style={{ minHeight: '100vh' }}>     
             <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
         
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <img style={{width:40, marginLeft:20, paddingBottom:30}} src={require('../../image/logo.jpg')} alt="" />
          <span style={{paddingLeft:20, color:"white", position:"absolute", paddingTop: 14 }}><strong>ADMIN</strong></span>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Create Employee</Menu.Item>
             
              <Menu.Item key="4"  >Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
                 
          <strong style={{paddingLeft:1500, position:"absolute", paddingTop:20, color: 'rgba(0,0,0,.25)'}}>
          {/* <Icon type="user" style={{ color: 'rgba(0,0,0,.25)', paddingRight:10 }} /> */}
          <Badge count={1}><Avatar shape="square" icon="user" /></Badge> 
              <Popover content={content}>
              {data.getCurrentUser.rollBased}
              {/* <Button type="primary"></Button> */}
            </Popover>
          </strong>

          <Content style={{ margin: '0 16px' }}>
          
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            
            <div style={{ padding: 24, background: '#fff', minHeight: 750 }}>
            {/* <Map />
              Bill is a cat.
            <Row>
            <Col span={8} className="maps">
            
            </Col>
            </Row> */}
                  <div className="wrapper">
              before
                {this.props.children}
              after
            </div>
              
            </div>
           
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            HR ©2018 Created by Praveen 
          </Footer>
        </Layout>
        
      </Layout>
     
    )
    }}

</Query>
)
  }
}

export default withRouter(Home);