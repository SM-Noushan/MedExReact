import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import css from './Press.module.css';

export default class Index extends Component{
 render(){
    return(
		<div className="main">
			<div className="header">
				<h1>Medex</h1>
					<div className="card">
						<div className="containers">
							<span style={{ "fontSize": '30px' }}>Doctor's name</span><br/>
							<span style={{ 'fontSize': '30px' }}>Doctor contact info</span><hr/>
							<span style={{ 'fontSize': '30px' }}>patient Name</span>
						</div>
					</div>
			    </div>
			    <div className="body"><br/>
                
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className={css.card_2}>
                            <img className="card-img-top size" src="https://www.pngall.com/wp-content/uploads/2/Medicine-PNG-Image-HD.png" />
                
                            <div className="cardBody">
                                <h5 className="cardTitle">Notes</h5><hr/>
                                <textarea id="notes" name="notes" rows="4" cols="90" placeholder="Write Down Suggessions For Patients"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className={css.card_2}>
                            <img className="card-img-top size" src="https://www.pngall.com/wp-content/uploads/2/Medicine-Pills-Background-PNG-Image.png"/>
                            <form>
                                <div className="cardBody">
                                    <h5 className="cardTitle">Medicines</h5><hr/>
                                    <h3><b>Prescribe</b></h3>
                                    <label >Medicine Name</label>
                                    <input type="text" id="mName" name="mName"/>
                                    <label >Schedule</label>
                                    <input type="text" id="sch" name="sch"/>
                                    <label >Take medicine for</label>
                                    <Form.Select id="cnt2" name="cnt2" aria-label="Default select example">
                                    <option value="none" selected disabled hidden> </option>
                                        <option value="none" selected disabled hidden> </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">2</option>
                                    </Form.Select>
                                    <Form.Select id="timeDuration2" name="timeDuration2" aria-label="Default select example">
                                        <option value="none" selected disabled hidden> </option>
                                        <option value="day">day</option>
                                        <option value="week">week</option>
                                        <option value="month">month</option>
                                        <option value="continue">continue</option>
                                    </Form.Select>
                                    <input type="submit" value="Done"/>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    )
 }
}