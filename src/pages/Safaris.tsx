import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Calendar, Users, Star, ChevronDown, ArrowRight,
  CheckCircle, Clock, Mountain, TreePine, Bird, Waves, Tent
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Tours', icon: Tent },
  { id: 'gorilla', label: 'Gorilla Trekking', icon: Mountain },
  { id: 'wildlife', label: 'Wildlife Safari', icon: TreePine },
  { id: 'primate', label: 'Primate Tracking', icon: Bird },
  { id: 'adventure', label: 'Adventure', icon: Waves },
];

const tours = [
  {
    id: 1,
    title: 'Gorilla Trekking Adventure',
    category: 'gorilla',
    image: '/images/gorilla.jpg',
    duration: '3 Days / 2 Nights',
    guests: 'Small Groups (Max 8)',
    rating: 4.9,
    reviews: 124,
    location: 'Bwindi Impenetrable Forest',
    price: 'From $1,200',
    priceValue: 1200,
    description: 'Trek through misty rainforests to spend an unforgettable hour with endangered mountain gorillas. Includes gorilla permit, accommodation, meals, and expert guide.',
    highlights: [
      'Gorilla trekking permit included',
      'Luxury lodge accommodation',
      'All meals included',
      'Expert local guide',
      'Community village visit',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Murchison Falls Explorer',
    category: 'wildlife',
    image: '/images/murchison.jpg',
    duration: '4 Days / 3 Nights',
    guests: 'Max 6 People',
    rating: 4.8,
    reviews: 98,
    location: 'Murchison Falls National Park',
    price: 'From $950',
    priceValue: 950,
    description: 'Explore Uganda\'s largest national park. Game drives on the savanna, a boat cruise to the base of the falls, and stunning wildlife encounters.',
    highlights: [
      'Game drives in open 4x4',
      'Nile boat cruise',
      'Hike to top of the falls',
      'Big Five spotting',
      'Nile delta boat trip',
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Queen Elizabeth Classic Safari',
    category: 'wildlife',
    image: '/images/queen-elizabeth.jpg',
    duration: '5 Days / 4 Nights',
    guests: 'Small Groups',
    rating: 4.9,
    reviews: 156,
    location: 'Queen Elizabeth National Park',
    price: 'From $1,100',
    priceValue: 1100,
    description: 'Tree-climbing lions in Ishasha, boat safari on the Kazinga Channel, and stunning savanna landscapes teeming with wildlife.',
    highlights: [
      'Tree-climbing lions in Ishasha',
      'Kazinga Channel boat safari',
      'Crater lakes exploration',
      'Kyambura Gorge walk',
      'Katwe salt lake visit',
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'Kibale Chimpanzee Encounter',
    category: 'primate',
    image: '/images/chimpanzee.jpg',
    duration: '3 Days / 2 Nights',
    guests: 'Max 6 People',
    rating: 4.7,
    reviews: 87,
    location: 'Kibale Forest National Park',
    price: 'From $890',
    priceValue: 890,
    description: 'Track wild chimpanzees through dense rainforest. One of the best chimp viewing experiences in Africa with over 98% success rate.',
    highlights: [
      'Chimpanzee tracking permit',
      'Bigodi wetland sanctuary walk',
      '12 primate species possible',
      'Birdwatching paradise',
      'Community cultural experience',
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'Ultimate Uganda Safari',
    category: 'all',
    image: '/images/safari-jeep.jpg',
    duration: '10 Days / 9 Nights',
    guests: 'Private or Group',
    rating: 5.0,
    reviews: 64,
    location: 'Multiple Parks',
    price: 'From $3,500',
    priceValue: 3500,
    description: 'The complete Uganda experience — gorillas, chimps, the Big Five, and breathtaking landscapes across the country.',
    highlights: [
      'Gorilla & chimp trekking',
      'Murchison Falls & Queen Elizabeth',
      'Lake Bunyonyi relaxation',
      'All permits included',
      'Luxury lodges throughout',
    ],
    featured: false,
  },
  {
    id: 6,
    title: 'Lake Bunyonyi Escape',
    category: 'adventure',
    image: '/images/lake-bunyonyi.jpg',
    duration: '3 Days / 2 Nights',
    guests: 'Couples & Groups',
    rating: 4.8,
    reviews: 72,
    location: 'Lake Bunyonyi',
    price: 'From $650',
    priceValue: 650,
    description: 'Uganda\'s deepest and most beautiful crater lake. Canoeing, island hopping, swimming, and total relaxation in stunning scenery.',
    highlights: [
      'Canoeing on the lake',
      'Island hopping adventure',
      'Batwa pygmy village visit',
      'Scenic hill hiking',
      'Swimming in safe waters',
    ],
    featured: false,
  },
  {
    id: 7,
    title: 'Birding Paradise Safari',
    category: 'adventure',
    image: '/images/tree-lions.jpg',
    duration: '7 Days / 6 Nights',
    guests: 'Max 4 Birders',
    rating: 4.9,
    reviews: 45,
    location: 'Murchison & Queen Elizabeth',
    price: 'From $1,800',
    priceValue: 1800,
    description: 'Uganda is home to over 1,070 bird species. This specialized tour targets the most spectacular and rare species across multiple habitats.',
    highlights: [
      'Shoebill spotting in Mabamba',
      'Boat cruises for water birds',
      'Forest birding in Budongo',
      'Savanna specials',
      'Expert bird guide throughout',
    ],
    featured: false,
  },
  {
    id: 8,
    title: 'Ishasha Tree Lions Safari',
    category: 'wildlife',
    image: '/images/zebra.jpg',
    duration: '4 Days / 3 Nights',
    guests: 'Max 6 People',
    rating: 4.8,
    reviews: 53,
    location: 'Ishasha Sector, Queen Elizabeth',
    price: 'From $980',
    priceValue: 980,
    description: 'Focus on the famous tree-climbing lions of Ishasha, along with classic savanna game drives and boat safari on the Kazinga Channel.',
    highlights: [
      'Tree-climbing lion tracking',
      'Ishasha River camp experience',
      'Kazinga Channel boat trip',
      'Topi and elephant herds',
      'Sunrise & sunset drives',
    ],
    featured: false,
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
      { threshold: 0.1 }
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

export default function Safaris() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedTour, setExpandedTour] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('featured');

  const filteredTours = tours
    .filter((tour) => activeCategory === 'all' || tour.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating;
      }
      if (sortBy === 'price-low') return a.priceValue - b.priceValue;
      if (sortBy === 'price-high') return b.priceValue - a.priceValue;
      if (sortBy === 'duration') {
        const aDays = parseInt(a.duration);
        const bDays = parseInt(b.duration);
        return aDays - bDays;
      }
      return 0;
    });

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/safari-jeep.jpg)' }}
        />
        <div className="absolute inset-0 bg-forest-dark/70" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3 animate-fade-in-up">Choose Your Adventure</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream font-heading animate-fade-in-up delay-200 text-shadow-lg">
            Safaris & Tours
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[64px] z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-forest text-cream'
                      : 'bg-cream-dark text-forest hover:bg-forest/10'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-forest/60 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cream-dark text-forest text-sm px-4 py-2 rounded-full border-none outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-cream bg-pattern min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <AnimatedSection key={tour.id} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-forest-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {tour.duration}
                      </span>
                    </div>
                    {tour.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-forest text-cream text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1 text-cream/90 text-xs">
                        <MapPin size={12} />
                        <span>{tour.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-gold fill-gold" />
                        <span className="text-sm font-semibold text-forest">{tour.rating}</span>
                      </div>
                      <span className="text-forest/50 text-sm">({tour.reviews} reviews)</span>
                    </div>

                    <h3 className="text-xl font-bold text-forest font-heading mb-2 group-hover:text-gold-dark transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-forest/60 text-sm mb-4 line-clamp-2">{tour.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-forest/50 text-xs">
                      <span className="flex items-center gap-1">
                        <Users size={12} /> {tour.guests}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {tour.duration}
                      </span>
                    </div>

                    <button
                      onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
                      className="w-full flex items-center justify-center gap-1 text-forest/60 text-sm hover:text-gold transition-colors mb-4"
                    >
                      {expandedTour === tour.id ? 'Hide Details' : 'View Highlights'}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedTour === tour.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedTour === tour.id && (
                      <div className="mb-4 bg-cream rounded-xl p-4">
                        <h4 className="text-sm font-bold text-forest mb-2">Tour Highlights</h4>
                        <ul className="space-y-1.5">
                          {tour.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-sm text-forest/70">
                              <CheckCircle size={12} className="text-gold mt-0.5 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                      <span className="text-gold-dark font-bold text-lg">{tour.price}</span>
                      <a
                        href="https://wa.me/256707667448?text=Hi%20Tinah%20Safaris,%20I'm%20interested%20in%20booking%20the%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-forest hover:bg-forest-light text-cream px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Book Now <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-20">
              <p className="text-forest/60 text-lg">No tours found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Safari CTA */}
      <section className="py-20 bg-forest">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-cream font-heading mb-6">
              Can't Find Your Perfect Tour?
            </h2>
            <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
              We specialize in custom-designed safaris. Tell us your dreams, budget, and timeline, 
              and we'll craft a personalized itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold-light text-forest-dark px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Request Custom Safari
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
