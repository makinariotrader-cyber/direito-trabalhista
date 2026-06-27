import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { guides } from '../toolsData';
import AdSensePlaceholder from '../components/AdSensePlaceholder';

const guideContent: Record<string, { sections: { title: string; content: string }[] }> = {
  'direitos-trabalhistas': {
    sections: [
      { title: 'Introdução', content: 'A Consolidação das Leis do Trabalho (CLT) é o principal conjunto de leis que regula as relações trabalhistas no Brasil. Criada em 1943, a CLT estabelece os direitos e deveres de empregados e empregadores, garantindo proteção ao trabalhador em diversas situações.' },
      { title: 'Jornada de Trabalho', content: 'A jornada padrão é de 8 horas diárias e 44 horas semanais. Horas extras devem ser pagas com adicional mínimo de 50% em dias úteis e 100% em domingos e feriados. Intervalos intrajornada (almoço) de 1 hora para jornadas acima de 6 horas.' },
      { title: 'Férias', content: 'Após 12 meses de trabalho, o empregado tem direito a 30 dias de férias remuneradas com adicional de 1/3 constitucional. As férias podem ser parceladas em até 3 períodos, sendo um deles de no mínimo 14 dias.' },
      { title: '13º Salário', content: 'O 13º salário é pago em duas parcelas: a primeira até 30 de novembro (sem descontos) e a segunda até 20 de dezembro (com descontos de INSS e IRRF). O valor corresponde a 1/12 do salário por mês trabalhado.' },
      { title: 'FGTS', content: 'O empregador deposita 8% do salário em conta vinculada do FGTS. Em caso de dispensa sem justa causa, o trabalhador tem direito a sacar o saldo e receber multa de 40% paga pelo empregador.' },
      { title: 'Rescisão', content: 'Ao ser dispensado sem justa causa, o trabalhador tem direito a: saldo de salário, aviso prévio (30 a 90 dias), férias vencidas e proporcionais + 1/3, 13º proporcional, multa de 40% do FGTS e saque do FGTS.' },
      { title: 'Adicionais Salariais', content: 'Adicional noturno (20% sobre a hora normal para trabalho entre 22h e 5h), periculosidade (30% sobre o salário base) e insalubridade (10% a 40% do salário mínimo, conforme o grau de exposição a agentes nocivos).' },
      { title: 'Licenças e Faltas', content: 'O trabalhador tem direito a faltas justificadas em caso de casamento (3 dias), falecimento de familiar (2 dias), doação de sangue (1 dia), alistamento militar (1 dia) e exames vestibulares (dias necessários).' },
    ],
  },
  'como-calcular-horas-extras': {
    sections: [
      { title: 'Passo 1: Calcule o valor da hora normal', content: 'Divida seu salário mensal pela carga horária mensal. Para jornada de 44h semanais, use 220 horas. Exemplo: Salário de R$ 2.200 ÷ 220h = R$ 10,00/hora normal.' },
      { title: 'Passo 2: Calcule o valor da hora extra', content: 'Multiplique o valor da hora normal pelo fator do adicional. Hora extra 50%: R$ 10,00 × 1,5 = R$ 15,00. Hora extra 100%: R$ 10,00 × 2,0 = R$ 20,00.' },
      { title: 'Passo 3: Multiplique pelo número de horas', content: 'Multiplique o valor da hora extra pelo total de horas realizadas no mês. Exemplo: 10 horas extras a 50% = 10 × R$ 15,00 = R$ 150,00.' },
      { title: 'Passo 4: Calcule o DSR sobre horas extras', content: 'O DSR (Descanso Semanal Remunerado) incide sobre as horas extras. Divida o total de horas extras pelos dias úteis e multiplique pelos domingos e feriados do mês.' },
      { title: 'Passo 5: Some tudo', content: 'Valor das horas extras + DSR sobre horas extras = Total a receber. Exemplo: R$ 150,00 (HE) + R$ 30,00 (DSR) = R$ 180,00.' },
    ],
  },
  'diferencas-clt-pj': {
    sections: [
      { title: 'CLT (Consolidação das Leis do Trabalho)', content: 'O regime CLT oferece diversos benefícios obrigatórios: 13º salário, férias remuneradas + 1/3, FGTS com depósito de 8%, seguro-desemprego, INSS (aposentadoria e benefícios), horas extras, adicional noturno, vale-transporte, licença-maternidade/paternidade e estabilidade em algumas situações.' },
      { title: 'PJ (Pessoa Jurídica)', content: 'No regime PJ, o profissional abre uma empresa (MEI ou ME) e presta serviços como pessoa jurídica. Recebe o valor bruto integral sem descontos de INSS ou IRRF na fonte, mas é responsável por pagar seus próprios impostos (DAS, ISS, IRPJ).' },
      { title: 'Vantagens da CLT', content: 'Proteção trabalhista completa, benefícios obrigatórios, estabilidade em algumas situações, férias remuneradas, 13º salário, FGTS, seguro-desemprego, e não precisa se preocupar com gestão fiscal ou contábil.' },
      { title: 'Vantagens do PJ', content: 'Remuneração líquida maior (sem descontos de INSS e IRRF na fonte), maior flexibilidade de horário e contrato, possibilidade de deduzir despesas do negócio, e potencial de crescimento profissional.' },
      { title: 'O que considerar na escolha', content: 'Compare o valor líquido mensal com todos os benefícios da CLT (13º, férias, FGTS, INSS) versus o valor líquido como PJ (após impostos e custos). Considere também: estabilidade, benefícios (plano de saúde, vale-refeição) e planejamento de carreira.' },
    ],
  },
  'guia-fgts': {
    sections: [
      { title: 'O que é o FGTS?', content: 'O Fundo de Garantia do Tempo de Serviço (FGTS) foi criado em 1966 para proteger o trabalhador demitido sem justa causa. Mensalmente, o empregador deposita 8% do salário do funcionário em uma conta vinculada na Caixa Econômica Federal.' },
      { title: 'Depósitos Mensais', content: 'O empregador deposita 8% do salário bruto mensalmente. Além disso, deposita também 8% sobre o 13º salário. O saldo é corrigido pela TR (Taxa Referencial) mais juros de 3% ao ano.' },
      { title: 'Quando Sacar o FGTS', content: 'Principais situações: demissão sem justa causa (saldo total), rescisão por acordo (80% do saldo), aposentadoria, compra da casa própria (SFH), doenças graves, calamidade pública, saque-aniversário (parcial anual).' },
      { title: 'Multa de 40%', content: 'Em caso de dispensa sem justa causa, o empregador paga multa de 40% sobre todo o saldo do FGTS. Na rescisão por acordo, a multa é de 20% sobre o saldo.' },
      { title: 'Como Consultar', content: 'Consulte seu saldo pelo aplicativo FGTS (disponível para Android e iOS), site da Caixa Econômica Federal, ou agências da Caixa com documento de identificação e número do PIS/PASEP.' },
    ],
  },
  'passo-rescisao': {
    sections: [
      { title: '1. Documentação Necessária', content: 'Documentos para a rescisão: Carteira de Trabalho (CTPS), Termo de Rescisão do Contrato de Trabalho (TRCT), Guias de Seguro-Desemprego (se aplicável), extrato do FGTS, exame demissional e programa de desligamento.' },
      { title: '2. Cálculo das Verbas Rescisórias', content: 'Verbas devidas: saldo de salário (dias trabalhados no mês), aviso prévio (30 a 90 dias), férias vencidas + 1/3, férias proporcionais + 1/3, 13º salário proporcional, multa de 40% do FGTS (dispensa sem justa causa) e saque do FGTS.' },
      { title: '3. Homologação', content: 'Para contratos com mais de 1 ano, a rescisão deve ser homologada no sindicato da categoria ou no Ministério do Trabalho. Para contratos com menos de 1 ano, a homologação pode ser feita na própria empresa.' },
      { title: '4. Prazos de Pagamento', content: 'As verbas rescisórias devem ser pagas em até 10 dias corridos após o término do contrato. Em caso de aviso prévio indenizado, o prazo conta a partir da data de dispensa.' },
      { title: '5. Direitos em Caso de Atraso', content: 'Se o pagamento não for feito no prazo, o empregador está sujeito a multa administrativa e o trabalhador pode ingressar com reclamação trabalhista na Justiça do Trabalho.' },
    ],
  },
};

export default function GuiaPage() {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guides.find(g => g.id === guideId);
  const content = guideContent[guideId || ''];

  if (!guide || !content) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Guia não encontrado</h1>
        <p className="text-gray-500 mb-6">O guia que você procura não foi encontrado.</p>
        <Link to="/guias" className="btn-primary">Ver Todos os Guias</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/guias" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar para Guias
      </Link>

      <article>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-amber-500" />
          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Guia Trabalhista</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{guide.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{guide.description}</p>

        <AdSensePlaceholder format="horizontal" className="mb-8" />

        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <AdSensePlaceholder format="horizontal" className="mt-8" />

        <div className="mt-8 bg-primary-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Precisa calcular seus direitos?</h3>
          <p className="text-sm text-gray-600 mb-4">Use nossas calculadoras gratuitas para simular os valores exatos.</p>
          <Link to="/ferramentas" className="btn-primary inline-flex items-center gap-2">Ver Calculadoras</Link>
        </div>
      </article>
    </div>
  );
}
