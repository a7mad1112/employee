import React from "react";
import { useState } from "react";
import empImg from "../../assets/emp.jpg";
import empDetailsImg from "../../assets/florencia-viadana-1J8k0qqUfYY-unsplash.jpg";
import "./details-section.css";

const DetailsSection = () => {
  let [emp, setEmp] = useState({
    name: "أحمد هشام علاونة",
    id: "123456789",
    email: "ahmalawneh79@gmail.com",
    address: "جنين",
    imgSrc: empImg,
  });
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
          <div className="col-md-6 col-sm-12">
            <div className="details-img">
              <img
                className="rounded img-fluid"
                src={empDetailsImg}
                alt="صورة معلومات الموظف"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
