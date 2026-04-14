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
import { Send } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  service: z.string({
    required_error: "Please select a topic to discuss.",
  }),
  phone: z.string().min(5, "Phone number is required."),
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
      service: "",
      phone: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke("contact-form-email", {
        body: {
          fullName: values.fullName,
          company: values.company,
          email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to send message via edge function");
      }

      // If the admin email was successful, send the confirmation email to the user.
      const { error: confirmationError } = await supabase.functions.invoke("user-confirmation-email", {
        body: {
          fullName: values.fullName,
          email: values.email,
          service: values.service,
        },
      });

      if (confirmationError) {
        // We still want to show success to the user since the admin got the email, 
        // but log the confirmation failure for investigation.
        console.error("Warning: Failed to send user confirmation email:", confirmationError);
      }

      toast.success("Thank you for contacting us, We'll be in touch shortly.");
      form.reset();
    } catch (error: any) {
      console.error("Error from Supabase Edge Function:", error);
      toast.error(error.message || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-50 min-h-[700px] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-full min-h-[700px]">
        {/* Left Column: Form (40%) */}
        <div className="w-full lg:w-[45%] relative z-10 flex flex-col justify-center py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-border/50"
          >
            {/* Header Block */}
            <div className="bg-primary px-8 py-6">
              <h3 className="text-white text-2xl font-bold tracking-tight">Get in touch with us today!</h3>
            </div>

            {/* Form Container */}
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your Name*"
                              className="h-12 bg-transparent border-input px-4 text-sm"
                              {...field}
                            />
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
                            <Input
                              placeholder="Company Name (optional)"
                              className="h-12 bg-transparent border-input px-4 text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email Address*"
                              className="h-12 bg-transparent border-input px-4 text-sm"
                              {...field}
                            />
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
                            <Input
                              type="tel"
                              placeholder="Phone number*"
                              className="h-12 bg-transparent border-input px-4 text-sm"
                              {...field}
                            />
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
                            <SelectTrigger className="h-12 bg-transparent border-input px-4 text-sm text-muted-foreground w-full">
                              <SelectValue placeholder="What you like to discuss?" />
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
                            placeholder="How can we help you?"
                            rows={4}
                            className="bg-transparent border-input px-4 py-3 text-sm resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2 flex justify-start">
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all uppercase tracking-wider py-6 px-10 rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        'SEND REQUEST'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Brand Identity (55%) */}
        <div className="hidden lg:block w-full lg:w-[55%] relative">
          {/* Abstract Geometric Background */}
          <div className="absolute inset-0 bg-[#EBF3FC] overflow-hidden">
            {/* Geometric Cuts (Masking) */}

            <div className="absolute right-0 top-0 w-1/2 h-full bg-primary" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}></div>

            {/* Pattern Overlays */}
            <div className="absolute right-[10%] top-[40%] text-primary/20 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 5 }).map((_, i) => (
                  Array.from({ length: 5 }).map((_, j) => (
                    <path key={`${i}-${j}`} d={`M${i * 20 + 5} ${j * 20 + 10} L${i * 20 + 15} ${j * 20 + 10} M${i * 20 + 10} ${j * 20 + 5} L${i * 20 + 10} ${j * 20 + 15}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  ))
                ))}
              </svg>
            </div>

            <div className="absolute left-0 bottom-[10%] text-primary/20 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 80 Q 25 30 50 80 T 100 80 T 150 80" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 90 Q 25 40 50 90 T 100 90 T 150 90" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 100 Q 25 50 50 100 T 100 100 T 150 100" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>


          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute bottom-0 left-12 w-[85%] h-[90%] pointer-events-none"
          >
            <img
              src="/images/contact-image.png"
              alt="Professional business advisor"
              className="w-full h-full object-cover object-top drop-shadow-2xl opacity-100 mix-blend-normal rounded-lg"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

