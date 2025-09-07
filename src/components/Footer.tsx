import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Truck,
  CreditCard,
  RotateCcw
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Sobre Nós",
    "Como Medir",
    "Tabela de Tamanhos", 
    "Política de Privacidade",
    "Termos de Uso"
  ];

  const support = [
    "Central de Ajuda",
    "Trocas e Devoluções",
    "Acompanhar Pedido",
    "Fale Conosco",
    "FAQ"
  ];

  const guarantees = [
    {
      icon: Shield,
      text: "Compra 100% Segura"
    },
    {
      icon: Truck,
      text: "Frete Grátis Brasil"
    },
    {
      icon: CreditCard,
      text: "12x Sem Juros"
    },
    {
      icon: RotateCcw,
      text: "Troca em 30 Dias"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Guarantees Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <guarantee.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">TREINU</h3>
              <p className="text-sm text-muted-foreground">
                Stride
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conforto e segurança para seus treinos. Tênis antiderrapante unissex com design moderno e funcional.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">contato@treinu.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    São Paulo, SP<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TREINU. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Pagamento Seguro</span>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
                VISA
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
                MC
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
                PIX
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;