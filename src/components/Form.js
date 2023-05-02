import React from "react";

function Form() {
    return <div className="form-container" >
        <form className="form"> 
            <input type="text" placeholder="Enter Name" id="name" />
            <input type="text" placeholder="Enter Comment" id="comment" />
            <button id="btn-submit">Submit </button>
        </form>

    </div>
}

export default Form;