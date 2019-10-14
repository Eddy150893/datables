import React from 'react';
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
const data = [
    { Name: "Tiger Nixon", Position: "System Architect", Office: "Edinburgh", Ext: "5421", Stardate: "2011/04/25", Salary: "$320,800", Status: 0 },
    { Name: "Farrett Winters", Position: "Axxountant", Office: "Tokyo", Ext: "8422", Stardate: "2011/07/25", Salary: "$170,750", Status: 1 },
    { Name: "Ashton Cox", Position: "Junior Technical Autho", Office: "San Francisco", Ext: "1562", Stardate: "2009/01/12", Salary: "$86,000", Status: 0 }
];


const colum = [{
        name: 'Name',
        selector: 'Name',
        sortable: true,
    },
    {
        name: 'Position',
        selector: 'Position',
        sortable: true,
    },
    {
        name: 'Office',
        selector: 'Office',
        sortable: true,
    },
    {
        name: 'Ext',
        selector: 'Ext',
        sortable: true,
    },
    {
        name: 'Stardate',
        selector: 'Stardate',
        sortable: true,
    },
    {
        name: 'Salary',
        selector: 'Salary',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'Status',
        sortable: false,
        cell: row => {
            if (row.Status === 1) {
                return <Button variant = "success"
                href = "#" > Editar < /Button>
            } else {
                return <Button variant = "success"
                href = "#"
                disabled > En Proceso < /Button>
            }
        }
    },
    {
        name: 'Eliminar',
        sortable: false,
        cell: () => < Button variant = "danger"
        href = "#" > Eliminar < /Button>
    }
]
const App = () => {
        const [filterText, setFilterText] = React.useState('');
        const filteredItems = data.filter(item => item.Name.includes(filterText) | item.Position.includes(filterText));
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
                < /
                div >
            );
        }





        export default App;