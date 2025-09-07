import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Star, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  Shield,
  Clock,
  Award,
  Users
} from "lucide-react";

const CTASection = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("40");

  const colors = [
    {
      id: "black",
      name: "Preto",
      color: "#1a1a1a",
      image: "/lovable-uploads/9d348f68-801a-4c8c-ad9c-533d124ca1b5.png",
      featured: true
    },
    {
      id: "mint",
      name: "Verde Água",
      color: "#7dd3fc",
      image: "/lovable-uploads/e8608a07-9feb-41e0-a880-4ff2eb0b8d7a.png",
      featured: false
    },
    {
      id: "beige",
      name: "Bege",
      color: "#d4c5a8",
      image: "/lovable-uploads/f9b78f10-6568-49b1-b46e-a43cd0429145.png",
      featured: false
    }
  ];

  const sizes = [
    { id: "38", name: "38", available: true },
    { id: "39", name: "39", available: true },
    { id: "40", name: "40", available: true },
    { id: "41", name: "41", available: true },
    { id: "42", name: "42", available: true },
    { id: "43", name: "43", available: true },
    { id: "44", name: "44", available: false }
  ];

  const selectedProduct = colors.find(color => color.id === selectedColor);

  const benefits = [
    {
      icon: Truck,
      title: "Frete Grátis",
      description: "Para todo o Brasil"
    },
    {
      icon: RotateCcw,
      title: "Troca Garantida",
      description: "Até 30 dias"
    },
    {
      icon: CreditCard,
      title: "12x sem juros",
      description: "No cartão de crédito"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "SSL e criptografia"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "Melhor tênis que já usei para treinar! Super confortável e antiderrapante mesmo.",
      author: "Marina S.",
      verified: true
    },
    {
      rating: 5,
      comment: "Uso no trabalho e na academia. Versatilidade incrível e qualidade excelente.",
      author: "Carlos R.",
      verified: true
    }
  ];

  return (
    <section id="cta-section" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-24 h-24 bg-primary rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Social Proof */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9/5.0</span>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>2.000+ clientes satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Aprovado por atletas</span>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Oferta por Tempo Limitado
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Garante já o seu <span className="text-primary">TREINU</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que escolheram o conforto e a qualidade do TREINU para seus treinos e dia a dia.
          </p>

          {/* Pricing */}
          <div className="bg-card rounded-2xl p-8 mb-8 shadow-card border border-border max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">R$ 189,90</span>
                <span className="text-xl text-muted-foreground line-through">R$ 249,90</span>
              </div>
              <Badge variant="destructive" className="mb-2">
                ECONOMIA DE R$ 60,00
              </Badge>
              <p className="text-sm text-muted-foreground">
                Ou 12x de R$ 15,83 sem juros
              </p>
            </div>

            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="w-full shadow-glow hover:shadow-glow/80 text-lg py-6"
                  >
                    🔥 COMPRAR AGORA
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Personalizar Produto</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Product Image */}
                    <div className="flex justify-center">
                      <img 
                        src={selectedProduct?.image} 
                        alt={`Tênis TREINU ${selectedProduct?.name}`} 
                        className="w-32 h-32 object-contain"
                      />
                    </div>

                    {/* Color Selection */}
                    <div>
                      <h4 className="font-semibold mb-3">Escolha a cor:</h4>
                      <div className="grid gap-2">
                        {colors.map((color) => (
                          <Card 
                            key={color.id} 
                            className={`cursor-pointer transition-all duration-300 ${
                              selectedColor === color.id 
                                ? 'border-primary shadow-glow/30 bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedColor(color.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div 
                                    className="w-6 h-6 rounded-full border-2 border-background shadow-sm" 
                                    style={{ backgroundColor: color.color }}
                                  ></div>
                                  <span className="font-medium">{color.name}</span>
                                </div>
                                <div className={`w-4 h-4 rounded-full border-2 ${
                                  selectedColor === color.id 
                                    ? 'border-primary bg-primary' 
                                    : 'border-muted-foreground'
                                }`}>
                                  {selectedColor === color.id && (
                                    <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <h4 className="font-semibold mb-3">Escolha o tamanho:</h4>
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="w-full h-12">
                          <SelectValue placeholder="Escolha o tamanho" />
                        </SelectTrigger>
                        <SelectContent>
                          {sizes.map((size) => (
                            <SelectItem 
                              key={size.id} 
                              value={size.id} 
                              disabled={!size.available}
                              className={!size.available ? "opacity-50 cursor-not-allowed" : ""}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>Tamanho {size.name}</span>
                                {!size.available && (
                                  <span className="text-xs text-muted-foreground ml-2">(Indisponível)</span>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Add to Cart Button */}
                    <Button 
                      size="lg" 
                      className="w-full shadow-glow hover:shadow-glow/80"
                    >
                      Adicionar ao Carrinho
                      <span className="ml-2">→</span>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {selectedProduct?.name} • Tamanho {selectedSize}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <benefit.icon className="w-3 h-3 text-primary" />
                    <span>{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            ✓ Entrega em até 7 dias úteis • ✓ Suporte 24h • ✓ Satisfação garantida
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mt-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${
                          star <= testimonial.rating 
                            ? 'fill-primary text-primary' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{testimonial.author}</span>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Verificado
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;