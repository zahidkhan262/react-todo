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