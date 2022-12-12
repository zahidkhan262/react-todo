import { faEdit, faTasks, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import creditCardType, {
    getTypeInfo,
    types as CardType,
} from "credit-card-type";

const CreditCard = () => {

    const initialInput = {
        cardNumber: '',
        expireDate: '',
        securityCode: '',
    }
    const [inputField, setInputField] = useState(initialInput);
    const { cardNumber, expireDate, secuityCode } = inputField


    // for multiple input data
    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setInputField(() => {
            return {
                ...inputField,
                [name]: value
            }
        })
    }
    const cardTypes = [
        creditCardType.types.VISA,
        creditCardType.types.MASTERCARD,
        creditCardType.types.AMERICAN_EXPRESS,
        creditCardType.types.DINERS_CLUB,
        creditCardType.types.DISCOVER,
        creditCardType.types.JCB,
        creditCardType.types.UNIONPAY,
        creditCardType.types.MAESTRO,
        creditCardType.types.ELO,
        creditCardType.types.MIR,
        creditCardType.types.HIPER,
        creditCardType.types.HIPERCARD,
    ];

    const creditCard = creditCardType(cardNumber).filter(function (card) {
        return (
            card.type === CardType.MASTERCARD ||
            card.type === CardType.VISA ||
            card.type === CardType.AMERICAN_EXPRESS ||
            card.type === CardType.DINERS_CLUB ||
            card.type === CardType.MAESTRO ||
            card.type === CardType.UNIONPAY


        )
    });
    console.log(creditCard, "//")


    const handleCard = (e) => {
        e.preventDefault();
    }
    creditCard.map((item) => {
        console.log(item.niceType, "//")
    })


    return (
        <>
            <div className="form" onSubmit={handleCard}>
                <h2 className='mb-4'><FontAwesomeIcon icon={faEdit} /> Credit Card</h2>
                <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className='input-icon' />
                    <input
                        type="text"
                        placeholder='Credit card number'
                        name='cardNumber'
                        value={cardNumber}
                        autoComplete='off'
                        onChange={handleFormInput}
                    />
                    <span>cardName </span>
                </div>
                <div className="input-field">
                    <FontAwesomeIcon icon={faTasks} className='input-icon' />
                    <input
                        type="text"
                        placeholder='Expire Date'
                        name='expireDate'
                        value={expireDate}
                        autoComplete='off'
                        onChange={handleFormInput}
                    />
                </div>
                <div className="input-field">
                    <FontAwesomeIcon icon={faTasks} className='input-icon' />
                    <input
                        type="text"
                        placeholder='Secuity Code'
                        name='secuityCode'
                        value={secuityCode}
                        autoComplete='off'
                        onChange={handleFormInput}
                    />
                </div>

                <div className="form-btn mt-4">
                    <Button
                        className='btn col-md-7 col-sm-8 col-sx-10 bg-primary text-white fs-3 py-3'
                        type='submit'>
                        Continue
                    </Button>
                </div>
            </div >
        </>
    )
}

export default CreditCard


    // function detectCardType(number) {
    //     var re = {
    //         electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    //         maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    //         dankort: /^(5019)\d+$/,
    //         interpayment: /^(636)\d+$/,
    //         unionpay: /^(62|88)\d+$/,
    //         visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    //         mastercard: /^5[1-5][0-9]{14}$/,
    //         amex: /^3[47][0-9]{13}$/,
    //         diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    //         discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    //         jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    //     }

    //     for (var key in re) {
    //         if (re[key].test(number)) {
    //             return key
    //         }
    //     }
    // }



// credit card by using formik

import { useFormik } from "formik";
import Cardbg from "../images/cardBg.jpg";
import cardLogo from "../images/mastercard.ico";
import validationSchema from "./Validation";
import React from "react";
import "./main.css";
const CreditCard = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        cardNumber: "",
        cvv: "",
        month: "",
        year: "",
      },
      validationSchema,
    });

  return (
    <main className="w-100 d-flex justify-content-center align-items-center">
      <div className="cardCanvas">
        <div className="cardWrapper">
          <div className="cardResult">
            <div className="resultInner">
              <img className="cardImg" src={Cardbg} alt="..." />
              <div className="resultProps position-absolute">
                <div className="cardLogo w-100 text-end">
                  <img src={cardLogo} alt="..." />
                </div>
                <div className="my-1 cardNumberResult">
                  <label
                    className="cardLabel text-light"
                    htmlFor="cardNoResult"
                  >
                    Card Number
                    <input
                      disabled
                      type="text"
                      id="cardNoResult"
                      className="resultInput"
                      value={
                        values.cardNumber
                          ? values.cardNumber
                          : "XXXX-XXXX-XXXX-XXXX"
                      }
                    />
                  </label>
                </div>
                <div className="cardBottomResult">
                  <label className="cardLabel text-light" htmlFor="cardOwner">
                    Card Holder
                    <input
                      disabled
                      type="text"
                      id="cardOwner"
                      className="resultInput"
                      value={`${
                        values.name
                          ? values.name.trim().toLocaleUpperCase()
                          : "NAME"
                      } ${
                        values.surname
                          ? values.surname.toLocaleUpperCase()
                          : "SURNAME"
                      }`}
                    />
                  </label>
                  <label className="cardLabel text-light" htmlFor="expires">
                    Expires
                    <input
                      disabled
                      type="text"
                      id="expires"
                      className="resultInput"
                      value={`${values.month ? values.month : "MM"} / ${
                        values.year ? values.year.slice(2) : "YY"
                      } `}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="formWrapper">
            <form id="cardForm" className="text-center" onSubmit={handleSubmit}>
              <div className="d-flex w-100 my-3 justify-content-between align-items-center bothInput">
                <label className="me-2 cardLabel" htmlFor="name">
                  Name
                  <input
                    className="cardInput"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    id="name"
                  />
                  {errors.name && touched.name ? (
                    <span className="formErrorMessage"> * {errors.name}</span>
                  ) : (
                    <span className="formErrorMessage"></span>
                  )}
                </label>
                <label htmlFor="surname" className="cardLabel ms-2">
                  Surname
                  <input
                    className="cardInput"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    id="surname"
                  />
                  {errors.surname && touched.surname ? (
                    <span className="formErrorMessage">
                      {" "}
                      * {errors.surname}
                    </span>
                  ) : (
                    <span className="formErrorMessage"></span>
                  )}
                </label>
              </div>
              <label className="w-100 my-3 cardLabel" htmlFor="cardNumber">
                Card Number
                <input
                  className="cardInput text-center"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cardNumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  name="cardNumber"
                  maxLength="19"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <span className="formErrorMessage">
                    {" "}
                    * {errors.cardNumber}
                  </span>
                ) : (
                  <span className="formErrorMessage"></span>
                )}
              </label>
              <label className="w-100 my-2 cardLabel" htmlFor="month">
                Expired Date
                <div className="d-flex w-100  justify-content-between align-items-center bothInput">
                  <select
                    onChange={handleChange}
                    className="w-100 me-2 selectDate"
                    name="month"
                    id="month"
                  >
                    <option value="" disabled selected>
                      Month
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    onChange={handleChange}
                    className="w-100 selectDate ms-2"
                    name="year"
                    id="year"
                  >
                    <option value="" disabled selected>
                      Year
                    </option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                  </select>
                </div>
              </label>
              <label className="w-100 my-3 cardLabel" htmlFor="cvv">
                CVV
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="XXX"
                  className="cardInput text-center"
                  maxLength="3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.cvv && touched.cvv ? (
                  <span className="formErrorMessage"> * {errors.cvv}</span>
                ) : (
                  <span className="formErrorMessage"></span>
                )}
              </label>
              <button type="submit" className="btn-primary btn w-100 my-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreditCard;
