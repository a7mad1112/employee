import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCitizenFormUIActions } from "./../../store/slices/deleteCitizenFormUI";

const DeleteCitizenForm = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(deleteCitizenFormUIActions.toggle());
  };
  return (
    <div className="form-overlay">
      <form className="create-citizen-form rounded">
        <i onClick={closeForm} className="close-btn">
          <AiOutlineClose />
        </i>
        <h2 className="">حذف حساب لمواطن</h2>

        <div className="form-group">
          <input type="text" name="id" placeholder="رقم الهوية" />
          <p className="id-err">123</p>
        </div>
        <div>
          <button className="btn btn-danger" type="submit">
            حذف المواطن
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCitizenForm;
