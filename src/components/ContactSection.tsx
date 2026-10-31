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
import RevealText from "@/components/RevealText";

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

  // TODO: replace with Resend. Interim: hand the message to the visitor's mail client.
  const onSubmit = async (values: FormValues) => {
    try {
      const to = siteConfig.global.email;
      const subject = `Website enquiry: ${values.service} - ${values.fullName}`;
      const body = [
        `Name: ${values.fullName}`,
        `Company: ${values.company || "-"}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Topic: ${values.service}`,
        "",
        values.message,
      ].join("\n");

      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      toast.success("Thank you for contacting us, We'll be in touch shortly.");
      form.reset();
    } catch (error) {
      console.error("Error opening mail client:", error);
      const message = error instanceof Error ? error.message : "";
      toast.error(message || "Failed to send message. Please try again later.");
    }
  };

  const fieldClass =
    "h-12 bg-muted border-transparent rounded-sm px-4 text-sm focus-visible:ring-gold focus-visible:bg-white";

  return (
    <section id="contact" className="relative w-full bg-muted overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center max-w-6xl mx-auto">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block pl-10 pb-10"
          >
            <div className="absolute left-0 bottom-0 w-3/4 h-3/4 bg-primary" aria-hidden="true" />
            <div className="absolute right-6 -top-6 w-28 h-28 stripe-accent" aria-hidden="true" />
            <img
              src="/images/contact-image.png"
              alt="Professional business advisor"
              className="relative w-full h-[560px] object-cover object-top shadow-elevated"
              draggable="false"
              loading="lazy"
            />
          </motion.div>

          {/* Form card — overlaps the image on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10 w-full max-w-xl mx-auto lg:-ml-16 bg-white shadow-elevated border-t-4 border-gold"
          >
            {/* Header Block */}
            <div className="px-8 sm:px-10 pt-10">
              <RevealText
                as="h3"
                text="Get in touch with us today!"
                className="text-foreground text-2xl sm:text-3xl font-extrabold tracking-tight"
              />
              <span className="block h-1 w-14 bg-gold mt-4" aria-hidden="true" />
            </div>

            {/* Form Container */}
            <div className="p-8 sm:p-10">
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
                              className={fieldClass}
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
                              className={fieldClass}
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
                              className={fieldClass}
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
                              className={fieldClass}
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
                            <SelectTrigger className={`${fieldClass} text-muted-foreground w-full`}>
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
                            className="bg-muted border-transparent rounded-sm px-4 py-3 text-sm resize-none focus-visible:ring-gold focus-visible:bg-white"
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
                      variant="gold"
                      className="uppercase tracking-wider h-14 px-10 rounded-sm"
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
      </div>
    </section>
  );
};

export default ContactSection;

