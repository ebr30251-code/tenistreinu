import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ruler, Info } from "lucide-react";

const SizeGuide = () => {
  const sizeChart = [
    { bra: 34, eur: 36, cm: "23.5" },
    { bra: 35, eur: 37, cm: "24" },
    { bra: 36, eur: 38, cm: "24.5" },
    { bra: 37, eur: 39, cm: "25" },
    { bra: 38, eur: 40, cm: "25.5" },
    { bra: 39, eur: 41, cm: "26" },
    { bra: 40, eur: 42, cm: "26.5" },
    { bra: 41, eur: 43, cm: "27.3" },
    { bra: 42, eur: 44, cm: "28" },
    { bra: 43, eur: 45, cm: "28.5" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Ruler className="w-4 h-4 mr-2" />
            Guia de Tamanhos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Encontre o <span className="text-primary">tamanho perfeito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use nossa tabela de tamanhos para garantir o ajuste ideal e máximo conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Size Chart Table */}
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Tabela de Tamanhos</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="py-4 px-6 text-left font-semibold">BRA</th>
                      <th className="py-4 px-6 text-left font-semibold">EUR</th>
                      <th className="py-4 px-6 text-left font-semibold">MEDIDA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.map((size, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-border/50 hover:bg-muted/20 transition-colors ${
                          index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                        }`}
                      >
                        <td className="py-4 px-6 font-semibold text-lg">{size.bra}</td>
                        <td className="py-4 px-6 font-semibold text-lg">{size.eur}</td>
                        <td className="py-4 px-6 text-muted-foreground">{size.cm} cm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 bg-muted/20 border-t border-border/50">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Observação Importante:</p>
                    <p className="text-sm text-muted-foreground">
                      Sempre informe o número que você usa no Brasil. 
                      Dentro do seu tênis estará a numeração europeia.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Measure */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/lovable-uploads/33f43fcb-cce3-40ed-9cc6-4af3e684233e.png"
                    alt="Como medir o pé"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Como Medir seu Pé</h3>
                    <p className="text-white/90 text-sm">Guia prático para encontrar o tamanho ideal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Dicas para Medição</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Meça no final do dia</h4>
                    <p className="text-sm text-muted-foreground">
                      Os pés tendem a inchar ao longo do dia, garantindo um ajuste mais confortável.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Use uma régua</h4>
                    <p className="text-sm text-muted-foreground">
                      Coloque o pé sobre uma régua e meça da ponta do dedão até o calcanhar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ajuste regular</h4>
                    <p className="text-sm text-muted-foreground">
                      O TREINU possui ajuste com velcro, permitindo personalizar o conforto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Garantia de Satisfação</h4>
                <p className="text-sm text-muted-foreground">
                  Se o tamanho não for o ideal, oferecemos troca gratuita em até 30 dias.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;