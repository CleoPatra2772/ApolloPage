import './TableTopMenu.css';

import { Layout, Col, Row, Button, Input, Table,  } from 'antd';

import Title from 'antd/lib/typography/Title';
import { Menu, Checkbox } from 'antd';

import { AiOutlineOrderedList} from 'react-icons/ai';
import {BsPeople,BsFilterCircle, BsTable}  from 'react-icons/bs';

import {MdOutlineEditNote} from 'react-icons/md';

export const TableTopMenu = () => {
    return(
        <Menu 
        mode='horizontal'
        defaultSelectedKeys={['total']}
        items={[
          { label: "", key:'filter', icon: <BsFilterCircle/>},
          { label: "Total(9.4M)", key:'total'},
          { label: "Net New(9.4M)", key:'net new'},
          { label: "Saved(6)", key:'saved'},
          { label:
    <div style={{marginLeft: '500px' }}>
      <AiOutlineOrderedList />
    </div> , key:'icon', disabled: true},
          { label: "", key:'icon2', icon: <BsTable />},
          { label: "", key:'icon3', icon: <MdOutlineEditNote />, disabled: true},
          { label: "Import", key:'import', icon: <BsPeople />},]}
       
        >
        </Menu>
    )
}