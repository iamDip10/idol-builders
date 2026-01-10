import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Phone, Mail, ArrowRight, ChevronDown, Menu, X, Star, Facebook, Instagram, Linkedin, Youtube, Building2, Home, Zap, Shield, Award, Users, Check, Play, Sparkles, TrendingUp, Clock, MessageCircle, Briefcase, BookOpen, Image, Search, Calendar, DollarSign, FileText, Heart } from 'lucide-react';

const IdolBuildersWebsite = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: { 
        home: 'Home', 
        about: 'About', 
        projects: 'Projects', 
        services: 'Services', 
        contact: 'Contact', 
        gallery: 'Gallery', 
        career: 'Careers', 
        blog: 'Blog' 
      },
      hero: { 
        title: 'Idol Builders Ltd', 
        subtitle: 'Crafting Architectural Excellence Since 1985', 
        cta: 'Explore Projects', 
        cta2: 'Get in Touch',
        trusted: 'Trusted Since 1985',
        years: '40 Years of Excellence'
      },
      about: { 
        title: 'About Idol Builders', 
        subtitle: 'Excellence in Construction', 
        desc: 'Idol Builders Ltd stands at the forefront of Bangladesh\'s construction industry, delivering world-class residential and commercial projects with unmatched quality, innovation, and craftsmanship.',
        vision: 'Our Vision',
        mission: 'Our Mission',
        values: 'Core Values'
      },
      concern: { 
        title: 'OUR DIVISIONS', 
        companies: 'Core Business Units' 
      },
      properties: { 
        title: 'Project Portfolio', 
        subtitle: 'BUILDING CATEGORIES', 
        types: ['Residential', 'Commercial', 'Premium Towers', 'Waterfront', 'High-Rise'] 
      },
      why: { 
        title: 'Engineering Excellence in Every Detail', 
        subtitle: 'WHY CHOOSE IDOL BUILDERS' 
      },
      md: { 
        title: "CEO's Vision", 
        subtitle: 'LEADERSHIP MESSAGE' 
      },
      testimonials: { 
        title: 'Client Testimonials',
        subtitle: 'What Our Clients Say'
      },
      contact: { 
        title: 'Ready to Build Your Dream?', 
        button: 'Schedule Consultation',
        getInTouch: 'Get In Touch',
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        send: 'Send Message'
      },
      footer: { 
        copyright: '© 2024 Idol Builders Ltd | All Rights Reserved', 
        links1: 'Company', 
        links2: 'Resources',
        address: 'Gulshan Avenue, Dhaka 1212, Bangladesh'
      },
      services: {
        title: 'Our Services',
        subtitle: 'COMPREHENSIVE SOLUTIONS',
        construction: 'Construction Management',
        design: 'Architectural Design',
        consulting: 'Project Consulting',
        facility: 'Facility Management'
      },
      gallery: {
        title: 'Project Gallery',
        subtitle: 'COMPLETED PROJECTS',
        viewAll: 'View All Projects'
      },
      career: {
        title: 'Join Our Team',
        subtitle: 'BUILD YOUR CAREER',
        positions: 'Open Positions',
        apply: 'Apply Now'
      },
      blog: {
        title: 'Latest Insights',
        subtitle: 'NEWS & UPDATES',
        readMore: 'Read More'
      },
      stats: {
        projects: 'Projects Delivered',
        families: 'Happy Families',
        sqft: 'Sq.Ft Built',
        years: 'Years Experience',
        professionals: 'Professionals',
        satisfaction: 'Satisfaction'
      }
    },
    bn: {
      nav: { 
        home: 'হোম', 
        about: 'আমাদের সম্পর্কে', 
        projects: 'প্রকল্প', 
        services: 'সেবা', 
        contact: 'যোগাযোগ', 
        gallery: 'গ্যালারি', 
        career: 'ক্যারিয়ার', 
        blog: 'ব্লগ' 
      },
      hero: { 
        title: 'আইডল বিল্ডার্স লিমিটেড', 
        subtitle: '১৯৮৫ সাল থেকে স্থাপত্য শ্রেষ্ঠত্ব নির্মাণ', 
        cta: 'প্রজেক্ট দেখুন', 
        cta2: 'যোগাযোগ করুন',
        trusted: '১৯৮৫ থেকে বিশ্বস্ত',
        years: '৪০ বছরের শ্রেষ্ঠত্ব'
      },
      about: { 
        title: 'আইডল বিল্ডার্স সম্পর্কে', 
        subtitle: 'নির্মাণে শ্রেষ্ঠত্ব', 
        desc: 'আইডল বিল্ডার্স লিমিটেড বাংলাদেশের নির্মাণ শিল্পের শীর্ষে অবস্থান করছে, অতুলনীয় মান, উদ্ভাবন এবং কারুশিল্পের সাথে বিশ্বমানের আবাসিক ও বাণিজ্যিক প্রকল্প সরবরাহ করছে।',
        vision: 'আমাদের দৃষ্টিভঙ্গি',
        mission: 'আমাদের লক্ষ্য',
        values: 'মূল মূল্যবোধ'
      },
      concern: { 
        title: 'আমাদের বিভাগ', 
        companies: 'মূল ব্যবসায়িক ইউনিট' 
      },
      properties: { 
        title: 'প্রকল্প পোর্টফোলিও', 
        subtitle: 'নির্মাণ বিভাগ', 
        types: ['আবাসিক', 'বাণিজ্যিক', 'প্রিমিয়াম টাওয়ার', 'ওয়াটারফ্রন্ট', 'উচ্চ-উত্থান'] 
      },
      why: { 
        title: 'প্রতিটি বিস্তারিত প্রকৌশল শ্রেষ্ঠত্ব', 
        subtitle: 'কেন আইডল বিল্ডার্স নির্বাচন করবেন' 
      },
      md: { 
        title: 'সিইও এর দৃষ্টিভঙ্গি', 
        subtitle: 'নেতৃত্বের বার্তা' 
      },
      testimonials: { 
        title: 'ক্লায়েন্ট প্রশংসাপত্র',
        subtitle: 'আমাদের ক্লায়েন্টরা যা বলেন'
      },
      contact: { 
        title: 'আপনার স্বপ্ন নির্মাণের জন্য প্রস্তুত?', 
        button: 'পরামর্শ সময়সূচী',
        getInTouch: 'যোগাযোগ করুন',
        name: 'আপনার নাম',
        email: 'ইমেইল ঠিকানা',
        phone: 'ফোন নম্বর',
        message: 'আপনার বার্তা',
        send: 'বার্তা পাঠান'
      },
      footer: { 
        copyright: '© ২০২৪ আইডল বিল্ডার্স লিমিটেড | সর্বস্বত্ব সংরক্ষিত', 
        links1: 'কোম্পানি', 
        links2: 'সম্পদ',
        address: 'গুলশান এভিনিউ, ঢাকা ১২১২, বাংলাদেশ'
      },
      services: {
        title: 'আমাদের সেবাসমূহ',
        subtitle: 'ব্যাপক সমাধান',
        construction: 'নির্মাণ ব্যবস্থাপনা',
        design: 'স্থাপত্য ডিজাইন',
        consulting: 'প্রকল্প পরামর্শ',
        facility: 'সুবিধা ব্যবস্থাপনা'
      },
      gallery: {
        title: 'প্রকল্প গ্যালারি',
        subtitle: 'সম্পন্ন প্রকল্পসমূহ',
        viewAll: 'সব প্রকল্প দেখুন'
      },
      career: {
        title: 'আমাদের দলে যোগ দিন',
        subtitle: 'আপনার ক্যারিয়ার গড়ুন',
        positions: 'খোলা পদ',
        apply: 'এখনই আবেদন করুন'
      },
      blog: {
        title: 'সর্বশেষ অন্তর্দৃষ্টি',
        subtitle: 'সংবাদ এবং আপডেট',
        readMore: 'আরও পড়ুন'
      },
      stats: {
        projects: 'প্রকল্প সরবরাহ',
        families: 'সুখী পরিবার',
        sqft: 'বর্গফুট নির্মিত',
        years: 'বছরের অভিজ্ঞতা',
        professionals: 'পেশাদার',
        satisfaction: 'সন্তুষ্টি'
      }
    }
  };

  const t = content[lang];

  const propertyTypes = [
    { icon: Building2, count: '45+' },
    { icon: Building2, count: '28+' },
    { icon: Building2, count: '12+' },
    { icon: Home, count: '8+' },
    { icon: Building2, count: '15+' }
  ];

  const whyChooseFeatures = [
    { icon: Award, title: lang === 'en' ? 'Award-Winning Design' : 'পুরস্কার বিজয়ী ডিজাইন', desc: lang === 'en' ? 'Multiple architectural excellence awards and international recognition' : 'একাধিক স্থাপত্য শ্রেষ্ঠত্ব পুরস্কার এবং আন্তর্জাতিক স্বীকৃতি' },
    { icon: Shield, title: lang === 'en' ? 'Quality Assurance' : 'মান নিশ্চয়তা', desc: lang === 'en' ? 'ISO certified construction with rigorous quality control at every stage' : 'প্রতিটি পর্যায়ে কঠোর মান নিয়ন্ত্রণ সহ ISO প্রত্যয়িত নির্মাণ' },
    { icon: Zap, title: lang === 'en' ? 'Smart Technology' : 'স্মার্ট প্রযুক্তি', desc: lang === 'en' ? 'IoT-enabled smart buildings with sustainable energy solutions' : 'টেকসই শক্তি সমাধান সহ IoT-সক্ষম স্মার্ট বিল্ডিং' },
    { icon: Users, title: lang === 'en' ? 'Expert Team' : 'বিশেষজ্ঞ দল', desc: lang === 'en' ? '500+ skilled professionals including engineers and architects' : 'প্রকৌশলী এবং স্থপতি সহ ৫০০+ দক্ষ পেশাদার' },
    { icon: TrendingUp, title: lang === 'en' ? 'Investment Value' : 'বিনিয়োগ মূল্য', desc: lang === 'en' ? 'Proven track record of properties appreciating 20-30% annually' : 'বার্ষিক ২০-৩০% সম্পত্তি মূল্য বৃদ্ধির প্রমাণিত ট্র্যাক রেকর্ড' },
    { icon: Clock, title: lang === 'en' ? 'Timely Delivery' : 'সময়মত সরবরাহ', desc: lang === 'en' ? '98% on-time project completion rate over 4 decades' : '৪ দশক ধরে ৯৮% সময়মত প্রকল্প সমাপ্তির হার' }
  ];

  const divisions = [
    { name: lang === 'en' ? 'Idol Construction' : 'আইডল কনস্ট্রাকশন' },
    { name: lang === 'en' ? 'Idol Properties & Development' : 'আইডল প্রপার্টিজ এবং ডেভেলপমেন্ট' },
    { name: lang === 'en' ? 'Idol Infrastructure' : 'আইডল ইনফ্রাস্ট্রাকচার' },
    { name: lang === 'en' ? 'Idol Real Estate' : 'আইডল রিয়েল এস্টেট' },
    { name: lang === 'en' ? 'Idol Facility Management' : 'আইডল ফ্যাসিলিটি ম্যানেজমেন্ট' },
    { name: lang === 'en' ? 'Idol Engineering Solutions' : 'আইডল ইঞ্জিনিয়ারিং সলিউশনস' },
    { name: lang === 'en' ? 'Idol Green Building' : 'আইডল গ্রীন বিল্ডিং' }
  ];

  const navClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage t={t} lang={lang} />;
      case 'projects':
        return <ProjectsPage t={t} lang={lang} />;
      case 'services':
        return <ServicesPage t={t} lang={lang} />;
      case 'contact':
        return <ContactPage t={t} lang={lang} />;
      case 'gallery':
        return <GalleryPage t={t} lang={lang} />;
      case 'career':
        return <CareerPage t={t} lang={lang} />;
      case 'blog':
        return <BlogPage t={t} lang={lang} />;
      default:
        return <HomePage t={t} lang={lang} whyChooseFeatures={whyChooseFeatures} propertyTypes={propertyTypes} divisions={divisions} scrollY={scrollY} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 overflow-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        * { 
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes liquidFlow {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .float { animation: float 4s ease-in-out infinite; }
        .liquid-blob { animation: liquidFlow 8s ease-in-out infinite; }
        
        .liquid-glass {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .liquid-glass-dark {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.05);
        }
        
        .water-ripple {
          position: relative;
          overflow: hidden;
        }
        
        .water-ripple::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(102, 126, 234, 0.1) 100%);
          animation: ripple 3s ease-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .nav-link:hover::before {
          width: 100%;
        }
        
        .glow-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 30px rgba(102, 126, 234, 0.5); }
          50% { opacity: .8; box-shadow: 0 0 50px rgba(102, 126, 234, 0.8); }
        }

        .hero-title {
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
        
        .card-hover {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-15px) rotateX(5deg);
          box-shadow: 0 30px 60px rgba(102, 126, 234, 0.4);
        }
      `}</style>

      {/* Liquid Decorative Blobs */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 blur-3xl liquid-blob pointer-events-none"></div>
      <div className="fixed bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-orange-400 opacity-15 blur-3xl liquid-blob pointer-events-none" style={{ animationDelay: '4s' }}></div>
      <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 blur-3xl liquid-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'liquid-glass shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navClick('home')}>
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center glow-pulse liquid-blob">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient">
                {lang === 'en' ? 'Idol Builders' : 'আইডল বিল্ডার্স'}
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, item]) => (
                <button 
                  key={key} 
                  onClick={() => navClick(key)}
                  className={`nav-link text-gray-800 hover:text-purple-600 transition-colors duration-300 font-semibold text-sm ${currentPage === key ? 'text-purple-600' : ''}`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} 
                className="px-5 py-2.5 liquid-glass border-2 border-purple-600 text-purple-600 rounded-xl hover:gradient-primary hover:text-white hover:border-transparent transition-all font-semibold"
              >
                {lang === 'en' ? 'বাংলা' : 'EN'}
              </button>
              <button className="px-6 py-3 gradient-primary text-white rounded-xl hover:shadow-2xl transition-all font-semibold flex items-center gap-2 glow-pulse">
                <Sparkles className="w-4 h-4" />
                {lang === 'en' ? 'Book Tour' : 'টুর বুক করুন'}
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-900 liquid-glass p-3 rounded-xl">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden liquid-glass border-t border-white/30 animate-fadeInUp">
            <div className="px-6 py-6 space-y-3">
              {Object.entries(t.nav).map(([key, item]) => (
                <button 
                  key={key} 
                  onClick={() => navClick(key)}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-semibold py-2"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} 
                className="w-full px-4 py-2.5 liquid-glass border-2 border-purple-600 text-purple-600 rounded-xl hover:gradient-primary hover:text-white transition-all font-semibold"
              >
                {lang === 'en' ? 'বাংলা' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="relative gradient-primary py-16 px-4 sm:px-6 lg:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-10 h-10 liquid-glass-dark rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                {lang === 'en' ? 'Idol Builders' : 'আইডল বিল্ডার্স'}
              </div>
              <p className="text-purple-200 text-sm leading-relaxed mb-4">
                {lang === 'en' ? 'Building tomorrow\'s landmarks today. Excellence in every detail, innovation in every project.' : 'আজ আগামীর ল্যান্ডমার্ক নির্মাণ। প্রতিটি বিবরণে শ্রেষ্ঠত্ব, প্রতিটি প্রকল্পে উদ্ভাবন।'}
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 liquid-glass-dark hover:bg-white/30 rounded-xl flex items-center justify-center transition-all hover-lift"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.footer.links1}</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li><button onClick={() => navClick('about')} className="hover:text-white transition-colors">{lang === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}</button></li>
                <li><button onClick={() => navClick('career')} className="hover:text-white transition-colors">{lang === 'en' ? 'Careers' : 'ক্যারিয়ার'}</button></li>
                <li><button className="hover:text-white transition-colors">{lang === 'en' ? 'Press & Media' : 'প্রেস এবং মিডিয়া'}</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.footer.links2}</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li><button onClick={() => navClick('projects')} className="hover:text-white transition-colors">{lang === 'en' ? 'Projects' : 'প্রকল্পসমূহ'}</button></li>
                <li><button onClick={() => navClick('gallery')} className="hover:text-white transition-colors">{lang === 'en' ? 'Gallery' : 'গ্যালারি'}</button></li>
                <li><button onClick={() => navClick('blog')} className="hover:text-white transition-colors">{lang === 'en' ? 'Blog' : 'ব্লগ'}</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{lang === 'en' ? 'Contact' : 'যোগাযোগ'}</h3>
              <div className="space-y-3 text-purple-200 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>{t.footer.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@idolbuilders.com" className="hover:text-white">info@idolbuilders.com</a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>+880 2 9876543</p>
                    <p>+880 1712 345678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-purple-200 text-sm">{t.footer.copyright}</p>
              <div className="flex gap-6 text-sm text-purple-200">
                <button className="hover:text-white">{lang === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}</button>
                <button className="hover:text-white">{lang === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}</button>
                <button className="hover:text-white">{lang === 'en' ? 'Sitemap' : 'সাইটম্যাপ'}</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 gradient-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group glow-pulse">
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-4 liquid-glass text-gray-900 px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">
          {lang === 'en' ? 'Chat with us' : 'আমাদের সাথে চ্যাট করুন'}
        </span>
      </button>
    </div>
  );
};

// HomePage Component
const HomePage = ({ t, lang, whyChooseFeatures, propertyTypes, divisions, scrollY, activeTestimonial, setActiveTestimonial }) => (
  <>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/95"></div>
        <div className="absolute inset-0 water-ripple"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <div className="inline-block px-6 py-3 liquid-glass-dark rounded-full mb-8">
            <p className="text-purple-200 font-semibold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t.hero.trusted} • {t.hero.years}
            </p>
          </div>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto mb-8 rounded-full shimmer"></div>
          <p className="text-xl md:text-2xl lg:text-3xl text-purple-100 mb-14 font-light max-w-4xl mx-auto drop-shadow-lg">
            {t.hero.subtitle}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <button className="px-10 py-5 gradient-primary text-white rounded-2xl font-bold text-base hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 glow-pulse">
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 liquid-glass-dark text-white rounded-2xl font-bold text-base hover:shadow-2xl transition-all duration-300 border-2 border-white/30 hover:border-white/50">
            {t.hero.cta2}
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { num: '250+', label: t.stats.projects },
            { num: '50K+', label: t.stats.families },
            { num: '15M+', label: t.stats.sqft }
          ].map((stat, i) => (
            <div key={i} className="liquid-glass-dark p-6 rounded-2xl card-hover water-ripple">
              <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
              <div className="text-purple-200 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white opacity-75" />
      </div>
    </section>

    {/* About Section */}
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            {t.about.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto mb-8 rounded-full shimmer"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.about.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Award, num: '40+', label: t.stats.years, color: 'from-purple-500 to-indigo-500' },
                { icon: Building2, num: '250+', label: t.stats.projects, color: 'from-blue-500 to-cyan-500' },
                { icon: Users, num: '500+', label: t.stats.professionals, color: 'from-pink-500 to-rose-500' },
                { icon: TrendingUp, num: '98%', label: t.stats.satisfaction, color: 'from-orange-500 to-amber-500' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="liquid-glass p-7 rounded-3xl card-hover water-ripple">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 glow-pulse`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.num}</div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-2 glow-pulse">
              <Play className="w-5 h-5" />
              {lang === 'en' ? 'Watch Company Story' : 'কোম্পানির গল্প দেখুন'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="relative h-64 rounded-3xl overflow-hidden shadow-2xl card-hover"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1560518880 + i}?w=400&h=400&fit=crop`}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 liquid-glass-dark p-3 rounded-xl">
                  <div className="text-white font-bold">{lang === 'en' ? 'Project' : 'প্রকল্প'} {i}</div>
                  <div className="text-purple-200 text-sm">{lang === 'en' ? 'Completed' : 'সম্পন্ন'} 202{i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Divisions Section */}
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.concern.title}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.concern.companies}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {divisions.map((division, i) => (
            <div 
              key={i} 
              className="liquid-glass p-8 rounded-3xl card-hover cursor-pointer water-ripple"
            >
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 glow-pulse liquid-blob">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-800 font-bold text-sm leading-snug">{division.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Project Categories */}
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.properties.subtitle}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.properties.title}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {propertyTypes.map((prop, i) => {
            const Icon = prop.icon;
            const gradients = ['from-purple-500 to-indigo-500', 'from-blue-500 to-cyan-500', 'from-pink-500 to-rose-500', 'from-orange-500 to-amber-500', 'from-green-500 to-emerald-500'];
            return (
              <div 
                key={i}
                className="liquid-glass p-10 rounded-3xl card-hover cursor-pointer water-ripple"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[i]} rounded-3xl flex items-center justify-center mx-auto mb-5 glow-pulse liquid-blob`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{t.properties.types[i]}</h3>
                  <p className="text-purple-600 font-bold text-sm">{prop.count} {lang === 'en' ? 'Projects' : 'প্রকল্প'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Why Choose Section */}
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl water-ripple">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=900&fit=crop"
                alt="Building"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              <div className="absolute top-8 left-8 liquid-glass-dark px-6 py-3 rounded-2xl flex items-center gap-2">
                <Play className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">{lang === 'en' ? 'Virtual Tour' : 'ভার্চুয়াল ট্যুর'}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.why.subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{t.why.title}</h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Combining cutting-edge technology with timeless craftsmanship, Idol Builders delivers projects that exceed expectations and stand the test of time.' 
                : 'অত্যাধুনিক প্রযুক্তির সাথে কালজয়ী কারুশিল্পের সমন্বয়, আইডল বিল্ডার্স এমন প্রকল্প সরবরাহ করে যা প্রত্যাশা অতিক্রম করে এবং সময়ের পরীক্ষায় টিকে থাকে।'}
            </p>

            <div className="space-y-5">
              {whyChooseFeatures.map((feature, i) => {
                const Icon = feature.icon;
                const colors = ['from-purple-500 to-indigo-500', 'from-blue-500 to-cyan-500', 'from-pink-500 to-rose-500', 'from-orange-500 to-amber-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500'];
                return (
                  <div key={i} className="flex items-start gap-5 liquid-glass p-6 rounded-2xl card-hover water-ripple">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors[i]} rounded-xl flex items-center justify-center flex-shrink-0 glow-pulse`}>
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
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 gradient-primary overflow-hidden">
      <div className="absolute inset-0 water-ripple opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-200 font-bold mb-3 tracking-wider uppercase text-xs">{t.md.subtitle}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.md.title}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-white mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="liquid-glass-dark p-12 rounded-3xl water-ripple">
            <div className="text-7xl text-purple-300 mb-6">"</div>
            <p className="text-white leading-relaxed mb-8 text-xl">
              {lang === 'en' 
                ? 'Our vision is to revolutionize Bangladesh\'s skyline with sustainable, innovative structures that not only provide homes and workspaces but create vibrant communities. We\'re not just building structures; we\'re crafting legacies that will stand for generations.' 
                : 'আমাদের দৃষ্টিভঙ্গি হল টেকসই, উদ্ভাবনী কাঠামোর সাথে বাংলাদেশের আকাশরেখা বিপ্লব করা যা কেবল বাড়ি এবং কর্মক্ষেত্র প্রদান করে না বরং প্রাণবন্ত সম্প্রদায় তৈরি করে। আমরা শুধু কাঠামো তৈরি করছি না; আমরা উত্তরাধিকার তৈরি করছি যা প্রজন্মের জন্য দাঁড়িয়ে থাকবে।'}
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white font-bold text-2xl mb-2">{lang === 'en' ? 'Arif Rahman' : 'আরিফ রহমান'}</p>
              <p className="text-purple-200 font-medium text-lg">{lang === 'en' ? 'Chief Executive Officer' : 'প্রধান নির্বাহী কর্মকর্তা'}</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-full h-full border-4 border-white/20 rounded-3xl liquid-blob"></div>
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
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.testimonials.subtitle}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">{t.testimonials.title}</h2>
        </div>
        
        <div className="liquid-glass p-12 md:p-16 rounded-3xl shadow-2xl max-w-4xl mx-auto card-hover water-ripple">
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-2">{lang === 'en' ? 'Kamal Hossain' : 'কামাল হোসেন'}</h3>
            <p className="text-purple-600 font-medium">{lang === 'en' ? 'CEO, Tech Solutions Ltd' : 'সিইও, টেক সলিউশনস লিমিটেড'}</p>
          </div>

          <p className="text-gray-700 text-center leading-relaxed mb-8 italic text-lg">
            {lang === 'en' 
              ? '"Working with Idol Builders was transformative. Their attention to detail, commitment to quality, and innovative approach exceeded our expectations. Our new headquarters is not just a building—it\'s a masterpiece that inspires our team daily."' 
              : '"আইডল বিল্ডার্সের সাথে কাজ করা রূপান্তরকারী ছিল। তাদের বিস্তারিত মনোযোগ, মানের প্রতি প্রতিশ্রুতি এবং উদ্ভাবনী পদ্ধতি আমাদের প্রত্যাশা অতিক্রম করেছে। আমাদের নতুন সদর দপ্তর শুধু একটি ভবন নয়—এটি একটি মাস্টারপিস যা প্রতিদিন আমাদের দলকে অনুপ্রাণিত করে।"'}
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
      className="relative py-36 px-4 sm:px-6 lg:px-12 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=700&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/95"></div>
      <div className="absolute inset-0 water-ripple opacity-30"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight">{t.contact.title}</h2>
        <p className="text-2xl text-purple-200 mb-12">{lang === 'en' ? 'Let\'s discuss your vision and bring it to life' : 'আসুন আপনার দৃষ্টিভঙ্গি আলোচনা করি এবং এটিকে জীবন্ত করি'}</p>
        <button className="px-12 py-5 liquid-glass-dark text-white rounded-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30 inline-flex items-center gap-3 text-lg">
          {t.contact.button}
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  </>
);

// AboutPage Component
const AboutPage = ({ t, lang }) => (
  <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.about.title}</h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full shimmer"></div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.about.desc}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { title: t.about.vision, icon: Sparkles, desc: lang === 'en' ? 'To be the leading construction company in Bangladesh, setting new standards in quality, innovation, and sustainability.' : 'বাংলাদেশে শীর্ষস্থানীয় নির্মাণ কোম্পানি হওয়া, মান, উদ্ভাবন এবং টেকসই উন্নয়নে নতুন মান স্থাপন করা।' },
          { title: t.about.mission, icon: Award, desc: lang === 'en' ? 'To deliver exceptional construction projects that exceed client expectations while maintaining the highest standards of safety and environmental responsibility.' : 'নিরাপত্তা এবং পরিবেশগত দায়বদ্ধতার সর্বোচ্চ মান বজায় রেখে ক্লায়েন্টদের প্রত্যাশা অতিক্রম করে এমন ব্যতিক্রমী নির্মাণ প্রকল্প সরবরাহ করা।' },
          { title: t.about.values, icon: Heart, desc: lang === 'en' ? 'Integrity, Excellence, Innovation, Sustainability, and Client Satisfaction drive every decision we make.' : 'সততা, শ্রেষ্ঠত্ব, উদ্ভাবন, টেকসই উন্নয়ন এবং ক্লায়েন্ট সন্তুষ্টি আমাদের প্রতিটি সিদ্ধান্তকে চালিত করে।' }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="liquid-glass p-8 rounded-3xl card-hover text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pulse">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="liquid-glass p-12 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'en' ? 'Our History' : 'আমাদের ইতিহাস'}</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {lang === 'en' 
            ? 'Founded in 1985, Idol Builders Ltd has grown from a small construction firm to one of Bangladesh\'s most respected and innovative building companies. Over four decades, we have completed over 250 projects, ranging from residential complexes to commercial high-rises, each one a testament to our commitment to quality and excellence.'
            : '১৯৮৫ সালে প্রতিষ্ঠিত, আইডল বিল্ডার্স লিমিটেড একটি ছোট নির্মাণ সংস্থা থেকে বাংলাদেশের সবচেয়ে সম্মানিত এবং উদ্ভাবনী নির্মাণ কোম্পানিগুলির একটিতে পরিণত হয়েছে। চার দশক ধরে, আমরা ২৫০টিরও বেশি প্রকল্প সম্পন্ন করেছি, আবাসিক কমপ্লেক্স থেকে বাণিজ্যিক উচ্চ-উত্থান পর্যন্ত, প্রতিটি মান এবং শ্রেষ্ঠত্বের প্রতি আমাদের প্রতিশ্রুতির প্রমাণ।'}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {lang === 'en'
            ? 'Today, we continue to push boundaries, incorporating smart technology, sustainable practices, and innovative design into every project we undertake. Our team of over 500 professionals works tirelessly to ensure that every building we create is not just a structure, but a legacy.'
            : 'আজ, আমরা সীমানা অতিক্রম করে চলেছি, আমাদের প্রতিটি প্রকল্পে স্মার্ট প্রযুক্তি, টেকসই অনুশীলন এবং উদ্ভাবনী ডিজাইন অন্তর্ভুক্ত করছি। আমাদের ৫০০+ পেশাদারদের দল নিরলসভাবে কাজ করে যাচ্ছে যাতে আমরা যে প্রতিটি ভবন তৈরি করি তা শুধু একটি কাঠামো নয়, একটি উত্তরাধিকার।'}
        </p>
      </div>
    </div>
  </section>
);

// ProjectsPage Component
const ProjectsPage = ({ t, lang }) => {
  const projects = [
    { name: lang === 'en' ? 'Skyline Tower' : 'স্কাইলাইন টাওয়ার', type: t.properties.types[0], status: lang === 'en' ? 'Completed' : 'সম্পন্ন', year: '2023', img: 1 },
    { name: lang === 'en' ? 'Ocean View Residency' : 'ওশান ভিউ রেসিডেন্সি', type: t.properties.types[3], status: lang === 'en' ? 'Ongoing' : 'চলমান', year: '2024', img: 2 },
    { name: lang === 'en' ? 'Business Hub Complex' : 'বিজনেস হাব কমপ্লেক্স', type: t.properties.types[1], status: lang === 'en' ? 'Completed' : 'সম্পন্ন', year: '2022', img: 3 },
    { name: lang === 'en' ? 'Green Valley Apartments' : 'গ্রীন ভ্যালি অ্যাপার্টমেন্ট', type: t.properties.types[0], status: lang === 'en' ? 'Completed' : 'সম্পন্ন', year: '2023', img: 4 },
    { name: lang === 'en' ? 'Elite Plaza' : 'এলিট প্লাজা', type: t.properties.types[2], status: lang === 'en' ? 'Ongoing' : 'চলমান', year: '2025', img: 5 },
    { name: lang === 'en' ? 'Marina Heights' : 'মেরিনা হাইটস', type: t.properties.types[4], status: lang === 'en' ? 'Completed' : 'সম্পন্ন', year: '2023', img: 6 }
  ];

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.properties.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.properties.title}</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="liquid-glass rounded-3xl overflow-hidden card-hover cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1560518880 + project.img}?w=600&h=400&fit=crop`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 liquid-glass-dark px-4 py-2 rounded-xl">
                  <span className="text-white font-bold text-sm">{project.status}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{project.type}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{project.year}</span>
                  <button className="text-purple-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ServicesPage Component
const ServicesPage = ({ t, lang }) => {
  const services = [
    { 
      icon: Building2, 
      title: t.services.construction, 
      desc: lang === 'en' ? 'Complete construction management from planning to execution, ensuring timely delivery and quality control.' : 'পরিকল্পনা থেকে বাস্তবায়ন পর্যন্ত সম্পূর্ণ নির্মাণ ব্যবস্থাপনা, সময়মত সরবরাহ এবং মান নিয়ন্ত্রণ নিশ্চিত করা।',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: Sparkles, 
      title: t.services.design, 
      desc: lang === 'en' ? 'Innovative architectural design services that blend aesthetics with functionality and sustainability.' : 'উদ্ভাবনী স্থাপত্য ডিজাইন সেবা যা নান্দনিকতা, কার্যকারিতা এবং টেকসই উন্নয়নের সমন্বয় করে।',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Users, 
      title: t.services.consulting, 
      desc: lang === 'en' ? 'Expert project consulting to help you make informed decisions throughout your construction journey.' : 'আপনার নির্মাণ যাত্রা জুড়ে অবহিত সিদ্ধান্ত নিতে সাহায্য করার জন্য বিশেষজ্ঞ প্রকল্প পরামর্শ।',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Shield, 
      title: t.services.facility, 
      desc: lang === 'en' ? 'Comprehensive facility management services to maintain and optimize your property investment.' : 'আপনার সম্পত্তি বিনিয়োগ রক্ষণাবেক্ষণ এবং অপ্টিমাইজ করার জন্য ব্যাপক সুবিধা ব্যবস্থাপনা সেবা।',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.services.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.services.title}</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="liquid-glass p-10 rounded-3xl card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 glow-pulse`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="liquid-glass p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'en' ? 'Need a Custom Solution?' : 'কাস্টম সমাধান প্রয়োজন?'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'We offer tailored solutions for unique project requirements. Contact us to discuss your specific needs.'
              : 'আমরা অনন্য প্রকল্পের প্রয়োজনীয়তার জন্য কাস্টমাইজড সমাধান অফার করি। আপনার নির্দিষ্ট চাহিদা আলোচনা করতে আমাদের সাথে যোগাযোগ করুন।'}
          </p>
          <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all glow-pulse">
            {lang === 'en' ? 'Contact Us' : 'আমাদের সাথে যোগাযোগ করুন'}
          </button>
        </div>
      </div>
    </section>
  );
};

// ContactPage Component
const ContactPage = ({ t, lang }) => (
  <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{lang === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{t.contact.name}</label>
              <input 
                type="text" 
                className="w-full px-6 py-4 liquid-glass rounded-xl border-2 border-transparent focus:border-purple-600 outline-none transition-all"
                placeholder={t.contact.name}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{t.contact.email}</label>
              <input 
                type="email" 
                className="w-full px-6 py-4 liquid-glass rounded-xl border-2 border-transparent focus:border-purple-600 outline-none transition-all"
                placeholder={t.contact.email}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{t.contact.phone}</label>
              <input 
                type="tel" 
                className="w-full px-6 py-4 liquid-glass rounded-xl border-2 border-transparent focus:border-purple-600 outline-none transition-all"
                placeholder={t.contact.phone}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">{t.contact.message}</label>
              <textarea 
                rows="5" 
                className="w-full px-6 py-4 liquid-glass rounded-xl border-2 border-transparent focus:border-purple-600 outline-none transition-all resize-none"
                placeholder={t.contact.message}
              ></textarea>
            </div>
            <button className="w-full px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all glow-pulse flex items-center justify-center gap-2">
              {t.contact.send}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="liquid-glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 glow-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{lang === 'en' ? 'Address' : 'ঠিকানা'}</h4>
                  <p className="text-gray-600">{t.footer.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 glow-pulse">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{lang === 'en' ? 'Email' : 'ইমেইল'}</h4>
                  <p className="text-gray-600">info@idolbuilders.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 glow-pulse">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{lang === 'en' ? 'Phone' : 'ফোন'}</h4>
                  <p className="text-gray-600">+880 2 9876543</p>
                  <p className="text-gray-600">+880 1712 345678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="liquid-glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{lang === 'en' ? 'Office Hours' : 'অফিস সময়'}</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">{lang === 'en' ? 'Sunday - Thursday' : 'রবিবার - বৃহস্পতিবার'}</span>
                <span className="text-gray-600">{lang === 'en' ? '9:00 AM - 6:00 PM' : 'সকাল ৯:০০ - সন্ধ্যা ৬:০০'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">{lang === 'en' ? 'Friday' : 'শুক্রবার'}</span>
                <span className="text-gray-600">{lang === 'en' ? 'Closed' : 'বন্ধ'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">{lang === 'en' ? 'Saturday' : 'শনিবার'}</span>
                <span className="text-gray-600">{lang === 'en' ? '10:00 AM - 4:00 PM' : 'সকাল ১০:০০ - বিকাল ৪:০০'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// GalleryPage Component
const GalleryPage = ({ t, lang }) => {
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1560518880 + (i % 6) + 1}?w=600&h=600&fit=crop`,
    title: `${lang === 'en' ? 'Project' : 'প্রকল্প'} ${i + 1}`
  }));

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.gallery.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.gallery.title}</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.id} className="relative h-64 rounded-3xl overflow-hidden card-hover cursor-pointer group">
              <img 
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all glow-pulse inline-flex items-center gap-2">
            {t.gallery.viewAll}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// CareerPage Component
const CareerPage = ({ t, lang }) => {
  const positions = [
    { title: lang === 'en' ? 'Senior Architect' : 'সিনিয়র স্থপতি', dept: lang === 'en' ? 'Design' : 'ডিজাইন', type: lang === 'en' ? 'Full-time' : 'পূর্ণ-সময়' },
    { title: lang === 'en' ? 'Civil Engineer' : 'সিভিল ইঞ্জিনিয়ার', dept: lang === 'en' ? 'Construction' : 'নির্মাণ', type: lang === 'en' ? 'Full-time' : 'পূর্ণ-সময়' },
    { title: lang === 'en' ? 'Project Manager' : 'প্রকল্প ব্যবস্থাপক', dept: lang === 'en' ? 'Management' : 'ব্যবস্থাপনা', type: lang === 'en' ? 'Full-time' : 'পূর্ণ-সময়' },
    { title: lang === 'en' ? 'Interior Designer' : 'ইন্টেরিয়র ডিজাইনার', dept: lang === 'en' ? 'Design' : 'ডিজাইন', type: lang === 'en' ? 'Contract' : 'চুক্তি' }
  ];

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.career.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.career.title}</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full shimmer"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Join our team of passionate professionals and help shape Bangladesh\'s skyline.'
              : 'আমাদের উত্সাহী পেশাদারদের দলে যোগ দিন এবং বাংলাদেশের আকাশরেখা তৈরি করতে সাহায্য করুন।'}
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {positions.map((position, i) => (
            <div key={i} className="liquid-glass p-8 rounded-3xl card-hover flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-purple-600 font-semibold">{position.dept}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">{position.type}</span>
                </div>
              </div>
              <button className="px-8 py-3 gradient-primary text-white rounded-xl font-bold hover:shadow-xl transition-all glow-pulse">
                {t.career.apply}
              </button>
            </div>
          ))}
        </div>

        <div className="liquid-glass p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'en' ? 'Don\'t See Your Role?' : 'আপনার ভূমিকা দেখছেন না?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {lang === 'en' 
              ? 'Send us your resume and we\'ll keep you in mind for future opportunities.'
              : 'আমাদের আপনার জীবনবৃত্তান্ত পাঠান এবং ভবিষ্যতের সুযোগের জন্য আমরা আপনাকে মনে রাখব।'}
          </p>
          <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all glow-pulse">
            {lang === 'en' ? 'Submit Resume' : 'জীবনবৃত্তান্ত জমা দিন'}
          </button>
        </div>
      </div>
    </section>
  );
};

// BlogPage Component
const BlogPage = ({ t, lang }) => {
  const posts = [
    {
      title: lang === 'en' ? 'The Future of Sustainable Construction in Bangladesh' : 'বাংলাদেশে টেকসই নির্মাণের ভবিষ্যৎ',
      date: lang === 'en' ? 'December 15, 2024' : '১৫ ডিসেম্বর, ২০২৪',
      excerpt: lang === 'en' ? 'Exploring how green building practices are reshaping our industry and creating better living spaces.' : 'কিভাবে সবুজ নির্মাণ অনুশীলন আমাদের শিল্পকে পুনর্গঠন করছে এবং আরও ভাল জীবনযাপনের স্থান তৈরি করছে তা অন্বেষণ করা।',
      img: 1
    },
    {
      title: lang === 'en' ? 'Smart Home Technology Integration' : 'স্মার্ট হোম প্রযুক্তি একীকরণ',
      date: lang === 'en' ? 'December 10, 2024' : '১০ ডিসেম্বর, ২০২৪',
      excerpt: lang === 'en' ? 'How IoT and smart technology are transforming modern residential construction.' : 'কিভাবে IoT এবং স্মার্ট প্রযুক্তি আধুনিক আবাসিক নির্মাণকে রূপান্তরিত করছে।',
      img: 2
    },
    {
      title: lang === 'en' ? '2024 Construction Trends Report' : '২০২৪ নির্মাণ ট্রেন্ড রিপোর্ট',
      date: lang === 'en' ? 'December 5, 2024' : '৫ ডিসেম্বর, ২০২৪',
      excerpt: lang === 'en' ? 'A comprehensive look at the latest trends shaping the construction industry in Bangladesh.' : 'বাংলাদেশে নির্মাণ শিল্পকে গঠন করা সর্বশেষ প্রবণতার একটি ব্যাপক দৃষ্টিভঙ্গি।',
      img: 3
    },
    {
      title: lang === 'en' ? 'Maximizing Property Investment Returns' : 'সম্পত্তি বিনিয়োগ রিটার্ন সর্বাধিক করা',
      date: lang === 'en' ? 'November 28, 2024' : '২৮ নভেম্বর, ২০২৪',
      excerpt: lang === 'en' ? 'Expert tips on choosing the right property and maximizing your investment value.' : 'সঠিক সম্পত্তি নির্বাচন এবং আপনার বিনিয়োগ মূল্য সর্বাধিক করার বিশেষজ্ঞ টিপস।',
      img: 4
    }
  ];

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-bold mb-3 tracking-wider uppercase text-xs">{t.blog.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{t.blog.title}</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full shimmer"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="liquid-glass rounded-3xl overflow-hidden card-hover cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1560518880 + post.img}?w=800&h=500&fit=crop`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-sm text-purple-600 font-semibold mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {t.blog.readMore}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl transition-all glow-pulse inline-flex items-center gap-2">
            {lang === 'en' ? 'View All Posts' : 'সব পোস্ট দেখুন'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdolBuildersWebsite;