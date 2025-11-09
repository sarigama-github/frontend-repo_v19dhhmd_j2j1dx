import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#030712] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Let's build something great</h2>
            <p className="mt-3 text-white/70">
              Tell us about your goals and we’ll get back to you within one business day.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D97C1]/15 text-[#1D97C1]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email us</p>
                  <a href="mailto:hello@soluease.com" className="font-medium text-white hover:underline">
                    hello@soluease.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#1D97C1]"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#1D97C1]"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#1D97C1]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#1D97C1] px-6 py-3 font-medium text-white shadow-lg shadow-cyan-900/30 transition hover:brightness-110"
              >
                Send message
              </button>
              {submitted && (
                <p className="text-sm text-[#1D97C1]">Thanks! We'll be in touch shortly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
