import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
const Filter = ({ onFilter }) => ( <
    TextField id = "search"
    type = "search"
    role = "search"
    placeholder = "Search Name"
    onChange = { e => onFilter(e.target.value) }
    />
);

const TextField = styled.input `
  height: 32px;
  width: 300px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }
`;
// const data = [
//     { Name: "Tiger Nixon", Position: "System Architect", Office: "Edinburgh", Ext: "5421", Stardate: "2011/04/25", Salary: "$320,800", Status: 0 },
//     { Name: "Farrett Winters", Position: "Axxountant", Office: "Tokyo", Ext: "8422", Stardate: "2011/07/25", Salary: "$170,750", Status: 1 },
//     { Name: "Ashton Cox", Position: "Junior Technical Autho", Office: "San Francisco", Ext: "1562", Stardate: "2009/01/12", Salary: "$86,000", Status: 0 }
// ];


const colum = [{
        name: 'Id',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Descripcion',
        selector: 'description',
        sortable: true,
    },
    {
        name: 'LeftColor',
        selector: 'leftColor',
        sortable: true,
    },
    {
        name: 'RightColor',
        selector: 'rightColor',
        sortable: true,
    },
    {
        name: 'Editar',
        sortable: false,
        cell: row => {
            return <Button variant = "success"
            href = "http://localhost/api/?row=" >
                Editar < /Button>
        }
    }
]
const App = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            const fetchExercises = async() => {
                try {
                    let res = await fetch('http://localhost:8000/api/exercises')
                    let data = await res.json()
                    setData(data);

                } catch (error) {
                    console.log(error)

                }
            }
            fetchExercises()
        }, [])
        const [filterText, setFilterText] = React.useState('');
        const filteredItems = data.filter(item => item.title.includes(filterText) | item.description.includes(filterText));
        const subHeaderComponentMemo = React.useMemo(() => < Filter onFilter = { value => setFilterText(value) }
            />, []);
            return ( <
                div className = "App" >
                <
                header className = "App-header" >

                <
                img src = { logo }
                className = "App-logo"
                alt = "logo" / >
                <
                /header>  <
                DataTable title = "Prueba"
                columns = { colum }
                data = { filteredItems }
                subHeader subHeaderComponent = { subHeaderComponentMemo }
                pagination /
                >
                <
                /
                div >
            );
        }





        export default App;