import React from 'react'

export const CreditCard = ({type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {

  const bankImg = () => {
    if (type === "visa") {
      return visaImg
    } else {
      return masterImg
    }
  }
  return (
    <div className = "container">
      <div className = "card"  >
        <div className= "top-card">
        <img className="img" src={props.image} alt="card type" />
        </div>
        <div classname="info">
        <span>{props.number}</span>
        <p className="month">{props.expirationMonth}</p>
        <p className= "year">Expires in {props.expirationYear}</p>
        <p className="bank">{props.bank}</p>
        <p classname="owner">{props.owner}</p>
       
        </div>
        
       


      </div>

    </div>
  )
}

export default CreditCard;
