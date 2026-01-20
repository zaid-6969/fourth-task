import React from "react";
import { ImCross } from "react-icons/im";
import { toggleModule } from "../store/module";
import { useDispatch } from "react-redux";
import '../styles/module.scss'

const Creationmodule = () => {
  const dispatch = useDispatch();

  return (
    <div className="create-task">
      <button
        className="close-btn"
        onClick={() => dispatch(toggleModule())}
      >
        <ImCross />
      </button>

      <h1>Create Task</h1>
      <p className="subtitle">
        Required fields are marked with an asterisk *
      </p>

      <div className="form-group">
        <label>Spaces *</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Spaces *</label>
        <input type="text" />
      </div>

      <p className="learn">Learn about work types</p>

      <div className="divider"></div>

      <div className="form-group">
        <label>Status</label>
        <select>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <span className="hint">
          This is the initial status upon creation
        </span>
      </div>

      <div className="form-group">
        <label>Summary *</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Creationmodule;
