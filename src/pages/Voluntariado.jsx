import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

export default function Voluntariado() {
  const handleFormClick = () => {
    window.open('https://forms.gle/P7qVKNnAw6ze6FDv7', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seja Voluntário
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A Associação precisa de voluntários em diferentes frentes e perfis. O cadastro é analisado pela instituição e a disponibilidade será alinhada diretamente com a equipe responsável.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl space-y-16">
          <ScrollReveal>
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Áreas Prioritárias
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Profissionais e estudantes das áreas de saúde e terapias
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Terapia Aquática / Educação Física</h3>
                      <p className="text-sm text-gray-600">Atividades terapêuticas e adaptadas</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Fisioterapia</h3>
                      <p className="text-sm text-gray-600">Reabilitação e desenvolvimento motor</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Terapia Ocupacional</h3>
                      <p className="text-sm text-gray-600">Autonomia e atividades diárias</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-accent-500 bg-accent-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-700 font-bold text-xs">!</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Psicologia</h3>
                      <p className="text-sm text-gray-700"><strong>Maior necessidade no momento</strong></p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-accent-500 bg-accent-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-700 font-bold text-xs">!</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Fonoaudiologia</h3>
                      <p className="text-sm text-gray-700"><strong>Maior necessidade no momento</strong></p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Psicopedagogia</h3>
                      <p className="text-sm text-gray-600">Aprendizagem e desenvolvimento</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-accent-500 bg-accent-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-700 font-bold text-xs">!</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Neurologia</h3>
                      <p className="text-sm text-gray-700"><strong>Maior necessidade no momento</strong></p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Psiquiatria</h3>
                      <p className="text-sm text-gray-600">Saúde mental e acompanhamento</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Odontologia</h3>
                      <p className="text-sm text-gray-600">Saúde bucal especializada</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-primary-500">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Nutrição</h3>
                      <p className="text-sm text-gray-600">Orientação alimentar</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Áreas de Apoio
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Administrativo, jurídico, tecnologia e comunicação
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Administração</h3>
                      <p className="text-sm text-gray-600">Gestão, organização e processos</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Jurídico</h3>
                      <p className="text-sm text-gray-600">Apoio legal e consultoria</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Contabilidade</h3>
                      <p className="text-sm text-gray-600">Gestão financeira e prestação de contas</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Desenvolvimento / TI</h3>
                      <p className="text-sm text-gray-600">Tecnologia e sistemas</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Media / Marketing</h3>
                      <p className="text-sm text-gray-600">Comunicação e divulgação</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Perfis Valorizados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Estudantes de psicologia, pedagogia, terapia ocupacional e áreas afins</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Profissionais especializados em saúde, direito, administração e tecnologia</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Familiares e amigos de pessoas autistas</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Pessoas autistas (autogestores e adultos no espectro)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Ativistas e entusiastas da inclusão e neurodiversidade</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Características Importantes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Paciência e empatia</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Capacidade de observação</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Sensibilidade e respeito</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Compromisso com a inclusão</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Disposição para aprender</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Tempo Mínimo e Disponibilidade
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A disponibilidade e o tempo mínimo de atuação serão alinhados diretamente com a Associação durante a análise do cadastro. A equipe responsável entrará em contato para discutir os detalhes e encontrar a melhor forma de participação.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-12 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-6">
                Pronto para fazer a diferença?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Preencha o cadastro de voluntário e nossa equipe entrará em contato para alinhar os próximos passos.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-500 hover:bg-gray-100 mb-6"
                onClick={handleFormClick}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Preencher cadastro de voluntário
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <Card className="border-2 border-amber-300 bg-amber-50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Aviso de Privacidade
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Não envie dados sensíveis de crianças neste formulário. O cadastro é exclusivamente para voluntariado e será analisado pela equipe responsável da Associação. Todas as informações fornecidas serão tratadas com confidencialidade e utilizadas apenas para fins de avaliação e contato.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
