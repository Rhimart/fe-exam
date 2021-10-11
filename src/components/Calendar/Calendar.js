import React from "react";
import UpdateCalendar from './UpdateCalendar';

const Calendar = (props) => {
   async function removeCalendarHandler(id) {
    const answer = window.confirm("are you sure?");
    if (answer) {
      const response = await fetch('http://localhost:3000/calendars/'+id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        props.update();
    }
        
      }
    async function updateCalendarHandler(calendar) {
      const answer = window.confirm("are you sure?");
      if (answer) {
        const response = await fetch('http://localhost:3000/calendars/'+props.id, {
        method: 'PUT',
        body: JSON.stringify(calendar),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      props.update();
      }
      
    }
    function formatDate(string){
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
  }
  
    return (
      <React.Fragment>
        <div className="col-sm-3">
        <div className="card">
          <h5 className="card-header">{props.title}</h5>
          
          
          <div className="card-body">
            <p className="card-text">{props.description}</p>
            <div className="row">
              <div className="col">
                <b className="card-title">{props.status}</b>
                </div>
                <div className="col">
                <i className="card-text">{formatDate(props.date)}</i>
              </div>
            </div>
          </div>
          <div className="card-footer">
          <div className="row">
            <div className="col">
          <UpdateCalendar key={props.id} id={props.id} title={props.title} status={props.status} date={props.date} description={props.description} onUpdate = {updateCalendarHandler}/>
          </div>
          <div className="col">
          <a href="#" onClick={() => removeCalendarHandler(props.id)} className="btn btn-danger float-end" ><i className="fas fa-trash"></i> Delete</a>
          </div>
          </div>
          </div>
        </div>
        </div>
      </React.Fragment>
      );

      
}

export default Calendar;