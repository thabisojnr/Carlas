import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, DollarSign, Home, Users, Star, CheckCircle, Clock, Phone, Mail, Globe } from "lucide-react";
import { mockData } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const ProgramDetail = () => {
  const { region, location } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Find the program data
  const programData = mockData.programs[region]?.find(program => 
    program.location.toLowerCase().replace(/\s+/g, '-').replace(',', '') === location
  );

  const detailedProgram = mockData.programDetails[region]?.[location];

  if (!programData || !detailedProgram) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-1 mb-4">Program Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const handleApplyNow = () => {
    toast({
      title: "Application Started!",
      description: `Starting your application for ${programData.location}. Redirecting to application form...`,
    });
    
    // Simulate redirect to application
    setTimeout(() => {
      navigate('/#contact');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-page">
      {/* Header */}
      <header className="header-nav">
        <div className="container flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-2 text-primary hover:text-accent-purple-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to Programs</span>
          </button>
          <h2 className="text-xl font-mono font-semibold text-primary">Carla's Au Pairs</h2>
          <button onClick={handleApplyNow} className="btn-primary">
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section hero-section.subtle pt-24">
        <div className="hero-content">
          <div className="hero-announcement">
            <MapPin size={16} />
            <span>{region.toUpperCase()} Program</span>
          </div>
          
          <h1 className="heading-hero mb-6">
            Au Pair Program in<br />
            <span className="text-accent-purple-400">{programData.location}</span>
          </h1>
          
          <p className="hero-subtitle body-large text-secondary mb-8">
            {detailedProgram.fullDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handleApplyNow} className="btn-primary">
              Start Application
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              View Other Programs
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="voice-card text-center">
              <Calendar className="text-accent-purple-400 mx-auto mb-4" size={32} />
              <h3 className="voice-card-title">Duration</h3>
              <p className="voice-card-description">{programData.duration}</p>
            </div>
            <div className="voice-card text-center">
              <DollarSign className="text-accent-blue-400 mx-auto mb-4" size={32} />
              <h3 className="voice-card-title">Stipend</h3>
              <p className="voice-card-description">{detailedProgram.stipend}</p>
            </div>
            <div className="voice-card text-center">
              <Users className="text-accent-orange-400 mx-auto mb-4" size={32} />
              <h3 className="voice-card-title">Family Types</h3>
              <p className="voice-card-description">{detailedProgram.familyTypes}</p>
            </div>
          </div>

          <div className="ai-grid">
            <div className="voice-card">
              <h3 className="voice-card-title mb-4">Program Highlights</h3>
              <div className="space-y-3">
                {detailedProgram.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="text-accent-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span className="body-small">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="voice-card">
              <h3 className="voice-card-title mb-4">What's Included</h3>
              <div className="space-y-3">
                {detailedProgram.included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent-green-200 mt-1 flex-shrink-0" size={16} />
                    <span className="body-small">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Requirements</h2>
            <p className="body-large text-secondary">
              Make sure you meet these requirements before applying
            </p>
          </div>

          <div className="voice-grid">
            <div className="voice-card accent-blue">
              <h3 className="voice-card-title">Basic Requirements</h3>
              <div className="space-y-2 mt-4">
                {detailedProgram.requirements.basic.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent-blue-400" />
                    <span className="body-small">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="voice-card accent-orange">
              <h3 className="voice-card-title">Experience</h3>
              <div className="space-y-2 mt-4">
                {detailedProgram.requirements.experience.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent-orange-400" />
                    <span className="body-small">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="voice-card accent-purple">
              <h3 className="voice-card-title">Documentation</h3>
              <div className="space-y-2 mt-4">
                {detailedProgram.requirements.documentation.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent-purple-400" />
                    <span className="body-small">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Experience */}
      <section className="py-20 bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Your Living Experience</h2>
            <p className="body-large text-secondary">
              What to expect during your time in {programData.location}
            </p>
          </div>

          <div className="ai-grid">
            <div className="voice-card accent-green">
              <Home className="text-accent-green-200 mb-4" size={32} />
              <h3 className="voice-card-title">Accommodation</h3>
              <p className="voice-card-description">{detailedProgram.living.accommodation}</p>
            </div>
            
            <div className="voice-card accent-pink">
              <Users className="text-accent-pink-200 mb-4" size={32} />
              <h3 className="voice-card-title">Family Life</h3>
              <p className="voice-card-description">{detailedProgram.living.familyLife}</p>
            </div>
            
            <div className="voice-card accent-blue">
              <Globe className="text-accent-blue-400 mb-4" size={32} />
              <h3 className="voice-card-title">Cultural Activities</h3>
              <p className="voice-card-description">{detailedProgram.living.cultural}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Application Timeline</h2>
            <p className="body-large text-secondary">
              From application to departure - here's what to expect
            </p>
          </div>

          <div className="voice-grid">
            {detailedProgram.timeline.map((phase, index) => (
              <div key={index} className="voice-card hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-purple-200 rounded-full flex items-center justify-center mr-3">
                    <span className="button-text text-accent-purple-400">{index + 1}</span>
                  </div>
                  <h3 className="voice-card-title">{phase.phase}</h3>
                </div>
                <p className="voice-card-description mb-3">{phase.description}</p>
                <div className="flex items-center text-accent-purple-400">
                  <Clock size={16} className="mr-2" />
                  <span className="caption">{phase.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section">
        <div className="container text-center">
          <h2 className="heading-1 mb-4">Ready to Apply?</h2>
          <p className="body-large text-secondary max-w-2xl mx-auto mb-8">
            Start your journey as an au pair in {programData.location} today. 
            Our team is ready to guide you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button onClick={handleApplyNow} className="btn-primary">
              Start Application Now
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              Explore Other Programs
            </button>
          </div>

          <div className="voice-card max-w-md mx-auto">
            <h3 className="voice-card-title mb-4">Have Questions?</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="text-accent-purple-400" size={16} />
                <span className="body-small">carlasaupairs@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="text-accent-purple-400" size={16} />
                <span className="body-small">+1 (838) 202-3032</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container text-center">
          <h3 className="heading-3 text-white mb-4">Carla's Au Pairs</h3>
          <p className="body-small text-gray-300 mb-4">
            Creating meaningful cultural exchanges since 2010
          </p>
          <p className="caption text-gray-400">
            © 2024 Carla's Au Pairs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProgramDetail;