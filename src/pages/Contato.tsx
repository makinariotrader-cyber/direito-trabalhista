import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function Contato() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <Mail className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Fale Conosco</h1>
        <p className="text-lg text-gray-600">Tem dúvidas, sugestões ou encontrou algum problema? Entre em contato!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary-500" /> Envie sua Mensagem
          </h2>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" className="input-field" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="input-field" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
              <input type="text" className="input-field" placeholder="Assunto da mensagem" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea className="input-field" rows={5} placeholder="Sua mensagem..." />
            </div>
            <button type="submit" className="btn-primary w-full">Enviar Mensagem</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Informações de Contato</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                contato@calculadoratrabalhista.com.br
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-500" />
                Respondemos em até 48 horas úteis
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Antes de nos enviar uma mensagem</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Verifique se sua dúvida já não está nas perguntas frequentes da calculadora</li>
              <li>• Para questões jurídicas específicas, consulte um advogado trabalhista</li>
              <li>• Não fornecemos consultoria jurídica individual</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
