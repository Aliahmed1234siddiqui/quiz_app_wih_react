import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { TagRounded } from '@mui/icons-material';
export default function AModal(props:any) {
  const{keys} = props; 
  const [key ,Setkey] = useState<any>()
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        QUIZ REQUIREMENT        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-center'><TextField onChange={(e)=>{
keys(e.target.value)
        }} label="secret key"/></p>
      <p>dis</p>

      </Modal.Body>
      <Modal.Footer>
 <Button onClick={()=>{
    console.log(key);
 }}>START QUIZ</Button>       <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


