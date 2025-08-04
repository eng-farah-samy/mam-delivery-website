// app/components/MAMDeliveryWebsite.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  TruckIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BoltIcon,
  TargetIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  CalendarIcon,
  GlobeAltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function MAMDeliveryWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mam-black via-mam-dark-purple to-mam-purple">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-mam-black/90 backdrop-blur-md border-b border-mam-purple/30"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-mam-sky to-mam-blue rounded-full flex items-center justify-center">
                <TruckIcon className="w-6 h-6 text-mam-white" />
              </div>
              <div className="text-2xl font-bold text-mam-white font-display">
                MAM Delivery
              </div>
            </motion.div>

            <div className="hidden md:flex space-x-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-semibold font-sans ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-mam-sky to-mam-blue text-mam-white shadow-lg"
                      : "text-mam-white hover:bg-mam-sky/20 hover:text-mam-sky"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-mam-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-mam-black/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About Us" },
                  { id: "services", label: "Services" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-mam-white hover:text-mam-sky transition-colors font-semibold font-sans"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-r from-mam-black/80 to-mam-dark-purple/60"
        />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-mam-sky rounded-full"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-mam-white mb-6 font-display animate-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-mam-sky via-mam-blue to-mam-purple bg-clip-text text-transparent">
                  MAM Delivery
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-mam-sky mb-4 font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Speed, Precision, Trust
              </motion.p>

              <motion.p
                className="text-lg text-mam-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Your trusted delivery and logistics partner across the UAE
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-mam-sky font-semibold font-sans">Fast</span>
                <span className="text-mam-white">•</span>
                <span className="text-mam-sky font-semibold font-sans">Reliable</span>
                <span className="text-mam-white">•</span>
                <span className="text-mam-sky font-semibold font-sans">Professional</span>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <button
                  className="bg-gradient-to-r from-mam-sky to-mam-blue hover:from-mam-blue hover:to-mam-purple text-mam-white px-8 py-3 rounded-full font-semibold font-sans transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("services")}
                  aria-label="Book delivery service"
                >
                  Book Now
                </button>
                <button
                  className="border border-mam-sky text-mam-sky hover:bg-mam-sky hover:text-mam-white px-8 py-3 rounded-full font-semibold font-sans transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                  aria-label="Contact us"
                >
                  Contact Us
                </button>
                <button
                  className="border border-mam-purple text-mam-purple hover:bg-mam-purple hover:text-mam-white px-8 py-3 rounded-full font-semibold font-sans transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() => alert("Tracking functionality not implemented")}
                  aria-label="Track your shipment"
                >
                  Track Your Shipment
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-mam-sky/20 to-mam-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-mam-white/20">
                  <div className="text-center">
                    <TruckIcon className="w-24 h-24 mb-4 text-mam-white" />
                    <div className="text-6xl">📦</div>
                    <div className="text-mam-white/80 font-semibold mt-4 font-sans">Fast Delivery!</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-4 right-4 text-2xl">⭐</div>
                  <div className="absolute bottom-4 left-4 text-2xl">💫</div>
                  <div className="absolute top-1/2 left-0 text-2xl">🌟</div>
                  <div className="absolute top-1/2 right-0 text-2xl">✨</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDownIcon className="text-mam-sky w-8 h-8" />
        </motion.div>
      </section >

    {/* Company Stats Section */ }
    < section className = "py-20 bg-gradient-to-r from-mam-white to-mam-sky/5" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              number: "2020",
              label: "Founded",
              icon: <CalendarIcon className="w-8 h-8 text-mam-sky" />,
              gradient: "from-mam-sky to-mam-blue",
            },
            {
              number: "1000+",
              label: "Happy Clients",
              icon: <UserGroupIcon className="w-8 h-8 text-mam-blue" />,
              gradient: "from-mam-blue to-mam-purple",
            },
            {
              number: "7",
              label: "Emirates Covered",
              icon: <GlobeAltIcon className="w-8 h-8 text-mam-purple" />,
              gradient: "from-mam-purple to-mam-dark-purple",
            },
            {
              number: "24/7",
              label: "Support",
              icon: <ClockIcon className="w-8 h-8 text-mam-dark-purple" />,
              gradient: "from-mam-dark-purple to-mam-black",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-mam-white rounded-2xl p-8 shadow-xl border border-mam-sky/20 hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-full bg-gradient-to-r ${stat.gradient}`}
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-mam-black to-mam-dark-purple bg-clip-text text-transparent font-display"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-mam-dark-purple font-semibold text-lg font-sans">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section >

    {/* About Section */ }
    < section id = "about" className = "py-20 bg-gradient-to-r from-mam-white to-mam-sky/10" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mam-black mb-6 font-display">About Us</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-mam-dark-purple font-sans">
            <p className="font-semibold text-xl">Who We Are:</p>
            <p>
              MAM Delivery is a specialized delivery company based in the United Arab Emirates, offering comprehensive
              logistics solutions for both individuals and businesses. With a modern fleet and a dedicated team of
              professionals, we are committed to delivering the highest standards of speed, precision, and
              reliability.
            </p>
            <p>
              Since our establishment, we have built a solid reputation in the UAE by consistently providing
              exceptional service that meets the evolving demands of today's fast-paced world. Whether it's a single
              package or full-scale freight, we ensure transparency, efficiency, and customer satisfaction at every
              step.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <TargetIcon className="w-12 h-12 text-mam-sky" />,
              title: "Our Vision",
              description:
                "To be the leading delivery and logistics provider in the UAE, recognized for our speed, reliability, and customer-focused approach.",
            },
            {
              icon: <BoltIcon className="w-12 h-12 text-mam-blue" />,
              title: "Our Mission",
              description:
                "To simplify and enhance the delivery experience by offering professional, cost-effective, and technology-driven solutions that meet the growing needs of individuals and businesses in the UAE.",
            },
            {
              icon: <HeartIcon className="w-12 h-12 text-mam-purple" />,
              title: "Our Core Values",
              description:
                "Speed & Precision – Timely and accurate deliveries every time. Reliability – A trusted partner for clients across various industries. Professionalism – Highly trained drivers and staff dedicated to exceptional service. Wide Coverage – Serving businesses and individuals throughout the UAE.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-mam-white rounded-2xl p-8 shadow-xl border border-mam-sky/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-mam-black mb-4 font-display">{item.title}</h3>
              <p className="text-mam-dark-purple font-sans">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section >

    {/* Services Section */ }
    < section id = "services" className = "py-20 bg-gradient-to-br from-mam-black to-mam-dark-purple" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mam-white mb-6 font-display">Our Services</h2>
          <p className="text-xl text-mam-sky max-w-3xl mx-auto font-sans">
            Comprehensive delivery and logistics solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <BoltIcon className="w-16 h-16 text-mam-sky" />,
              title: "1. Fast Delivery",
              description: "Instant delivery for all types of shipments",
              features: ["Full UAE Coverage", "Real-time Tracking", "Same-day Delivery"],
            },
            {
              icon: <TruckIcon className="w-16 h-16 text-mam-blue" />,
              title: "2. Land Freight",
              description: "Safe and efficient transportation of goods between cities and regions",
              features: ["Inter-city Transport", "Bulk Shipments", "Secure Handling"],
            },
            {
              icon: <UserGroupIcon className="w-16 h-16 text-mam-purple" />,
              title: "3. Monthly Contracts",
              description: "Professional drivers (with or without motorcycles) available to support your business needs",
              features: ["Dedicated Drivers", "Flexible Terms", "Business Support"],
            },
            {
              icon: <ShieldCheckIcon className="w-16 h-16 text-mam-dark-purple" />,
              title: "4. Car Parking & Valet Services",
              description: "Professional parking and valet solutions to enhance customer convenience",
              features: ["Car Parking", "Valet Service", "Customer Convenience"],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="bg-mam-white/10 backdrop-blur-md rounded-2xl p-8 border border-mam-white/20 hover:bg-mam-white/20 transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-mam-white mb-4 font-display">{service.title}</h3>
              <p className="text-mam-white/80 mb-6 font-sans">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-mam-sky">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-mam-white/10 backdrop-blur-md rounded-3xl p-8 border border-mam-white/20"
        >
          <h3 className="text-3xl font-bold text-mam-white text-center mb-8 font-display">Why Choose MAM Delivery?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Speed & Efficiency", desc: "We deliver fast and with precision" },
              { icon: "💸", title: "Competitive Pricing", desc: "Affordable solutions tailored to your needs" },
              {
                icon: "👨‍💼",
                title: "Professionalism & Reliability",
                desc: "A highly trained team delivering top-tier service",
              },
              { icon: "📍", title: "Wide Coverage", desc: "Services available across all UAE regions" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-mam-white mb-2 font-sans">{item.title}</h4>
                <p className="text-mam-white/80 text-sm font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </section >

    {/* Contact Section */ }
    < section id = "contact" className = "py-20 bg-gradient-to-r from-mam-white to-mam-sky/10" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mam-black mb-6 font-display">Contact Us</h2>
          <p className="text-xl text-mam-dark-purple max-w-3xl mx-auto font-sans">
            Get in touch with us for all your delivery needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <MapPinIcon className="w-6 h-6" />, title: "Location", info: "United Arab Emirates" },
              { icon: <EnvelopeIcon className="w-6 h-6" />, title: "Email", info: "info@mamdelivery.com" },
              { icon: <PhoneIcon className="w-6 h-6" />, title: "Phone", info: "+971 4 123 4567" },
              {
                icon: <ChatBubbleLeftIcon className="w-6 h-6" />,
                title: "WhatsApp",
                info: <a href="https://wa.me/97141234567" className="text-mam-dark-purple hover:text-mam-sky">Click Here</a>,
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-6 bg-mam-white rounded-2xl shadow-lg border border-mam-sky/20"
              >
                <div className="text-mam-sky">{contact.icon}</div>
                <div>
                  <h4 className="font-bold text-mam-black font-display">{contact.title}</h4>
                  <div className="text-mam-dark-purple font-sans">{contact.info}</div>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <h4 className="font-bold text-mam-black mb-4 font-display">Follow us on Social Media:</h4>
              <div className="flex flex-wrap gap-4">
                {["Facebook", "Instagram", "TikTok", "LinkedIn"].map((social, index) => (
                  <motion.a
                    key={index}
                    href={`https://${social.toLowerCase()}.com/mamdelivery`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-mam-sky to-mam-blue text-mam-white rounded-full font-semibold font-sans hover:from-mam-blue hover:to-mam-purple transition-all duration-300"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-mam-white rounded-3xl p-8 shadow-xl border border-mam-sky/20"
          >
            <h3 className="text-2xl font-bold text-mam-black mb-6 font-display">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-6">
              {[
                {
                  q: "1. How long does delivery take?",
                  a: "It depends on the service, but we offer instant delivery options within hours inside the UAE.",
                },
                {
                  q: "2. Can I track my shipment?",
                  a: "Yes! All shipments come with real-time tracking.",
                },
                {
                  q: "3. Do you only work with businesses?",
                  a: "No, we serve both individuals and businesses.",
                },
                {
                  q: "4. Do you offer cash on delivery (COD)?",
                  a: "Yes, we provide multiple payment options including COD.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-mam-sky/20 pb-4"
                >
                  <h4 className="font-bold text-mam-black mb-2 font-display">{faq.q}</h4>
                  <p className="text-mam-dark-purple font-sans">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </section >

    {/* Footer */ }
    < footer className = "bg-mam-black text-mam-white py-12" >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-mam-sky to-mam-blue rounded-full flex items-center justify-center">
              <TruckIcon className="w-6 h-6 text-mam-white" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-mam-sky via-mam-blue to-mam-purple bg-clip-text text-transparent font-display">
              MAM Delivery
            </div>
          </motion.div>
          <p className="text-mam-white/80 mb-6 font-sans">
            Company Start Date: MAM Delivery was founded in 2020 and has since been dedicated to providing trusted
            and innovative logistics solutions throughout the UAE.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-mam-white/60 font-sans">
            <span>Speed • Precision • Trust</span>
          </div>
        </div>
      </div>
      </footer >
    </div >
  );
}