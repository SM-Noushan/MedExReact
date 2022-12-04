import React from 'react'
import Table from 'react-bootstrap/Table';

import DoctorInfoDataMap from './DoctorInfoDataMap';

const DoctorInfoData = (props) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Name</th>
          <th>Department</th>
          <th>Degress</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Photo</th>
          <th>Action</th>
        </tr>
      </thead>
      <DoctorInfoDataMap data={props.data}/>
      
    </Table>
  )
}

export default DoctorInfoData