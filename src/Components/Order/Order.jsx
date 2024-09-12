import React, { useState } from 'react';
import PersonalData from './PersonalData';
import PaymentMethods from './PaymentMethods';
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [personalData, setPersonalData] = useState({
    titular: '',
    tipoDoc: '',
    nroDoc: '',
    nroTarjeta: '',
    vencimiento: '',
    codSeg: '',
  });

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <div className='p-4 max-w-md mx-auto'>
      <PaymentMethods setPaymentMethod={setPaymentMethod} isDisabled={isDisabled} setIsDisabled={setIsDisabled} handleCancel={handleCancel} />

      {(paymentMethod === 'Debito/Credito' && isDisabled) && <PersonalData data={personalData} setData={setPersonalData} setIsDisabled={setIsDisabled} handleCancel={handleCancel} />}
    </div>
  );
}

export default Order;