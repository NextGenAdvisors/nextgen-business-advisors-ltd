import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Mail, Phone, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  service: z.string({
    required_error: "Please select a service required.",
  }),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: undefined, // undefined to show the placeholder initially
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke("contact-form-email", {
        body: values,
      });

      if (error) {
        throw new Error(error.message || "Failed to send message via edge function");
      }

      toast.success("Thank you! We'll be in touch shortly.");
      form.reset({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        service: undefined, // undefined to show the placeholder initially
        message: "",
      });
    } catch (error: any) {
      console.error("Error from Supabase Edge Function:", error);
      toast.error(error.message || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="pt-20 md:pt-28 relative overflow-hidden radial-bg">
      <AnimatedSVGBackground variant="light" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            {siteConfig.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {siteConfig.contact.heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <MapPin className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">
                  Office Location
                </h4>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.global.location}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Mail className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">
                  Email
                </h4>
                <a
                  href={`mailto:${siteConfig.global.email}`}
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                >
                  {siteConfig.global.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Phone className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">
                  Phone
                </h4>
                <a
                  className="text-sm text-foreground"
                  href={`tel:${siteConfig.global.phone}`}
                  target="_blank"
                >
                  {siteConfig.global.phone}
                </a>
              </div>
            </div>

            {/* Consulting image */}
            <div className="rounded-xl overflow-hidden shadow-card hidden lg:block">
              <img
                src={siteConfig.contact.image}
                alt="Business consultation"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                {siteConfig.contact.quote}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-xl p-8 border border-border shadow-card"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name *" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Company Name (optional)" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email Address *" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="tel" placeholder="Phone Number" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Service Required" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {siteConfig.contact.formServices.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={4}
                          className="bg-background resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      {/* ── Full-width interactive map ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20"
      >
        {/* Header band */}
        <div className="bg-primary/5 border-y border-border py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 px-4 md:px-8">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <MapPin className="text-primary-foreground" size={16} />
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Our Location
              </p>
              <p className="text-sm font-medium text-foreground">
                {siteConfig.global.location}
              </p>
            </div>
          </div>
          <a
            href={siteConfig.global.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors px-4 md:px-8"
          >
            <ExternalLink size={14} />
            Get Directions
          </a>
        </div>

        {/* Map iframe */}
        <div className="relative w-full" style={{ height: "420px" }}>
          <iframe
            title={`NextGen Business Advisors – ${siteConfig.global.location}`}
            src={siteConfig.global.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
