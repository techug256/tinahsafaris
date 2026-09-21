import { useState, useEffect, useRef } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  MessageCircle, Facebook, Instagram, Youtube
} from 'lucide-react';

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    tourInterest: '',
    travelers: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    // In a real app, this would send data to a server
    setTimeout(() => {
      setFormData({
        name: '', email: '', phone: '', travelDate: '',
        tourInterest: '', travelers: '', message: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      lines: [
        { text: '+256 707 667 448', href: 'tel:+256707667448' },
        { text: 'Available on WhatsApp', href: 'https://wa.me/256707667448' },
      ],
      color: 'bg-forest/10',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: [
        { text: 'dixongreenleaf@gmail.com', href: 'mailto:dixongreenleaf@gmail.com' },
      ],
      color: 'bg-gold/10',
    },
    {
      icon: MapPin,
      title: 'Location',
      lines: [
        { text: 'Kampala, Uganda', href: '#' },
        { text: 'East Africa', href: '#' },
      ],
      color: 'bg-forest/10',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: [
        { text: 'Monday - Saturday: 8AM - 6PM', href: '#' },
        { text: 'Sunday: By Appointment', href: '#' },
      ],
      color: 'bg-gold/10',
    },
  ];

  const tourOptions = [
    'Gorilla Trekking',
    'Wildlife Safari',
    'Chimpanzee Tracking',
    'Birding Safari',
    'Cultural Tour',
    'Multi-Day Adventure',
    'Custom Package',
    'Not Sure Yet',
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/lodge.jpg)' }}
        />
        <div className="absolute inset-0 bg-forest-dark/70" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 animate-fade-in-up">We'd Love to Hear From You</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream font-heading animate-fade-in-up delay-200 text-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-cream bg-pattern -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mb-4`}>
                    <info.icon className="w-5 h-5 text-forest" />
                  </div>
                  <h3 className="text-lg font-bold text-forest font-heading mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.lines.map((line) => (
                      <a
                        key={line.text}
                        href={line.href}
                        target={line.href.startsWith('http') ? '_blank' : undefined}
                        rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-forest/70 text-sm hover:text-gold-dark transition-colors"
                      >
                        {line.text}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Plan Your Trip</p>
              <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-2">
                Send Us a Message
              </h2>
              <p className="text-forest/60 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a personalized safari proposal.
              </p>

              {submitted ? (
                <div className="bg-forest/5 border border-forest/20 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-forest font-heading mb-2">Message Sent!</h3>
                  <p className="text-forest/70 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                    For urgent inquiries, please WhatsApp us directly.
                  </p>
                  <a
                    href="https://wa.me/256707667448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-cream/50 focus:outline-none focus:bg-white transition-colors ${
                          errors.name ? 'border-red-400' : 'border-cream-dark focus:border-gold'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-cream/50 focus:outline-none focus:bg-white transition-colors ${
                          errors.email ? 'border-red-400' : 'border-cream-dark focus:border-gold'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-cream/50 focus:outline-none focus:bg-white transition-colors ${
                          errors.phone ? 'border-red-400' : 'border-cream-dark focus:border-gold'
                        }`}
                        placeholder="+256 700 000 000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Preferred Travel Date</label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark bg-cream/50 focus:outline-none focus:bg-white focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Tour Interest</label>
                      <select
                        name="tourInterest"
                        value={formData.tourInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark bg-cream/50 focus:outline-none focus:bg-white focus:border-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a tour type</option>
                        {tourOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Number of Travelers</label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark bg-cream/50 focus:outline-none focus:bg-white focus:border-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select number</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-5">3 - 5 People</option>
                        <option value="6-10">6 - 10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-cream/50 focus:outline-none focus:bg-white transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-cream-dark focus:border-gold'
                      }`}
                      placeholder="Tell us about your dream safari, any specific interests, questions, or requests..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </button>

                  <p className="text-forest/50 text-xs text-center">
                    You can also reach us directly at{' '}
                    <a href="mailto:dixongreenleaf@gmail.com" className="text-gold-dark hover:underline">dixongreenleaf@gmail.com</a>
                    {' '}or WhatsApp{' '}
                    <a href="https://wa.me/256707667448" className="text-gold-dark hover:underline">+256 707 667 448</a>
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={200} className="lg:col-span-2">
              <div className="bg-forest rounded-2xl p-8 text-cream">
                <h3 className="text-xl font-bold font-heading mb-4">Why Book With Us?</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Personalized itineraries tailored to you',
                    'Best price guarantee on gorilla permits',
                    '24/7 in-country support during your trip',
                    'Expert local guides born and raised in Uganda',
                    'Responsible tourism that gives back',
                    'Flexible booking and cancellation policies',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-sm text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-xl font-bold font-heading mb-4">Connect With Us</h3>
                  <div className="space-y-4 mb-8">
                    <a
                      href="https://wa.me/256707667448"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-colors"
                    >
                      <MessageCircle size={20} />
                      <div>
                        <p className="font-semibold text-sm">WhatsApp Us</p>
                        <p className="text-xs text-white/80">+256 707 667 448</p>
                      </div>
                    </a>
                    <a
                      href="mailto:dixongreenleaf@gmail.com"
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-cream px-4 py-3 rounded-xl transition-colors"
                    >
                      <Mail size={20} />
                      <div>
                        <p className="font-semibold text-sm">Email Us</p>
                        <p className="text-xs text-cream/80">dixongreenleaf@gmail.com</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                      <Facebook size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                      <Instagram size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                      <Youtube size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Kampala Image */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-4">
              We're Based in Kampala, Uganda
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img
                src="/images/kampala.jpg"
                alt="Kampala Uganda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-cream">
                <h3 className="text-2xl font-bold font-heading mb-2">Kampala, Uganda</h3>
                <p className="text-cream/80">The gateway to your African adventure</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
