import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import empImg from "../../assets/emp.jpg";
import "./details-section.css";
import { createCitizenFormUIActions } from "./../../store/slices/createCitizenFormUI";
import { updateCitizenFormUIActions } from './../../store/slices/updateCitizenFormUI';
import { deleteCitizenFormUIActions } from './../../store/slices/deleteCitizenFormUI';

const DetailsSection = () => {
  let [emp, setEmp] = useState({
    name: "أحمد هشام علاونة",
    id: "123456789",
    email: "ahmalawneh79@gmail.com",
    address: "جنين",
    imgSrc: empImg,
  });
  const dispatch = useDispatch();


  const showCreateForm = () => {
    dispatch(createCitizenFormUIActions.toggle());
  };
  const showDeleteForm = () => {
    dispatch(deleteCitizenFormUIActions.toggle());
  };
  const showUpdateForm = () => {
    dispatch(updateCitizenFormUIActions.toggle());
  };
  return (
    <section id="details-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <center>
              <div className="emp-img">
                <img src={empImg} alt="صورة الموظف" />
              </div>
              <div className="detail-group">
                <span>الأسم: </span>
                <span>{emp.name}</span>
              </div>
              <div className="detail-group">
                <span>رقم الهوية: </span>
                <span>{emp.id}</span>
              </div>
              <div className="detail-group">
                <span>الأيميل: </span>
                <span>{emp.email}</span>
              </div>
              <div className="detail-group">
                <span>مكان السكن: </span>
                <span>{emp.address}</span>
              </div>
            </center>
          </div>
          <div className="col-md-4 col-sm-12  d-grid align-content-center">
            <div className="btns d-flex flex-column gap-5 me-auto">
              <button onClick={showCreateForm} className="btn btn-success py-2">
                انشاء حساب للمواطن
              </button>
              <button onClick={showUpdateForm} className="btn btn-primary py-2">
                تعديل بيانات المواطن
              </button>
              <button onClick={showDeleteForm} className="btn btn-danger py-2">حذف حساب مواطن</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
