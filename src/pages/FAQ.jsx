import { useState } from 'react';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full text-left py-5 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-700 leading-relaxed slide-in">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = {
    instituicao: [
      {
        question: 'O que é o Espaço do Autista?',
        answer: 'O Espaço do Autista é uma Associação criada para acolhimento, suporte e atendimento especializado a pessoas autistas e suas famílias. Nasceu da vivência de mães que enfrentaram as barreiras de acesso aos serviços especializados, oferecendo atendimento a crianças a partir de 4 anos e adultos autistas, com foco maior em níveis de suporte 2 e 3.',
      },
      {
        question: 'Quem a Associação atende?',
        answer: 'Atendemos crianças a partir de 4 anos e adultos autistas. Nosso foco principal está em pessoas que necessitam de níveis de suporte 2 e 3, mas avaliamos cada caso individualmente. Reconhecemos a escassez de serviços para adultos no espectro e trabalhamos para preencher essa lacuna.',
      },
      {
        question: 'Quais dias têm atendimento?',
        answer: 'Funcionamos principalmente de terça a sábado, com maior procura e concentração de atividades nos finais de semana. Os horários de atendimento são definidos conforme a disponibilidade da equipe e as necessidades individuais de cada pessoa atendida.',
      },
      {
        question: 'Existe lista de espera?',
        answer: 'Sim, devido à alta demanda, mantemos uma lista de espera. Recebemos muitas solicitações de atendimento e trabalhamos constantemente para ampliar nossa capacidade, seja através da captação de voluntários ou da expansão da equipe multidisciplinar.',
      },
      {
        question: 'Quais são as principais necessidades atuais?',
        answer: 'Atualmente, nossa maior necessidade é ampliar a equipe multidisciplinar, especialmente nas áreas de psicologia, fonoaudiologia e neurologia. Também precisamos de apoio administrativo (administração, contabilidade, jurídico), tecnologia e comunicação. Além disso, a sustentabilidade financeira através de doações é fundamental para manter e expandir nossos serviços.',
      },
      {
        question: 'Como posso apoiar além de doações?',
        answer: 'Você pode se voluntariar! Precisamos de profissionais e estudantes de diversas áreas: saúde (psicologia, fonoaudiologia, terapia ocupacional, fisioterapia, neurologia, etc.), apoio administrativo, tecnologia, comunicação e marketing. Também valorizamos muito o apoio de familiares, amigos de pessoas autistas e pessoas autistas adultas que queiram compartilhar suas experiências.',
      },
    ],
    conectea: [
      {
        question: 'O que é o ConecTEA?',
        answer: 'O ConecTEA é um projeto acadêmico universitário desenvolvido com objetivo social. Nasceu da necessidade de apoiar instituições que trabalham com pessoas autistas e suas famílias, aplicando conhecimentos tecnológicos para gerar impacto social real através de uma plataforma digital que facilita informação, fortalece a comunicação institucional e apoia a sustentabilidade da Associação.',
      },
      {
        question: 'O ConecTEA é um projeto da faculdade?',
        answer: 'Sim, o ConecTEA é um projeto acadêmico desenvolvido em contexto universitário, com prazo determinado e recursos limitados. Seu objetivo é demonstrar viabilidade e impacto, servindo como base para futuros desenvolvimentos. É desenvolvido em parceria com o Espaço do Autista.',
      },
      {
        question: 'O ConecTEA oferece atendimento clínico?',
        answer: 'Não. O ConecTEA não oferece diagnóstico, atendimento clínico ou orientação terapêutica. As informações apresentadas têm caráter educativo e devem complementar, nunca substituir, o acompanhamento de profissionais habilitados. É uma plataforma de informação e apoio institucional.',
      },
      {
        question: 'Como o projeto ajuda o Espaço do Autista?',
        answer: 'O ConecTEA amplia a visibilidade institucional da Associação, facilita a captação de voluntários qualificados, organiza informações para famílias e comunidade, incentiva doações, reduz carga administrativa com processos digitalizados e fortalece a comunicação com a comunidade.',
      },
      {
        question: 'Como funciona a captação de voluntários?',
        answer: 'O ConecTEA disponibiliza um formulário estruturado de cadastro de voluntários através do Google Forms. Este formulário coleta informações sobre formação, experiência, áreas de interesse e disponibilidade. Todas as informações são encaminhadas diretamente para a equipe do Espaço do Autista.',
      },
      {
        question: 'Como é feita a análise dos cadastros?',
        answer: 'A análise dos cadastros de voluntários é feita diretamente pela equipe responsável do Espaço do Autista. Após o preenchimento do formulário, a Associação avalia o perfil, a disponibilidade e as necessidades atuais, entrando em contato com os candidatos selecionados para alinhar os próximos passos.',
      },
    ],
    autismo: [
      {
        question: 'O que é TEA?',
        answer: 'TEA é a sigla para Transtorno do Espectro Autista. É uma condição do neurodesenvolvimento que afeta a forma como a pessoa se comunica, interage socialmente e processa informações sensoriais. O termo "espectro" indica que o autismo se manifesta de formas muito variadas, com diferentes níveis de necessidade de suporte.',
      },
      {
        question: 'Por que se fala em "níveis de suporte"?',
        answer: 'A classificação por níveis de suporte (1, 2 e 3) substituiu terminologias anteriores e tem como objetivo descrever a intensidade de apoio que a pessoa autista necessita nas atividades diárias. O nível 1 indica necessidade de algum suporte, o nível 2 indica necessidade de suporte substancial, e o nível 3 indica necessidade de suporte muito substancial. É importante lembrar que os níveis não são fixos e podem variar ao longo da vida.',
      },
      {
        question: 'A importância do acolhimento e da intervenção adequada',
        answer: 'O acolhimento respeitoso e a intervenção adequada fazem toda a diferença na qualidade de vida da pessoa autista e de sua família. Ambientes compreensivos, profissionais capacitados e redes de apoio fortalecem a autonomia, o bem-estar e o desenvolvimento. A intervenção deve ser individualizada, respeitando as particularidades de cada pessoa, e sempre voltada para a inclusão e o respeito à neurodiversidade.',
      },
      {
        question: 'Onde buscar ajuda e avaliação?',
        answer: 'Para avaliação diagnóstica, é fundamental procurar profissionais habilitados: neurologistas, psiquiatras e psicólogos especializados em TEA. O diagnóstico é clínico e deve ser feito por equipe multidisciplinar. Busque os serviços de saúde pública (CAPS, centros especializados) ou profissionais particulares com experiência comprovada. Lembre-se: este site não oferece diagnóstico ou orientação médica.',
      },
      {
        question: 'Como apoiar uma pessoa autista no dia a dia?',
        answer: 'Algumas dicas gerais incluem: respeite o tempo e o jeito de cada pessoa; evite ambientes com muitos estímulos sensoriais se a pessoa for sensível; comunique-se de forma clara e direta; valorize os interesses especiais; não force contato visual ou físico; promova a autonomia sempre que possível; escute e aprenda com a própria pessoa autista. Lembre-se: cada pessoa é única, e o melhor apoio é aquele que respeita as necessidades individuais.',
      },
    ],
  };

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'instituicao', label: 'Sobre a instituição' },
    { id: 'conectea', label: 'Sobre o ConecTEA' },
    { id: 'autismo', label: 'Sobre o autismo' },
  ];

  const getAllFAQs = () => {
    if (activeCategory === 'all') {
      return [
        ...faqData.instituicao.map(item => ({ ...item, category: 'instituicao' })),
        ...faqData.conectea.map(item => ({ ...item, category: 'conectea' })),
        ...faqData.autismo.map(item => ({ ...item, category: 'autismo' })),
      ];
    }
    return faqData[activeCategory].map(item => ({ ...item, category: activeCategory }));
  };

  const filteredFAQs = getAllFAQs().filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar no FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  aria-label="Pesquisar perguntas frequentes"
                />
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenIndex(null);
                    }}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className="overflow-hidden">
              {filteredFAQs.length > 0 ? (
                <div>
                  {filteredFAQs.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Nenhuma pergunta encontrada</p>
                  <p className="text-gray-400 text-sm mt-2">Tente usar outros termos de busca</p>
                </div>
              )}
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="mt-12 bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Não encontrou o que procurava?
                </h3>
                <p className="text-gray-700 mb-6">
                  Entre em contato conosco e teremos prazer em ajudar!
                </p>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Entrar em contato
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
