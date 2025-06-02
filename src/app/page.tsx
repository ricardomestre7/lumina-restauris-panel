export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lumina Restauris
                </h1>
                <p className="text-sm text-gray-600">Painel Terapêutico Quântico</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
              Acessar Painel
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl">🔮</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transforme sua 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> prática terapêutica</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            O Lumina Restauris é um painel avançado que integra tecnologia quântica com terapias modernas, 
            oferecendo aos terapeutas uma plataforma completa para gestão de pacientes e análises energéticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              🚀 Começar Agora
            </button>
            <button className="border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              📖 Saiba Mais
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Gestão de Pacientes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestão de Pacientes</h3>
            <p className="text-gray-600 mb-6">
              Sistema completo para cadastro, acompanhamento e histórico de pacientes com interface intuitiva e segura.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Prontuários digitais seguros
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Histórico completo de sessões
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Agendamento inteligente
              </li>
            </ul>
          </div>

          {/* Análises Quânticas */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Análises Quânticas</h3>
            <p className="text-gray-600 mb-6">
              Ferramentas avançadas para análise energética e acompanhamento da evolução terapêutica dos pacientes.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                Medições de campos energéticos
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                Relatórios automáticos
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">✓</span>
                Gráficos de evolução
              </li>
            </ul>
          </div>

          {/* Dashboard Inteligente */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Inteligente</h3>
            <p className="text-gray-600 mb-6">
              Visão centralizada de todas as atividades, métricas e insights para otimizar sua prática terapêutica.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Métricas em tempo real
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Insights personalizados
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Relatórios detalhados
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-blue-100 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformando Vidas com Tecnologia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Junte-se a centenas de terapeutas que já utilizam o Lumina Restauris para potencializar seus resultados
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">125+</div>
              <div className="text-gray-600">Terapeutas Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">2.5K+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">15K+</div>
              <div className="text-gray-600">Análises Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar sua prática?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experimente o Lumina Restauris e descubra o poder da terapia quântica moderna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              🔮 Acessar Painel Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              📞 Falar com Especialista
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">✨</span>
              </div>
              <span className="text-xl font-bold">Lumina Restauris</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando a prática terapêutica com a força da tecnologia quântica
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Lumina Restauris. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
