import React, { Component } from 'react'

export default class userTable extends Component {
    render() {
        return (
            <>
                <thead>
                    <tr>
                        {
                            this.props.tableColumn.map((col) => <th key={col.id}>{col}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.userData.map((user, idx) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.company_name}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                    <button className='btn btn-success'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </>
        )
    }
}
