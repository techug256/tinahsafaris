import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Globe, Leaf, Heart, Users, Award, Camera, MapPin,
  Mountain, Bird, TreePine, ArrowRight
} from 'lucide-react';

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

const values = [
  {
    icon: Heart,
    title: 'Passionate',
    description: 'We love what we do, and that passion shines through in every safari we organize.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'We practice responsible tourism that protects wildlife and benefits local communities.',
  },
  {
    icon: Users,
    title: 'Community-Focused',
    description: 'We partner with local communities, ensuring tourism revenue supports those who need it most.',
  },
  {
    icon: Target,
    title: 'Authentic',
    description: 'Real experiences, real encounters, real connections — nothing staged or artificial.',
  },
];

const team = [
  {
    name: 'Tinah',
    role: 'Founder & Lead Guide',
    description: 'Born in western Uganda, Tinah grew up surrounded by wildlife and has been guiding safaris for over 15 years.',
    image: '/images/safari-jeep.jpg',
  },
  {
    name: 'Dixon Greenleaf',
    role: 'Operations Manager',
    description: 'Ensures every tour runs smoothly, from permits and transport to accommodation and meals.',
    image: '/images/lodge.jpg',
  },
];

const highlights = [
  { icon: Mountain, label: 'Mountain Gorillas', value: '600+' },
  { icon: Bird, label: 'Bird Species', value: '1,070+' },
  { icon: TreePine, label: 'National Parks', value: '10' },
  { icon: Globe, label: 'Happy Travelers', value: '2,500+' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/bwindi.jpg)' }}
        />
        <div className="absolute inset-0 bg-forest-dark/70" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 animate-fade-in-up">Learn Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream font-heading animate-fade-in-up delay-200 text-shadow-lg">
            About Tinah Safaris
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-6 leading-tight">
                Born from a Love of Uganda's Wilderness
              </h2>
              <div className="space-y-4 text-forest/70 leading-relaxed">
                <p>
                  Tinah Safaris was founded by a passionate Ugandan naturalist who grew up in the shadow 
                  of Bwindi Impenetrable Forest. What began as guiding friends and family through the 
                  forests and savannas of Uganda has blossomed into one of the country's most trusted 
                  safari operators.
                </p>
                <p>
                  We believe that the best way to experience Uganda is through the eyes of those who 
                  call it home. Every member of our team is a Ugandan with deep roots in the communities 
                  and landscapes we explore.
                </p>
                <p>
                  Our mission is simple: to share the magic of Uganda with the world while ensuring 
                  that tourism benefits local people and protects the extraordinary wildlife that makes 
                  this country so special.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/gorilla.jpg"
                  alt="Gorilla"
                  className="rounded-2xl h-56 object-cover w-full"
                />
                <img
                  src="/images/chimpanzee.jpg"
                  alt="Chimpanzee"
                  className="rounded-2xl h-56 object-cover w-full mt-8"
                />
                <img
                  src="/images/hippos.jpg"
                  alt="Hippos"
                  className="rounded-2xl h-56 object-cover w-full -mt-8"
                />
                <img
                  src="/images/murchison.jpg"
                  alt="Murchison Falls"
                  className="rounded-2xl h-56 object-cover w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-forest">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 100} className="text-center">
                <item.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-cream font-heading mb-1">{item.value}</p>
                <p className="text-cream/60 text-sm">{item.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream bg-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-md text-center h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-forest transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-forest group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-forest font-heading mb-3">{value.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Meet the Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-4">
              The People Behind Your Adventure
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <div className="bg-cream rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-forest font-heading">{member.name}</h3>
                    <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-forest/60 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Uganda Section */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="/images/kampala.jpg"
                alt="Uganda"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">The Pearl of Africa</p>
              <h2 className="text-3xl md:text-4xl font-bold text-cream font-heading mb-6 leading-tight">
                Why Uganda?
              </h2>
              <div className="space-y-4 text-cream/80 leading-relaxed">
                <p>
                  Winston Churchill famously called Uganda the "Pearl of Africa" — and for good reason. 
                  This small East African nation packs an extraordinary diversity of landscapes and 
                  wildlife into its borders.
                </p>
                <p>
                  Home to over half of the world's remaining mountain gorillas, Uganda offers the 
                  most affordable and accessible gorilla trekking experience anywhere on Earth. 
                  But that's just the beginning.
                </p>
                <p>
                  From the snow-capped Rwenzori Mountains to the vast savannas of Queen Elizabeth 
                  National Park, from the thundering Murchison Falls to the tranquil waters of Lake 
                  Bunyonyi, Uganda is a destination that rewards the curious traveler at every turn.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Mountain Gorillas', icon: Mountain },
                  { label: 'Chimpanzees', icon: TreePine },
                  { label: 'The Big Five', icon: Camera },
                  { label: '1,070+ Bird Species', icon: Bird },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-cream/70">
                    <item.icon size={16} className="text-gold" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-4">
              Trusted & Recognized
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Member of AUTO',
                description: 'Association of Uganda Tour Operators — the leading tourism trade body in Uganda.',
              },
              {
                icon: MapPin,
                title: 'Uganda Tourism Board',
                description: 'Registered and licensed by the Uganda Tourism Board for professional tour operations.',
              },
              {
                icon: Globe,
                title: 'Community Partner',
                description: 'Proud partner of local conservation initiatives and community tourism projects.',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-md text-center h-full">
                  <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-forest font-heading mb-2">{item.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-forest font-heading mb-6">
              Start Your Adventure with Tinah Safaris
            </h2>
            <p className="text-forest/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're dreaming of gorilla encounters, Nile cruises, or savanna game drives, 
              we're here to make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-forest-dark px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
