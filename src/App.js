import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Phone, Mail, Home, Building2, Trees, Droplets, Shield, CheckCircle, ChevronRight, Menu, X } from 'lucide-react';

const IdolGreenCity = () => {
  const [lang, setLang] = useState('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  console.log(activeSection);
  console.log(setActiveSection);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        features: 'Features',
        mission: 'Mission & Vision',
        plots: 'Plot Purchase',
        contact: 'Contact'
      },
      hero: {
        title: 'IDOL GREEN CITY',
        subtitle: 'Your Dream Home Awaits',
        cta: 'Explore Now'
      },
      about: {
        title: 'About Idol Builders Ltd.',
        chairman: "Chairman's Message",
        director: "Managing Director's Message",
        chairmanText: "Following our business policy of 'ideal, sustainable, and organized real estate development', we have been working to fulfill the needs of safe housing and infrastructure with determination and confidence through 'Idol Builders Limited'. We have successfully completed five blocks of planned residential buildings to establish safe, beautiful, and natural living for people. Since this is a special place with characteristics of nature, we want to become a trusted partner in creating a modern, safe residential environment for you through our company's skilled management, ensuring a residential system surrounded by beauty and nature, along with economic sustainability, livability, and harmonious living.",
        directorText: "Following our business policy of 'ideal, sustainable, and organized real estate development', we have been working to fulfill the needs of safe housing and infrastructure with determination and confidence through 'Idol Builders Limited'. We have successfully completed five blocks of planned residential buildings to establish safe, beautiful, and natural living for people. Since this is a special place with characteristics of nature, we want to become a trusted partner in creating a modern, safe residential environment for you through our company's skilled management, ensuring a residential system surrounded by beauty and nature, along with economic sustainability, livability, and harmonious living."
      },
      mission: {
        title: 'Mission',
        items: [
          'Providing safe plots by verifying land ownership and documents',
          'Providing complete ownership information on purchase',
          'Ensuring permanent arrangement and security',
          'Completing construction work properly under Rajuk construction rules',
          'Providing expert advice through certified architects and civil engineers',
          'Providing permission certificates approved by government authorities',
          'Planning and providing all modern facilities through expert civil engineers'
        ]
      },
      vision: {
        title: 'Vision',
        items: [
          'Building the foundation of trust through service to the people',
          'Providing the latest government-approved security, accuracy and efficiency',
          'Supporting land acquisition according to government rules and providing home-loan bank financing facilities',
          'Providing public services through economic coordination and supporting advanced technology through their own business plan',
          'Providing maximum modern facilities through financial coordination'
        ]
      },
      features: {
        title: 'Project Features & Location',
        land: 'Land under Development Company registration 2004/2005',
        schools: 'Educational institutions - Banasree, Paribagh and nearby',
        distance: 'Project location: Dhaka-Maowa 8 lane highway and project land 60 feet from 25 feet main road',
        facilities: 'Modern amenities: School, college, mosque, hospital, shopping center, club house, madrasa, community center, kabardham, Eidgah, market, shopping mall, beauty salon, playground, children\'s corner',
        security: 'Security through CCTV cameras and co-operative society-based annual security'
      },
      whyChoose: {
        title: 'Why Choose Idol Green City?',
        items: [
          'Safe land with verified ownership',
          'Ideal location with super communication',
          'Plot sizes from 25 feet to 40 and 60 feet wide',
          'RAJUK authorized master plan with NOC certificate',
          'Mosque, madrasa, school, college, hospital, shopping center, club house, Eidgah, market, madrasa, children\'s corner, and civic facilities',
          'Modern amenities with government-approved fire service',
          'Water, electricity, gas, telephone, internet and all modern civic facilities'
        ]
      },
      plotRules: {
        title: 'Plot Purchase Terms',
        items: [
          'You can choose a plot among 3, 5, 10 and 20 katha plots',
          'Required documents: National ID card or 3 copies of passport',
          'Additional entry for daughter / son / wife',
          'One-time plot price between 25-40 lakh per katha',
          '15% booking fee required, 75 days for payment',
          'Plot can be purchased in 15 instalments',
          'Instalments: 36, 48, 60, 72, 84, 96 months',
          'All Idol projects developed with bank / cash / PS-A cooperation',
          'After booking and 2 instalments, maximum discount (300,000 Taka discount subject to availability)'
        ]
      },
      contact: {
        title: 'Contact Us',
        office: 'Corporate Office: Lilypond Center, Suit No. A-13, 3 R.K Mission Road, Dhaka-1203',
        phone: 'Phone: 241054322',
        email: 'Email: idolbuildersbd@gmail.com'
      }
    },
    bn: {
      nav: {
        home: 'হোম',
        about: 'আমাদের সম্পর্কে',
        features: 'বৈশিষ্ট্য',
        mission: 'মিশন ও ভিশন',
        plots: 'প্লট ক্রয়',
        contact: 'যোগাযোগ'
      },
      hero: {
        title: 'আইডল গ্রীন সিটি',
        subtitle: 'আপনার স্বপ্নের বাড়ি অপেক্ষায়',
        cta: 'এখনই দেখুন'
      },
      about: {
        title: 'আইডল বিল্ডার্স লিমিটেড সম্পর্কে',
        chairman: 'চেয়ারম্যান এর বাণী',
        director: 'ব্যবস্থাপনা পরিচালক এর বাণী',
        chairmanText: "বিসমিল্লাহির রাহমানির রাহিম পরম করুণাময় মহান প্রভু সৃষ্টির প্রতি অগাধ বিশ্বাস ও আত্মবিক্বাস, কতৃত্ব প্রকাশ করছি যে, আমাদের নীখূদিনের লালিত স্বপ্ন 'আইডল বিভার্স লিমিটেড' এর আইডল গ্রীনসিটি প্রজেক্টের পথচলার দৃর্দান্ত গতিতে সমাপ্ত গ্রাহক ও ওতানধারী কাক্ষিত নিরাপদ প্ল্ট্টি বাস্তবায়নে আমরা এরঐাক নবীন, প্রবীন, এর মিশলের অভিজ্ঞতার সমন্বয়ে দক্ষ অগণিতেতে এগিয়ে নিয়ে যাচ্ছি। মানুদের ৫টি মৌলিক চাহিদার মধ্যে অন্যতম গুরুত্বপূর্ণ বিষয় হল আধুনিক নিভর্জাল বাসস্থান। কারন এই জনপদে আরতনের দিক থেকে আমরা জনসংখ্যা ব্যাপক বৃহৎম জনগোষ্ঠী, এই বিপুল জনগনের বাস্তানের যোগান দিতে কত বিদূৃষনা, এমতবস্থায় কিছূটা গতানুগতিক, ধারাবাহিকতা থেকে বেরিয়ে উত্তু সমসামিক বিশের আধুনিক নগরায়নের সুত্র ধরে পঠরিবেশ অবকাঠামো, হস্পিটালিটি যাহা কিছু মানুদের ফল্যানকর, ও মন্ডলজনক, সন্ত্তানময় তাহাই নির্মানের প্রতিশ্রুতি নিয়ে আমাদের কোম্পানীর পথচলার সম্মানিত গ্রাহকগনের সর্বচ্ছ আস্থা বিশ্বাস নিয়ে বত্র্মানে লালিত স্বপ্ন ভবিষ্যৎ এর বাস্তবায়নের দিকে এগিয়ে নিতে আমরা বদ্ধ পরিকর।",
        directorText: "বিসমিল্লাহির রাহমানির রাহিম পরম করুণাময় মহান প্রভু সৃষ্টির প্রতি অগাধ বিশ্বাস ও আত্মবিক্বাস, কতৃত্ব প্রকাশ করছি যে, আমাদের নীখূদিনের লালিত স্বপ্ন 'আইডল বিভার্স লিমিটেড' এর আইডল গ্রীনসিটি প্রজেক্টের পথচলার দৃর্দান্ত গতিতে সমাপ্ত গ্রাহক ও ওতানধারী কাক্ষিত নিরাপদ প্ল্ট্টি বাস্তবায়নে আমরা এরঐাক নবীন, প্রবীন, এর মিশলের অভিজ্ঞতার সমন্বয়ে দক্ষ অগণিতেতে এগিয়ে নিয়ে যাচ্ছি। মানুদের ৫টি মৌলিক চাহিদার মধ্যে অন্যতম গুরুত্বপূর্ণ বিষয় হল আধুনিক নিভর্জাল বাসস্থান। কারন এই জনপদে আরতনের দিক থেকে আমরা জনসংখ্যা ব্যাপক বৃহৎম জনগোষ্ঠী, এই বিপুল জনগনের বাস্তানের যোগান দিতে কত বিদূৃষনা, এমতবস্থায় কিছূটা গতানুগতিক, ধারাবাহিকতা থেকে বেরিয়ে উত্তু সমসামিক বিশের আধুনিক নগরায়নের সুত্র ধরে পঠরিবেশ অবকাঠামো, হস্পিটালিটি যাহা কিছু মানুদের ফল্যানকর, ও মন্ডলজনক, সন্ত্তানময় তাহাই নির্মানের প্রতিশ্রুতি নিয়ে আমাদের কোম্পানীর পথচলার সম্মানিত গ্রাহকগনের সর্বচ্ছ আস্থা বিশ্বাস নিয়ে বত্র্মানে লালিত স্বপ্ন ভবিষ্যৎ এর বাস্তবায়নের দিকে এগিয়ে নিতে আমরা বদ্ধ পরিকর।"
      },
      mission: {
        title: 'মিশন',
        items: [
          'ব্যক্তি গ্রাহকে ভূক্তিতে সুচারু তারে তদ্যোর সংগৃহ এবং সংরক্ষন করা।',
          'গ্রাহকের সবর্শীন আর্থিক ও সামাজিক অবস্থানের মালিকানা অজর্নে সুচারু সমাধান প্রদান করা।',
          'গ্রাহকের কাছে সবর্ময় অবস্থায় জবাবদিহিতা নিশ্চিত করা।',
          'গ্রাহক পর্যায়ে বাড়ি নির্মাণ কাজে ঋণ গ্রহনের ক্ষেত্রে পোশাগত সহয়োগিতা করা।',
          'গ্রাহকদের সর্বোচ্চ অগ্রাধিকারের ভিত্তিতে সেবা প্রদানের মানসে প্রযোজনীয় দক্ষ জনশক্তি নিয়োজিত করা।',
          'সরকারী বিভিন্ন অনুমতি প্রদানকারী প্রতিষ্ঠানের অনুমোদনসহ পাকেজ ডিল ভিত্তিতে গ্রাহক সেবা প্রদান করা।',
          'সময় এবং অর্থের সাশ্রয়ী প্রযোগটে মাধ্যমে বিরয়াল এএস্টেট সেক্টরে ব্যক্তি গ্রাহকদের সর্বোচ্চ সন্তুষ্টি অর্জনে কার্যক্রম গ্রহন করা।'
        ]
      },
      vision: {
        title: 'ভিশন',
        items: [
          'সাদ ও সাধের মধ্যে জনমানুষের স্বপ্ন পুরন আমাদের প্রতিষ্ঠানের মূলনীতি।',
          'ভূমি সংক্রান্ত সকল লেনদেন সর্বোচ্চ স্বচ্ছতা, সততা এবং কমর্নিষ্ঠীর মাধ্যমে সুনাম অর্জন করা।',
          'সরকারের ভূমি সংক্রান্ত বিধি-বিধান ও পরিকল্পনার সাথে সপসতি বিধান করে এই সেক্টরে আইন-কানুনের পরিপালনকারী প্রতিষ্ঠান হিসেবে নিজেদের অবস্থান সুদৃঢ় করা।',
          'আমাদের গ্রাহকদের অর্থনৈতিক সক্ষমতা ও স্বপ্নের সাথে সপসতি বিধান করে তাদের নিজস্ব ব্যসবহান তৈরীতে সর্বাত্মক সহযোগিতা প্রদান করা।',
          'আর্থিক মূনাফা অর্জনের চেয়ে নিজেদের বিরয়াল এএস্টেট সেক্টরে সর্বজন স্বীকৃত বিশ্বস্ত প্রতিষ্ঠান রুপান্তর করা।'
        ]
      },
      features: {
        title: 'প্রকল্পের বৈশিষ্ট্য ও অবস্থান',
        land: 'ভূমি উন্নয়ন বিধিমালা ১০০৪/২০০৮ অনুসরন করা হযেছে।',
        schools: 'বনানমুক্ত ও পরিবেশবান্ধব উচ্চমূল্য । বরগুড়ে ধেরা প্রাচরের তেতর থাকের দূরি নাদনিক বিদা/লেক।',
        distance: 'প্রকল্লের পাশে ঢাকা-মাওয়া ৮ লেনের মহাসড়ক ও প্রকল্লের তেতর থাকছে ৬০ ফুট থেকে সবর্নিম্ন ২৫ ফুটের প্রশস্ত রাস্তা।',
        facilities: 'নাগরিক সুবিধার জন্য থাকছে আধুত্তিকত মানসম্পন্ন, স্কুল, কলেজ, খেলা মাঠ, সুইমিংপুল, লেক, মার্কেট, শপিংমল, ধর্মীয় উপাসনালয়, কবরস্থান, মসজিদ, মাদরাসা সহ প্রয়োজনীয় বিভিন্ত জায়াঠা।',
        security: 'নিরাপত্তার জন্য থাকছে নিরাপত্তাকর্মী, সি.সি ক্যামেরা, কমিউনিটি পুলিশের ব্যবস্থা।'
      },
      whyChoose: {
        title: 'আপনি কেন আইডল গ্রীন সিটি পছন্দ করবেন?',
        items: [
          'সবুজ শ্যামলে ধেরা নিজস্ব নিক্ষপটক ভূমি ও সাশ্রয়ী মূল্যা।',
          'অতিউচ্চ নগর পরিকল্পনাবিধ এর তদ্যোরধারে সুপরিকল্পিত নগরায়ন।',
          'প্রকল্লে থাকছে ২৫ ফুট থেকে ৪০ ও ৬০ ফুট প্রশস্ত সু-বিন্যান্ত রাস্তা।',
          'রাজউক মেগাসিটির মাস্টার প্ল্যানের আওতাভুক্ত NOC প্রাপ্ত ও সম্পূর্ণ জ্যাপেকে আওতাভুক্ত।',
          'প্রকল্লে মসজিদ, মদির, স্কুল, কলেজ, হাসপাতাল, শপিংমল, কবরস্থান, ঈদগাহ, খেলার মাঠ, মাদ্রাসা, হেলিপ্যাড, লেক, সিনেপ্লেক্স, মিউজিয়াম, ফুডকোর্ট, সুইমিংপুল, ওয়াকওয়ে ও অন্যান্য নাগরিক সুবিধা।',
          'প্রকল্লে থাকছেহ সরকারি প্রশাসন ও ওয়েলফেয়ার ফাউন্ডেশনের যৌথ সহয়োগীতায় সি.সি ক্যামেরার মাধ্যমে সাবিরক নিরাপত্তার নিশ্চিত ব্যবস্থা।',
          'পানি, বিদ্যুৎ, গ্যাস, টেলিফোন, ইন্টারনেটসহ সকল প্রধূক্তগত সুযোগ সুবিধা প্রদান।'
        ]
      },
      plotRules: {
        title: 'প্লট ক্রয়ের নিয়মাবলি',
        items: [
          'আইডল গ্রীন সিটি প্রকল্পের প্ল্টের আকার ৩, ৫, ১০ ও ২০ কাঠা।',
          'প্রট বুকিং প্রাপ্ত বাক্তি না জাতীয় পরিচয় প্রত্রীর পর কপি ৩ কপি।',
          'কোন গ্রাহকে যদি তার বধন্চত্র চুক্তি মূল্লের নামের পরিবর্তন করতে হয় ডে কপি পাসপোর্টের ছবি প্রদান করতে হবে।',
          'একজীরীন মূল্য পরিশোধের ক্ষেত্রে ১৫% বিশেষ ছাড় দেওয়া হবে। সেক্ষেত্রে প্লট মূল্যের অবশিষ্ট টাকা ৭৫ দিনের মধ্যে পরিশোধ করতে হবে।',
          'মূল্য পরিশোধের পর ১৫ কার্যদিবসের মধ্যে ক্রেতা রেজিষ্ট্রেশন প্রক্রিয়া সম্পন্ন করা হবে।',
          'কিস্তিতে প্লটটি ক্রয়ের ক্ষেত্রে প্লট মূল্যের অবশিষ্ট ৩৬, ৪৮, ৬০, ৭২, ৮৪, ৯৬ টির মধ্যে পরিশোধ করতে পারবেন।',
          'ক্রেতা ক্ৰয়ের ক্ষেত্রে সকল লেনদেনে আইডল প্রোপার্টিস এর ডেডিকেটেড বো, লিঙ্ক এর অনুমুদিত নগদ/চেক/পি-এস-অর্টারের মাধ্যমে প্রদান করতে হবে।',
          'প্লট বুকিংয়ের টাকা ও দুই কিস্তি সম্পরিমাণ মূল্যের টাকা পরিশোধের পর প্রাথমিক বরাদ্দপত্র (৩০০ টাকার থ্রেশহোল্ড ডিউ অব এগ্রিমেন্ট) প্রদান করা হবে।'
        ]
      },
      contact: {
        title: 'যোগাযোগ করুন',
        office: 'কর্পোরেট অফিস: লিলিপন্ড সেন্টার, স্যুট নং এ-১৩, ৩ আর.কে মিশন রোড, ঢাকা-১২০৩',
        phone: 'ফোন: ২৪১০৫৪৩২২',
        email: 'ইমেইল: idolbuildersbd@gmail.com'
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Idol Builders Ltd.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {value}
                </a>
              ))}
              <button
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  {value}
                </a>
              ))}
              <button
                onClick={() => {
                  setLang(lang === 'en' ? 'bn' : 'en');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow">
            {t.hero.subtitle}
          </p>
          <a
            href="#features"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            <span>{t.hero.cta}</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            {t.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Chairman Message */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 bg-orange-400 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t.about.chairman}
              </h3>
              <p className="text-gray-700 leading-relaxed line-clamp-6">
                {t.about.chairmanText}
              </p>
              <div className="mt-6 text-sm text-gray-600 font-semibold">
                {lang === 'bn' ? 'এম. হাইদার আলী - চেয়ারম্যান' : 'M. Haider Ali - Chairman'}
              </div>
            </div>

            {/* Director Message */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 bg-orange-400 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t.about.director}
              </h3>
              <p className="text-gray-700 leading-relaxed line-clamp-6">
                {t.about.directorText}
              </p>
              <div className="mt-6 text-sm text-gray-600 font-semibold">
                {lang === 'bn' ? 'নূর মোহাম্মদ - ব্যবস্থাপনা পরিচালক' : 'Nur Mohammad - Managing Director'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{t.mission.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.mission.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{t.vision.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.vision.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            {t.features.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform">
              <Trees className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'পরিবেশ বান্ধব' : 'Eco-Friendly'}</h3>
              <p>{t.features.land}</p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'প্রাইম লোকেশন' : 'Prime Location'}</h3>
              <p>{t.features.distance}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform">
              <Droplets className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'আধুনিক সুবিধা' : 'Modern Facilities'}</h3>
              <p>{t.features.facilities}</p>
            </div>
          </div>

          {/* Project Images Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-bold">{lang === 'bn' ? 'পদ্মাসেতু' : 'Padma Bridge'}</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-bold">{lang === 'bn' ? 'জঙ্গলাতলী স্টেডিয়াম' : 'Stadium Complex'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.whyChoose.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyChoose.items.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl hover:bg-opacity-20 transition-all"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Purchase Rules */}
      <section id="plots" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            {t.plotRules.title}
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {t.plotRules.items.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {t.plotRules.items.slice(5).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 6}
                    </div>
                    <p className="text-gray-700 pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.contact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl hover:bg-opacity-20 transition-all">
              <MapPin className="h-12 w-12 mb-4 text-teal-400" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'অফিস' : 'Office'}</h3>
              <p className="text-gray-300">{t.contact.office}</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl hover:bg-opacity-20 transition-all">
              <Phone className="h-12 w-12 mb-4 text-teal-400" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'ফোন' : 'Phone'}</h3>
              <p className="text-gray-300">{t.contact.phone}</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl hover:bg-opacity-20 transition-all">
              <Mail className="h-12 w-12 mb-4 text-teal-400" />
              <h3 className="text-xl font-bold mb-3">{lang === 'bn' ? 'ইমেইল' : 'Email'}</h3>
              <p className="text-gray-300">{t.contact.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Idol Builders Ltd. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default IdolGreenCity;