import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Zap, Heart } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Star className="w-4 h-4 mr-2" />
                Lançamento Exclusivo
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  TREINU
                </span>
                <br />
                <span className="text-foreground">Stride</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Conforto e segurança para seus treinos. Versatilidade para o dia a dia e para a academia.
              </p>
            </div>

            {/* Features highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Solado Antiderrapante</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Sensação Pé Descalço</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Conforto Ergonômico</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Design Moderno</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-glow hover:shadow-glow/80 transition-all duration-300"
                onClick={() => {
                  // Rastrear clique no botão principal
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Lead', {
                      content_name: 'Botão Comprar Agora - Hero',
                      value: 189.90,
                      currency: 'BRL'
                    });
                  }
                  document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Comprar Agora
                <span className="ml-2">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Rastrear clique no botão de detalhes
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'ViewContent', {
                      content_name: 'Botão Ver Detalhes - Hero'
                    });
                  }
                  document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Detalhes
              </Button>
            </div>

            {/* Price */}
            <div className="pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">R$ 189,90</span>
                <span className="text-lg text-muted-foreground line-through">R$ 249,90</span>
                <Badge variant="destructive">-24%</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Em até 12x sem juros • Frete grátis
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl p-8 shadow-card">
              <img
                src="/lovable-uploads/9d348f68-801a-4c8c-ad9c-533d124ca1b5.png"
                alt="Tênis TREINU Preto"
                className="w-full h-auto max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                Novo!
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-card p-4 rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Respirável</span>
              </div>
            </div>
            
            <div className="absolute -right-6 bottom-1/4 bg-card p-4 rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
                <span className="text-sm font-medium">Anti-slip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;