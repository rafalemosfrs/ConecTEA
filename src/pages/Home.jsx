import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import simboloConecTEA from '../assets/img/simbolo-conectea.png';
import logoEspacoAutista from '../assets/img/logo-espaço.jpeg';
import parceria from '../assets/img/conectados.png';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-accent-50 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-primary-200 overflow-hidden">
                <img
                  src={simboloConecTEA}
                  alt="Símbolo do ConecTEA"
                  className="w-full h-full object-contain p-3"
                />
              </div>
<div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-accent-200 overflow-hidden">
  <img
    src={logoEspacoAutista}
    alt="Logo do Espaço do Autista"
    className="w-full h-full object-contain p-2"
  />
</div>
            </div>

            <div className="text-center slide-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ConecTEA: tecnologia e apoio para fortalecer o atendimento a pessoas autistas
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Projeto acadêmico em parceria com o Espaço do Autista, voltado a facilitar informação, organização e captação de voluntários.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate('espaco')}
                >
                  Conhecer a Associação
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('voluntariado')}
                >
                  Quero ser voluntário
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              O que fazemos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              O ConecTEA atua em três frentes principais para apoiar o Espaço do Autista
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Informação organizada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Centralização de informações sobre serviços, encaminhamentos e dúvidas comuns relacionadas ao TEA e aos atendimentos da Associação.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Apoio ao voluntariado
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistema de captação e triagem de voluntários através de formulário estruturado, facilitando a análise pela equipe da Associação.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fortalecimento institucional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Divulgação da missão da Associação, facilitação de doações e ampliação da visibilidade para garantir sustentabilidade.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <Card>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Parceria com o Espaço do Autista
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    O Espaço do Autista é uma Associação criada para acolhimento, suporte e atendimento especializado a pessoas autistas e suas famílias. Nascida da vivência de mães que enfrentaram as barreiras de acesso aos serviços especializados, a instituição atende crianças a partir de 4 anos e adultos autistas.
                  </p>
                  <Button onClick={() => onNavigate('espaco')}>
                    Saiba mais sobre a Associação
                  </Button>
                </div>
            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-primary-200 mx-auto mb-8 overflow-hidden">
              <img
                src={parceria}
                alt="Logo do Espaço do Autista"
                className="w-full h-full object-contain p-2"
              />
            </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Como você pode ajudar
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Sua contribuição faz toda a diferença para manter e ampliar os atendimentos
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white h-full">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Faça uma doação</h3>
                  <p className="mb-6 leading-relaxed flex-1">
                    Contribua financeiramente para manter os atendimentos, ampliar a equipe multidisciplinar e garantir a sustentabilidade da Associação.
                  </p>
                  <Button
                    variant="secondary"
                    className="text-primary-600 hover:bg-gray-100 hover:text-orange-500"
                    onClick={() => onNavigate('doacoes')}
                  >
                    Quero doar
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-gradient-to-br from-accent-500 to-accent-600 text-white h-full">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Seja voluntário</h3>
                  <p className="mb-6 leading-relaxed flex-1">
                    Compartilhe seu conhecimento e tempo. A Associação precisa de profissionais de saúde, estudantes, apoio administrativo e pessoas comprometidas com a inclusão.
                  </p>
                  <Button
                    variant="secondary"
                    className="text-primary-600 hover:bg-gray-100 hover:text-primary-500"
                    onClick={() => onNavigate('voluntariado')}
                  >
                    Quero ser voluntário
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
