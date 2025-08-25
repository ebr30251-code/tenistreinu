import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const ProductGallery = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("33");
  const colors = [{
    id: "black",
    name: "Preto",
    color: "#1a1a1a",
    image: "/lovable-uploads/9d348f68-801a-4c8c-ad9c-533d124ca1b5.png",
    featured: true,
    checkoutLinks: {
      "33": "https://conceitosmart.pay.yampi.com.br/r/JAYT3P2L64",
      "34": "https://conceitosmart.pay.yampi.com.br/r/8M9BPUWVKV",
      "35": "https://conceitosmart.pay.yampi.com.br/r/7QMUC1L4T8",
      "36": "https://conceitosmart.pay.yampi.com.br/r/3WLYPH7PRR",
      "37": "https://conceitosmart.pay.yampi.com.br/r/22NYKK7YHC",
      "38": "https://conceitosmart.pay.yampi.com.br/r/256Q9O8HU3",
      "39": "https://conceitosmart.pay.yampi.com.br/r/NKZGG413ZN",
      "40": "https://conceitosmart.pay.yampi.com.br/r/CNR41OHWOC",
      "41": "https://conceitosmart.pay.yampi.com.br/r/2MOAXIHQ8Z",
      "42": "https://conceitosmart.pay.yampi.com.br/r/H8GXR6VNPX",
      "43": "https://conceitosmart.pay.yampi.com.br/r/A3MUIGL732"
    }
  }, {
    id: "mint",
    name: "Verde Água",
    color: "#7dd3fc",
    image: "/lovable-uploads/e8608a07-9feb-41e0-a880-4ff2eb0b8d7a.png",
    featured: false,
    checkoutLinks: {
      "33": "https://conceitosmart.pay.yampi.com.br/r/OO7Y3CDRJ0",
      "34": "https://conceitosmart.pay.yampi.com.br/r/9F9HWOIFP4",
      "35": "https://conceitosmart.pay.yampi.com.br/r/LCG1K6LE6J",
      "36": "https://conceitosmart.pay.yampi.com.br/r/J3NNMTNT65",
      "37": "https://conceitosmart.pay.yampi.com.br/r/G383YF8631",
      "38": "https://conceitosmart.pay.yampi.com.br/r/GNPGO3PPT5",
      "39": "https://conceitosmart.pay.yampi.com.br/r/5KMKRHKJCE",
      "40": "https://conceitosmart.pay.yampi.com.br/r/JPYG3047DS",
      "41": "https://conceitosmart.pay.yampi.com.br/r/3S7J2X8S6T",
      "42": "https://conceitosmart.pay.yampi.com.br/r/2C3ING9R1Y",
      "43": "https://conceitosmart.pay.yampi.com.br/r/N1L5DZE3L7"
    }
  }, {
    id: "beige",
    name: "Bege",
    color: "#d4c5a8",
    image: "/lovable-uploads/f9b78f10-6568-49b1-b46e-a43cd0429145.png",
    featured: false,
    checkoutLinks: {
      "33": "https://conceitosmart.pay.yampi.com.br/r/OO7Y3CDRJ0",
      "34": "https://conceitosmart.pay.yampi.com.br/r/9F9HWOIFP4",
      "35": "https://conceitosmart.pay.yampi.com.br/r/LCG1K6LE6J",
      "36": "https://conceitosmart.pay.yampi.com.br/r/J3NNMTNT65",
      "37": "https://conceitosmart.pay.yampi.com.br/r/G383YF8631",
      "38": "https://conceitosmart.pay.yampi.com.br/r/GNPGO3PPT5",
      "39": "https://conceitosmart.pay.yampi.com.br/r/5KMKRHKJCE",
      "40": "https://conceitosmart.pay.yampi.com.br/r/JPYG3047DS",
      "41": "https://conceitosmart.pay.yampi.com.br/r/2C3ING9R1Y",
      "42": "https://conceitosmart.pay.yampi.com.br/r/3S7J2X8S6T",
      "43": "https://conceitosmart.pay.yampi.com.br/r/N1L5DZE3L7"
    }
  }];
  const sizes = [{
    id: "33",
    name: "33",
    available: true
  }, {
    id: "34",
    name: "34",
    available: true
  }, {
    id: "35",
    name: "35",
    available: true
  }, {
    id: "36",
    name: "36",
    available: true
  }, {
    id: "37",
    name: "37",
    available: true
  }, {
    id: "38",
    name: "38",
    available: true
  }, {
    id: "39",
    name: "39",
    available: true
  }, {
    id: "40",
    name: "40",
    available: true
  }, {
    id: "41",
    name: "41",
    available: true
  }, {
    id: "42",
    name: "42",
    available: true
  }, {
    id: "43",
    name: "43",
    available: true
  }];
  const selectedProduct = colors.find(color => color.id === selectedColor);
  
  const handleCheckout = () => {
    const checkoutUrl = selectedProduct?.checkoutLinks[selectedSize];
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };
  return <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Galeria do Produto
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Escolha a sua <span className="text-primary">cor preferida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disponível em cores modernas que combinam com seu estilo pessoal e necessidades de treino.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-card">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-background to-muted/30 aspect-square flex items-center justify-center">
                  <img src={selectedProduct?.image} alt={`Tênis TREINU ${selectedProduct?.name}`} className="w-4/5 h-auto max-w-md transform hover:scale-105 transition-transform duration-500" />
                  {selectedProduct?.featured && <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>}
                </div>
              </CardContent>
            </Card>

            {/* Color indicator */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card px-4 py-2 rounded-full shadow-card border border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-background" style={{
                backgroundColor: selectedProduct?.color
              }}></div>
                <span className="text-sm font-medium">{selectedProduct?.name}</span>
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Cores Disponíveis</h3>
              <p className="text-muted-foreground mb-6">
                Todas as cores mantêm a mesma qualidade e funcionalidades premium do TREINU.
              </p>
            </div>

            <div className="grid gap-4">
              {colors.map(color => <Card key={color.id} className={`cursor-pointer transition-all duration-300 ${selectedColor === color.id ? 'border-primary shadow-glow/30 bg-primary/5' : 'border-border hover:border-primary/50'}`} onClick={() => setSelectedColor(color.id)}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-background shadow-sm" style={{
                      backgroundColor: color.color
                    }}></div>
                        <div>
                          <h4 className="font-semibold">{color.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Tênis TREINU - Modelo Unissex
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {color.featured && <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>}
                        <div className={`w-4 h-4 rounded-full border-2 ${selectedColor === color.id ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                          {selectedColor === color.id && <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Escolha o Tamanho</h3>
              
              
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Escolha o tamanho" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map(size => <SelectItem key={size.id} value={size.id} disabled={!size.available} className={!size.available ? "opacity-50 cursor-not-allowed" : ""}>
                      <div className="flex items-center justify-between w-full">
                        <span>Tamanho {size.name}</span>
                        {!size.available && <span className="text-xs text-muted-foreground ml-2">(Indisponível)</span>}
                      </div>
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full shadow-glow hover:shadow-glow/80" onClick={handleCheckout}>
                Adicionar ao Carrinho - {selectedProduct?.name} • Tam. {selectedSize}
                <span className="ml-2">→</span>
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Entrega em até 7 dias úteis • Troca garantida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductGallery;