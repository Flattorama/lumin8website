import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="Think we're a good fit?"
          subtitle="Let's chat about your project and see how we can help illuminate your brand."
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
                  GET IN TOUCH
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-[#616161] mb-8 leading-relaxed">
                  Ready to take your marketing to the next level? Fill out the form and we'll get back to you within 24 hours to schedule a discovery call.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#78C8BF]/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-[#78C8BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1D] mb-1">Email Us</h3>
                      <p className="text-[#616161]">hello@lumin8.agency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#78C8BF]/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-[#78C8BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1D] mb-1">Call Us</h3>
                      <p className="text-[#616161]">Available during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#78C8BF]/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-[#78C8BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D1D1D] mb-1">Location</h3>
                      <p className="text-[#616161]">Remote-first agency</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#1D1D1D]">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="border-gray-200"
                                data-testid="input-contact-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#1D1D1D]">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="border-gray-200"
                                data-testid="input-contact-email"
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
                            <FormLabel className="text-[#1D1D1D]">Company</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                className="border-gray-200"
                                data-testid="input-contact-company"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#1D1D1D]">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="border-gray-200 resize-none"
                                data-testid="input-contact-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="w-full bg-[#78C8BF] hover:bg-[#6bb8af] text-[#1D1D1D] font-bold rounded-full py-6"
                        data-testid="button-contact-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
