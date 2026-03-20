import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  FileCheck,
  Calculator,
  Landmark,
  Building,
  RefreshCw,
  ArrowRight
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

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
      {/* Dark Feature Band */}
      <section className="gradient-dark-band relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/business-team.png"
            alt=""
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={siteConfig.services.featureBand.image}
                  alt="Our qualified team"
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
                {siteConfig.services.featureBand.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {siteConfig.services.featureBand.heading}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                {siteConfig.services.featureBand.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {siteConfig.services.featureBand.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              {siteConfig.services.main.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {siteConfig.services.main.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.services.main.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteConfig.services.main.servicesList.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all group hover:-translate-y-1"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-primary group-hover:h-1.5 transition-all" />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <s.icon
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                      size={22}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-body">
                    {s.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => handleLearnMore(s)}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:gap-3 gap-1 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => (open ? setIsOpen(true) : closeModal())}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 bg-transparent shadow-2xl sm:rounded-2xl">
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none bg-white p-8 lg:p-10">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl">
                  {activeService?.title}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base">
                  {activeService
                    ? `More about ${activeService.title.toLowerCase()}.`
                    : 'Select a service for more details.'}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-6">
                {activeService?.details?.map((detail) => (
                  <div key={detail.title} className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      {detail.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>

              <DialogFooter className="mt-8 justify-end gap-3">
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
                <Button asChild>
                  <a
                    href="https://wa.me/2348037345051?text=Hi%20team%2C%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </DialogFooter>
            </div>

            <div className="relative hidden lg:block rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none overflow-hidden bg-gradient-to-br from-primary/10 via-white to-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent opacity-60 mix-blend-multiply z-10 pointer-events-none" />
              {activeService?.image ? (
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                  <ArrowRight className="h-12 w-12 text-primary" />
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ServicesSection
