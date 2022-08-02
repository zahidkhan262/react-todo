import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Form, InputGroup, Table } from 'react-bootstrap';
import { data as userData } from './data';
import UserTable from './userTable';

const Users = () => {

    const [inputValue, setInputValue] = useState('');

    const tableColumn = ['Id', 'Username', 'Address', 'Company Name', 'Action'];
    const dataKeys = ['username', 'address', 'company_name'];
    // filter by individual name 
    // const search = (data) => {
    //     return data.filter((items) => items.username.toLowerCase().includes(inputValue))
    // }


    // filter by keys  
    const search = (data) => {
        return data?.filter((items) =>
            dataKeys?.some((key) => items[key]?.match(inputValue) || items[key]?.toLowerCase().includes(inputValue))
        );
    }
    useEffect(() => {
        if (inputValue.length >= 2) {
            search()
        }
    }, [inputValue])

    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {
                        !inputValue &&
                        <Button className='btn btn-primary'>Filter</Button>
                    }
                </InputGroup>
                <Table striped bordered hover variant="dark">
                    <UserTable tableColumn={tableColumn} userData={search(userData)} />
                </Table>
            </Container>
        </>
    )
}
export default Users
