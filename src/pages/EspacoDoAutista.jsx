import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import logoEspacoAutista from '../assets/img/logo-espaço.jpeg';

export default function EspacoDoAutista() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-primary-200 mx-auto mb-8 overflow-hidden">
              <img
                src={logoEspacoAutista}
                alt="Logo do Espaço do Autista"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Espaço do Autista
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Acolhimento, suporte e atendimento especializado para pessoas autistas e suas famílias
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl space-y-12">
          <ScrollReveal>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa História
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  O Espaço do Autista nasceu da vivência real de mães que enfrentaram as dificuldades de acesso a serviços especializados para pessoas autistas. Compreendendo as barreiras existentes, especialmente para adultos no espectro, um grupo de seis mães uniu forças para criar um espaço de acolhimento e cuidado.
                </p>
                <p className="leading-relaxed">
                  Em setembro de 2019, encontramos o imóvel que se tornaria nossa sede. O caminho não foi fácil: enfrentamos desafios financeiros e estruturais desde o início. Foi a união das famílias, o apoio da comunidade e a força das doações que permitiram manter as portas abertas e as atividades funcionando.
                </p>
                <p className="leading-relaxed">
                  A terapia aquática marcou nossos primeiros passos, tornando-se uma das bases do nosso trabalho. Com o tempo, ampliamos a equipe e os serviços, sempre guiados pelo compromisso de oferecer atendimento de qualidade, acolhedor e acessível.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Missão e Atuação
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Acolhimento</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Oferecemos um ambiente seguro, respeitoso e acolhedor para pessoas autistas e suas famílias.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Suporte especializado</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Atuação multidisciplinar com profissionais capacitados em diferentes áreas terapêuticas e de apoio.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inclusão</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Compromisso com a inclusão social e o respeito à neurodiversidade em todas as nossas ações.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Apoio às famílias</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Orientação e suporte para familiares, compreendendo que o cuidado é coletivo.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quem Atendemos
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Crianças a partir de 4 anos</p>
                    <p className="text-sm leading-relaxed">
                      Atendimento com foco no desenvolvimento, autonomia e bem-estar através de terapias especializadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg">
                  <svg className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Adultos autistas</p>
                    <p className="text-sm leading-relaxed">
                      Reconhecemos a escassez de serviços para adultos no espectro e trabalhamos para preencher essa lacuna, oferecendo acompanhamento adequado às necessidades específicas dessa faixa etária.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Foco em níveis de suporte 2 e 3</p>
                    <p className="text-sm leading-relaxed">
                      Nosso atendimento prioriza pessoas que necessitam de suporte substancial ou muito substancial nas atividades diárias.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Como Funcionam os Atendimentos
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="leading-relaxed">
                      <strong>Dias de atendimento:</strong> Funcionamos principalmente de terça a sábado, com maior procura e concentração de atividades nos finais de semana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="leading-relaxed">
                      <strong>Equipe multidisciplinar:</strong> Contamos com profissionais de diferentes áreas trabalhando de forma integrada para oferecer o melhor atendimento possível.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="leading-relaxed">
                      <strong>Horários personalizados:</strong> Os horários de atendimento são definidos conforme a disponibilidade da equipe e as necessidades individuais de cada pessoa atendida.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-l-4 border-amber-500 bg-amber-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Principais Desafios
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Alta demanda:</strong> Recebemos muitas solicitações de atendimento, o que gera lista de espera.</span>
                </p>
                <p className="leading-relaxed flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Ampliação da equipe:</strong> Precisamos de mais profissionais, especialmente nas áreas de psicologia, fonoaudiologia e neurologia.</span>
                </p>
                <p className="leading-relaxed flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Apoio administrativo:</strong> A gestão e organização da Associação demandam suporte em administração, contabilidade, jurídico e comunicação.</span>
                </p>
                <p className="leading-relaxed flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>Sustentabilidade financeira:</strong> Dependemos de doações e apoio da comunidade para manter as atividades e ampliar os serviços.</span>
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Como a Comunidade Pode Ajudar
              </h2>
              <p className="leading-relaxed mb-6">
                A continuidade e expansão do nosso trabalho dependem do apoio de pessoas e instituições que acreditam na inclusão e no cuidado com pessoas autistas. Toda forma de contribuição é valiosa e faz diferença na vida de quem atendemos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="text-primary-600 hover:bg-gray-100 hover:text-orange-500"
                  onClick={() => window.open('https://www.instagram.com/espaco_do_autista_ce/', '_blank')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Acessar Instagram
                </Button>
                <Button
                    variant="secondary"
                    className="text-primary-600 hover:bg-gray-100"
                    onClick={() => onNavigate('doacoes')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Quero doar
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
