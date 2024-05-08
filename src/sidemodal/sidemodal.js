import React from "react";
import "./sidemodal.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import Select from 'react-select'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Sidemodal = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div>
      <div className="sid-banner">
        <div className="Header">
          <div className="headername"> Create DICI</div>
          <div className="close_icon">
            <IoCloseSharp />
          </div>
        </div>
        <div className="all_data">
            <div className="Form_Tagname"><p>conference Type</p></div>
           <div><Select  className="selectStyle" options={options} /></div>
            <div className="Form_Tagname"><p>conference Name <span>*</span></p></div>
           <div><input type="text" className="forms" id="username" name="username"/> </div>
            <div className="Form_Tagname"><p>conference Type</p></div>
            <div><Select  className="selectStyle" options={options} /></div>
            <div className="Form_Tagname"><p>Co-Ordinator</p></div>
            <div><Select  className="selectStyle" options={options} /></div>
            <div className="Form_Tagname"><p>Participant Type</p></div>
            <div><Select  className="selectStyle" options={options} /></div>
            <div className="Form_Tagname"><p>conference Start Date</p></div>
            <div> <input  type="datetime-local" className="selectdate"/></div>
            <div className="Form_Tagname"><p>conference End Date</p></div>
           <div> <input  type="datetime-local" className="selectdate"/></div>
           <div className="btns">
           <button className="cancel-btn">Cancel</button>
           <button className="create-btn">Create</button>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Sidemodal;
