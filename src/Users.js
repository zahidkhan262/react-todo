import React from 'react'
import { useState } from 'react';
import { Container, Dropdown, DropdownButton, Form, InputGroup, Table } from 'react-bootstrap';
import { data as userData } from './data';
import UserTable from './userTable';

const Users = () => {

    const [inputValue, setInputValue] = useState('')
    const tableColumn = ['Id', 'Username', 'Address', 'Company Name', 'Action'];
    const handleFilter = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button"
                        value={inputValue}
                        onChange={handleFilter}
                    />
                    <DropdownButton
                        variant="outline-secondary"
                        title="Filter"
                        id="input-group-dropdown-2"
                        align="end"
                    >
                        <Dropdown.Item href="#">User Id</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Username</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Address</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Company Name</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                <Table striped bordered hover variant="dark">
                    <UserTable tableColumn={tableColumn} userData={userData} />
                </Table>
            </Container>
        </>
    )
}
export default Users
