import React, { useRef, useState } from 'react';



const UpdateCalendar = (props) => {
    console.log(props);
    const [statusDefVal, setStatusDefVal] = useState(props.status);
  const titleRef = useRef('');
  const statusRef = useRef('');
  const tdateRef = useRef('');
  const descriptionRef = useRef('');
  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const calendar = {
      title: titleRef.current.value,
      status: statusRef.current.value,
      date: tdateRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log(calendar);
    props.onUpdate(calendar);
    titleRef.current.value='';
    statusRef.current.value='';
    tdateRef.current.value='';
    descriptionRef.current.value='';
    document.getElementById("modal-trigger"+props.id).click();
  }

  return (
      <React.Fragment>
    <button type="button" id={'modal-trigger'+props.id} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#updateModal'+props.id}>
    <i className="fas fa-pen"></i> Update
  </button>
  <div className="modal fade" id={'updateModal'+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
      <form onSubmit={submitHandler}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Appointments</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
              <label className="form-label" htmlFor='title'>Title</label>
              <input className='form-control' type='text' id='title' ref={titleRef} defaultValue={props.title}/>
            </div>
      <div>
        <label className="form-label" htmlFor='status'>Status</label>
        <select className='form-select' id='status' ref={statusRef} defaultValue={statusDefVal}>
            <option value="pending">Pending</option>
            <option value="on-going">On-Going</option>
            <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label className="form-label" htmlFor='date'>Date</label>
        <input className='form-control' id='date' ref={tdateRef} defaultValue={props.date}/>
      </div>
      <div>
        <label className="form-label" htmlFor='description'>Description</label>
        <textarea className='form-control' row='5' type='text' id='description' ref={descriptionRef} defaultValue={props.description}   ></textarea>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>
</React.Fragment>
  );
}

export default UpdateCalendar;
