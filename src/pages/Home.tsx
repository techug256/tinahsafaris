import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Calendar, Users, Star, ChevronRight, ArrowRight,
  Shield, Heart, Compass, Award, Clock, CheckCircle
} from 'lucide-react';

const safariPackages = [
  {
    id: 1,
    title: 'Gorilla Trekking Adventure',
    image: 'images/gorilla.jpg',
    duration: '3 Days / 2 Nights',
    guests: 'Small Groups',
    rating: 4.9,
    location: 'Bwindi Impenetrable Forest',
    price: 'From $1,200',
    description: 'Get up close with endangered mountain gorillas in their natural habitat. A once-in-a-lifetime experience.',
    featured: true,
  },
  {
    id: 2,
    title: 'Murchison Falls Explorer',
    image: '/images/murchison.jpg',
    duration: '4 Days / 3 Nights',
    guests: 'Max 6 People',
    rating: 4.8,
    location: 'Murchison Falls National Park',
    price: 'From $950',
    description: 'Witness the powerful Nile River squeezing through a narrow gorge at Murchison Falls.',
    featured: true,
  },
  {
    id: 3,
    title: 'Queen Elizabeth Safari',
    image: '/images/queen-elizabeth.jpg',
    duration: '5 Days / 4 Nights',
    guests: 'Small Groups',
    rating: 4.9,
    location: 'Queen Elizabeth National Park',
    price: 'From $1,100',
    description: 'Tree-climbing lions, boat safaris on the Kazinga Channel, and stunning savanna landscapes.',
    featured: false,
  },
];

const destinations = [
  {
    title: 'Bwindi Forest',
    image: '/images/bwindi.jpg',
    tours: '12 Tours',
    tag: 'Gorillas',
  },
  {
    title: 'Murchison Falls',
    image: '/images/murchison.jpg',
    tours: '8 Tours',
    tag: 'Wildlife',
  },
  {
    title: 'Queen Elizabeth',
    image: '/images/queen-elizabeth.jpg',
    tours: '10 Tours',
    tag: 'Big Five',
  },
  {
    title: 'Kibale Forest',
    image: '/images/chimpanzee.jpg',
    tours: '6 Tours',
    tag: 'Chimpanzees',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    text: 'The gorilla trekking experience was absolutely magical. Tinah Safaris made every moment seamless. Our guide was incredibly knowledgeable and passionate about conservation.',
    rating: 5,
    image: '/images/safari-jeep.jpg',
  },
  {
    name: 'Marcus Weber',
    country: 'Germany',
    text: 'We booked the Murchison Falls tour and it exceeded all expectations. The boat safari on the Nile, the wildlife, and the hospitality were world-class.',
    rating: 5,
    image: '/images/hippos.jpg',
  },
  {
    name: 'Jennifer & David',
    country: 'Canada',
    text: 'Tinah Safaris arranged a perfect honeymoon safari for us. Queen Elizabeth National Park was breathtaking, and every detail was taken care of.',
    rating: 5,
    image: '/images/lake-bunyonyi.jpg',
  },
];

const stats = [
  { icon: Calendar, value: '12+', label: 'Years Experience' },
  { icon: Users, value: '2,500+', label: 'Happy Travelers' },
  { icon: MapPin, value: '15+', label: 'National Parks' },
  { icon: Award, value: '98%', label: 'Satisfaction Rate' },
];

const whyUs = [
  {
    icon: Compass,
    title: 'Expert Local Guides',
    description: 'Our guides are born and raised in Uganda, with deep knowledge of wildlife, culture, and hidden gems.',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Fully insured tours with well-maintained 4x4 vehicles and safety-first protocols on every adventure.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Tailor-made itineraries to match your interests, fitness level, and travel style perfectly.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during, and after your safari for complete peace of mind.',
  },
];

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/gorilla.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/40 to-forest-dark/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up opacity-0">
            Discover the Pearl of Africa
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream font-heading mb-6 animate-fade-in-up opacity-0 delay-200 text-shadow-lg leading-tight">
            Unforgettable Uganda<br />Safari Adventures
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-300 leading-relaxed">
            Trek with mountain gorillas, cruise the Nile, and explore untamed wilderness 
            with Uganda's most trusted safari company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-400">
            <Link
              to="/safaris"
              className="bg-gold hover:bg-gold-light text-forest-dark px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Safaris <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cream/40 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-forest py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} className="text-center">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-cream font-heading">{stat.value}</p>
                <p className="text-cream/60 text-sm mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-20 bg-cream bg-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Curated Adventures</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest font-heading mb-4">
              Featured Safari Packages
            </h2>
            <p className="text-forest/70 max-w-2xl mx-auto">
              Handpicked experiences that showcase the very best of Uganda's wildlife, 
              landscapes, and cultural heritage.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 150}>
                <Link to="/safaris" className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-forest-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {pkg.duration}
                        </span>
                      </div>
                      {pkg.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-forest text-cream text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star size={12} className="text-gold fill-gold" />
                        <span className="text-cream text-xs font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-forest/60 text-xs mb-2">
                        <MapPin size={12} />
                        <span>{pkg.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-forest font-heading mb-2 group-hover:text-gold-dark transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-forest/60 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                        <div className="flex items-center gap-1 text-xs text-forest/50">
                          <Users size={12} />
                          <span>{pkg.guests}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-dark font-bold text-lg">{pkg.price}</span>
                          <ChevronRight size={16} className="text-forest/40 group-hover:text-gold-dark group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/safaris"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              View All Safari Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Where We Go</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream font-heading mb-4">
              Explore Uganda's Top Destinations
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <AnimatedSection key={dest.title} delay={index * 100}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-forest-dark text-xs font-bold px-3 py-1 rounded-full">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-cream font-heading mb-1">{dest.title}</h3>
                    <p className="text-cream/70 text-sm">{dest.tours}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream bg-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Our Promise</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest font-heading mb-4">
              Why Choose Tinah Safaris?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-forest group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-forest font-heading mb-3">{item.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/images/safari-jeep.jpg)' }}
        />
        <div className="absolute inset-0 bg-forest-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream font-heading mb-6 leading-tight">
                Creating Unforgettable Memories Since 2012
              </h2>
              <p className="text-cream/80 mb-6 leading-relaxed">
                Tinah Safaris is a locally-owned and operated tour company based in Kampala, Uganda. 
                We specialize in crafting authentic African safari experiences that connect travelers 
                with Uganda's incredible biodiversity and rich cultural heritage.
              </p>
              <p className="text-cream/80 mb-8 leading-relaxed">
                From the misty mountains of Bwindi to the thundering Murchison Falls, 
                our expert guides ensure every journey is safe, comfortable, and deeply enriching.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Gorilla Trekking Permits',
                  'Customized Itineraries',
                  'Luxury & Budget Options',
                  'Cultural Experiences',
                  'Birdwatching Tours',
                  'Photography Safaris',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <span className="text-cream/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-forest-dark px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/bwindi.jpg"
                  alt="Bwindi Forest"
                  className="rounded-2xl h-48 object-cover w-full"
                />
                <img
                  src="/images/lodge.jpg"
                  alt="Safari Lodge"
                  className="rounded-2xl h-48 object-cover w-full mt-8"
                />
                <img
                  src="/images/hippos.jpg"
                  alt="Hippos"
                  className="rounded-2xl h-48 object-cover w-full -mt-8"
                />
                <img
                  src="/images/zebra.jpg"
                  alt="Zebra"
                  className="rounded-2xl h-48 object-cover w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">What Travelers Say</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest font-heading mb-4">
              Traveler Reviews
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="text-forest/80 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-forest font-heading">{testimonials[currentTestimonial].name}</p>
                    <p className="text-forest/50 text-sm">{testimonials[currentTestimonial].country}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gold w-8'
                        : 'bg-forest/20 hover:bg-forest/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream font-heading mb-6">
              Ready for Your Uganda Adventure?
            </h2>
            <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us craft the perfect safari experience for you. Contact us today and 
              start planning your journey into the wild.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-light text-forest-dark px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Plan Your Safari
              </Link>
              <a
                href="https://wa.me/256707667448"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
