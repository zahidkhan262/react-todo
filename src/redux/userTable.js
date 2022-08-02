import React from 'react'

const userTable = ({ userData, tableColumn }) => {
    return (
        <>
            <thead>
                <tr>
                    {
                        tableColumn.map((col, id) => {
                            return (
                                <React.Fragment key={id}>
                                    <th key={col.id}>{col}</th>
                                </React.Fragment>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {userData.map((user, id) => {
                    return (
                        <React.Fragment key={id}>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.company_name}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                    <button className='btn btn-success'>Edit</button>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </tbody>
        </>
    )
}
export default userTable;
