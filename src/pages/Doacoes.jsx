import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

export default function Doacoes({ onNavigate }) {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-accent-50 to-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Doações para o Espaço do Autista
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Sua contribuição mantém os atendimentos e amplia o alcance da Associação
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl space-y-12">
          <ScrollReveal>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Por que as doações são importantes?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                O Espaço do Autista é mantido principalmente através de doações e do apoio da comunidade. Cada contribuição permite que a Associação continue oferecendo atendimentos especializados, amplie a equipe multidisciplinar, mantenha a infraestrutura e garanta a sustentabilidade das atividades.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-primary-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Mais atendimentos</p>
                </div>
                <div className="text-center p-6 bg-accent-50 rounded-lg">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Manutenção da estrutura</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Ampliação de serviços</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <h2 className="text-2xl font-bold mb-6">Como doar</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    PIX
                  </h3>
                  <div className="bg-white/20 rounded p-4 ">
                    <p className="text-sm mb-2">Chave PIX:</p>
                    <p className="font-mono text-lg">38.314.135/0001-02</p>
                    <p className="font-mono text-lg">Caixa Econômica Federal</p>
                    <p className="font-mono text-lg">Associação Beneficente Espaço do Autista</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Transferência bancária
                  </h3>
                  <div className="bg-white/20 rounded p-4 space-y-2 text-sm">
                    <p><strong>Banco:</strong> Caixa Econômica Federal</p>
                    <p><strong>Agência:</strong> 0619</p>
                    <p><strong>Conta:</strong> 578429986-3</p>
                    <p><strong>CNPJ:</strong> 38.314.135/0001-02</p>
                    <p><strong>Operação:</strong> 1292</p>
                  </div>
                </div>

<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
    Outras formas
  </h3>
<div className="bg-white/20 rounded p-4">
  <div className="space-y-3 text-sm text-white/90 leading-relaxed">
    <p>
      Contribuições mensais, mesmo que pequenas, ajudam a Associação a planejar melhor
      suas atividades e garantir continuidade nos atendimentos.
    </p>

<Button
  variant="primary"
  size="sm"
  onClick={() => window.open("https://espacodoautista.apoiar.co", "_blank", "noopener,noreferrer")}
>
  Acessar página de doação recorrente
</Button>

    <p>
      <strong className="text-white">Como configurar doação recorrente:</strong>{" "}
      Entre no site acima, faça seu cadastro e adicione sua forma de pagamento
      recorrente. Você pode escolher o valor e a frequência que melhor se encaixam
      no seu orçamento. Agradecemos imensamente por sua contribuição contínua!
    </p>
  </div>
  </div>
</div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={300}>
<Card>
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    Doação de materiais
  </h2>
  <p className="text-gray-700 leading-relaxed mb-6">
    Além de contribuições financeiras, a Associação também aceita doações de materiais que auxiliam nas atividades terapêuticas e na manutenção do espaço.
  </p>

  <div className="bg-gray-50 rounded-lg p-6">
    <h3 className="font-semibold text-gray-900 mb-4">
      Itens mais necessários:
    </h3>

    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Materiais pedagógicos e de estimulação: livros infantis (incluindo sensoriais), jogos educativos (memória/pareamento), quebra-cabeças, letras e números (EVA/madeira), massinha, tintas/lápis/canetinhas, papel A4/cartolina/EVA.
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Brinquedos terapêuticos e sensoriais: fidgets (pop-it, spinner, tangle), bolas sensoriais/antiestresse, areia cinética, tapetes/painéis táteis, mordedores sensoriais, pufes/almofadas para “cantinho de calma”, fones abafadores de ruído.
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Equipamentos terapêuticos (psicomotricidade): colchonetes/tatames EVA, bolas (pilates/borracha), cones/bambolês/cordas/escada de agilidade, túnel dobrável e circuito de obstáculos, prancha/disco de equilíbrio, faixas elásticas (theraband).
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Comunicação e rotina (apoio ao TEA): quadro branco pequeno + marcadores, temporizador visual (timer), pranchetas/pastas plásticas, velcro adesivo (quadro de rotina), plastificação (plásticos/laminadora), impressões/cartuchos/toner (se houver impressora).
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Produtos de higiene e limpeza: papel toalha e higiênico, sabonete líquido, álcool 70%, desinfetante/água sanitária, luvas descartáveis, sacos de lixo reforçados, panos/esponjas, vassoura/rodo/mop.
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          Materiais de escritório: resmas de papel A4, pastas (catálogo/sanfonada), envelopes, grampeador/grampos, clips/perfurador, canetas/marcadores, post-its e etiquetas.
        </span>
      </li>

      <li className="flex items-start gap-2">
        <span className="text-primary-600">•</span>
        <span>
          (Se aplicável) Terapia aquática: espaguetes de piscina, pranchas (kickboard), boias/coletes (tamanhos variados) e brinquedos aquáticos (argolas/bolinhas/alvos).
        </span>
      </li>
    </ul>
  </div>
</Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-2 border-primary-200 bg-primary-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Transparência e Prestação de Contas
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Espaço do Autista é responsável pela gestão e prestação de contas de todas as doações recebidas. A transparência é fundamental para manter a confiança da comunidade.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {showFloatingButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
          aria-label="Quero doar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      )}
    </div>
  );
}
