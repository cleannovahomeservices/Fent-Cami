import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nom és obligatori"),
  email: z.string().email("Correu electrònic no vàlid"),
  phone: z.string().optional(),
  message: z.string().min(10, "Si us plau, escriu un missatge més llarg perquè puguem entendre bé la teva necessitat")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contacte() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "Missatge enviat correctament",
      description: "Gràcies per contactar amb Fent Camí. Ens posarem en contacte amb vosaltres el més aviat possible.",
    });
    
    form.reset();
  };

  return (
    <div className="flex flex-col w-full pt-20">
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        {/* Soft background decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 rounded-bl-[100px] -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-center mx-auto mb-16">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance mb-6">
                Parlem?
              </h1>
              <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
                Estem aquí per escoltar-vos. Digueu-nos què necessiteu i buscarem la millor manera de fer camí junts.
              </p>
            </AnimatedSection>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <AnimatedSection delay={0.1}>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-medium text-xl mb-1">Telèfon o WhatsApp</h3>
                      <p className="text-foreground/70 font-light mb-2">Truca'ns de dilluns a divendres de 9h a 18h o envia'ns un WhatsApp.</p>
                      <a href="tel:+34600000000" className="text-primary font-medium hover:underline text-lg">+34 600 000 000</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-medium text-xl mb-1">Correu electrònic</h3>
                      <p className="text-foreground/70 font-light mb-2">Escriu-nos i et respondrem en menys de 24 hores.</p>
                      <a href="mailto:hola@fentcami.cat" className="text-primary font-medium hover:underline text-lg">hola@fentcami.cat</a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm mt-8">
                <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">
                  "El primer pas sempre és entendre què necessiteu exactament. Una bona conversa inicial és clau per a un bon acompanyament."
                </p>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 w-full">
              <AnimatedSection delay={0.3} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-primary/5 border border-border/40">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>El vostre nom</FormLabel>
                            <FormControl>
                              <Input placeholder="Nom i cognoms" {...field} className="bg-background" data-testid="input-contact-name" />
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
                            <FormLabel>Telèfon</FormLabel>
                            <FormControl>
                              <Input placeholder="Telèfon de contacte" type="tel" {...field} className="bg-background" data-testid="input-contact-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correu electrònic</FormLabel>
                          <FormControl>
                            <Input placeholder="elteu@email.cat" type="email" {...field} className="bg-background" data-testid="input-contact-email" />
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
                          <FormLabel>Com us podem ajudar?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Expliqueu-nos breument la vostra situació i quines necessitats teniu..." 
                              className="min-h-[150px] bg-background resize-none" 
                              {...field} 
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full rounded-full h-14 text-lg gap-2" 
                      disabled={isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? "Enviant missatge..." : (
                        <>Enviar missatge <Send className="w-5 h-5" /></>
                      )}
                    </Button>
                  </form>
                </Form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
