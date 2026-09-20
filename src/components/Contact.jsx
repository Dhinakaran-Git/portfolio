import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Loader2,
} from 'lucide-react';

export const Contact = () => {
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'dhinakaranmurugesan18@gmail.com',
        },
        emailPublicKey,
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>06 / CONTACT</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Have a project, opportunity, or technical challenge? Let's connect.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href="mailto:dhinakaranmurugesan18@gmail.com"
              className="glass-card p-6 rounded-2xl border border-blue-900/30 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 group block"
            >
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</span>
                <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate mt-0.5">
                  dhinakaranmurugesan18@gmail.com
                </div>
                <p className="text-xs text-slate-400 mt-1">Direct inquiries & opportunities</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+916374138887"
              className="glass-card p-6 rounded-2xl border border-blue-900/30 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 group block"
            >
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-emerald-400 group-hover:text-white group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone</span>
                <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mt-0.5">
                  +91 6374138887
                </div>
                <p className="text-xs text-slate-400 mt-1">Mobile & WhatsApp</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/dhinakaranmurugesan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-blue-900/30 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 group block"
            >
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn</span>
                <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate mt-0.5">
                  linkedin.com/in/dhinakaranmurugesan
                </div>
                <p className="text-xs text-slate-400 mt-1">Professional network & recommendations</p>
              </div>
            </a>

            {/* Location & Response Time Info */}
            <div className="p-5 rounded-2xl bg-[#080D18] border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Typical response within 24 business hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-blue-900/40">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and your message will be sent directly to dhinakaranmurugesan18@gmail.com.
              </p>

              {/* Success Banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-start gap-3 text-emerald-300 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold">Message sent successfully!</span>
                      <p className="text-xs text-emerald-400/80 mt-0.5">
                        Thank you for reaching out. I will get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-300 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Message could not be sent.</span>
                      <p className="text-xs text-red-400/80 mt-0.5">
                        Please try again or email dhinakaranmurugesan18@gmail.com directly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.name ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-500/50'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-500/50'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior Java Full Stack Role / Architecture Consulting"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                      errors.subject ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-500/50'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team requirements, or technical opportunity..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-y ${
                      errors.message ? 'border-red-500/80' : 'border-slate-800 focus:border-cyan-500/50'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button & Disclaimer */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all duration-300 shadow-glow-sm cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    * Your message is sent securely through EmailJS
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
