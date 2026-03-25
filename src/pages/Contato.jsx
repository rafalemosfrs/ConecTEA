import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('As chaves do EmailJS não foram configuradas.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.nome,
          reply_to: formData.email,
          message: formData.mensagem,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        mensagem: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      setError('Não foi possível enviar sua mensagem. Tente novamente em instantes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center slide-in">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Estamos aqui para ajudar. Envie sua mensagem ou use um dos canais abaixo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ScrollReveal>
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ConecTEA
                </h3>
                <p className="text-gray-600 mb-4">
                  Para dúvidas sobre o projeto acadêmico
                </p>
                <p className="text-primary-600 font-medium">
                  conecteatea@gmail.com
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Espaço do Autista
                </h3>
                <p className="text-gray-600 mb-4">
                  Para atendimentos, doações e voluntariado
                </p>
                <p className="text-accent-600 font-medium mb-2">
                  Joelia
                </p>
                <p className="text-accent-600 font-medium mb-2">
                  +55 85 98709-3348
                </p>
                <p className="text-accent-600 font-medium">
                  espacodoautista2019@gmail.com
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="text-center h-full bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Instagram
                </h3>
                <p className="text-gray-600 mb-4">
                  Acompanhe as novidades e atividades
                </p>
                <a
                  href="https://www.instagram.com/espaco_do_autista_ce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  @espaco_do_autista_ce
                </a>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="max-w-3xl mx-auto">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Envie sua mensagem
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center slide-in">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Mensagem enviada com sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Digite seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Digite sua mensagem..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                        <p className="text-sm text-red-700">
                          {error}
                        </p>
                      </div>
                    )}

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-sm text-gray-700">
                          <strong>Aviso importante:</strong> Não envie dados sensíveis como CPF, documentos pessoais ou informações médicas de crianças através deste formulário.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {loading ? 'Enviando...' : 'Enviar mensagem'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}