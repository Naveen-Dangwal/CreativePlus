import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import creativestudioLogo from '../../assets/creativestudio.jpeg'
import heroVideo from '../../assets/creativevideo.mp4'
import image1 from '../../assets/portfolio/image1.gif'
import image2 from '../../assets/portfolio/image2.gif'
import image3 from '../../assets/portfolio/image3.gif'
import image4 from '../../assets/portfolio/image4.gif'
import image5 from '../../assets/portfolio/image5.gif'
import image6 from '../../assets/portfolio/image6.gif'

// Futuristic theme colors: Orange, Yellow, Black
// Orange: #F56341, Yellow: #FFD700, Black: #000000
const brandGradient =
  'bg-gradient-to-r from-[#F56341] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text'
const futuristicGlow = 'shadow-[0_0_20px_rgba(245,99,65,0.5),0_0_40px_rgba(255,215,0,0.3)]'
const yellowGlow = 'shadow-[0_0_15px_rgba(255,215,0,0.6)]'
const orangeGlow = 'shadow-[0_0_15px_rgba(245,99,65,0.6)]'

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const services = [
    {
      icon: '🎬',
      title: 'Video Editing',
      description:
        'Professional video editing services for commercials, documentaries, social media content, and more.',
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description:
        'Creative graphic design solutions including logos, branding, posters, and digital artwork.',
    },
    {
      icon: '✨',
      title: 'Motion Graphics',
      description:
        'Eye-catching motion graphics and animations that captivate your audience.',
    },
    {
      icon: '📱',
      title: 'Social Media Content',
      description:
        'Engaging content optimized for Instagram, YouTube, TikTok, and other platforms.',
    },
    {
      icon: '🧑‍💻',
      title: 'Full-Stack Development',
      description:
        'End-to-end web solutions using modern technologies to build secure, scalable, and dynamic applications.',
    },
    {
      icon: '🎯',
      title: 'Color Grading',
      description:
        'Professional color correction and grading to enhance the mood and style of your videos.',
    },
    
  ]

  const portfolioItems = [
    {
      title: 'Stunning designs that captivate and define your brand identity.',
      category: 'Graphic Designing',
      image: image1,
    },
    {
      title: 'Transform raw footage into cinematic story that engage your audience.',
      category: 'Video Editing',
      image: image2,
    },
    {
      title: 'Bring your ideas to life with dynamic animations and immersive visuals.',
      category: '2D & 3D Animations',
      image: image3,
    },
    {
      title: 'High-quality 3D models creafted for creativity and precision',
      category: '3D Modeling',
      image: image4,
    },
    {
      title: 'Responsive, modern and scalable website creation.',
      category: 'Website & Applications',
      image: image5,
    },
    {
      title: 'Strategies that amplify your brand and deliver measurable results.',
      category: 'Digital Marketing',
      image: image6,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Tech Innovations',
      text: 'Outstanding work! The video editing exceeded our expectations and helped us achieve record engagement.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      company: 'Design Studio',
      text: 'Professional, creative, and always delivers on time. The graphic designs are absolutely stunning.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Influencer Agency',
      text: 'The motion graphics brought our brand to life. Highly recommend for anyone looking for quality work.',
      rating: 5,
    },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }



  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        
        className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/30 shadow-sm bg-black/80 backdrop-blur-md"
        style={{
          boxShadow: '0 4px 20px rgba(245, 99, 65, 0.3)',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F56341] via-[#FFD700] to-[#FFA500] text-white shadow-lg overflow-hidden" style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.8)' }}>
              <img src={creativestudioLogo} alt="Creative Plus Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className={`text-xl font-semibold ${brandGradient}`}>
                Creative Plus
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                Studio
              </p>
            </div>
          </motion.div>

          <div className="hidden items-center gap-8 text-sm font-medium text-white lg:flex">
          <motion.a
              href="#home"
              onClick={handleHomeClick}
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
              style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
            >
              Home
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#FFD700] transition-colors"
              style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
            >
              Services
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#FFD700] transition-colors"
              style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#FFD700] transition-colors"
              style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#FFD700] transition-colors"
              style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center gap-3">
           
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-[#F56341] via-[#FFD700] to-[#FFA500] px-4 py-2 text-sm font-semibold text-black shadow-md transition hover:shadow-lg"
              style={{ boxShadow: '0 0 25px rgba(245, 99, 65, 0.8), 0 0 15px rgba(255, 215, 0, 0.5)' }}
            >
              Book a Consultant
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Video Hero Section */}
   <section
  id="home"
  className="relative mt-16 h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden"
>
  {/* Background Video */}
  <video
    src={heroVideo}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Your Creative Vision
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Transforming ideas into stunning digital experiences.
        </p>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-[#F56341] via-[#FFD700] to-[#FFA500] px-8 py-3 text-lg font-semibold text-black shadow-lg transition hover:shadow-xl"
          style={{
            boxShadow:
              "0 0 30px rgba(245, 99, 65, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)",
          }}
        >
          View Portfolio
        </motion.button> */}
      </motion.div>
    </div>
  </div>
</section>


      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transforming Ideas Into{' '}
              <span className={brandGradient}>Visual Masterpieces</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Professional video editing and graphic design services that bring
              your vision to life. From concept to completion, we deliver
              exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-orange-500/30"
                style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.4)' }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F56341] to-[#FFD700] text-transparent bg-clip-text">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-500/30"
                style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">200+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-orange-500/30"
                style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.4)' }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F56341] to-[#FFD700] text-transparent bg-clip-text">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className={brandGradient}>Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive creative services to meet all your video and design
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all"
                style={{ boxShadow: '0 0 25px rgba(245, 99, 65, 0.2)' }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className={brandGradient}>Portfolio</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Showcasing our best work across video editing and graphic design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer border border-orange-500/20"
                style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.3)' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent  transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-2xl text-[#FFD700] font-semibold" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}>
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold mt-2">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                About <span className={brandGradient}>Creative Plus Studio</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                With over a decade of experience in video editing and graphic
                design, Creative Plus Studio has been at the forefront of
                creative innovation. We specialize in transforming ideas into
                compelling visual narratives that resonate with audiences.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our team combines technical expertise with artistic vision to
                deliver projects that exceed expectations. From corporate videos
                to social media content, we bring creativity and professionalism
                to every project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#FFD700]" style={{ boxShadow: '0 0 10px rgba(245, 99, 65, 0.8)' }} />
                  <span className="text-gray-200">
                    Award-winning creative team
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#FFD700]" style={{ boxShadow: '0 0 10px rgba(245, 99, 65, 0.8)' }} />
                  <span className="text-gray-200">
                    State-of-the-art equipment and software
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#FFD700]" style={{ boxShadow: '0 0 10px rgba(245, 99, 65, 0.8)' }} />
                  <span className="text-gray-200">
                    Fast turnaround times
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#FFD700]" style={{ boxShadow: '0 0 10px rgba(245, 99, 65, 0.8)' }} />
                  <span className="text-gray-200">
                    Competitive pricing
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F56341]/30 to-transparent" />
              </div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-orange-500/50"
                style={{ boxShadow: '0 0 30px rgba(245, 99, 65, 0.8)' }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#F56341] to-[#FFD700] text-transparent bg-clip-text">10+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Client <span className={brandGradient}>Testimonials</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-500/20"
                style={{ boxShadow: '0 0 25px rgba(245, 99, 65, 0.3)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Get In Touch Section */}
      <section
        id="contact"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className={brandGradient}>Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              I&apos;m available for freelance projects and collaborations.
            
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  Contact Information
                </h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-lg">
                  I&apos;m available for freelance work and long‑term
                  collaborations. Let&apos;s discuss how we can work together to
                  bring your ideas to life.
                </p>
              </div>

              <div className="space-y-5">
                {/* WhatsApp card */}
                <motion.a
                  href="https://wa.me/919631120535"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 px-5 py-5 sm:px-6 sm:py-6 cursor-pointer transition-all hover:border-green-500/50"
                  style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.4)' }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#F56341]  text-white" style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.8)' }}>
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Whatsapp
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      +91 9631120535
                    </p>
                  </div>
                </motion.a> 

                {/* Phone card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-yellow-500/30 px-5 py-5 sm:px-6 sm:py-6"
                  style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#F56341] text-black text-2xl" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}>
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Phone
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      +91 9220219521
                    </p>
                  </div>
                </motion.div>

                {/* Location card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 px-5 py-5 sm:px-6 sm:py-6"
                  style={{ boxShadow: '0 0 20px rgba(93, 78, 176, 0.4)' }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F56341] via-[#FFD700] to-[#FFA500] text-white text-2xl" style={{ boxShadow: '0 0 20px rgba(134, 58, 108, 0.8)' }}>
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      Noida Uttarpradesh, 201304
                    </p>
                  </div>
                </motion.div>
              </div>

            
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 px-5 py-6 sm:px-7 sm:py-8"
                style={{ boxShadow: '0 0 30px rgba(245, 99, 65, 0.4)' }}
              >
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-orange-500/30 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-orange-500/30 bg-gray-900 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/30 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F56341] focus:outline-none focus:ring-2 focus:ring-[#F56341]/20 transition-all resize-none"
                      placeholder="Tell me a bit about your project, timeline, and goals..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-[#F56341] via-[#FFD700] to-[#FFA500] px-6 py-3.5 text-sm sm:text-base font-semibold text-black transition-transform"
                  style={{ boxShadow: '0 0 30px rgba(245, 99, 65, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)' }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 text-white py-12 sm:py-16" style={{ boxShadow: '0 -4px 20px rgba(245, 99, 65, 0.3)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F56341] via-[#FFD700] to-[#FFA500] text-white overflow-hidden" style={{ boxShadow: '0 0 20px rgba(245, 99, 65, 0.8)' }}>
                <img src={creativestudioLogo} alt="Creative Plus Studio Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className={`text-xl font-semibold ${brandGradient}`}>
                    Creative Plus
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                    Studio
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming ideas into visual masterpieces through professional
                video editing and graphic design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-[#FFD700] transition-colors" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}>
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Motion Graphics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#about" className="hover:text-[#F56341] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#F56341] transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F56341] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <motion.a
                    href="https://www.instagram.com/creativeplusstudio23/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FFD700] transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.youtube.com/@creativeplusstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FFD700] transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
                  >
                    <FaYoutube className="text-xl" />
                    <span>YouTube</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.linkedin.com/in/creative-plus-studio-23958934b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FFD700] transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.facebook.com/people/Creative-Plus-Studio/61573088124675/?rdid=WpWDVylPwAiHAhQj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E1KJ9b2Hk%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FFD700] transition-colors"
                    style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}
                  >
                    <FaFacebook className="text-xl" />
                    <span>Facebook</span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-500/20 pt-8  text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Creative Plus Studio. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;