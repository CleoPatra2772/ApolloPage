import React, { useEffect } from 'react';
import './App.css';

import { Layout, Input, Table, Popconfirm, Button } from 'antd';
import { useState } from 'react';
import { TopMenu } from './components/TopMenu/TopMenu';
import { SiderMenu } from './components/SiderMenu/SiderMenu';
import { TableTopMenu } from './components/TableTopMenu/TableTopMenu';
import { TableSecondMenu } from './components/TableSecondMenu/TableSecondMenu';
import { Menu, Checkbox } from 'antd';

import { FiHome } from 'react-icons/fi';

import { AiOutlineOrderedList} from 'react-icons/ai';
import { BsBuilding, BsPeople}  from 'react-icons/bs';


const {Header, Footer, Sider, Content } = Layout;
function App() {
  const [current, setCurrent] = useState('Search');
  const [data, setData] = useState([]);
  const {Search } = Input;
  const [results, setResults] = useState([]);

 

  const [columns, setColumns] = useState([
    {
      title: "ID",
      dataIndex: "id",
    },
     {
         title: 'FirstName',
           dataIndex: 'firstName',
         align: 'center',
           editTable: true
         },
         {
          title: 'LastName',
            dataIndex: 'lastName',
          align: 'center',
            editTable: true
          },
         {
         title: 'University',
           dataIndex: 'university',
           align: 'center',
           editTable: false
         },
         {
           title: 'Email',
           dataIndex: 'email',
           align: 'center',
           editTable: false
         },
         {
           title: 'Phone',
           dataIndex: 'phone',
           align: 'center',
           editTable: false
         },
        
  ])
  
  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((result) => {
      setData(result.users);
      console.log(data);
    });
  }, []);





  return (
    <div className="App">
      <Layout >
        <TopMenu/>
        <Menu  
      style={{background: ' #F2F3F5'}}
      mode='horizontal'
      defaultSelectedKeys={['people']}
      items={[
        { label: "People", key:'people', icon: <BsPeople />},
        { label: "Companies", key:'companies', icon: <BsBuilding />},
        { label: "Lists", key:'lists', icon: <AiOutlineOrderedList />},
        { label: "Saved", key:'saved', icon: <FiHome />},
      ]}
      >
      </Menu>
        <Layout>
            <Sider style={{background: 'gray'}} width={200}>
            <SiderMenu setResults={setResults}/>
            </Sider>
        <Layout>
          <Content>
            <TableTopMenu />
            <TableSecondMenu />
            <Table columns={columns} dataSource={data} bordered/>

            {/* {!results ? <Table columns={columns} dataSource={data} bordered/>:
              
                <Table columns={columns} dataSource={results} bordered/>
            } */}
           
              

          </Content>
          <Footer></Footer>
        </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
