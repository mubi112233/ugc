/**
 * Next-safe copy/translation constants (no react-i18next runtime)
 * Mirrors frontend/src/lib/client-i18n.ts for badge/heading/subheading text.
 * Use URL-based language detection (en/ge) to select strings.
 */

export const copy = {
  en: {
    // How It Works
    howItWorks: {
      badge: "Our UGC Process",
      heading: "How We <span class=\"text-gold\">Create UGC</span>",
      description: "From brief to final video in 5–7 days. Data-driven hooks, authentic creators, and platform-optimized editing.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Brief & Strategy",
          description: "Share your product, target audience, and campaign goals. We develop hooks, scripts, and creator personas tailored to your brand."
        },
        step2: {
          step: "Step 2", 
          title: "Casting & Production",
          description: "We cast authentic creators, coordinate filming, and direct on-brand UGC. Professional lighting, sound, and editing standards."
        },
        step3: {
          step: "Step 3",
          title: "Edit & Deliver",
          description: "Fast-turnaround editing optimized for TikTok, Reels, and Shorts. Multiple formats, captions, and usage rights included."
        },
        step4: {
          step: "Step 4",
          title: "Test & Iterate",
          description: "Track performance metrics, A/B test hooks, and refine creative strategy. Continuous optimization for maximum ROI."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      description: "German-speaking talent, native quality control, fast onboarding, and a zero‑risk guarantee.",
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">Growing Brands</span>",
      subheading: "Short-form UGC that performs across TikTok, Reels, and Shorts.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">UGC that Scaled</span>",
        description: "See how performance-driven UGC hooks and variations increased conversions and reduced creative fatigue.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Insights",
      heading: "Latest <span class=\"text-gold\">UGC Insights</span>",
      description: "Practical playbooks for hooks, creators, and short-form creative that converts.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Real <span class=\"text-gold\">UGC Results</span>",
      description: "Examples of creative testing, iteration, and scalable UGC production.",
      labels: {
        saved: "Saved",
        teamSize: "Team Size",
        timeline: "Timeline",
        viewFull: "View Full Case Study",
        viewStudy: "View Study",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about UGC production, turnaround, testing, and usage rights.",
      qualityCardTitle: "On-brand creators",
      qualityCardText: "We cast creators that match your niche, demographics, and tone of voice.",
      toolsCardTitle: "Optimized for platforms",
      toolsCardText: "Scripts, hooks, edits, and cuts are tailored for TikTok, Reels, and Shorts.",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "We're here to help you choose the right setup for your needs.",
      contactSupport: "Contact Support",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "UGC Content Packages",
      sectionDescription: "Production-ready UGC at scale. All packages include scripting, creator casting, filming, editing, captions, and commercial usage rights.",
      vaCountLabel: "How many videos do you need?",
      vaCountHelper: "Select the number of UGC videos",
      startingFrom: "Starting from €{price}/mo",
      bulkDiscount: "{percent}% bulk discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more VA{suffix} to unlock {percent}% bulk discount",
      bannerBadge: "Limited Time",
      bannerTitle: "Free UGC Strategy Call",
      bannerSubtitle: "Get expert advice on UGC strategy, creator casting, and platform optimization before choosing a package.",
      bannerPoints: {
        noCommitment: "No commitment",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Full access"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedicated VA",
            "Native Quality Control",
            "24h Replacement Guarantee",
            "Slack/Email Support",
            "14 Days Money-Back Warranty"
          ]
        },
        professional: {
          name: "Professional",
          hours: "20h / week",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Bi-weekly Progress Reports",
            "Flexible Hour Rollover"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week",
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "No Setup Fee",
            "Dedicated Account Manager",
            "Weekly Strategy Calls",
            "Custom Workflow Integration"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "hours",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All prices are per VA. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // Final CTA
    finalCTA: {
      badge: "Ready to scale?",
      title: "Get <span class=\"text-gold\">UGC</span> that converts",
      description: "Book a free strategy call and get hook ideas + a content plan tailored to your product.",
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Why <span class=\"text-gold\">Choose Us</span>",
    },
  },

  ge: {
    // How It Works
    howItWorks: {
      badge: "Wie es funktioniert",
      heading: "Starten Sie in <span class=\"text-gold\">4 einfachen Schritten</span>",
      description: "Vom Onboarding bis zu messbaren Ergebnissen – unser Prozess ist schnell, klar und effizient.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Erstberatung",
          description: "Wir besprechen Ihre Bedürfnisse und Ziele, um einen maßgeschneiderten Plan für Ihren virtuellen Assistenten zu erstellen."
        },
        step2: {
          step: "Schritt 2",
          title: "VA-Vermittlung & Onboarding",
          description: "Wir vermitteln Ihnen den perfekten virtuellen Assistenten und übernehmen alle Onboarding-Prozesse."
        },
        step3: {
          step: "Schritt 3",
          title: "Integration & Schulung",
          description: "Ihr VA integriert sich in Ihr Team und erhält spezifisches Training für Ihre Workflows."
        },
        step4: {
          step: "Schritt 4",
          title: "Kontinuierliche Unterstützung & Wachstum",
          description: "Durchgehende Qualitätskontrolle und Unterstützung für optimale Leistung und Skalierung."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      description: "Deutschsprachige Talente, native Qualitätskontrolle, schnelles Onboarding und eine Null‑Risiko‑Garantie.",
    },

    // Testimonials
    testimonials: {
      heading: "Vertrauen von <span class=\"text-gold\">wachsenden Unternehmen</span>",
      subheading: "Echte Ergebnisse von Unternehmen, die mit DON VA skalieren.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">70% Kostensenkung</span>",
        description: "Erfahren Sie, wie ein mittelständisches E-Commerce-Unternehmen seine Betriebskosten um 42.000 € jährlich senkte und gleichzeitig die Servicequalität verbesserte.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "Einblicke",
      heading: "Aktuelle <span class=\"text-gold\">Einblicke</span>",
      description: "Praktische Leitfäden und Strategien zur Skalierung mit virtuellen Assistenten.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "Echte <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Bewährte Ergebnisse von Teams, die mit DON VA skalieren.",
      labels: {
        saved: "Gespart",
        teamSize: "Teamgröße",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Studie ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf die häufigsten Fragen zu unserem Service, Qualitätskontrolle und Sicherheit.",
      qualityCardTitle: "Native Qualitätskontrolle",
      qualityCardText: "Dedizierte Supervisoren prüfen Ergebnisse und coachen kontinuierlich, um Standards zu halten.",
      toolsCardTitle: "Funktioniert mit Ihren Tools",
      toolsCardText: "Wir integrieren uns in Ihre bestehenden Workflows und Plattformen ohne Unterbrechung.",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Wir helfen Ihnen gern, das passende Setup zu wählen.",
      contactSupport: "Support kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "Simple, Transparent Pricing",
      sectionDescription: "Choose the perfect plan for your business. Scale up or down anytime.",
      vaCountLabel: "How many VAs do you need?",
      vaCountHelper: "Select the number of virtual assistants",
      startingFrom: "Starting from €{price}/hour",
      bulkDiscount: "{percent}% discount - {suffix} more!",
      bulkSavings: "Save €{amount} total",
      bulkHint: "Add {count} more {suffix} to get {percent}% discount",
      bannerBadge: "Limited Time",
      bannerTitle: "Book a Meeting",
      bannerSubtitle: "Schedule your free consultation and get started today",
      bannerPoints: {
        noCommitment: "No commitment",
        cancelAnytime: "Cancel anytime", 
        fullAccess: "Full access"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "10h / week",
          features: [
            "Dedicated VA",
            "Native Quality Control",
            "24h Replacement Guarantee", 
            "Slack/Email Support",
            "14 Days Money-Back Warranty"
          ]
        },
        professional: {
          name: "Professional", 
          hours: "20h / week",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Bi-weekly Progress Reports",
            "Flexible Hour Rollover"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "40h / week", 
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "No Setup Fee",
            "Dedicated Account Manager", 
            "Weekly Strategy Calls",
            "Custom Workflow Integration"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "hours",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All prices are per VA. Bulk discounts apply automatically. Setup fees are one-time charges."
    },

    // Final CTA
    finalCTA: {
      badge: "Bereit zu skalieren?",
      title: "Starten Sie noch heute mit <span class=\"text-gold\">DON VA</span>",
      description: "Buchen Sie eine kostenlose Beratung und erleben Sie, wie wir Ihre Abläufe in 48 Stunden transformieren können.",
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Warum <span class=\"text-gold\">wir</span>?",
    },
  },
} as const;

/**
 * Helper to get copy for a language (en/ge)
 */
export const getCopy = <K extends keyof typeof copy.en>(lang: string, key: K) => {
  const normalizedLang = lang.toLowerCase().startsWith('ge') || lang.toLowerCase().startsWith('de') ? 'ge' : 'en';
  return copy[normalizedLang as 'en' | 'ge'][key];
};
