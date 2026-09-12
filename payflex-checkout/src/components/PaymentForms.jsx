import React from 'react';
import InputField from './InputField';

export function CardForm({ formData, onChange, onCardChange, errors }) {
  return (
    <div className="space-y-3 min-h-[160px] flex flex-col justify-center">
      <InputField
        name="cardNumber"
        placeholder="Card Number (XXXX XXXX XXXX XXXX)"
        value={formData.cardNumber}
        onChange={onCardChange}
        error={errors.cardNumber}
      />
      <div className="grid grid-cols-2 gap-3">
        <InputField
          name="cardExpiry"
          placeholder="MM/YY"
          maxLength={5}
          value={formData.cardExpiry}
          onChange={onChange}
          error={errors.cardExpiry}
        />
        <InputField
          type="password"
          name="cardCvc"
          placeholder="CVC"
          maxLength={4}
          value={formData.cardCvc}
          onChange={onChange}
          error={errors.cardCvc}
        />
      </div>
    </div>
  );
}

export function PayPalForm({ formData, onChange, error }) {
  return (
    <div className="space-y-3 min-h-[160px] flex flex-col justify-center">
      <p className="text-xs text-slate-400">
        You will be redirected to authenticate your PayPal account upon clicking submit.
      </p>
      <InputField
        type="email"
        name="paypalEmail"
        placeholder="PayPal Email Address"
        value={formData.paypalEmail}
        onChange={onChange}
        error={error}
      />
    </div>
  );
}

export function BankForm({ formData, onChange, errors }) {
  return (
    <div className="space-y-3 min-h-[160px] flex flex-col justify-center">
      <InputField
        name="accountHolder"
        placeholder="Account Holder Name"
        value={formData.accountHolder}
        onChange={onChange}
        error={errors.accountHolder}
      />
      <div className="grid grid-cols-2 gap-3">
        <InputField
          name="routingNumber"
          placeholder="Routing Number"
          maxLength={9}
          value={formData.routingNumber}
          onChange={onChange}
          error={errors.routingNumber}
        />
        <InputField
          name="accountNumber"
          placeholder="Account Number"
          value={formData.accountNumber}
          onChange={onChange}
          error={errors.accountNumber}
        />
      </div>
    </div>
  );
}