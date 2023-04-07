import './SiderMenu.css';
import { Button, Input } from 'antd';
import { useState, useMemo } from 'react';
import Title from 'antd/lib/typography/Title';
import { Menu, Modal} from 'antd';
import {  FiAward } from 'react-icons/fi';
import { AiOutlineOrderedList, AiOutlineSearch} from 'react-icons/ai';
import {BsFillPersonCheckFill, BsPersonVcardFill, BsBuilding, BsPeople,BsBuildings,BsFilterCircle, BsTable}  from 'react-icons/bs';
import {SlLocationPin} from 'react-icons/sl';
import { Radio } from 'antd';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import {RxAvatar} from 'react-icons/rx';

export const SiderMenu = ({setResults}) => {
    const [input, setInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
        setValue(value)
    }


    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () =>{
        setIsModalOpen(false);
    };

    const fetchData = (value) => {
        fetch("https://dummyjson.com/users")
        .then((response) => response.json())
        .then((json) => {
            console.log(json.users);
            let users = json.users
            const results = users.filter((person) => {
                return  person && person.firstName && person.firstName.toLowerCase().includes(value);
                
            });
            setResults(results);
            console.log(results);
    })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return(
   
          <Menu 
          mode='inline'
          defaultOpenKeys={["location"]}
            items={[
              { label: <Input placeholder='Search People' value={input} onChange={(e) => handleChange(e.target.value)}/>, key:'search', icon: <AiOutlineSearch/>},
              { label: <Title level={5}>Filters</Title>
              , key:'filter',},
              { label: "Lists", key:'Lists', icon: <AiOutlineOrderedList/>},
              { label: "Persona", key:'persona', icon: <BsFillPersonCheckFill />},
              { label: "Name", key:'name', icon: <BsPersonVcardFill/>},
              { label: "Job Title", key:'job title', icon: <FiAward />},
              { label: "Company", key:'company', icon: <BsBuilding/>},
              { label: "Location", key:'location', icon: <SlLocationPin/>, children:[
                { label: 
                <>
                <span  onClick={showModal} >
                Contact
                </span>
                <Modal title='contact' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='select-region'>
                        <Radio>Select region</Radio>
                        <p>City/State/Country/ZIP</p>
                        <Select options={options} value={value} onChange={changeHandler} />
                        <p>Exclude locations <a href='/'>...</a></p>
                    </div>
                    <div className='select-zip'>
                        <Radio>Select ZIP code radius</Radio>
                    </div>
                </Modal>
                </>, key:'modal', icon: <RxAvatar/>},
                { label: "Account HQ", key:'account', icon: <BsBuilding/>}

                
              ]},
              { label: "# Employees", key:'employees', icon: <BsPeople/>},
              { label: "Industry & Keywords", key:'industry', icon: <BsBuildings/>},
              { label: "Buying Intent", key:'buying'},
              { label: "Email Status", key:'email'},
              { label: "Technologies", key:'technologies'},
              { label: "Revenue", key:'revenue'},
              { label: "Funding", key:'funding'},
              { label: "Job Posting", key:'jobb posting'},
              
            ]}
          />
            
          
     
    )
}