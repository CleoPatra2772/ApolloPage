
import { Layout, Col, Row, Button, Input, Table,  } from 'antd';
import './TopMenu.css';
import { Menu, Checkbox } from 'antd';

import { FiHome, FiSearch, FiBell, FiAward, FiPieChart } from 'react-icons/fi';
import {BiNavigation} from 'react-icons/bi';
import {SiCircleci} from 'react-icons/si';
import {AiOutlinePhone, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineOrderedList, AiOutlineSearch} from 'react-icons/ai';



export const TopMenu = () => {
    return(
        <Menu 
        mode='horizontal'
        defaultSelectedKeys={['search']}
        items={[
          { label: <img className= 'logo' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYwMDUgNS42NzMzM0gxNS41MzYxTDE3LjEyNTEgOC4zOTY4MkwxOC42MDA1IDUuNjczMzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuODU5MyAyMS4wNDdMMTEuOTgxMSAyLjk0OTg0TDEuMTM5MTkgMjEuMDA5MUg2Ljk0NTkzQzcuNzIwNjkgMjEuMDA5MSA4LjQ4MjgzIDIwLjgxMzUgOS4xNTY2IDIwLjQ0MjdDOS44ODQwMiAyMC4wNDE5IDEwLjQzMzEgMTkuNDYxMiAxMC44NjIzIDE4Ljc1NzRDMTEuMzY0MSAxNy45MzM4IDExLjg1MTcgMTcuMTAwNiAxMi4zNDU2IDE2LjI3MjJMMTMuNjA5NSAxNC4xNTE1TDExLjk3OTUgMTEuNDIwMUwxMS4yNTY4IDEyLjU4M0MxMC40MzMxIDEzLjk2MDYgOS42NTM2NCAxNS4zNjk2IDguNzk5OTkgMTYuNzI4MkM4LjM3MDggMTcuNDA5OSA3LjgxMDYzIDE4LjA1MzcgNi45ODM4IDE4LjIxOTRDNi44NTkxNSAxOC4yNDQ2IDYuNzMxMzQgMTguMjU3MiA2LjYwMzUzIDE4LjI2MkM2LjQzMzExIDE4LjI2ODMgNi4yNjI3IDE4LjI2NTEgNi4wOTM4NiAxOC4yNjUxTDExLjk4MTEgOC4yMzkwM0wxOS41NDA5IDIxLjA0N0gyMi44NTkzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==" />, 
          key:'logo'},
          { label: "Home", key:'home', icon: <FiHome />},
          { label: "Search", key:'search', icon: <FiSearch />},
          { label: "Engage", key:'engage', icon: <BiNavigation />},
          { label: "Enrich", key:'enrich', icon: <SiCircleci />},
          { label: 
          <div style={{paddingLeft: '150px', margin: '0 0 0 0'}}>
          <Button type='primary'>Upgrade</Button>
          <Input placeholder='Search...'/>
          </div>
          , key:'search Bar', disabled: true},
  
          { label: "", key:'blank', icon: <BiNavigation style={{paddingLeft: '50px'}}/>},
          { label: "", key:'blank1', icon: <SiCircleci  style={{paddingLeft: '50px'}}/>},
          { label: "", key:'phone', icon: <AiOutlinePhone />},
          { label: "", key:'circle', icon: <AiOutlineQuestionCircle />},
          { label: "", key:'circle', icon: <FiBell />},
          { label: "", key:'circle', icon: <AiOutlineSetting />},
          
        ]}
        >
        </Menu>
    )
}