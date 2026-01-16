import React from "react";
import { ImCross } from "react-icons/im";
import { toggleModule } from "../store/module";
import { useDispatch } from "react-redux";


const Creationmodule = () => {
  const dispatch = useDispatch();

  return (
    <div className="create-task">
      <button className="togglebtn" onClick={() => dispatch(toggleModule())}>
        {" "}
        <span>
          <ImCross />{" "}
        </span>
      </button>
      <h1>Create Task</h1>
      <p>Required fields are marked with an asterisk *</p>
      <div>
        <p>Spaces *</p>
        <input type="text" />
      </div>
      <div>
        <p>Spaces *</p>
        <input type="text" />
      </div>

      <p>Learn about work types﻿</p>

      <div className="hr"></div>

      <div>
        <p>Status</p>
        <select name="status" id="">
          <option value="">To Do</option>
          <option value="">In Progress</option>
          <option value="">Done</option>
        </select>
        <p>This is the initial status upon creation</p>
      </div>
      <div>
        <p>Summary*</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Creationmodule;
