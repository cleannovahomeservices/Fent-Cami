import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Search, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, UserCheck, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/path.png" 
            alt="Camí en un bosc tranquil" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide mb-2 uppercase border border-primary/20">
              Connectem persones per acompanyar amb qualitat
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] text-balance">
              T'ajudem a trobar una persona de confiança per acompanyar qui estimes
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
              Fent Camí és un servei de proximitat i confiança. Entenem la vostra família per connectar-vos amb el cuidador o cuidadora ideal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/contacte">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg hover:shadow-xl transition-all" data-testid="button-hero-contact">
                  Parlem-ne
                </Button>
              </Link>
              <Link href="/cura-i-seguretat">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-primary/20 hover:bg-primary/5" data-testid="button-hero-services">
                  Descobreix com funciona
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
              "Sabem que confiar en algú per cuidar un familiar no és fàcil. Per això cuidem cada detall del procés."
            </h2>
            <p className="text-lg text-foreground/70">
              Més enllà de les tasques, ens importa com s'acompanya la persona. No som un marketplace ni una agència tradicional. Som un acompanyament humà de principi a fi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Els nostres pilars</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">La base de tot el que fem està centrada en la qualitat humana i la tranquil·litat de la família.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Entenem les necessitats", desc: "No mirem només l'historial mèdic, sinó qui és la persona, què li agrada i com se sent còmoda." },
              { icon: ShieldCheck, title: "Validem les persones", desc: "Coneixem personalment cada cuidador. Ens assegurem de la seva vocació, experiència i qualitat humana." },
              { icon: UserCheck, title: "Matching cuidat", desc: "Busquem l'encaix perfecte entre el caràcter de la família i la manera de ser del cuidador." },
              { icon: MessageCircle, title: "Seguiment actiu", desc: "El nostre suport no acaba quan presentem el cuidador. Estem presents en el dia a dia per assegurar que tot va bé." }
            ].map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{pillar.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">{pillar.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection className="lg:w-1/3">
              <h2 className="text-4xl font-serif mb-6">Com podem ajudar-vos</h2>
              <p className="text-lg text-foreground/70 mb-8">
                L'acompanyament té moltes cares. Actualment ens centrem en la cura essencial, però el nostre objectiu és cobrir totes les dimensions del benestar.
              </p>
            </AnimatedSection>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Active Area */}
              <AnimatedSection className="bg-primary/5 border border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Actiu
                </div>
                <h3 className="text-2xl font-serif mb-3">Cura i Seguretat</h3>
                <p className="text-foreground/70 mb-6 font-light">Acompanyament en el dia a dia, mobilitat, higiene i suport bàsic amb la màxima tendresa.</p>
                <Link href="/cura-i-seguretat" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" data-testid="link-home-to-cura">
                  Saber-ne més <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>

              {/* Coming Soon Areas */}
              {[
                { title: "Relacions", desc: "Suport per mantenir vincles socials, amistats i connexió amb la comunitat local per evitar l'aïllament." },
                { title: "Autoconnexió", desc: "Acompanyament emocional i activitats per mantenir la identitat, la memòria i l'estimulació cognitiva." },
                { title: "Propòsit", desc: "Projectes personals adaptats, petites responsabilitats i il·lusions que donen sentit al dia a dia." }
              ].map((area, i) => (
                <AnimatedSection key={i} delay={(i+1)*0.1} className="bg-muted/30 border border-border/50 p-8 rounded-3xl relative opacity-80">
                  <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full border border-border">
                    Molt aviat
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-foreground/60">{area.title}</h3>
                  <p className="text-foreground/50 text-sm font-light">{area.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden relative">
            <img src="/images/companionship.png" alt="Acompanyament amb tendresa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Com funciona</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Un procés senzill pensat per no afegir més càrrega a la família.</p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Ens coneixem", desc: "Una primera conversa per entendre bé la situació i el caràcter del vostre familiar." },
                { step: "2", title: "Busquem la persona", desc: "Seleccionem entre els nostres perfils de confiança qui encaixa millor amb vosaltres." },
                { step: "3", title: "Fem match", desc: "Us presentem la persona ideal. Si hi ha química, comencem a fer camí junts." },
                { step: "4", title: "Seguiment", desc: "Mantenim el contacte regular per assegurar que la relació és positiva per ambdues parts." }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i*0.1} className="relative">
                  <div className="w-16 h-16 mx-auto bg-background border-4 border-primary/20 rounded-full flex items-center justify-center text-xl font-serif font-bold text-primary mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <div className="text-center bg-card p-6 rounded-2xl shadow-sm h-full border border-border/50">
                    <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70 font-light">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leaf" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 Q75 25 50 50 Q25 25 50 0 Z" fill="currentColor" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Esteu buscant algú de confiança?
            </h2>
            <p className="text-xl text-primary-foreground/90 font-light">
              Parlem sense cap compromís. Explica'ns la teva situació i mirarem com podem ajudar-vos a fer camí.
            </p>
            <div className="pt-4">
              <Link href="/contacte">
                <Button size="lg" variant="secondary" className="rounded-full px-10 text-lg h-14 text-foreground shadow-lg hover:shadow-xl transition-all" data-testid="button-home-final-cta">
                  Contacta amb nosaltres
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
