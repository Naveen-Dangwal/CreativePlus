import React, { useState } from 'react'
import { motion } from 'framer-motion'
import creativestudioLogo from '../../assets/creativestudio.jpeg'

// Brand gradient using provided colors:
// Orange: #F56341, Coral Red: #F04A3A, Warm Peach: #CEAF9C
const brandGradient =
  'bg-gradient-to-r from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-transparent bg-clip-text'

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const carouselImages = [
    {
      title: 'Professional Video Editing',
      description: 'Transform your raw footage into cinematic masterpieces',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    },
    {
      title: 'Creative Graphic Design',
      description: 'Stunning visuals that tell your story',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    },
    {
      title: 'Motion Graphics & Animation',
      description: 'Bring your ideas to life with dynamic animations',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
    },
  ]

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
      icon: '🎯',
      title: 'Color Grading',
      description:
        'Professional color correction and grading to enhance the mood and style of your videos.',
    },
    {
      icon: '🎵',
      title: 'Audio Enhancement',
      description:
        'Sound design, mixing, and audio post-production for professional results.',
    },
  ]

  const portfolioItems = [
    {
      title: 'Corporate Brand Video',
      category: 'Video Editing',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
    },
    {
      title: 'Product Launch Campaign',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop',
    },
    {
      title: 'Music Video Production',
      category: 'Video Editing',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      title: 'Animated Explainer Video',
      category: 'Motion Graphics',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    },
    {
      title: 'Social Media Campaign',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
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

  // Auto-rotate carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Typing effect for carousel heading
  React.useEffect(() => {
    setDisplayedText('')
    const currentTitle = carouselImages[currentSlide].title
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 shadow-sm bg-white/50 backdrop-blur-md 
             border-b border-white/20"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-white shadow-lg overflow-hidden">
              <img src={creativestudioLogo} alt="Creative Plus Studio Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className={`text-xl font-semibold ${brandGradient}`}>
                Creative Plus
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Studio
              </p>
            </div>
          </motion.div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <motion.a
              href="#home"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#F56341] transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#F56341] transition-colors"
            >
              Services
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#F56341] transition-colors"
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#F56341] transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="hover:text-[#F56341] transition-colors"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 lg:inline-flex"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-[#F56341] via-[#F04A3A] to-[#CEAF9C] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Carousel Section */}
      <section id="home" className="relative mt-16 h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === currentSlide ? 0 : 100 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              x: index === currentSlide ? 0 : index > currentSlide ? 100 : -100,
            }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
          >
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 50,
                    }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                      {index === currentSlide ? (
                        <>
                          {displayedText}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                            className="inline-block ml-1"
                          >
                            |
                          </motion.span>
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                      {slide.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full bg-gradient-to-r from-[#F56341] via-[#F04A3A] to-[#CEAF9C] px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
                    >
                      View Portfolio
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-[#F56341] via-[#F04A3A] to-[#CEAF9C]'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
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
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              Professional video editing and graphic design services that bring
              your vision to life. From concept to completion, we deliver
              exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="text-3xl font-bold text-[#F56341]">500+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="text-3xl font-bold text-[#F04A3A]">200+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="text-3xl font-bold text-[#CEAF9C]">10+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 lg:py-32 bg-white">
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
                className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm text-[#CEAF9C] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
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
              <p className="text-lg text-slate-600 mb-4">
                With over a decade of experience in video editing and graphic
                design, Creative Plus Studio has been at the forefront of
                creative innovation. We specialize in transforming ideas into
                compelling visual narratives that resonate with audiences.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our team combines technical expertise with artistic vision to
                deliver projects that exceed expectations. From corporate videos
                to social media content, we bring creativity and professionalism
                to every project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#F04A3A]" />
                  <span className="text-slate-700">
                    Award-winning creative team
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#F04A3A]" />
                  <span className="text-slate-700">
                    State-of-the-art equipment and software
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#F04A3A]" />
                  <span className="text-slate-700">
                    Fast turnaround times
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F56341] to-[#F04A3A]" />
                  <span className="text-slate-700">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#F56341]/20 to-transparent" />
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
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-4xl font-bold text-[#F56341]">10+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
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
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 text-slate-900"
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
            <p className="text-base sm:text-lg text-slate-600">
              I&apos;m available for freelance projects and collaborations.
              Let&apos;s discuss how we can bring your brand and stories to
              life through powerful visuals.
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
                <p className="text-sm sm:text-base text-slate-600 max-w-lg">
                  I&apos;m available for freelance work and long‑term
                  collaborations. Let&apos;s discuss how we can work together to
                  bring your ideas to life.
                </p>
              </div>

              <div className="space-y-5">
                {/* Email card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 px-5 py-5 sm:px-6 sm:py-6 shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-white shadow-md text-2xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      email123@gmail.com
                    </p>
                  </div>
                </motion.div>

                {/* Phone card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 px-5 py-5 sm:px-6 sm:py-6 shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-white shadow-md text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Phone
                    </p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      +91 98787878787
                    </p>
                  </div>
                </motion.div>

                {/* Location card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-white to-slate-50 border border-slate-200 px-5 py-5 sm:px-6 sm:py-6 shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-white shadow-md text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      location of the place where you live, Delhi
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
                className="rounded-3xl bg-white border border-slate-200 px-5 py-6 sm:px-7 sm:py-8 shadow-xl"
              >
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F56341] focus:outline-none focus:ring-2 focus:ring-[#F56341]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#F56341] focus:outline-none focus:ring-2 focus:ring-[#F56341]/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2"
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
                  className="mt-6 w-full rounded-full bg-[#F56341] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_18px_40px_rgba(245,99,65,0.7)] transition-transform"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F56341] via-[#F04A3A] to-[#CEAF9C] text-white">
                <img src={creativestudioLogo} alt="Creative Plus Studio Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className={`text-xl font-semibold ${brandGradient}`}>
                    Creative Plus
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Studio
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Transforming ideas into visual masterpieces through professional
                video editing and graphic design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Motion Graphics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F56341] transition-colors">
                    Color Grading
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
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-[#F56341] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F56341] transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F56341] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F56341] transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
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

export default LandingPage
