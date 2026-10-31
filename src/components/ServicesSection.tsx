import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/SectionHeading'

type Service = (typeof siteConfig.services.main.servicesList)[number]

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleLearnMore = (service: Service) => {
    setActiveService(service)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setActiveService(null)
  }

  return (
    <>
      {/* Our Approach — image + text split */}
      <section className="bg-white relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="relative pr-6 pt-6 sm:pr-10 sm:pt-10"
            >
              <div className="absolute right-0 top-0 w-2/3 h-2/3 bg-primary" aria-hidden="true" />
              <div className="absolute -left-4 -bottom-4 w-28 h-28 stripe-accent" aria-hidden="true" />
              <div className="relative overflow-hidden shadow-elevated">
                <img
                  src={siteConfig.services.featureBand.image}
                  alt="Our qualified team"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text side */}
            <div>
              <SectionHeading
                align="left"
                badge={siteConfig.services.featureBand.badge}
                title={siteConfig.services.featureBand.heading}
                description={siteConfig.services.featureBand.description}
                className="mb-8"
              />
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid sm:grid-cols-2 gap-x-6 gap-y-4"
              >
                {siteConfig.services.featureBand.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-gold-deep shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards — "What we provide" grid */}
      <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge={siteConfig.services.main.badge}
            title={siteConfig.services.main.heading}
            description={siteConfig.services.main.description}
            className="mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.services.main.servicesList.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group relative bg-white p-8 lg:p-10 shadow-card hover:bg-primary transition-colors duration-500 flex flex-col"
              >
                {/* Gold bottom bar grows on hover */}
                <span className="absolute left-0 bottom-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500" aria-hidden="true" />

                <s.icon
                  className="text-gold-deep group-hover:text-gold mb-6 transition-colors duration-500"
                  size={48}
                  strokeWidth={1.3}
                />
                <h3 className="text-xl font-extrabold text-foreground group-hover:text-white mb-4 transition-colors duration-500">
                  {s.title}
                </h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground group-hover:text-white/75 flex items-start gap-2 transition-colors duration-500"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleLearnMore(s)}
                  className="self-start inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-gold-deep group-hover:text-gold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom animated modal */}
      <AnimatePresence>
        {isOpen && activeService && (
          <>
            {/* Single overlay — backdrop + click-outside handler */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-deep/70 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-gold"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-sm bg-primary text-white hover:bg-gold hover:text-primary transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <div className="grid lg:grid-cols-[1.2fr_1fr]">
                  {/* Content side */}
                  <div className="bg-white p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-foreground pr-10">
                        {activeService.title}
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">
                        {`More about ${activeService.title.toLowerCase()}.`}
                      </p>

                      <div className="space-y-6 mt-8">
                        {activeService.details?.map((detail) => (
                          <div key={detail.title} className="space-y-1.5 border-l-2 border-gold pl-4">
                            <h4 className="text-base font-extrabold text-foreground">
                              {detail.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {detail.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer — left-aligned */}
                    <div className="mt-10 flex flex-wrap items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={closeModal}
                        className="px-6 rounded-sm border-primary text-primary font-bold"
                      >
                        See more services
                      </Button>
                      <Button
                        asChild
                        variant="gold"
                        className="px-6 rounded-sm"
                      >
                        <a
                          href="https://wa.me/2348037345051?text=Hi%20team%2C%20I%20am%20interested%20in%20your%20services"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="hidden lg:block relative bg-muted min-h-[420px]">
                    {activeService.image ? (
                      <img
                        src={activeService.image}
                        alt={activeService.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <ArrowRight className="h-12 w-12 text-primary/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ServicesSection
