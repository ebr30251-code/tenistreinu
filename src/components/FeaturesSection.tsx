import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Footprints, Dumbbell, Heart, Palette, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Solado Antiderrapante",
      description: "Oferece tração superior em diferentes superfícies, garantindo mais segurança em treinos intensos e movimentos rápidos.",
      highlight: "Máxima Segurança",
      image: "/lovable-uploads/816b63cb-2924-4e58-8bbb-7c3f434d4602.png"
    },
    {
      icon: Footprints,
      title: "Sensação Pé Descalço",
      description: "A estrutura leve e flexível promove liberdade natural dos pés, melhorando o equilíbrio e a conexão com o solo.",
      highlight: "Liberdade Total",
      image: "/lovable-uploads/b13898e6-cfe-4945-a51a-195764185540.png"
    },
    {
      icon: Dumbbell,
      title: "Base Firme para Treinos",
      description: "Ideal para levantamento de peso, agachamentos, treino funcional, pular corda, cross-training e yoga.",
      highlight: "Performance",
      image: "/lovable-uploads/fa79322b-a4fc-463f-9975-cd8c2a53d8fa.png"
    },
    {
      icon: Heart,
      title: "Conforto Ergonômico",
      description: "Palmilha macia com suporte inteligente e ajuste preciso com velcro, que mantém os pés firmes e estáveis.",
      highlight: "Máximo Conforto",
      image: "/lovable-uploads/33f43fcb-cce3-40ed-9cc6-4af3e684233e.png"
    },
    {
      icon: Palette,
      title: "Estilo Versátil",
      description: "Visual clean e moderno, combinando com diversos looks e momentos do dia - escritório, casa, academia ou ar livre.",
      highlight: "Design Moderno"
    },
    {
      icon: Award,
      title: "Material Premium",
      description: "Parte superior em tecido respirável e solado de borracha resistente, oferecendo durabilidade e conforto.",
      highlight: "Qualidade Superior"
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Principais Características
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher o <span className="text-primary">TREINU</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido com tecnologia avançada para proporcionar a melhor experiência em treinos e atividades do dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow/20 transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {feature.highlight}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Image (if available) */}
                  {feature.image && (
                    <div className="mt-6 rounded-lg overflow-hidden bg-muted/20">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Aprovado por atletas profissionais
          </div>
          <p className="text-lg text-foreground font-medium">
            Experimente a diferença que faz ter o tênis certo para cada movimento
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;