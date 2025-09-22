import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Users, Trophy } from 'lucide-react';

const RegistrationPage = () => {


 //here if required add payment gatway





  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    event: "Kalam",
    name: "",
    email: "",
    mobile: "",
    branch: "CSE",
    college: "",
    member2: { name: "", email: "", mobile: "" },
    member3: { name: "", email: "", mobile: "" },
    member4: { name: "", email: "", mobile: "" }
  });

  const eventPrices = {
    "Kalam": 29,
    "Clash of Bars": 49,
    "Aaja Bhidle": 99,
    "Wah Wah Kya Baat Hai": 49,
    "Antakshri": 149,
    "Sukkon E Shaam": 49,
    "Vlog Fest": 199,
    "Frame Clickers": 99,
  };

  const branches = [
    { value: "CSE", label: "Computer Science and Engineering (CSE)" },
    { value: "ECE", label: "Electronics and Communication Engineering (ECE)" },
    { value: "EE", label: "Electrical Engineering (EE)" },
    { value: "ME", label: "Mechanical Engineering (ME)" },
    { value: "CE", label: "Civil Engineering" },
    { value: "CHE", label: "Chemical Engineering" },
    { value: "IT", label: "Information Technology (IT)" },
    { value: "PETRO", label: "Petroleum Engineering" },
    { value: "PETROCHEM", label: "Petrochemical Engineering" },
    { value: "PIE", label: "Production and Industrial Engineering" },
    { value: "EIC", label: "Electronics Instrumentation and Control (EIC)" },
    { value: "AE", label: "Aeronautical Engineering (AE)" },
    { value: "BBA", label: "Bachelor of Business Administration (BBA)" },
    { value: "MBA", label: "Master of Business Administration (MBA)" },
    { value: "MTECH", label: "Master of Technology (M.Tech)" }
  ];

  const events = [
    { value: "Kalam", label: "Kalam (Writing Competition)", icon: "✍️", desc: "Express your thoughts through words" },
    { value: "Clash of Bars", label: "Clash of Bars (Rap Battle)", icon: "🎤", desc: "Battle through rhythm and rhyme" },
    { value: "Aaja Bhidle", label: "Aaja Bhidle (Debate)", icon: "🗣️", desc: "Engage in intellectual discourse" },
    { value: "Wah Wah Kya Baat Hai", label: "Wah Wah Kya Baat Hai (Open Mic)", icon: "🎭", desc: "Share your creativity with the world" },
    { value: "Antakshri", label: "Antakshri", icon: "🎵", desc: "Musical chain of melodies" },
    { value: "Sukkon E Shaam", label: "Sukkon E Shaam (Mushaira)", icon: "📜", desc: "Evening of poetry and verses" },
    { value: "Vlog Fest", label: "Vlog Fest", icon: "📹", desc: "Create compelling video content" },
    { value: "Frame Clickers", label: "Frame Clickers", icon: "📸", desc: "Capture moments through lens" }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMemberChange = (member, field, value) => {
    setFormData(prev => ({
      ...prev,
      [member]: {
        ...prev[member],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Successful! 🎉\nWelcome to ${formData.event}! Total fees: ₹${eventPrices[formData.event]}`);
  };

  const showGroupMembers = formData.event === "Antakshri" || formData.event === "Aaja Bhidle";
  const isAajaBhidle = formData.event === "Aaja Bhidle";
  const isAntakshri = formData.event === "Antakshri";
  
  const isFieldRequired = (fieldType) => {
    if (isAajaBhidle) {
      return fieldType === 'participant' || fieldType === 'member2';
    }
    if (isAntakshri) {
      return fieldType === 'participant' || fieldType === 'member2' || fieldType === 'member3' || fieldType === 'member4';
    }
    return fieldType === 'participant';
  };

  const selectedEvent = events.find(e => e.value === formData.event);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg h-10 px-4 py-2  cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          
          <div className="text-center space-y-4">
            <h1 className="font-script text-5xl md:text-6xl font-bold bg-clip-text text">
              Literature Fest Registration
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the celebration of words, creativity, and intellectual prowess
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-card backdrop-blur-sm shadow-elegant p-8 animate-fade-in-up">
          <form onSubmit={handlePayment} className="space-y-10">
            {/* Event Selection */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <h2 className="font-script text-3xl font-semibold text-foreground">
                  Choose Your Event
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-base font-medium">Event Name</label>
                  <select 
                    value={formData.event} 
                    onChange={(e) => handleInputChange('event', e.target.value)}
                    className="flex h-14 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                  >
                    {events.map((event) => (
                      <option key={event.value} value={event.value}>
                        {event.icon} {event.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-base font-medium">Registration Fee</label>
                  <div className="h-14 bg-gradient-secondary rounded-lg px-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary-foreground">
                      ₹{eventPrices[formData.event]}
                    </span>
                  </div>
                </div>
              </div>

              {selectedEvent && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{selectedEvent.icon}</span>
                    <div>
                      <h3 className="font-semibold text-primary">{selectedEvent.label}</h3>
                      <p className="text-muted-foreground mt-1">{selectedEvent.desc}</p>
                      {showGroupMembers && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-accent">
                          <Users className="h-4 w-4" />
                          <span>Team Event - 4 members required</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Participant Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-accent" />
                <h2 className="font-script text-3xl font-semibold text-foreground">
                  Participant Details
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-base font-medium">
                    Full Name {isFieldRequired('participant') && <span className="text-destructive">*</span>}
                  </label>
                  <input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                    required={isFieldRequired('participant')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium">
                    Email Address {isFieldRequired('participant') && <span className="text-destructive">*</span>}
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                    required={isFieldRequired('participant')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium">
                    Mobile Number {isFieldRequired('participant') && <span className="text-destructive">*</span>}
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 12345 67890"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                    required={isFieldRequired('participant')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-base font-medium">
                    Branch {isFieldRequired('participant') && <span className="text-destructive">*</span>}
                  </label>
                  <select 
                    value={formData.branch} 
                    onChange={(e) => handleInputChange('branch', e.target.value)}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                  >
                    {branches.map((branch) => (
                      <option key={branch.value} value={branch.value}>
                        {branch.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium">
                    College/University {isFieldRequired('participant') && <span className="text-destructive">*</span>}
                  </label>
                  <input
                    placeholder="Rajasthan Technical University"
                    value={formData.college}
                    onChange={(e) => handleInputChange('college', e.target.value)}
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                    required={isFieldRequired('participant')}
                  />
                </div>
              </div>
            </div>

            {/* Team Members */}
            {showGroupMembers && (
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  <h2 className="font-script text-3xl font-semibold text-foreground">
                    Team Members
                  </h2>
                </div>

                {/* Member 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Member 2 Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-base font-medium">
                        Name {isFieldRequired('member2') && <span className="text-destructive">*</span>}
                      </label>
                      <input
                        placeholder="Jane Smith"
                        value={formData.member2.name}
                        onChange={(e) => handleMemberChange('member2', 'name', e.target.value)}
                        className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                        required={isFieldRequired('member2')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-base font-medium">
                        Email {isFieldRequired('member2') && <span className="text-destructive">*</span>}
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.member2.email}
                        onChange={(e) => handleMemberChange('member2', 'email', e.target.value)}
                        className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                        required={isFieldRequired('member2')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-base font-medium">
                        Mobile {isFieldRequired('member2') && <span className="text-destructive">*</span>}
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.member2.mobile}
                        onChange={(e) => handleMemberChange('member2', 'mobile', e.target.value)}
                        className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                        required={isFieldRequired('member2')}
                      />
                    </div>
                  </div>
                </div>

                {/* Members 3 & 4 for both Antakshri and Aaja Bhidle */}
                {(isAntakshri || isAajaBhidle) && (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Member 3 Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Name {isFieldRequired('member3') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            placeholder="Alex Johnson"
                            value={formData.member3.name}
                            onChange={(e) => handleMemberChange('member3', 'name', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member3')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Email {isFieldRequired('member3') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            type="email"
                            placeholder="alex@example.com"
                            value={formData.member3.email}
                            onChange={(e) => handleMemberChange('member3', 'email', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member3')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Mobile {isFieldRequired('member3') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 87654 32109"
                            value={formData.member3.mobile}
                            onChange={(e) => handleMemberChange('member3', 'mobile', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member3')}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Member 4 Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Name {isFieldRequired('member4') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            placeholder="Sam Wilson"
                            value={formData.member4.name}
                            onChange={(e) => handleMemberChange('member4', 'name', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member4')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Email {isFieldRequired('member4') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            type="email"
                            placeholder="sam@example.com"
                            value={formData.member4.email}
                            onChange={(e) => handleMemberChange('member4', 'email', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member4')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-base font-medium">
                            Mobile {isFieldRequired('member4') && <span className="text-destructive">*</span>}
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 76543 21098"
                            value={formData.member4.mobile}
                            onChange={(e) => handleMemberChange('member4', 'mobile', e.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input-border hover:border-primary/50 transition-colors"
                            required={isFieldRequired('member4')}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-8 scale-75 md:scale-100">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 border border-primary/20 px-12 py-4 min-h-[56px] bg-[#64b5f3]"
              >
                Complete Registration - ₹{eventPrices[formData.event]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;