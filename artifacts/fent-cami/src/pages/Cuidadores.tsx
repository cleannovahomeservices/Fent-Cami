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
import { Heart, Star, Sparkles, SmilePlus } from "lucide-react";

const caregiverSchema = z.object({
  name: z.string().min(2, "El nom és massa curt"),
  email: z.string().email("Correu electrònic no vàlid"),
  phone: z.string().min(9, "El telèfon ha de tenir almenys 9 dígits"),
  experience: z.string().min(20, "Si us plau, explica'ns una mica més sobre tu")
});

type CaregiverFormValues = z.infer<typeof caregiverSchema>;

export default function Cuidadores() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CaregiverFormValues>({
    resolver: zodResolver(caregiverSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: ""
    }
  });

  const onSubmit = async (data: CaregiverFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "Sol·licitud enviada correctament",
      description: "Gràcies per voler formar part de Fent Camí. Ens posarem en contacte amb tu aviat.",
    });
    
    form.reset();
  };

  return (
    <div className="flex flex-col w-full pt-20">
      <section className="relative py-20 md:py-28 overflow-hidden bg-accent/20">
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance mb-4">
              Uneix-te a la nostra xarxa de confiança
            </h1>
            <p className="text-xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
              Buscquem persones amb vocació real, empatia i ganes d'acompanyar la gent gran amb respecte i tendresa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Info Section */}
            <div className="lg:w-1/2 space-y-12">
              <AnimatedSection>
                <h2 className="text-3xl font-serif mb-6">Què busquem?</h2>
                <p className="text-foreground/70 font-light mb-8">
                  A Fent Camí no ens fixem només en el currículum. Donem molta importància a la qualitat humana, la paciència i l'actitud.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Heart, title: "Vocació", desc: "T'agrada genuïnament tractar amb persones grans i gaudeixes de la seva companyia." },
                    { icon: Star, title: "Experiència", desc: "Tens experiència demostrable en el sector de la cura o l'acompanyament." },
                    { icon: SmilePlus, title: "Empatia", desc: "Saps escoltar, entendre i adaptar-te al ritme de la persona que acompanyes." },
                    { icon: Sparkles, title: "Compromís", desc: "Busques estabilitat i vols construir un vincle de confiança amb les famílies." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg font-serif mb-1">{item.title}</h3>
                        <p className="text-foreground/70 font-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-secondary/30 p-8 rounded-3xl border border-secondary" delay={0.2}>
                <h3 className="text-xl font-serif mb-4">Què t'oferim?</h3>
                <p className="text-foreground/70 font-light mb-4">
                  Creiem fermament que una persona ben cuidada, cuida millor. Per això:
                </p>
                <ul className="space-y-2 text-sm font-light text-foreground/80 list-disc list-inside ml-4">
                  <li>Respecte i valoració per la teva feina.</li>
                  <li>Famílies que encaixin amb la teva manera de ser.</li>
                  <li>Suport continuat: no et deixem sol/a. Som aquí per resoldre dubtes.</li>
                  <li>Condicions transparents des del primer dia.</li>
                </ul>
              </AnimatedSection>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2">
              <AnimatedSection delay={0.3} className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-lg shadow-black/5">
                <h2 className="text-2xl font-serif mb-2">Envia'ns les teves dades</h2>
                <p className="text-foreground/60 font-light mb-8 text-sm">
                  Omple aquest petit formulari i ens posarem en contacte amb tu per fer una primera conversa.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom i cognoms</FormLabel>
                          <FormControl>
                            <Input placeholder="Escriu el teu nom complet" {...field} className="bg-background" data-testid="input-caregiver-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Correu electrònic</FormLabel>
                            <FormControl>
                              <Input placeholder="elteu@email.cat" type="email" {...field} className="bg-background" data-testid="input-caregiver-email" />
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
                              <Input placeholder="El teu número de telèfon" type="tel" {...field} className="bg-background" data-testid="input-caregiver-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Explica'ns una mica la teva experiència i per què vols col·laborar amb nosaltres</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="M'agrada la gent gran perquè..." 
                              className="min-h-[120px] bg-background resize-none" 
                              {...field} 
                              data-testid="input-caregiver-experience"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full rounded-full h-12 text-md" 
                      disabled={isSubmitting}
                      data-testid="button-caregiver-submit"
                    >
                      {isSubmitting ? "Enviant..." : "Enviar sol·licitud"}
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
