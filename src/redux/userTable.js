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
                {userData.map((row, id) => {
                    return (
                        <React.Fragment key={id}>
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.username}</td>
                                <td>{row.company_name}</td>
                                <td>{row.address}</td>
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
