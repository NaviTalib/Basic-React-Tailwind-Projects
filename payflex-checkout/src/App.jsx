import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import InputField from './components/InputField';
import PaymentSelector from './components/PaymentSelector';
import { CardForm, PayPalForm, BankForm } from './components/PaymentForms';

const App = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Initial state object for easy resets
  const initialFormState = {
    fullName: '',
    email: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    paypalEmail: '',
    accountHolder: '',
    accountNumber: '',
    routingNumber: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  // Dedicated Reset Handler
  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
    setPaymentMethod('card');
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleCardNumberChange = (e) => {
    let rawValue = e.target.value.replace(/\D/g, '');
    if (rawValue.length > 16) rawValue = rawValue.slice(0, 16);
    const formatted = rawValue.replace(/(.{4})/g, '$1 ').trim();
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
    if (errors.cardNumber) setErrors((prev) => ({ ...prev, cardNumber: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required.';

    if (paymentMethod === 'card') {
      if (formData.cardNumber.replace(/\s/g, '').length !== 16) newErrors.cardNumber = 'Card number must be 16 digits.';
      if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) newErrors.cardExpiry = 'Use MM/YY format.';
      if (formData.cardCvc.length < 3) newErrors.cardCvc = '3 or 4 digits required.';
    } else if (paymentMethod === 'paypal') {
      if (!formData.paypalEmail.trim() || !/\S+@\S+\.\S+/.test(formData.paypalEmail)) {
        newErrors.paypalEmail = 'Valid PayPal email required.';
      }
    } else if (paymentMethod === 'bank') {
      if (!formData.accountHolder.trim()) newErrors.accountHolder = 'Name required.';
      if (formData.accountNumber.length < 8) newErrors.accountNumber = 'Invalid account number.';
      if (formData.routingNumber.length !== 9) newErrors.routingNumber = '9 digits required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Sidebar */}
        <div className="md:col-span-5 bg-slate-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">PayFlex Portal</span>
            <h2 className="text-2xl font-bold text-white mt-1">Order Summary</h2>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-slate-400"><span>Pro Plan</span><span>$199.00</span></div>
              <div className="flex justify-between text-slate-400"><span>Taxes</span><span>$15.92</span></div>
              <div className="border-t border-slate-800 pt-4 flex justify-between font-semibold text-white">
                <span>Total</span><span className="text-indigo-400">$214.92</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="md:col-span-7 p-6 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Payment Successful!</h3>
              <p className="text-xs text-slate-400">A receipt was sent to {formData.email}</p>
              <button 
                onClick={handleReset} 
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors"
              >
                Reset Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Billing Info</h3>
                <div className="space-y-3">
                  <InputField name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                  <InputField type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} error={errors.email} />
                </div>
              </div>

              <PaymentSelector selectedMethod={paymentMethod} onSelect={handlePaymentMethodChange} />

              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 min-h-[220px] flex flex-col justify-center transition-all duration-200">
                {paymentMethod === 'card' && <CardForm formData={formData} onChange={handleChange} onCardChange={handleCardNumberChange} errors={errors} />}
                {paymentMethod === 'paypal' && <PayPalForm formData={formData} onChange={handleChange} error={errors.paypalEmail} />}
                {paymentMethod === 'bank' && <BankForm formData={formData} onChange={handleChange} errors={errors} />}
              </div>

              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.99]">
                Pay $214.92 Now
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;