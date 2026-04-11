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
      bulkHint: "Add {count} more video{suffix} to unlock {percent}% bulk discount",
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
          hours: "3 Videos",
          features: [
            "3 UGC Videos",
            "Script & Hook Strategy",
            "Creator Casting",
            "Editing & Captions",
            "Usage Rights Included"
          ]
        },
        professional: {
          name: "Professional",
          hours: "10 Videos",
          features: [
            "Everything in Starter",
            "No Setup Fee",
            "Priority Support",
            "Hook Variations",
            "Performance Tracking"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "30+ Videos",
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "Dedicated Account Manager",
            "Weekly Strategy Calls",
            "A/B Testing",
            "Custom Workflow"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/mo",
      hoursUnit: "Videos",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All packages include commercial usage rights. Bulk discounts apply automatically.",
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
          title: "Creator Casting & Produktion",
          description: "Wir casten authentische Creator, die zu Ihrer Marke passen, und koordinieren die komplette Produktion."
        },
        step3: {
          step: "Schritt 3",
          title: "Schnitt & Optimierung",
          description: "Wir schneiden plattformoptimierte Videos mit Hooks, Captions und mehreren Variationen zum Testen."
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
      subheading: "Echte Ergebnisse von Marken, die mit UGC Studio skalieren.",
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
      heading: "Echte <span class=\"text-gold\">UGC Ergebnisse</span>",
      description: "Bewährte Ergebnisse von Marken, die mit authentischem UGC skalieren.",
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
      sectionBadge: "Preise",
      sectionTitle: "UGC Content Pakete",
      sectionDescription: "Production-ready UGC im Skalierungs-Modell. Alle Pakete inklusive Konzept, Creator-Casting, Dreh, Schnitt, Captions und kommerziellen Nutzungsrechten.",
      vaCountLabel: "Wie viele Videos benötigen Sie?",
      vaCountHelper: "Wählen Sie die Anzahl der UGC-Videos",
      startingFrom: "Ab €{price}/Monat",
      bulkDiscount: "{percent}% Mengenrabatt!",
      bulkSavings: "Sie sparen €{amount} insgesamt",
      bulkHint: "Fügen Sie {count} weitere Video{suffix} hinzu, um {percent}% Rabatt zu erhalten",
      bannerBadge: "Limited Time",
      bannerTitle: "Kostenlose UGC-Strategie-Beratung",
      bannerSubtitle: "Vereinbaren Sie ein kostenloses Strategie-Gespräch, bevor Sie ein Paket wählen",
      bannerPoints: {
        noCommitment: "Keine Verpflichtung",
        cancelAnytime: "Jederzeit kündbar",
        fullAccess: "Voller Zugriff"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "3 Videos",
          features: [
            "3 UGC Videos",
            "Script & Hook-Strategie",
            "Creator-Casting",
            "Schnitt & Captions",
            "Nutzungsrechte inklusive"
          ]
        },
        professional: {
          name: "Professional",
          hours: "10 Videos",
          features: [
            "Alles aus Starter",
            "Keine Setup-Gebühr",
            "Prioritäts-Support",
            "Hook-Variationen",
            "Performance-Tracking"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "30+ Videos",
          badge: "Bestes Preis-Leistungs",
          features: [
            "Alles aus Professional",
            "Dedizierter Account Manager",
            "Wöchentliche Strategie-Calls",
            "A/B Testing",
            "Custom Workflow"
          ]
        }
      },
      button: "Loslegen",
      perMonth: "/Mo",
      hoursUnit: "Videos",
      planSetupFee: "+€{fee} Setup-Gebühr",
      planNoSetupFee: "Keine Setup-Gebühr",
      disclaimer: "Alle Pakete beinhalten kommerzielle Nutzungsrechte. Mengenrabatte gelten automatisch.",
    },

    // Final CTA
    finalCTA: {
      badge: "Bereit zu skalieren?",
      title: "Starten Sie noch heute mit <span class=\"text-gold\">UGC Studio</span>",
      description: "Buchen Sie eine kostenlose Strategie-Beratung und erhalten Sie maßgeschneiderte Hook-Ideen für Ihr Produkt.",
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
