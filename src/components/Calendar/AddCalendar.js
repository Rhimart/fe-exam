import React, { useRef } from 'react';



function AddCalendar(props) {
  const titleRef = useRef('');
  const statusRef = useRef('');
  const tdateRef = useRef('');
  const descriptionRef = useRef('');
  function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
  function submitHandler(event) {
    event.preventDefault();

    if(isEmptyOrSpaces(titleRef.current.value)
      ||isEmptyOrSpaces(statusRef.current.value)
      ||isEmptyOrSpaces(tdateRef.current.value)
      ||isEmptyOrSpaces(descriptionRef.current.value)){
        alert('Please fillout needed data');
    }else{

    const calendar = {
      title: titleRef.current.value,
      status: statusRef.current.value,
      date: tdateRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onAddCalendar(calendar);
    titleRef.current.value='';
    statusRef.current.value='';
    tdateRef.current.value='';
    descriptionRef.current.value='';
    document.getElementById("modal-trigger").click();
  }
  }

  return (
    <React.Fragment>
    <button style={{position:"fixed",
	width:"60px",
	height:"60px",
	bottom:"40px",
	right:"40px",
	color:"#FFF",
	borderRadius:"50px",
	textAlign:"center",
	boxShadow: "2px 2px 3px #999",}} id="modal-trigger" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
      <i className="fa fa-plus my-float"></i>
    </button>
    <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <input className='form-control' type='text' id='title' ref={titleRef} />
            </div>
            <div>
              <label className="form-label" htmlFor='status'>Status</label>
              <select className='form-select' id='status' ref={statusRef}>
                <option  value="pending">Pending</option>
                <option value="on-going">On-Going</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor='date'>Date</label>
              <input className='form-control' type="date" id='date' ref={tdateRef} />
            </div>
            <div>
              <label className="form-label" htmlFor='description'>Description</label>
              <textarea className='form-control' row='5' type='text' id='description' ref={descriptionRef} ></textarea>
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

export default AddCalendar;
