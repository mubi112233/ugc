"use client";

import { Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchTestimonials } from "@/lib/api";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";
import { usePathname } from "next/navigation";

interface Testimonial {
  _id?: string;
  content: string;
  name: string;
  role: string;
  company: string;
  order?: number;
}

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ge') || pathname.startsWith('/de') ? 'ge' : 'en';

  const copy = getCopy(currentLang, 'testimonials');

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTestimonials(currentLang);
        if (!data) throw new Error('Failed to fetch testimonials');

        const fetchedTestimonials = Array.isArray(data.testimonials)
          ? [...data.testimonials].sort((a: any, b: any) => (a?.order ?? 0) - (b?.order ?? 0))
          : [];
        
        setTestimonials(fetchedTestimonials);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching testimonials:', err);
        }
        setError(err instanceof Error ? err.message : 'Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, [currentLang]);

  // Loading state
  if (loading) {
    return (
      <motion.section 
        id="testimonials"
        className={`relative ${SPACING.section} ${SPACING.sideMargin} bg-background text-foreground z-40`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gold" />
          </div>
        </div>
      </motion.section>
    );
  }

  // Error state or no testimonials
  if (error || testimonials.length === 0) {
    return (
      <motion.section 
        id="testimonials"
        className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              {error || (currentLang === 'ge' 
                ? 'Keine Testimonials verfügbar. Bitte fügen Sie Testimonials im Admin-Panel hinzu.'
                : 'No testimonials available. Please add testimonials in the admin panel.')}
            </p>
          </div>
        </div>
      </motion.section>
    );
  }
  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-brand/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2"
            dangerouslySetInnerHTML={{ __html: copy.heading }}
          />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            {copy.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial._id || index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:bg-card hover:border-brand/50 hover:shadow-[0_20px_60px_-15px_hsl(142_70%_45%/0.25)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-brand">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold via-brand to-secondary p-[2px] shadow-xl">
            <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="text-left">
                  <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
                    {copy.caseStudy?.badge}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                    dangerouslySetInnerHTML={{ __html: copy.caseStudy?.title }}
                  />
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {copy.caseStudy?.description}
                  </p>
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full lg:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gold text-black hover:bg-gold/90 shadow-lg"
                >
                  {copy.caseStudy?.cta}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
