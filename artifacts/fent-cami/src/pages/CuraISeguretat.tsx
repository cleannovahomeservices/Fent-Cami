import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Clock, Heart, Users, CheckCircle2 } from "lucide-react";

export default function CuraISeguretat() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Header */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimatedSection>
              <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 inline-block">Servei Actiu</span>
              <h1 className="text-4xl md:text-6xl font-serif text-balance mb-6">
                Cura i Seguretat
              </h1>
              <p className="text-xl text-foreground/70 font-light leading-relaxed">
                Acompanyament de confiança per al dia a dia del vostre familiar, amb la tranquil·litat que esteu en bones mans.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Intro & Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Més tranquil·litat per a vosaltres, més qualitat de vida per a ells.
              </h2>
              <p className="text-lg text-foreground/70 font-light">
                Sabem que el moment de buscar ajuda fora de la família acostuma a venir acompanyat de dubtes, pors i una mica de sentiment de culpa. 
              </p>
              <p className="text-lg text-foreground/70 font-light">
                A Fent Camí no us enviem "un treballador". Us connectem amb una persona amb vocació real, validada per nosaltres, que encaixarà amb la manera de fer de casa vostra. Volem que sentiu que la persona que cuida el vostre pare o mare ho fa amb el mateix respecte que ho faríeu vosaltres.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2 w-full" delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src="/images/family.png" alt="Família tranquil·la" className="w-full h-auto object-cover aspect-video" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">En què podem donar suport?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">Ens adaptem a les necessitats de cada casa, des d'unes hores a la setmana fins a suport més continuat.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1} className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm">
              <Heart className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif mb-4">Companyia de qualitat</h3>
              <ul className="space-y-3 font-light text-foreground/70">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Conversa i escolta activa</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Passejades i sortides segures</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Acompanyament a visites mèdiques</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm">
              <Clock className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif mb-4">Suport en el dia a dia</h3>
              <ul className="space-y-3 font-light text-foreground/70">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Preparació d'àpats saludables</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Manteniment bàsic de la llar</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Gestió de compres i encàrrecs</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif mb-4">Cura personal</h3>
              <ul className="space-y-3 font-light text-foreground/70">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Suport en la higiene diària</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Ajuda amb la mobilitat i transferències</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Recordatori de medicació</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-primary text-primary-foreground rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Què ens fa diferents?</h2>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <AnimatedSection delay={0.1} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Matching personal, no algorítmic</h3>
                  <p className="text-primary-foreground/80 font-light leading-relaxed">
                    No seleccionem la persona només per horaris o disponibilitat. Coneixem a fons els nostres cuidadors per saber qui tindrà millor química amb el vostre familiar.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Cuidadores validades i valorades</h3>
                  <p className="text-primary-foreground/80 font-light leading-relaxed">
                    Totes les persones que formen part de Fent Camí passen un procés estricte de validació. Però a més, les cuidem. Una persona ben cuidada cuida millor.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif">Voleu que parlem del vostre cas?</h2>
            <p className="text-lg text-foreground/70 font-light">
              Expliqueu-nos què necessiteu i us orientarem sobre com podem ajudar-vos, sense cap compromís.
            </p>
            <Link href="/contacte">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-xl mt-4" data-testid="button-cura-contact">
                Demana informació
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
