import { Scale, Shield, Target, Heart } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <Scale className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Sobre Nós</h1>
        <p className="text-lg text-gray-600">Simplificando o acesso aos direitos trabalhistas para milhões de brasileiros.</p>
      </div>

      <div className="space-y-8">
        <div className="card">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold text-gray-900">Nossa Missão</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Criamos o CalculadoraTrabalhista.com.br com o objetivo de democratizar o acesso à informação sobre direitos trabalhistas.
            Milhões de brasileiros têm dúvidas sobre cálculos de rescisão, horas extras, FGTS e outros direitos — e nossa plataforma
            oferece ferramentas gratuitas e precisas para ajudar cada trabalhador a entender e calcular o que lhe é devido.
          </p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold text-gray-900">Nosso Compromisso</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Todas as nossas calculadoras são atualizadas com a legislação trabalhista vigente, incluindo a CLT,
            as decisões do TST e as tabelas oficiais de INSS e IRRF. Nosso conteúdo é revisado periodicamente
            para garantir precisão e confiabilidade.
          </p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold text-gray-900">Nossos Valores</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2"><strong className="text-gray-900">Transparência:</strong> Informações claras sobre como cada cálculo é feito.</li>
            <li className="flex gap-2"><strong className="text-gray-900">Gratuidade:</strong> Todas as ferramentas são 100% gratuitas.</li>
            <li className="flex gap-2"><strong className="text-gray-900">Precisão:</strong> Cálculos baseados na legislação atualizada.</li>
            <li className="flex gap-2"><strong className="text-gray-900">Acessibilidade:</strong> Linguagem simples para todos entenderem.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <p className="text-sm text-yellow-800 leading-relaxed">
            <strong>Aviso Importante:</strong> As informações e calculadoras deste site são fornecidas apenas para fins informativos
            e não substituem consulta a um advogado trabalhista. Cada caso tem particularidades que podem alterar os valores
            calculados. Recomendamos sempre buscar orientação profissional especializada.
          </p>
        </div>
      </div>
    </div>
  );
}
