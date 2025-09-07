import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    {
      id: 1,
      src: "/lovable-uploads/9d348f68-801a-4c8c-ad9c-533d124ca1b5.png",
      alt: "Tênis TREINU Preto - Vista Principal",
      color: "Preto"
    },
    {
      id: 2,
      src: "/lovable-uploads/e8608a07-9feb-41e0-a880-4ff2eb0b8d7a.png",
      alt: "Tênis TREINU Bege - Vista Principal",
      color: "Bege"
    },
    {
      id: 3,
      src: "/lovable-uploads/7d150c5c-da8c-45f2-82dc-bd21be527a83.png",
      alt: "Tênis TREINU Verde Água - Vista Principal",
      color: "Verde Água"
    },
    {
      id: 4,
      src: "/lovable-uploads/816b63cb-2924-4e58-8bbb-7c3f434d4602.png",
      alt: "Tênis TREINU - Solado Antiderrapante",
      color: "Detalhe Solado"
    },
    {
      id: 5,
      src: "/lovable-uploads/fa79322b-a4fc-463f-9975-cd8c2a53d8fa.png",
      alt: "Tênis TREINU - Base Firme para Treinos",
      color: "Detalhe Treino"
    },
    {
      id: 6,
      src: "/lovable-uploads/33f43fcb-cce3-40ed-9cc6-4af3e684233e.png",
      alt: "Tênis TREINU - Conforto Ergonômico",
      color: "Detalhe Conforto"
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const features = [
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Materiais selecionados para máxima durabilidade"
    },
    {
      icon: Zap,
      title: "Performance Superior",
      description: "Desenvolvido para atletas e entusiastas do fitness"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Galeria do Produto
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Conheça o <span className="text-primary">TREINU</span> em detalhes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore cada ângulo e detalhe do tênis que vai revolucionar seus treinos e seu dia a dia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main Image Display */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card border-border/50">
              <CardContent className="p-0 relative">
                <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
                  <img
                    src={productImages[selectedImage].src}
                    alt={productImages[selectedImage].alt}
                    className="w-full h-full object-contain p-8 transition-all duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium">
                    {selectedImage + 1} / {productImages.length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-6 gap-2 mt-4">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-primary shadow-glow/30'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {productImages[selectedImage].color}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {productImages[selectedImage].alt}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Principais Características</h4>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Color Variants */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Cores Disponíveis</h4>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedImage(0)}
                  className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    selectedImage === 0 ? 'border-primary shadow-glow/30' : 'border-border'
                  }`}
                  style={{ backgroundColor: '#1a1a1a' }}
                  title="Preto"
                />
                <button
                  onClick={() => setSelectedImage(1)}
                  className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    selectedImage === 1 ? 'border-primary shadow-glow/30' : 'border-border'
                  }`}
                  style={{ backgroundColor: '#d4b896' }}
                  title="Bege"
                />
                <button
                  onClick={() => setSelectedImage(2)}
                  className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                    selectedImage === 2 ? 'border-primary shadow-glow/30' : 'border-border'
                  }`}
                  style={{ backgroundColor: '#7dd3fc' }}
                  title="Verde Água"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="w-full shadow-glow hover:shadow-glow/80"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Opções de Compra
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Todas as imagens são do produto real
          </div>
          <p className="text-lg font-medium">
            Veja todos os detalhes que fazem do TREINU único
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;