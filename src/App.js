import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Phone, Mail, ArrowRight, ChevronDown, Menu, X, Star, Facebook, Instagram, Linkedin, Youtube, Building2, Home, Zap, Shield, Award, Users, Check, Play, Sparkles, TrendingUp, Clock, MessageCircle } from 'lucide-react';

const IdolBuildersWebsite = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const content = {
    en: {
      nav: { home: 'Home', about: 'About', projects: 'Projects', services: 'Services', contact: 'Contact', gallery: 'Gallery', career: 'Careers', blog: 'Insights' },
      hero: { title: 'Idol Builders Ltd', subtitle: 'Crafting Architectural Excellence Since 1985', cta: 'Explore Projects', cta2: 'Get in Touch' },
      about: { title: 'About Idol Builders', subtitle: 'Excellence in Construction & Development', desc: 'Idol Builders Ltd stands at the forefront of Bangladesh\'s construction industry, delivering world-class residential and commercial projects with unmatched quality, innovation, and craftsmanship.' },
      concern: { title: 'OUR DIVISIONS', companies: 'Core Business Units' },
      properties: { title: 'Project Portfolio', subtitle: 'BUILDING CATEGORIES', types: ['Residential', 'Commercial', 'Premium Towers', 'Waterfront', 'High-Rise'] },
      why: { title: 'Engineering Excellence in Every Detail', subtitle: 'WHY CHOOSE IDOL BUILDERS' },
      md: { title: "CEO's Vision", subtitle: 'LEADERSHIP MESSAGE' },
      testimonials: { title: 'Client Testimonials' },
      contact: { title: 'Ready to Build Your Dream?', button: 'Schedule Consultation' },
      footer: { copyright: '© 2024 Idol Builders Ltd | All Rights Reserved', links1: 'Company', links2: 'Resources' }
    },
    bn: {
      nav: { home: 'হোম', about: 'আমাদের সম্পর্কে', projects: 'প্রকল্প', services: 'সেবা', contact: 'যোগাযোগ', gallery: 'গ্যালারি', career: 'ক্যারিয়ার', blog: 'ব্লগ' },
      hero: { title: 'আইডল বিল্ডার্স লিমিটেড', subtitle: '১৯৮৫ সাল থেকে স্থাপত্য শ্রেষ্ঠত্ব নির্মাণ', cta: 'প্রজেক্ট দেখুন', cta2: 'যোগাযোগ করুন' },
      about: { title: 'আইডল বিল্ডার্স সম্পর্কে', subtitle: 'নির্মাণ ও উন্নয়নে শ্রেষ্ঠত্ব', desc: 'আইডল বিল্ডার্স লিমিটেড বাংলাদেশের নির্মাণ শিল্পের শীর্ষে অবস্থান করছে, অতুলনীয় মান, উদ্ভাবন এবং কারুশিল্পের সাথে বিশ্বমানের আবাসিক ও বাণিজ্যিক প্রকল্প সরবরাহ করছে।' },
      concern: { title: 'আমাদের বিভাগ', companies: 'মূল ব্যবসায়িক ইউনিট' },
      properties: { title: 'প্রকল্প পোর্টফোলিও', subtitle: 'নির্মাণ বিভাগ', types: ['আবাসিক', 'বাণিজ্যিক', 'প্রিমিয়াম টাওয়ার', 'ওয়াটারফ্রন্ট', 'উচ্চ-উত্থান'] },
      why: { title: 'প্রতিটি বিস্তারিত প্রকৌশল শ্রেষ্ঠত্ব', subtitle: 'কেন আইডল বিল্ডার্স নির্বাচন করবেন' },
      md: { title: 'সিইও এর দৃষ্টিভঙ্গি', subtitle: 'নেতৃত্বের বার্তা' },
      testimonials: { title: 'ক্লায়েন্ট প্রশংসাপত্র' },
      contact: { title: 'আপনার স্বপ্ন নির্মাণের জন্য প্রস্তুত?', button: 'পরামর্শ সময়সূচী' },
      footer: { copyright: '© ২০২৪ আইডল বিল্ডার্স লিমিটেড | সর্বস্বত্ব সংরক্ষিত', links1: 'কোম্পানি', links2: 'সম্পদ' }
    }
  };

  const t = content[lang];

  const propertyTypes = [
    { icon: Building2, type: 'Residential', count: '45+' },
    { icon: Building2, type: 'Commercial', count: '28+' },
    { icon: Building2, type: 'Premium', count: '12+' },
    { icon: Home, type: 'Waterfront', count: '8+' },
    { icon: Building2, type: 'High-Rise', count: '15+' }
  ];

  const whyChooseFeatures = [
    { icon: Award, title: 'Award-Winning Design', desc: 'Multiple architectural excellence awards and international recognition' },
    { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified construction with rigorous quality control at every stage' },
    { icon: Zap, title: 'Smart Technology', desc: 'IoT-enabled smart buildings with sustainable energy solutions' },
    { icon: Users, title: 'Expert Team', desc: '500+ skilled professionals including engineers and architects' },
    { icon: TrendingUp, title: 'Investment Value', desc: 'Proven track record of properties appreciating 20-30% annually' },
    { icon: Clock, title: 'Timely Delivery', desc: '98% on-time project completion rate over 4 decades' }
  ];

  const divisions = [
    'Idol Construction',
    'Idol Properties & Development',
    'Idol Infrastructure',
    'Idol Real Estate',
    'Idol Facility Management',
    'Idol Engineering Solutions',
    'Idol Green Building'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 overflow-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .float { animation: float 4s ease-in-out infinite; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
        }
        
        .gradient-ocean {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::before {
          width: 100%;
        }
        
        .parallax-bg {
          transition: transform 0.3s ease-out;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          width: 100%;
        }
        
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: float 8s ease-in-out infinite;
        }
        
        .glow {
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.4), 0 0 60px rgba(118, 75, 162, 0.2);
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-72 h-72 gradient-primary opacity-10 blur-3xl rounded-full blob pointer-events-none"></div>
      <div className="fixed bottom-20 left-10 w-96 h-96 gradient-gold opacity-10 blur-3xl rounded-full blob pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary blur-lg opacity-50"></div>
                <div className="relative text-3xl font-bold text-gradient flex items-center gap-2">
                  <Building2 className="w-8 h-8" />
                  <span>Idol Builders</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-10">
              {Object.values(t.nav).slice(0, 8).map((item, i) => (
                <a key={i} href="#" className="nav-link text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold text-sm">
                  {item}
                </a>
              ))}
              <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="px-5 py-2 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all font-semibold">
                {lang === 'en' ? 'বাংলা' : 'EN'}
              </button>
              <button className="px-6 py-3 gradient-primary text-white rounded-xl hover:shadow-xl transition-all font-semibold flex items-center gap-2 glow">
                <Sparkles className="w-4 h-4" />
                Book Tour
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden glass-morphism border-t border-white/30 animate-fadeInUp">
            <div className="px-6 py-8 space-y-4">
              {Object.values(t.nav).slice(0, 8).map((item, i) => (
                <a key={i} href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg">
                  {item}
                </a>
              ))}
              <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="w-full px-5 py-3 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all font-semibold">
                {lang === 'en' ? 'বাংলা' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')",
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/95"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fadeInUp">
            <div className="inline-block px-6 py-2 glass-morphism rounded-full mb-6">
              <p className="text-purple-200 font-semibold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Trusted Since 1985 • 40 Years of Excellence
              </p>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              {t.hero.title}
            </h1>
            <div className="w-32 h-1.5 gradient-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl md:text-4xl text-purple-100 mb-16 font-light">
              {t.hero.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button className="px-10 py-5 gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 glow">
              {t.hero.cta}
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 glass-morphism text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/30">
              {t.hero.cta2}
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { num: '250+', label: 'Projects Delivered' },
              { num: '50K+', label: 'Happy Families' },
              { num: '15M+', label: 'Sq.Ft Built' }
            ].map((stat, i) => (
              <div key={i} className="glass-morphism p-6 rounded-2xl hover-lift">
                <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-purple-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white opacity-75" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-sm flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              {t.about.subtitle}
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, num: '40+', label: 'Years Experience', color: 'from-purple-500 to-indigo-500' },
                  { icon: Building2, num: '250+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
                  { icon: Users, num: '500+', label: 'Professionals', color: 'from-pink-500 to-rose-500' },
                  { icon: TrendingUp, num: '98%', label: 'Satisfaction', color: 'from-orange-500 to-amber-500' }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="glass-morphism p-8 rounded-3xl hover-lift card-3d group">
                      <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.num}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 glow">
                <Play className="w-5 h-5" />
                Watch Company Story
              </button>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <div className="grid grid-cols-2 gap-6 relative">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${1560518880 + i}?w=400&h=400&fit=crop`}
                      alt={`Project ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-lg">Project {i}</div>
                      <div className="text-purple-200 text-sm">Completed 202{i}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-sm">{t.concern.title}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.concern.companies}</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {divisions.map((division, i) => (
              <div 
                key={i} 
                className="glass-morphism p-8 rounded-3xl hover-lift group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform glow">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-800 font-bold text-sm">{division}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-sm">{t.properties.subtitle}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t.properties.title}</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {propertyTypes.map((prop, i) => {
              const Icon = prop.icon;
              const gradients = ['from-purple-500 to-indigo-500', 'from-blue-500 to-cyan-500', 'from-pink-500 to-rose-500', 'from-orange-500 to-amber-500', 'from-green-500 to-emerald-500'];
              return (
                <div 
                  key={i}
                  className="glass-morphism p-10 rounded-3xl hover-lift cursor-pointer group"
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${gradients[i]} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform glow`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{t.properties.types[i] || prop.type}</h3>
                    <p className="text-purple-600 font-bold text-sm">{prop.count} Projects</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-96 h-96 gradient-gold opacity-20 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=900&fit=crop"
                  alt="Building"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute top-8 left-8 glass-morphism px-6 py-3 rounded-2xl flex items-center gap-3">
                  <Play className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-900 font-bold">Virtual Tour</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-sm">{t.why.subtitle}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">{t.why.title}</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Combining cutting-edge technology with timeless craftsmanship, Idol Builders delivers projects that exceed expectations and stand the test of time.
              </p>

              <div className="space-y-5">
                {whyChooseFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  const colors = ['from-purple-500 to-indigo-500', 'from-blue-500 to-cyan-500', 'from-pink-500 to-rose-500', 'from-orange-500 to-amber-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500'];
                  return (
                    <div key={i} className="flex items-start gap-5 glass-morphism p-6 rounded-2xl hover-lift">
                      <div className={`w-14 h-14 bg-gradient-to-br ${colors[i]} rounded-xl flex items-center justify-center flex-shrink-0 glow`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12 gradient-primary">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)'
        }}></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-purple-200 font-bold mb-3 tracking-wider uppercase text-sm">{t.md.subtitle}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.md.title}</h2>
            <div className="w-32 h-1.5 gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="glass-morphism p-12 rounded-3xl">
              <div className="text-7xl text-purple-300 mb-6">"</div>
              <p className="text-white leading-relaxed mb-8 text-lg">
                Our vision is to revolutionize Bangladesh's skyline with sustainable, innovative structures that not only provide homes and workspaces but create vibrant communities. We're not just building structures; we're crafting legacies that will stand for generations.
              </p>
              <div className="border-t border-white/20 pt-8">
                <p className="text-white font-bold text-2xl mb-2">Arif Rahman</p>
                <p className="text-purple-200 font-medium">Chief Executive Officer</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-full h-full border-4 border-white/20 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                alt="CEO"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">{t.testimonials.title}</h2>
          
          <div className="glass-morphism p-12 md:p-16 rounded-3xl shadow-2xl max-w-4xl mx-auto hover-lift">
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 gradient-primary blur-xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
                  alt="Client"
                  className="relative w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Kamal Hossain</h3>
              <p className="text-purple-600 font-medium">CEO, Tech Solutions Ltd</p>
            </div>

            <p className="text-gray-700 text-center leading-relaxed mb-8 text-lg italic">
              "Working with Idol Builders was transformative. Their attention to detail, commitment to quality, and innovative approach exceeded our expectations. Our new headquarters is not just a building—it's a masterpiece that inspires our team daily."
            </p>

            <div className="flex justify-center gap-3">
              {[0, 1, 2].map(i => (
                <button 
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-purple-600 w-12' : 'bg-gray-300 w-3'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-40 px-4 sm:px-6 lg:px-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=700&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/95"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">{t.contact.title}</h2>
          <p className="text-2xl text-purple-200 mb-12">Let's discuss your vision and bring it to life</p>
          <button className="px-12 py-5 glass-morphism text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30 inline-flex items-center gap-3">
            {t.contact.button}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative gradient-primary py-20 px-4 sm:px-6 lg:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-8 h-8" />
                Idol Builders
              </div>
              <p className="text-purple-200 text-sm leading-relaxed mb-6">
                Building tomorrow's landmarks today. Excellence in every detail, innovation in every project.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-11 h-11 glass-morphism hover:bg-white/30 rounded-xl flex items-center justify-center transition-all hover-lift"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">{t.footer.links1}</h3>
              <ul className="space-y-3 text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Press & Media</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">{t.footer.links2}</h3>
              <ul className="space-y-3 text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Brochure</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Virtual Tours</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-4 text-purple-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Gulshan Avenue, Dhaka 1212, Bangladesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@idolbuilders.com" className="text-sm hover:text-white">info@idolbuilders.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>+880 2 9876543</p>
                    <p>+880 1712 345678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-purple-200 text-sm">{t.footer.copyright}</p>
              <div className="flex gap-8 text-sm text-purple-200">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 gradient-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group glow">
        <div className="absolute inset-0 gradient-primary rounded-full animate-ping opacity-75"></div>
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <span className="absolute right-full mr-4 glass-morphism text-gray-900 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default IdolBuildersWebsite;