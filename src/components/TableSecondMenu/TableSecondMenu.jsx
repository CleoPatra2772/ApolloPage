import './TableSecondMenu.css';
import { Layout, Col, Row, Button, Input, Table,  } from 'antd';

import Title from 'antd/lib/typography/Title';
import { Menu, Checkbox } from 'antd';
import { useState } from 'react';
import { FiHome, FiSearch, FiBell, FiAward, FiPieChart } from 'react-icons/fi';
import {BiNavigation} from 'react-icons/bi';
import {SiCircleci} from 'react-icons/si';
import {AiOutlinePhone, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineOrderedList, AiOutlineSearch} from 'react-icons/ai';
import {BsFillPersonCheckFill, BsPersonVcardFill, BsBuilding, BsPeople,BsBuildings,BsFilterCircle, BsTable}  from 'react-icons/bs';
import {SlLocationPin} from 'react-icons/sl';
import { Radio } from 'antd';
import {MdOutlineEditNote} from 'react-icons/md';
import {IoMdAdd} from 'react-icons/io';

export const TableSecondMenu = () => {
    return(
        <Menu
            mode='horizontal'
            defaultSelectedKeys={['total']}
            items={[
              { label: <Checkbox/>, key:'checkbox', disabled: true},
              { label: <Button>Save</Button>, key:'button1', disabled: true},
              { label: <Button>Find People</Button>, key:'button2',disabled: true},
              { label: <Button>Lists</Button>, key:'button3',disabled: true},
              { label: <Button>Export</Button>, key:'button4',disabled: true},
              { label: <Button>Edit</Button>, key:'button5', disabled: true},
              { label: <Button>...</Button>, key:'button6', disabled: true},
              { label: 
              <Button style={{marginLeft: '362px'}}>Relevance</Button>, key:'button7', disabled: true},
            ]}>
            </Menu>
    )
}