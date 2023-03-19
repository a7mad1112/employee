import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { updateCitizenFormUIActions } from './../../store/slices/updateCitizenFormUI';

const UpdateCitizenForm = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(updateCitizenFormUIActions.toggle());
  };
  return (
    <div className="form-overlay">
      <form className="create-citizen-form rounded">
        <i onClick={closeForm} className="close-btn">
          <AiOutlineClose />
        </i>
        <h2 className="">تعديل بيانات المواطن</h2>
        <div className="form-group">
          <input type="text" name="name" placeholder="اسم المواطن" />
          <p className="name-err"></p>
        </div>

        <div className="form-group">
          <input type="text" name="id" placeholder="رقم الهوية" />
          <p className="id-err">123</p>
        </div>

        <div className="form-group">
          <input type="password" name="password" placeholder="كلمة المرور" />
          <p className="password-err">4</p>
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="الايميل" />
          <p className="email-err">4</p>
        </div>

        <div className="form-group">
          <input type="tel" name="phone" placeholder="رقم الهاتف" />
          <p className="phone-err">4</p>
        </div>

        <div className="form-group">
          <input type="text" name="address" placeholder="العنوان" />
          <p className="address-err">4</p>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            تعديل بيانات المواطن
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCitizenForm;
