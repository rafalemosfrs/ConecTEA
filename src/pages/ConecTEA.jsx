import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

export default function ConecTEA() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre o ConecTEA
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Um projeto acadêmico com objetivo social
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl space-y-12">
          <ScrollReveal>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contexto e Motivação
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  O ConecTEA nasceu como um projeto acadêmico universitário motivado pela necessidade de apoiar instituições que trabalham com pessoas autistas e suas famílias. Compreendendo os desafios enfrentados por organizações como o Espaço do Autista, identificamos a oportunidade de aplicar conhecimentos tecnológicos para gerar impacto social real.
                </p>
                <p className="leading-relaxed">
                  A parceria com o Espaço do Autista permitiu entender de perto as dificuldades relacionadas à organização de informações, captação de voluntários, divulgação institucional e sustentabilidade financeira. Essas demandas se tornaram o ponto de partida para o desenvolvimento deste projeto.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Objetivo Geral
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Desenvolver uma plataforma digital que facilite o acesso a informações sobre o Transtorno do Espectro Autista (TEA), fortaleça a comunicação institucional do Espaço do Autista, organize o processo de captação de voluntários e incentive doações, contribuindo para a sustentabilidade e ampliação dos atendimentos oferecidos pela Associação.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                O que será desenvolvido
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Site institucional</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Apresentação clara da missão, história e atuação do Espaço do Autista, com design acessível e responsivo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sistema de voluntariado</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Formulário estruturado de cadastro de voluntários, facilitando a triagem e análise pela equipe da Associação.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Área de informações sobre TEA</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Seção de perguntas frequentes e orientações gerais, sempre com linguagem responsável e não prescritiva.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Facilitação de doações</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Página dedicada a orientar sobre como contribuir financeiramente ou com materiais para a Associação.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Card className="border-l-4 border-amber-500 bg-amber-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Limitações Importantes
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  <strong>Não substitui serviço médico:</strong> O ConecTEA não oferece diagnóstico, atendimento clínico ou orientação terapêutica. As informações apresentadas têm caráter educativo e devem complementar, nunca substituir, o acompanhamento de profissionais habilitados.
                </p>
                <p className="leading-relaxed">
                  <strong>Dependência de atualização:</strong> As informações sobre serviços, horários e funcionamento da Associação dependem de atualização pela instituição parceira. O projeto fornece a estrutura, mas o conteúdo operacional é de responsabilidade do Espaço do Autista.
                </p>
                <p className="leading-relaxed">
                  <strong>Natureza acadêmica:</strong> Este é um projeto desenvolvido em contexto universitário, com prazo determinado e recursos limitados. Seu objetivo é demonstrar viabilidade e impacto, servindo como base para futuros desenvolvimentos.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Como o ConecTEA apoia a Associação
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Amplia a visibilidade institucional</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Facilita a captação de voluntários qualificados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Organiza informações para famílias e comunidade</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Incentiva doações e sustentabilidade</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Reduz carga administrativa com processos digitalizados</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Fortalece a comunicação com a comunidade</p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Transparência e Privacidade
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    O ConecTEA não coleta dados sensíveis de crianças no site institucional. Qualquer cadastro relacionado a atendimentos ou voluntariado será feito por formulário específico e analisado diretamente pela equipe responsável do Espaço do Autista. A segurança e a privacidade dos dados são prioridades absolutas do projeto.
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
