import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset state when closed
            setTimeout(() => {
                setIsSuccess(false);
                setEmail('');
                setPhone('');
                setPassword('');
            }, 300);
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            {/* Close overlay */}
            <div className="absolute inset-0" onClick={onClose}></div>
            
            {/* Modal Content */}
            <section className="relative w-full max-w-lg bg-surface text-on-surface rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] flex flex-col px-margin-mobile md:px-12 py-12 animate-in slide-in-from-bottom-4 duration-300">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="w-full flex flex-col items-center">
                    {/* Wordmark Header */}
                    <header className="mb-8 w-full flex justify-center">
                        <img alt="EASY EYES" className="h-12 w-auto object-contain mix-blend-multiply" src="/logo.png" />
                    </header>
                    {/* Titles */}
                    <div className="text-center mb-8 w-full">
                        <h1 className="font-headline-lg-mobile md:font-headline-md text-primary mb-2">Welcome Back</h1>
                        <p className="font-body-md text-on-surface-variant">Enter your details to access your inner circle.</p>
                    </div>

                    {isSuccess ? (
                        <div className="text-center p-8 bg-surface-container rounded-lg w-full flex flex-col items-center animate-in fade-in zoom-in duration-500">
                            <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
                            <h2 className="font-headline-md text-primary mb-2">Welcome In</h2>
                            <p className="font-body-md text-on-surface-variant mb-8">You have successfully signed in to Easy Eyes.</p>
                            <button onClick={() => { onClose(); navigate('/shop'); }} className="w-full bg-primary-container text-on-primary py-4 rounded font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors duration-300 shadow-sm">
                                Continue to Shop
                            </button>
                        </div>
                    ) : (
                        <form className="w-full flex flex-col gap-6 animate-in fade-in duration-500" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="flex flex-col gap-2 relative group">
                                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
                                <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-lg text-primary focus:ring-0 focus:border-primary transition-colors duration-300 placeholder-outline" id="email" placeholder="client@example.com" type="email" />
                            </div>
                            {/* Phone Field (Composite) */}
                            <div className="flex flex-col gap-2 relative group">
                                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="phone">Phone Number</label>
                                <div className="flex items-center border-b border-outline-variant focus-within:border-primary transition-colors duration-300">
                                    <select className="bg-transparent border-none py-2 pl-0 pr-6 font-body-lg text-primary focus:ring-0 appearance-none cursor-pointer">
                                        <option>+1</option>
                                        <option>+44</option>
                                        <option>+33</option>
                                        <option>+81</option>
                                    </select>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent border-0 px-2 py-2 font-body-lg text-primary focus:ring-0 placeholder-outline" id="phone" placeholder="000 000 0000" type="tel" />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="flex flex-col gap-2 relative group">
                                <div className="flex justify-between items-baseline">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">Password</label>
                                    <button type="button" className="font-label-caps text-label-caps text-primary hover:opacity-70 transition-opacity">Forgot?</button>
                                </div>
                                <input required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-lg text-primary focus:ring-0 focus:border-primary transition-colors duration-300 placeholder-outline" id="password" placeholder="••••••••" type="password" />
                            </div>
                            {/* Actions */}
                            <div className="flex flex-col gap-4 mt-4">
                                <button disabled={isSubmitting} className="w-full bg-primary-container text-on-primary py-4 rounded font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors duration-300 shadow-sm flex justify-center items-center gap-2" type="submit">
                                    {isSubmitting ? (
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    ) : 'Sign In / Create Account'}
                                </button>
                                <button type="button" onClick={onClose} className="w-full text-center py-4 font-label-caps text-label-caps text-on-surface-variant uppercase hover:text-primary transition-colors duration-300">
                                    Continue as Guest
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
