import { Link } from "wouter";
import { HeartHandshake, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-flex" data-testid="link-footer-logo">
              <HeartHandshake className="w-6 h-6 text-primary" />
              <span className="font-serif text-2xl font-semibold">Fent Camí</span>
            </Link>
            <p className="text-background/80 max-w-sm font-light">
              Connectem persones per acompanyar amb qualitat. Més enllà de les tasques, ens importa com s'acompanya la persona.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-primary-foreground">Navegació</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-primary transition-colors inline-block" data-testid="link-footer-home">Inici</Link>
              </li>
              <li>
                <Link href="/cura-i-seguretat" className="text-background/70 hover:text-primary transition-colors inline-block" data-testid="link-footer-cura">Cura i Seguretat</Link>
              </li>
              <li>
                <Link href="/cuidadores" className="text-background/70 hover:text-primary transition-colors inline-block" data-testid="link-footer-cuidadores">Per a Cuidadores</Link>
              </li>
              <li>
                <Link href="/contacte" className="text-background/70 hover:text-primary transition-colors inline-block" data-testid="link-footer-contacte">Contacte</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-primary-foreground">Parlem?</h4>
            <div className="space-y-3 text-background/80 font-light">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+34 600 000 000</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@fentcami.cat</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Fent Camí. Tots els drets reservats.
          </p>
          <p className="text-sm text-background/60 font-serif italic">
            Fem camí junts.
          </p>
        </div>
      </div>
    </footer>
  );
}
