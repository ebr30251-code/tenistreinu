import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shirt, 
  Footprints, 
  Palette, 
  Target, 
  Settings, 
  CheckCircle,
  Home,
  Building,
  TreePine,
  Dumbbell
} from "lucide-react";

const SpecsSection = () => {
  const specifications = [
    {
      icon: Shirt,
      label: "Material Externo e Interno",
      value: "Tecido Respirável Premium",
      description: "Permite ventilação natural e controle de umidade"
    },
    {
      icon: Footprints,
      label: "Solado",
      value: "Borracha Anti-derrapante",
      description: "Máxima aderência em diferentes superfícies"
    },
    {
      icon: Palette,
      label: "Estilo",
      value: "Casual & Desportivo",
      description: "Versatilidade para todas as ocasiões"
    },
    {
      icon: Target,
      label: "Tipo",
      value: "Slip On / Tênis de Yoga",
      description: "Fácil de calçar com ajuste personalizado"
    },
    {
      icon: Settings,
      label: "Ajuste",
      value: "Velcro Duplo",
      description: "Fechamento seguro e ajuste personalizado"
    },
    {
      icon: CheckCircle,
      label: "Forma",
      value: "Regular (Tamanho Correto)",
      description: "Ajuste fiel ao tamanho brasileiro"
    }
  ];

  const usageScenarios = [
    {
      icon: Dumbbell,
      title: "Academia",
      description: "Perfeito para treinos de força, funcional e cross-training",
      color: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      icon: Building,
      title: "Escritório",
      description: "Conforto para longas jornadas de trabalho",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: Home,
      title: "Casa",
      description: "Relaxamento e atividades domésticas",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: TreePine,
      title: "Ar Livre",
      description: "Caminhadas e atividades ao ar livre",
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Especificações Técnicas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Detalhes que fazem a <span className="text-primary">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada elemento do TREINU foi cuidadosamente projetado para proporcionar máxima performance e conforto.
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Especificações Técnicas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <Card key={index} className="group hover:shadow-glow/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        {spec.label}
                      </h4>
                      <p className="font-bold text-lg mb-2 leading-tight">
                        {spec.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Scenarios */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Onde Usar o TREINU</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {usageScenarios.map((scenario, index) => (
              <Card key={index} className={`border-2 ${scenario.color} hover:scale-105 transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${scenario.color} flex items-center justify-center mx-auto mb-4`}>
                    <scenario.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{scenario.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {scenario.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <CheckCircle className="w-4 h-4 text-primary" />
            Desenvolvido para versatilidade total
          </div>
          <p className="text-lg font-medium">
            Um tênis para todas as suas atividades diárias
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;