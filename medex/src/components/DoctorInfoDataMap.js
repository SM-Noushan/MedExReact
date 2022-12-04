import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DoctorInfoData = (props) => {
    var sl = 0;
    return (
        <tbody>
        {props.data.map((data) => (
            <tr key={data.id}>
                <td>{++sl}</td>
                <td>{data.username}</td>
                <td>{data.doctordetail.name}</td>
                <td>{data.doctordetail.department}</td>
                <td>{data.doctordetail.degrees}</td>
                <td>{data.doctordetail.phone1}</td>
                <td>{data.doctordetail.email}</td>
                <td>{data.doctordetail.image}</td>
                <td>
                    <Button className="me-2" variant="info">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </td>
            </tr>
            ))}
        </tbody>
    )
}

export default DoctorInfoData