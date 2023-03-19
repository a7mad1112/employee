import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCitizenFormUIActions } from "./../../store/slices/deleteCitizenFormUI";

const DeleteCitizenForm = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(deleteCitizenFormUIActions.toggle());
  };
  const [id, setId] = useState({id: ""});
  const [idInputErr, setIdInputErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIdInputErr(validate(id));
    setIsSubmit(true);
  };
  useEffect( () => {
    if (Object.keys(idInputErr).length === 0 && isSubmit) {
      deleteCitizen();
    }
  }, [idInputErr]);
  const deleteCitizen = () => {
    console.log(+id)
    console.log("delete is done")
  }
  const validate = (id) => {
    const errors = {};

    if(id.trim() === "")
    {
      errors.id = "أدخل رقم الهوية"
    } 
    else if (id.trim().split("").length <= 7)
    {
      errors.id = "أدخل 8 ارقام على الأقل"
    } 
    else if (isNaN(id.trim())){
      errors.id = "أدخل قيمة رقمية"
    }
    return errors;
  };
  return (
    <div className="form-overlay">
      <form onSubmit={handleSubmit} className="create-citizen-form rounded">
        <i onClick={closeForm} className="close-btn">
          <AiOutlineClose />
        </i>
        <h2 className="">حذف حساب لمواطن</h2>

        <div className="form-group">
          <input onChange={handleChange} type="text" name="id" placeholder="رقم الهوية" />
          <p className="id-err">{idInputErr.id}</p>
        </div>
        <div>
          <button  className="btn btn-danger" type="submit">
            حذف المواطن
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCitizenForm;
