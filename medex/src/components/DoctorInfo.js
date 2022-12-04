import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import DoctorInfoData from './DoctorInfoData';
import Topnav from './Topnav';


const DoctorInfo = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleClick = () => {
        axios.get("http://127.0.0.1:8000/api/doctor/list")
        .then(resp=>{
            setLoading(true);
            setData(resp.data);
        }).catch(err=>{
            setError(err);
        }).finally(()=>{
            // setLoading(false);
        });
    }

    return (
        <Container>
            <row><Topnav /></row>
            <row>
                <Button
                className="my-4"
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                >
                {isLoading ? 'Loaded' : 'Click to load'}
                </Button>
                {error && <h1>{error.message}</h1>}
                {data && <DoctorInfoData data={data} /> }
            </row>
        </Container>
      );
}

export default DoctorInfo