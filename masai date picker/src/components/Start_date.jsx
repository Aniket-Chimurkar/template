import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css"


export const Startdate=()=>{

    const [startDate, setStartDate] = React.useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = React.useState(new Date("2014/02/10"));


    return <div className="component">
      
<div>

    <h2 style={{color:"rgb(169, 131, 184)"}}>Start Date</h2>
    <DatePicker  
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        selectsDisabledDaysInRange
        showWeekNumbers
      />

</div>

<div>

    <h2 style={{color:"rgb(169, 131, 184)"}}>End Date</h2>
    <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
</div>
      
    </div>
}