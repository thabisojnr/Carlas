import React, { useState } from "react";
import { Menu, X, MapPin, Users, Heart, Star, ArrowRight, Mail, Phone, Globe, Clock, CheckCircle, Calendar } from "lucide-react";
import { mockData } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('usa');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'au-pair',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', type: 'au-pair', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-page">
      {/* Header Navigation */}
      <header className="header-nav">
        <div className="container flex items-center justify-between">
          <div className="logo-container">
            <h2 className="text-xl font-mono font-semibold text-primary">Carla's Au Pairs</h2>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button 
            className="md:hidden btn-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-overlay backdrop-blur-md border-t border-light">
            <nav className="container py-4 space-y-4">
              <a href="#programs" className="block nav-link">Programs</a>
              <a href="#process" className="block nav-link">Process</a>
              <a href="#about" className="block nav-link">About</a>
              <a href="#contact" className="block nav-link">Contact</a>
              <div className="pt-4 space-y-2">
                <button className="btn-secondary w-full">Login</button>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-announcement">
            <Globe size={16} />
            <span>Trusted Au Pair Agency Since 2010</span>
          </div>
          
          <h1 className="heading-hero">
            Your Journey to <br />
            <span className="text-accent-purple-400">Cultural Exchange</span><br />
            Starts Here
          </h1>
          
          <p className="hero-subtitle body-large text-secondary">
            Connect with host families in the USA and Europe. Experience new cultures, 
            learn languages, and create lifelong memories as an au pair.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="btn-primary">Start Application</button>
            <button className="btn-secondary">Browse Programs</button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="heading-2 text-accent-purple-400">500+</div>
              <div className="caption">Au Pairs Placed</div>
            </div>
            <div className="text-center">
              <div className="heading-2 text-accent-blue-400">50+</div>
              <div className="caption">Cities Worldwide</div>
            </div>
            <div className="text-center">
              <div className="heading-2 text-accent-orange-400">15+</div>
              <div className="caption">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Our Programs</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Choose from our carefully curated au pair programs in the USA and Europe
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex bg-card rounded-full p-1 border border-light">
              <button 
                className={`btn-tag ${selectedProgram === 'usa' ? 'active' : ''}`}
                onClick={() => setSelectedProgram('usa')}
              >
                USA Programs
              </button>
              <button 
                className={`btn-tag ${selectedProgram === 'europe' ? 'active' : ''}`}
                onClick={() => setSelectedProgram('europe')}
              >
                Europe Programs
              </button>
            </div>
          </div>

          <div className="voice-grid">
            {mockData.programs[selectedProgram].map((program, index) => (
              <div key={index} className={`voice-card accent-${program.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="text-accent-purple-400" size={24} />
                  <span className="btn-tag">{program.duration}</span>
                </div>
                <h3 className="voice-card-title">{program.location}</h3>
                <p className="voice-card-description">{program.description}</p>
                
                <div className="space-y-2 mb-4">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent-purple-400" />
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="btn-primary w-full">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Simple Application Process</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Get started on your au pair journey in just a few easy steps
            </p>
          </div>

          <div className="ai-grid">
            {mockData.processSteps.map((step, index) => (
              <div key={index} className="voice-card hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-purple-200 rounded-full flex items-center justify-center mr-4">
                    <span className="heading-3 text-accent-purple-400">{step.step}</span>
                  </div>
                  <h3 className="voice-card-title">{step.title}</h3>
                </div>
                <p className="voice-card-description">{step.description}</p>
                <div className="mt-4 flex items-center text-accent-purple-400">
                  <Clock size={16} className="mr-2" />
                  <span className="caption">{step.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Success Stories</h2>
            <p className="body-large text-secondary">
              Hear from our happy au pairs and host families
            </p>
          </div>

          <div className="voice-grid">
            {mockData.testimonials.map((testimonial, index) => (
              <div key={index} className={`voice-card accent-${testimonial.color}`}>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current text-accent-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="voice-card-description italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent-purple-200 rounded-full flex items-center justify-center mr-3">
                    <span className="button-text">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="body-small font-medium">{testimonial.name}</div>
                    <div className="caption">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-1 mb-6">Meet Carla</h2>
              <p className="body-large text-secondary mb-6">
                With over 15 years of experience in cultural exchange programs, 
                Carla has helped hundreds of young people achieve their dreams of 
                living abroad as au pairs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-green-200" size={20} />
                  <span className="body-medium">Licensed & Insured Agency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-green-200" size={20} />
                  <span className="body-medium">24/7 Support During Program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-green-200" size={20} />
                  <span className="body-medium">Personalized Matching Service</span>
                </div>
              </div>
            </div>
            <div className="voice-card accent-pink">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="heading-2 text-accent-purple-400">CA</span>
                </div>
                <h3 className="voice-card-title">Carla Anderson</h3>
                <p className="voice-card-description">
                  Founder & Director<br />
                  MA in International Relations<br />
                  Certified Cultural Exchange Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Ready to Start?</h2>
            <p className="body-large text-secondary">
              Get in touch and begin your au pair journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="voice-card">
              <h3 className="voice-card-title mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent-purple-400" size={20} />
                  <span className="body-medium">hello@carlasaupairs.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent-purple-400" size={20} />
                  <span className="body-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent-purple-400" size={20} />
                  <span className="body-medium">New York, NY • London, UK</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-accent-purple-400" size={20} />
                  <span className="body-medium">Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <div className="voice-card">
              <h3 className="voice-card-title mb-6">Quick Application</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="au-pair">I want to be an Au Pair</option>
                    <option value="host-family">I'm looking for an Au Pair</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about yourself and your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input min-h-[100px]"
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="heading-3 text-white mb-4">Carla's Au Pairs</h3>
              <p className="body-small text-gray-300">
                Creating meaningful cultural exchanges since 2010
              </p>
            </div>
            <div>
              <h4 className="body-medium font-medium mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-small text-gray-300 hover:text-white">USA Au Pairs</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Europe Au Pairs</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Host Families</a></li>
              </ul>
            </div>
            <div>
              <h4 className="body-medium font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Application Guide</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Requirements</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="body-medium font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Emergency Help</a></li>
                <li><a href="#" className="body-small text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="caption text-gray-400">
              © 2024 Carla's Au Pairs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;