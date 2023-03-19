import React, { useEffect, useState } from "react";
import "./create-citizen-form.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createCitizenFormUIActions } from "./../../store/slices/createCitizenFormUI";

const CreateCitizenForm = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(createCitizenFormUIActions.toggle());
  };
  const [inputsValue, setInputsValue] = useState({
    name: "",
    id: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });
  const [inputsErr, setInputsErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsValue({ ...inputsValue, [name]: value });
    // console.log(inputsValue)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputsErr(validate(inputsValue));
    setIsSubmit(true);
  };
  useEffect( () => {
    if (Object.keys(inputsErr).length === 0 && isSubmit) {
      create();
    }
  }, [inputsErr]);
  const create = () => {
    console.log(inputsValue)
    console.log("Ahmed is done")
  }
  const validate = (values) => {
    const errors = {};
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!values.name.trim()) {
      errors.name = "الأسم مطلوب !";
    }
    if (!values.email.trim()) {
      errors.email =  "الأيميل مطلوب !";
    } else if (!pattern.test(values.email)) {
      errors.email = "تأكد من الأيميل !";
    }
    if (isNaN(values.id.trim())){
      errors.id = "أدخل قيمة رقمية"
    }
    if (values.id.trim().split("").length <= 7)
    {
      errors.id = "أدخل 8 ارقام على الأقل"
    }

    if (values.password.trim().split("").length <= 8)
    {
      errors.password = "كلمة المرور يجب ان تكون 8 رموز على الأقل"
    }

    if (values.phone.trim() === "")
    {
      errors.phone = "هذا الحقل مطلوب"
    }

    if (isNaN(values.phone.trim())){
      errors.phone = "أدخل قيمة رقمية"
    }

    if (values.address.trim() === "")
    {
      errors.address = "هذا الحقل مطلوب"
    }

    return errors;
  };
  return (
    <div className="form-overlay">
      <form className="create-citizen-form rounded" onSubmit={handleSubmit}>
        <i onClick={closeForm} className="close-btn">
          <AiOutlineClose />
        </i>
        <h2 className="">انشاء حساب لمواطن</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="اسم المواطن"
            onChange={handleChange}
          />
          <p className="name-err">{inputsErr.name}</p>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="id"
            placeholder="رقم الهوية"
            onChange={handleChange}
          />
          <p className="id-err">{inputsErr.id}</p>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            onChange={handleChange}
          />
          <p className="password-err">{inputsErr.password}</p>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="الايميل"
            onChange={handleChange}
          />
          <p className="email-err">{inputsErr.email}</p>
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            onChange={handleChange}
          />
          <p className="phone-err">{inputsErr.phone}</p>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="العنوان"
            onChange={handleChange}
          />
          <p className="address-err">{inputsErr.address}</p>
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            اضافة المواطن
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCitizenForm;
