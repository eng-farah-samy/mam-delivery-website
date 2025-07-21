```tsx
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Truck,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Users,
  Zap,
  Target,
  Heart,
  MessageCircle,
  Calendar,
  Globe,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MAMDeliveryWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060116] via-[#962FCF] to-[#7C46D3]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#060116]/90 backdrop-blur-md border-b border-[#7C46D3]/30"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00B0E4] to-[#3583DD] rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                MAM Delivery
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {[
                { id: "home", label: "🏠 Home", icon: "🏠" },
                { id: "about", label: "🧭 About Us", icon: "🧭" },
                { id: "services", label: "🚚 Services", icon: "🚚" },
                { id: "contact", label: "📞 Contact", icon: "📞" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px - 4 py - 2 rounded - full transition - all duration - 300 font - semibold ${
  activeSection === item.id
    ? "bg-gradient-to-r from-[#00B0E4] to-[#3583DD] text-white shadow-lg"
    : "text-white hover:bg-[#00B0E4]/20 hover:text-[#00B0E4]"
} `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#060116]/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {[
                  { id: "home", label: "🏠 Home" },
                  { id: "about", label: "🧭 About Us" },
                  { id: "services", label: "🚚 Services" },
                  { id: "contact", label: "📞 Contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-white hover:text-[#00B0E4] transition-colors font-semibold"
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
          className="absolute inset-0 bg-gradient-to-r from-[#060116]/80 to-[#962FCF]/60"
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00B0E4] rounded-full"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${ Math.random() * 100 }% `,
                top: `${ Math.random() * 100 }% `,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "Arial, sans-serif" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="bg-gradient-to-r from-[#00B0E4] via-[#3583DD] to-[#7C46D3] bg-clip-text text-transparent">
                  MAM Delivery
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-[#00B0E4] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Speed, Precision, Trust
              </motion.p>

              <motion.p
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Your trusted delivery and logistics partner across the UAE 🇦🇪
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-[#00B0E4] font-semibold">Fast</span>
                <span className="text-white">•</span>
                <span className="text-[#00B0E4] font-semibold">Reliable</span>
                <span className="text-white">•</span>
                <span className="text-[#00B0E4] font-semibold">Professional</span>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  className="bg-gradient-to-r from-[#00B0E4] to-[#3583DD] hover:from-[#3583DD] hover:to-[#7C46D3] text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("services")}
                >
                  ✅ Book Now
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00B0E4] text-[#00B0E4] hover:bg-[#00B0E4] hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  ✅ Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="border-[#7C46D3] text-[#7C46D3] hover:bg-[#7C46D3] hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  ✅ Track Your Shipment
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Placeholder Image */}
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
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-[#00B0E4]/20 to-[#7C46D3]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚚</div>
                    <div className="text-6xl">📦</div>
                    <div className="text-white/80 font-semibold mt-4">Fast Delivery!</div>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-[#00B0E4] w-8 h-8" />
        </motion.div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFFFFF] to-[#00B0E4]/5">
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
                icon: <Calendar className="w-8 h-8 text-[#00B0E4]" />,
                gradient: "from-[#00B0E4] to-[#3583DD]",
              },
              {
                number: "1000+",
                label: "Happy Clients",
                icon: <Users className="w-8 h-8 text-[#3583DD]" />,
                gradient: "from-[#3583DD] to-[#7C46D3]",
              },
              {
                number: "7",
                label: "Emirates Covered",
                icon: <Globe className="w-8 h-8 text-[#7C46D3]" />,
                gradient: "from-[#7C46D3] to-[#962FCF]",
              },
              {
                number: "24/7",
                label: "Support",
                icon: <Clock className="w-8 h-8 text-[#962FCF]" />,
                gradient: "from-[#962FCF] to-[#060116]",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-[#00B0E4]/20 hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p - 4 rounded - full bg - gradient - to - r ${ stat.gradient } `}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#060116] to-[#962FCF] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#962FCF] font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-[#FFFFFF] to-[#00B0E4]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#060116] mb-6">🧭 About Us</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#962FCF]">
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
                icon: <Target className="w-12 h-12 text-[#00B0E4]" />,
                title: "🎯 Our Vision",
                description:
                  "To be the leading delivery and logistics provider in the UAE, recognized for our speed, reliability, and customer-focused approach.",
              },
              {
                icon: <Zap className="w-12 h-12 text-[#3583DD]" />,
                title: "💡 Our Mission",
                description:
                  "To simplify and enhance the delivery experience by offering professional, cost-effective, and technology-driven solutions that meet the growing needs of individuals and businesses in the UAE.",
              },
              {
                icon: <Heart className="w-12 h-12 text-[#7C46D3]" />,
                title: "💎 Our Core Values",
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
                className="bg-white rounded-2xl p-8 shadow-xl border border-[#00B0E4]/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#060116] mb-4">{item.title}</h3>
                <p className="text-[#962FCF]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#060116] to-[#962FCF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🚚 Our Services</h2>
            <p className="text-xl text-[#00B0E4] max-w-3xl mx-auto">
              Comprehensive delivery and logistics solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-16 h-16 text-[#00B0E4]" />,
                title: "1. Fast Delivery",
                description: "Instant delivery for all types of shipments",
                features: ["Full UAE Coverage", "Real-time Tracking", "Same-day Delivery"],
              },
              {
                icon: <Truck className="w-16 h-16 text-[#3583DD]" />,
                title: "2. Land Freight",
                description: "Safe and efficient transportation of goods between cities and regions",
                features: ["Inter-city Transport", "Bulk Shipments", "Secure Handling"],
              },
              {
                icon: <Users className="w-16 h-16 text-[#7C46D3]" />,
                title: "3. Monthly Contracts",
                description: "Professional drivers (with or without motorcycles) available to support your business needs",
                features: ["Dedicated Drivers", "Flexible Terms", "Business Support"],
              },
              {
                icon: <Shield className="w-16 h-16 text-[#962FCF]" />,
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#00B0E4]">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-8">💼 Why Choose MAM Delivery?</h3>
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
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#FFFFFF] to-[#00B0E4]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#060116] mb-6">📞 Contact Us</h2>
            <p className="text-xl text-[#962FCF] max-w-3xl mx-auto">Get in touch with us for all your delivery needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <MapPin className="w-6 h-6" />, title: "📍 Location", info: "United Arab Emirates" },
                { icon: <Mail className="w-6 h-6" />, title: "📧 Email", info: "info@mamdelivery.com" },
                { icon: <Phone className="w-6 h-6" />, title: "📱 Phone", info: "+971 XXXXXXXX" },
                { icon: <MessageCircle className="w-6 h-6" />, title: "📱 WhatsApp", info: "Click Here" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-[#00B0E4]/20"
                >
                  <div className="text-[#00B0E4]">{contact.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#060116]">{contact.title}</h4>
                    <p className="text-[#962FCF]">{contact.info}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <div className="pt-8">
                <h4 className="font-bold text-[#060116] mb-4">Follow us on Social Media:</h4>
                <div className="flex flex-wrap gap-4">
                  {["Facebook", "Instagram", "TikTok", "LinkedIn"].map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-[#00B0E4] to-[#3583DD] text-white rounded-full font-semibold hover:from-[#3583DD] hover:to-[#7C46D3] transition-all duration-300"
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#00B0E4]/20"
            >
              <h3 className="text-2xl font-bold text-[#060116] mb-6">❓ Frequently Asked Questions (FAQ)</h3>
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
                    className="border-b border-[#00B0E4]/20 pb-4"
                  >
                    <h4 className="font-bold text-[#060116] mb-2">{faq.q}</h4>
                    <p className="text-[#962FCF]">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060116] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00B0E4] to-[#3583DD] rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00B0E4] via-[#3583DD] to-[#7C46D3] bg-clip-text text-transparent">
                MAM Delivery
              </div>
            </motion.div>
            <p className="text-white/80 mb-6">
              🗓️ Company Start Date: MAM Delivery was founded in 2020 and has since been dedicated to providing trusted
              and innovative logistics solutions throughout the UAE.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-white/60">
              <span>Speed • Precision • Trust</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
```