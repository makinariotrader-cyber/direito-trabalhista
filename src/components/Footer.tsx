import { Link } from 'react-router-dom';
import { Scale, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-primary-400" />
              <span className="font-bold text-lg text-white">
                <span className="text-primary-400">Calculadora</span>Trabalhista
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Calculadoras trabalhistas online gratuitas para ajudar você a entender e calcular seus direitos trabalhistas de forma rápida e precisa.
            </p>
            <p className="text-xs mt-4 leading-relaxed">
              <strong className="text-gray-300">Aviso de Afiliado:</strong> Como Associado da Amazon e parceiro Shopee, ganho com compras qualificadas. Os links de produtos recomendados podem gerar comissão sem custo adicional para você.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ferramentas</h3>
            <ul className="space-y-2">
              <li><Link to="/ferramentas/rescisao-trabalhista" className="text-sm hover:text-primary-400 transition-colors">Rescisão Trabalhista</Link></li>
              <li><Link to="/ferramentas/horas-extras" className="text-sm hover:text-primary-400 transition-colors">Horas Extras</Link></li>
              <li><Link to="/ferramentas/fgts" className="text-sm hover:text-primary-400 transition-colors">FGTS</Link></li>
              <li><Link to="/ferramentas/ferias" className="text-sm hover:text-primary-400 transition-colors">Férias</Link></li>
              <li><Link to="/ferramentas/inss" className="text-sm hover:text-primary-400 transition-colors">INSS</Link></li>
              <li><Link to="/ferramentas" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">Todas as Calculadoras →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2"><Shield className="w-3.5 h-3.5" /> Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> Contato</Link></li>
              <li><Link to="/privacidade" className="text-sm hover:text-primary-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-sm hover:text-primary-400 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/guias" className="text-sm hover:text-primary-400 transition-colors">Guias e Artigos</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} CalculadoraTrabalhista.com.br — Todos os direitos reservados.
            As informações fornecidas neste site são para fins informativos e não substituem consulta a um advogado trabalhista.
          </p>
        </div>
      </div>
    </footer>
  );
}
