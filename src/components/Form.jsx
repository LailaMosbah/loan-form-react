import React, { useState } from "react";
import "../styles/form.css";
import Modal from "./Modal";

export default function Form() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    message: "",
    colorMessage: "red",
  });

  let btnIsDiabled =
    loanInputs.name.trim() == "" ||
    loanInputs.age.trim() == "" ||
    loanInputs.phone.trim() == "";

  function submitClicked(event) {
    event.preventDefault();
    let color = "red";
    let message = "";
    if (isNaN(parseInt(loanInputs.age))) {
      message = "Age Must be Number";
    } else if (loanInputs.age < 17 || loanInputs.age > 80) {
      message = "Age Must be between 17 and 80";
    } else if (isNaN(parseInt(loanInputs.phone))) {
      message = "Phone Number must be a Number";
    } else if (loanInputs.phone.length < 11 || loanInputs.phone.length > 13) {
      message = "Number of Phone Nubmer's Digits must be between 11 and 13";
    } else if (loanInputs.isEmployee == true && loanInputs.salaryRange == "") {
      message = "If you work , You must choose the range of Salary";
    } else if (loanInputs.isEmployee == false && loanInputs.salaryRange != "") {
      message =
        "If you have a salary then You must work . Please Mark on the Box  ";
    } else {
      color = "green";
      message = "Your Request is Submitted Successfully";
    }

    setShowModal({ show: true, message: message, colorMessage: color });
  }

  function hideModal() {
    setShowModal({ ...showModal, show: false });
  }
  return (
    <>
      <div className="container" onClick={hideModal}>
        <h1>Loan Requesting</h1>
        <div className="inner-container">
          <form action="" className="form" onSubmit={submitClicked}>
            <label htmlFor="">
              Name :
              <input
                type="text"
                className="input"
                value={loanInputs.name}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, name: e.target.value })
                }
              />
            </label>

            <label htmlFor="">
              Age :
              <input
                type="text"
                className="input"
                value={loanInputs.age}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, age: e.target.value })
                }
              />
            </label>

            <label htmlFor="">
              Number Phone :
              <input
                type="text"
                className="input"
                value={loanInputs.phone}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, phone: e.target.value })
                }
              />
            </label>

            <label className="checkbox-label">
              Are you Employee
              <input
                type="checkbox"
                className="checkbox-input"
                checked={loanInputs.isEmployee}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, isEmployee: e.target.checked })
                }
              />
            </label>

            <label htmlFor="">
              Select your Salary :
              <select
                name=""
                id=""
                className="input"
                value={loanInputs.salaryRange}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, salaryRange: e.target.value })
                }
              >
                <option value="" disabled>
                  your salary
                </option>
                <option> less than 500$</option>
                <option> between 500$ and 2000$</option>
                <option> over than 2000$</option>
              </select>
            </label>

            <button className="btnSubmit" disabled={btnIsDiabled} type="submit">
              Submit
            </button>
          </form>
        </div>{" "}
        <Modal
          show={showModal.show}
          message={showModal.message}
          color={showModal.colorMessage}
        />
      </div>
    </>
  );
}
