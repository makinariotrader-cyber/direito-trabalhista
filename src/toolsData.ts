import type { Tool } from './types';

export const tools: Tool[] = [
  {
    id: 'rescisao-trabalhista',
    title: 'Calculadora de Rescisão Trabalhista',
    description: 'Calcule o valor exato da sua rescisão contratual: saldo de salário, aviso prévio, férias proporcionais, 13º proporcional, multa do FGTS e muito mais.',
    longIntro: `Calcular a rescisão trabalhista é um dos momentos mais importantes na vida profissional de qualquer trabalhador brasileiro. Seja por iniciativa própria através do pedido de demissão, por decisão do empregador através da dispensa sem justa causa, ou por outras modalidades como a rescisão indireta ou o término de contrato temporário, é fundamental saber exatamente quais valores você tem direito a receber no momento do desligamento.

A Consolidação das Leis do Trabalho (CLT), em seus artigos 477 a 486, estabelece uma série de verbas rescisórias que devem ser pagas no momento do desligamento. Entre elas estão o saldo de salário correspondente aos dias trabalhados no mês da rescisão, o aviso prévio que pode variar de 30 a 90 dias conforme o tempo de serviço, as férias vencidas e proporcionais acrescidas do adicional constitucional de 1/3, o 13º salário proporcional aos meses trabalhados no ano, e a multa de 40% sobre o saldo do FGTS em caso de dispensa sem justa causa.

Além das verbas principais, existem outros direitos que podem integrar o cálculo dependendo da situação específica de cada trabalhador. As horas extras habituais, os adicionais noturno, de periculosidade ou insalubridade, e as comissões integram a base de cálculo das verbas rescisórias. O prazo para pagamento é de até 10 dias corridos após o término do contrato, conforme determina o artigo 477 da CLT.

Nossa calculadora de rescisão trabalhista considera todos esses fatores para fornecer um cálculo detalhado e confiável. Basta informar seus dados como salário bruto, data de admissão, data de demissão e o tipo de rescisão para obter o valor estimado de cada verba trabalhista individualmente. Lembre-se que este cálculo é uma estimativa baseada nas regras gerais da CLT e pode variar dependendo de acordos coletivos, convenções sindicais e particularidades do seu contrato de trabalho. Para valores oficiais e orientação jurídica personalizada, consulte um advogado trabalhista ou o setor de RH da sua empresa.`,
    category: 'Rescisão e Saída',
    icon: 'FileText',
    calculatorType: 'rescisao',
    questions: [
      { question: 'Quais são os tipos de rescisão trabalhista previstos na CLT?', answer: 'A CLT prevê diversos tipos de rescisão contratual: dispensa sem justa causa (quando o empregador decide dispensar o funcionário sem motivo grave, garantindo multa de 40% do FGTS), dispensa por justa causa (quando o empregado comete falta grave e perde alguns direitos), pedido de demissão (iniciativa do empregado), rescisão indireta (quando o empregador comete falta grave, equiparada à dispensa sem justa causa), rescisão por acordo (modalidade criada pela Reforma Trabalhista de 2017, com regras específicas para FGTS e seguro-desemprego) e término de contrato temporário ou por prazo determinado.' },
      { question: 'Quais verbas entram no cálculo da rescisão trabalhista?', answer: 'O cálculo da rescisão inclui: saldo de salário (dias trabalhados no mês da dispensa), aviso prévio (30 a 90 dias conforme tempo de serviço), férias vencidas acrescidas de 1/3 constitucional, férias proporcionais também com 1/3, 13º salário proporcional aos meses trabalhados no ano, multa de 40% sobre o saldo do FGTS (exclusiva para dispensa sem justa causa), saque do FGTS e, em alguns casos, seguro-desemprego. Cada tipo de rescisão tem regras específicas sobre quais verbas são devidas.' },
      { question: 'Como é calculado o aviso prévio proporcional ao tempo de serviço?', answer: 'O aviso prévio proporcional segue a Lei 12.506/2011. São 30 dias para contratos de até 1 ano de trabalho. A cada ano adicional completo, acrescentam-se 3 dias, limitado ao máximo de 90 dias totais. Por exemplo: um trabalhador com 5 anos de serviço tem direito a 30 + (4 × 3) = 42 dias de aviso prévio. O aviso pode ser trabalhado (cumprido na empresa com redução de jornada) ou indenizado (pago sem necessidade de trabalho).' },
      { question: 'Qual o prazo para pagamento das verbas rescisórias?', answer: 'O prazo legal para pagamento das verbas rescisórias é de até 10 dias corridos contados a partir do término do contrato de trabalho, conforme o artigo 477 da CLT. Em caso de aviso prévio indenizado, o prazo começa a contar da data da dispensa. Se o aviso for trabalhado, o prazo conta do último dia trabalhado. O não cumprimento do prazo gera multa equivalente a um salário do empregado, além de correção monetária e juros.' },
      { question: 'Como funciona a rescisão por acordo criada pela Reforma Trabalhista?', answer: 'A rescisão por acordo foi introduzida pela Reforma Trabalhista de 2017 (Lei 13.467/2017). Nessa modalidade, empregador e empregado concordam com o término do contrato. O trabalhador tem direito a metade do aviso prévio (se indenizado), multa de 20% sobre o FGTS (metade dos 40% da dispensa sem justa causa), saque de 80% do FGTS, e demais verbas rescisórias integrais. O trabalhador NÃO tem direito ao seguro-desemprego nesta modalidade.' },
      { question: 'O que é a rescisão indireta e como funciona?', answer: 'A rescisão indireta, também chamada de "justa causa do empregador", ocorre quando o empregado pede a rescisão do contrato por falta grave cometida pelo empregador. As hipóteses previstas no artigo 483 da CLT incluem: exigência de serviços superiores às forças do empregado, tratamento rigoroso ou degradante, não pagamento de salários, redução ilegal do trabalho, e descumprimento das obrigações contratuais. Nesse caso, o empregado tem os mesmos direitos da dispensa sem justa causa.' },
    ],
    tips: [
      'Guarde todos os documentos trabalhistas: holerites, contrato de trabalho, termo de rescisão e extrato do FGTS para conferência dos valores pagos',
      'Verifique se as verbas rescisórias foram pagas no prazo legal de até 10 dias corridos após o desligamento — o atraso gera multa',
      'Em caso de dúvidas sobre os valores calculados, procure o sindicato da sua categoria ou um advogado trabalhista especializado',
      'As horas extras habituais e adicionais noturno, periculosidade ou insalubridade integram o cálculo das verbas rescisórias',
      'Guarde cópias de todos os documentos assinados no momento da rescisão para eventuais reclamações futuras',
    ],
    metaDescription: 'Calcule online e gratuitamente o valor da sua rescisão trabalhista. Simule saldo de salário, aviso prévio, férias, 13º e FGTS. Cálculo atualizado com a CLT.',
    keywords: ['rescisão trabalhista', 'calcular rescisão', 'verbas rescisórias', 'cálculo rescisão CLT', 'simulador rescisão'],
  },
  {
    id: 'horas-extras',
    title: 'Calculadora de Horas Extras',
    description: 'Descubra quanto você deve receber por horas extras trabalhadas. Calcule hora extra com adicional de 50%, 100% e reflexos no DSR.',
    longIntro: `As horas extras são uma realidade na vida de milhões de trabalhadores brasileiros. De acordo com a CLT, a jornada de trabalho padrão é de 8 horas diárias e 44 horas semanais, podendo ser reduzida por acordos ou convenções coletivas. Qualquer hora trabalhada além desse limite legal deve ser paga como hora extra com adicional mínimo de 50% sobre o valor da hora normal em dias úteis, e 100% em domingos e feriados.

Para calcular corretamente as horas extras, é necessário primeiro saber o valor da sua hora normal de trabalho. Esse valor é obtido dividindo seu salário mensal pela carga horária mensal, que geralmente é de 220 horas para a jornada padrão de 44 horas semanais, ou 200 horas para jornadas de 40 horas semanais. A partir desse valor base, aplica-se o percentual do adicional de hora extra conforme o dia da semana em que o trabalho extraordinário foi realizado.

É importante destacar que as horas extras não se limitam apenas ao pagamento do adicional. Elas geram reflexos em outras verbas trabalhistas, como o Descanso Semanal Remunerado (DSR), as férias, o 13º salário e o FGTS. Isso significa que, além do valor recebido mensalmente pelas horas extras, o trabalhador tem direito ao reflexo dessas horas no cálculo de férias e 13º, aumentando o valor desses benefícios.

Além do adicional legal de 50%, muitas categorias profissionais possuem convenções coletivas que estabelecem percentuais maiores para horas extras, podendo chegar a 80% ou até 100% em dias úteis em algumas categorias. A legislação também prevê um limite máximo de 2 horas extras por dia, totalizando no máximo 10 horas diárias de trabalho, salvo exceções previstas em acordo de compensação de jornada ou banco de horas.`,
    category: 'Jornada de Trabalho',
    icon: 'Clock',
    calculatorType: 'hora-extra',
    questions: [
      { question: 'Qual o percentual mínimo de adicional para horas extras?', answer: 'O adicional mínimo legal é de 50% sobre o valor da hora normal para horas extras realizadas em dias úteis e sábados, e de 100% sobre a hora normal para trabalho em domingos e feriados. No entanto, muitas convenções coletivas de trabalho estabelecem percentuais mais elevados, podendo chegar a 80% ou 100% também em dias úteis. Consulte sempre o sindicato da sua categoria para verificar o percentual aplicável ao seu caso.' },
      { question: 'Como calcular o valor da hora extra passo a passo?', answer: '1) Calcule o valor da sua hora normal: divida seu salário mensal por 220 (para jornada de 44h semanais). Exemplo: R$ 2.200 ÷ 220 = R$ 10,00/hora. 2) Para hora extra com 50%: multiplique por 1,5 → R$ 10,00 × 1,5 = R$ 15,00. 3) Para hora extra com 100%: multiplique por 2 → R$ 10,00 × 2 = R$ 20,00. 4) Multiplique pelo número de horas extras realizadas no mês. 5) Calcule o reflexo no DSR.' },
      { question: 'Qual o limite legal de horas extras por dia?', answer: 'A CLT estabelece que a jornada de trabalho não pode exceder 8 horas diárias e 44 horas semanais. As horas extras são limitadas a 2 horas por dia, totalizando no máximo 10 horas diárias de trabalho. No entanto, acordos de compensação de jornada (banco de horas) podem flexibilizar esses limites, desde que previstos em convenção coletiva ou acordo individual, conforme a Reforma Trabalhista de 2017.' },
      { question: 'As horas extras habituais geram direito a outros benefícios?', answer: 'Sim. As horas extras habituais (realizadas com frequência por vários meses) geram reflexos em diversas verbas trabalhistas. Elas integram o cálculo do Descanso Semanal Remunerado (DSR), das férias (inclusive o 1/3 constitucional), do 13º salário, do FGTS e do aviso prévio. Isso significa que, ao calcular férias ou 13º, a média das horas extras deve ser incluída na base de cálculo.' },
      { question: 'Diferença entre banco de horas e horas extras tradicionais?', answer: 'No banco de horas, as horas extras trabalhadas em um dia são compensadas com folgas ou redução de jornada em outros dias, dentro de um período determinado (geralmente 6 meses ou 1 ano). Se a compensação não ocorrer dentro do prazo, as horas devem ser pagas como extras. No sistema tradicional, as horas extras são pagas no mês seguinte ao trabalho. O banco de horas pode ser instituído por acordo individual ou coletivo.' },
      { question: 'O que diz a lei sobre horas extras no intervalo intrajornada?', answer: 'Se o trabalhador não usufruir do intervalo intrajornada (almoço) de no mínimo 1 hora para jornadas acima de 6 horas, a empresa deve pagar esse período como hora extra com adicional de 50%, conforme Súmula 437 do TST. O intervalo não concedido ou concedido parcialmente gera direito ao pagamento total do período, com natureza salarial, refletindo em outras verbas trabalhistas.' },
    ],
    tips: [
      'Mantenha um registro pessoal dos horários de entrada e saída, independentemente do ponto eletrônico da empresa, para ter uma prova em caso de divergências',
      'Horas extras habituais por mais de 1 ano podem gerar direito à integração no cálculo de férias, 13º, FGTS e aviso prévio',
      'Verifique se sua convenção coletiva prevê percentuais maiores que os legais para horas extras, pois muitas categorias têm 80% ou 100% em dias úteis',
      'O reflexo das horas extras no DSR deve ser calculado separadamente e pago juntamente com as horas extras',
      'Trabalho aos domingos sem compensação deve ser pago com adicional de 100%, salvo autorização em convenção coletiva',
    ],
    metaDescription: 'Calcule horas extras online: adicional de 50%, 100% e reflexos no DSR. Descubra o valor exato que você tem direito por cada hora extra trabalhada.',
    keywords: ['calcular horas extras', 'hora extra 50%', 'hora extra 100%', 'adicional hora extra', 'cálculo hora extra'],
  },
  {
    id: 'adicional-noturno',
    title: 'Calculadora de Adicional Noturno',
    description: 'Calcule o adicional noturno devido para trabalhadores que atuam entre 22h e 5h com redução da hora noturna de 52 minutos e 30 segundos.',
    longIntro: `O adicional noturno é um direito fundamental dos trabalhadores que exercem suas atividades durante o período noturno. Regulamentado pelo artigo 73 da CLT, o trabalho noturno tem regras especiais que visam compensar o desgaste físico e psicológico de trabalhar durante a madrugada.

Para trabalhadores urbanos, o período noturno compreende as 22h às 5h. Para trabalhadores rurais, o período varia conforme a atividade: 21h às 5h na lavoura e 20h às 4h na pecuária. O adicional noturno tem dois componentes que tornam seu cálculo diferenciado. O primeiro é o acréscimo mínimo de 20% sobre o valor da hora normal para trabalhadores urbanos, e de 25% para trabalhadores rurais na lavoura ou 30% na pecuária. O segundo é a redução da hora noturna, que é de 52 minutos e 30 segundos — cada hora noturna tem 52,5 minutos, resultando em 7 horas de trabalho remuneradas como 8 horas completas.

O adicional noturno integra o salário para todos os efeitos legais, incluindo férias, 13º salário, FGTS e aviso prévio. Além disso, se o trabalho noturno for estendido além das 5h da manhã, o adicional continua incidindo sobre as horas excedentes, conforme jurisprudência consolidada do TST (Súmula 60). Isso significa que um trabalhador que faz hora extra após as 5h, dando continuidade ao turno noturno, mantém o direito ao adicional.`,
    category: 'Jornada de Trabalho',
    icon: 'Moon',
    calculatorType: 'adicional-noturno',
    questions: [
      { question: 'Qual o percentual do adicional noturno para cada categoria?', answer: 'Para trabalhadores urbanos, o adicional noturno é de 20% sobre o valor da hora normal, conforme artigo 73 da CLT. Para trabalhadores rurais, o adicional é de 25% para atividades na lavoura e 30% para atividades na pecuária. Em ambos os casos, o adicional incide sobre o valor da hora normal de trabalho, antes de qualquer outro acréscimo.' },
      { question: 'Como funciona a redução da hora noturna?', answer: 'A hora noturna é reduzida para 52 minutos e 30 segundos, conforme estabelece o artigo 73, §1º da CLT. Isso significa que em 7 horas de trabalho noturno (das 22h às 5h), o trabalhador recebe como se fossem 8 horas trabalhadas. Essa redução compensa o maior desgaste físico do trabalho noturno. Por exemplo: se um trabalhador cumpre 7 horas noturnas, seu registro deve constar como 8 horas para todos os efeitos legais.' },
      { question: 'O adicional noturno incide sobre horas extras também?', answer: 'Sim. Se o trabalhador realizar horas extras durante o período noturno, os adicionais se acumulam. Primeiro calcula-se o adicional noturno (20% sobre a hora normal) e depois aplica-se o adicional de hora extra sobre esse valor já majorado. Esse acúmulo de adicionais é chamado de "cálculo em cascata" e é um direito consolidado do trabalhador.' },
      { question: 'A prorrogação do trabalho noturno além das 5h gera adicional?', answer: 'Sim. De acordo com a Súmula 60 do Tribunal Superior do Trabalho (TST), se o trabalhador, ao final do turno noturno, prorrogar sua jornada além das 5h da manhã, o adicional noturno continua sendo devido sobre essas horas excedentes. Isso porque se considera que a prorrogação é uma continuação do trabalho noturno iniciado anteriormente.' },
      { question: 'O adicional noturno integra o salário para outros benefícios?', answer: 'Sim. O adicional noturno recebido de forma habitual integra o salário do trabalhador para todos os efeitos legais. Isso significa que ele deve ser incluído no cálculo de férias (com o adicional de 1/3), 13º salário, FGTS, aviso prévio e demais verbas trabalhistas. A integração do adicional noturno nessas verbas é um direito consolidado dos trabalhadores.' },
    ],
    tips: [
      'O adicional noturno recebido habitualmente integra o salário para todos os efeitos legais: férias, 13º, FGTS, aviso prévio e horas extras',
      'Trabalhadores que atuam exclusivamente no período noturno têm direito ao adicional sobre todo o período de trabalho, incluindo a redução da hora noturna',
      'A prorrogação do trabalho noturno além das 5h da manhã também gera direito ao adicional noturno sobre as horas excedentes',
      'Guarde registros dos horários de trabalho noturno para garantir o pagamento correto do adicional',
      'Em caso de trabalho noturno habitual, verifique se o adicional está sendo incluído corretamente no cálculo de férias e 13º salário',
    ],
    metaDescription: 'Calcule o adicional noturno online: 20% sobre hora normal + redução da hora noturna (52min30s). Simulador gratuito atualizado com a CLT.',
    keywords: ['adicional noturno', 'calcular adicional noturno', 'hora noturna reduzida', 'adicional noturno CLT'],
  },
  {
    id: 'ferias',
    title: 'Calculadora de Férias',
    description: 'Calcule o valor das suas férias com adicional de 1/3 constitucional. Simule férias vencidas, proporcionais, em dobro e abono pecuniário.',
    longIntro: `As férias são um direito constitucional de todo trabalhador brasileiro, garantido pelo artigo 7º, inciso XVII da Constituição Federal e regulamentado pelos artigos 129 a 153 da CLT. Após 12 meses de trabalho, período chamado de aquisitivo, o empregado tem direito a 30 dias corridos de férias, que devem ser concedidas nos 12 meses seguintes, período chamado de concessivo.

O valor das férias corresponde ao salário normal acrescido do adicional de 1/3 constitucional, previsto no artigo 7º, inciso XVII da Constituição. Esse adicional de 1/3 é um direito indisponível do trabalhador, não podendo ser negociado ou suprimido. O pagamento das férias deve ser feito até 2 dias antes do início do período de descanso, conforme determina o artigo 145 da CLT.

A Reforma Trabalhista de 2017 (Lei 13.467/2017) flexibilizou algumas regras. As férias podem ser divididas em até 3 períodos, sendo que um deles deve ter no mínimo 14 dias corridos e os demais não podem ser inferiores a 5 dias cada. Essa flexibilização permite que empregador e empregado ajustem os períodos de descanso às necessidades de ambos, desde que haja concordância mútua.

Além das férias integrais, existem as férias proporcionais (devidas em contratos com duração inferior a 12 meses ou em rescisões antes do período concessivo) e as férias em dobro, que ocorrem quando o empregador não concede as férias dentro do período concessivo de 12 meses. O abono pecuniário, também conhecido como "vender as férias", permite ao trabalhador converter 1/3 do período de férias em abono em dinheiro.`,
    category: 'Benefícios',
    icon: 'Umbrella',
    calculatorType: 'ferias',
    questions: [
      { question: 'Como calcular o terço constitucional de férias?', answer: 'O terço constitucional de férias é calculado dividindo seu salário normal por 3. Por exemplo: se seu salário é R$ 3.000,00, o terço constitucional será de R$ 1.000,00. O valor total recebido nas férias será a soma do salário (R$ 3.000,00) mais o terço constitucional (R$ 1.000,00), totalizando R$ 4.000,00. Esse adicional é garantido pelo artigo 7º, inciso XVII da Constituição Federal.' },
      { question: 'Como funciona o parcelamento das férias após a Reforma Trabalhista?', answer: 'A Reforma Trabalhista de 2017 permitiu o parcelamento das férias em até 3 períodos. Pela nova regra, um dos períodos deve ter no mínimo 14 dias corridos e os demais não podem ser inferiores a 5 dias cada. O parcelamento depende de concordância entre empregado e empregador. Antes da reforma, as férias só podiam ser parceladas em 2 períodos, sendo um de no mínimo 10 dias.' },
      { question: 'Quando as férias são pagas em dobro?', answer: 'As férias são pagas em dobro quando o empregador não concede as férias dentro do período concessivo, que é de 12 meses após o término do período aquisitivo. Se o trabalhador completou 12 meses de trabalho (período aquisitivo), o empregador tem mais 12 meses para conceder as férias (período concessivo). Se não conceder nesse prazo, as férias deverão ser pagas em dobro, incluindo o valor em dobro do adicional de 1/3.' },
      { question: 'Como funciona o abono pecuniário (vender 1/3 das férias)?', answer: 'O abono pecuniário, previsto no artigo 143 da CLT, permite ao trabalhador converter 1/3 do seu período de férias em abono em dinheiro. Isso significa que o trabalhador pode "vender" 10 dias de férias (de 30 dias) e receber o valor desses dias trabalhados como abono, além do salário normal e do 1/3 constitucional. O abono deve ser solicitado até 15 dias antes do término do período aquisitivo.' },
      { question: 'As férias proporcionais são devidas em caso de pedido de demissão?', answer: 'Sim. As férias proporcionais são devidas em qualquer modalidade de rescisão contratual, incluindo pedido de demissão, dispensa sem justa causa, rescisão por acordo e rescisão indireta. O cálculo é feito dividindo o salário por 12 e multiplicando pelos meses trabalhados no período aquisitivo incompleto. Se houver fração superior a 14 dias, considera-se como mês completo.' },
      { question: 'Horas extras e adicionais integram o cálculo das férias?', answer: 'Sim. As médias de horas extras, adicionais noturno, periculosidade, insalubridade e comissões recebidas habitualmente nos 12 meses anteriores às férias devem ser incluídas no cálculo. Essas verbas têm natureza salarial e, portanto, refletem no valor das férias. O cálculo da média é feito somando os valores recebidos nos 12 meses e dividindo por 12.' },
    ],
    tips: [
      'As férias devem ser pagas até 2 dias antes do início do período de descanso, conforme determina o artigo 145 da CLT',
      'Horas extras habituais e adicionais (noturno, periculosidade, insalubridade) integram o cálculo das férias com base na média dos 12 meses',
      'O abono pecuniário (vender 1/3 das férias) permite receber o valor dos dias "vendidos" em dinheiro, além do salário normal',
      'Férias não concedidas dentro do prazo legal de 12 meses após o período aquisitivo devem ser pagas em dobro',
      'As faltas não justificadas ao longo do período aquisitivo podem reduzir os dias de férias: de 6 a 14 faltas = 24 dias, de 15 a 23 = 18 dias, de 24 a 32 = 12 dias, acima de 32 = perde o direito',
    ],
    metaDescription: 'Calcule o valor das suas férias online: 1/3 constitucional, férias proporcionais, em dobro e abono pecuniário. Simulador gratuito e atualizado.',
    keywords: ['calcular férias', 'terço constitucional de férias', 'férias proporcionais', 'cálculo de férias CLT'],
  },
  {
    id: 'decimo-terceiro',
    title: 'Calculadora de 13º Salário',
    description: 'Calcule o valor do seu 13º salário proporcional ou integral. Simule primeira e segunda parcela com descontos de INSS e IRRF.',
    longIntro: `O 13º salário, também conhecido como gratificação natalina, é um direito garantido pela Lei 4.090/1962 e regulamentado pela Lei 4.749/1965. Todo trabalhador com carteira assinada, trabalhador rural, avulso e doméstico tem direito a receber o equivalente a 1/12 da remuneração por mês trabalhado, totalizando até um salário adicional completo por ano.

O 13º salário é pago em duas parcelas, cada uma com características específicas. A primeira parcela deve ser paga entre 1º de fevereiro e 30 de novembro de cada ano, correspondendo à metade do salário bruto do mês anterior, sem qualquer desconto de INSS ou Imposto de Renda. A segunda parcela deve ser paga até 20 de dezembro e, desta vez, com os descontos de INSS e Imposto de Renda incidentes sobre o valor total do 13º, além do desconto da primeira parcela já adiantada.

O valor do 13º salário é calculado proporcionalmente aos meses trabalhados durante o ano. Para cada mês em que o empregado tenha trabalhado 15 dias ou mais, considera-se um mês completo para efeito do cálculo. O valor pode incluir médias de horas extras habituais, comissões, percentagens, gratificações e adicionais como noturno, periculosidade e insalubridade, desde que essas verbas tenham sido recebidas de forma habitual durante o ano.

Os descontos sobre o 13º salário são calculados de forma específica. O INSS incide sobre o valor total do 13º, seguindo a tabela progressiva vigente. O Imposto de Renda também incide sobre o valor total, mas com a possibilidade de dedução de dependentes e pensão alimentícia. É importante notar que, para efeito de IRRF, o 13º é tributado separadamente dos demais rendimentos do mês.`,
    category: 'Benefícios',
    icon: 'Gift',
    calculatorType: 'decimo-terceiro',
    questions: [
      { question: 'Quando o 13º salário deve ser pago?', answer: 'A primeira parcela do 13º salário deve ser paga entre 1º de fevereiro e 30 de novembro de cada ano. A segunda parcela deve ser paga até o dia 20 de dezembro. Se o trabalhador solicitar até janeiro do ano correspondente, a primeira parcela pode ser paga por ocasião das férias, desde que requerida no mês de janeiro do respectivo ano.' },
      { question: 'Como calcular o 13º salário proporcional?', answer: 'Para calcular o 13º proporcional, divida seu salário por 12 e multiplique pelos meses trabalhados no ano. Exemplo: salário de R$ 3.600,00 com 8 meses trabalhados = R$ 300,00 × 8 = R$ 2.400,00 de 13º proporcional. Para que um mês seja considerado trabalhado, é necessário ter trabalhado 15 dias ou mais naquele mês.' },
      { question: 'Quais descontos incidem sobre o 13º salário?', answer: 'Na segunda parcela do 13º salário incidem descontos de INSS (conforme tabela progressiva: 7,5% a 14%) sobre o valor total do 13º, e Imposto de Renda Retido na Fonte (IRRF) também sobre o valor total, considerando deduções legais. O FGTS também é devido sobre o valor total do 13º salário, devendo ser depositado pelo empregador na conta vinculada.' },
      { question: 'Faltas não justificadas reduzem o 13º salário?', answer: 'Sim. Para efeito de cálculo do 13º salário, as faltas não justificadas ao longo do mês podem descaracterizar aquele mês como trabalhado. Se o empregado tiver mais de 15 faltas não justificadas no mês, ele perde o direito a 1/12 do 13º correspondente àquele mês. Por isso, o controle de faltas é importante para o cálculo correto.' },
      { question: 'O 13º salário integra o cálculo de outras verbas?', answer: 'O 13º salário em si não gera reflexos em outras verbas, mas a média das horas extras, comissões e adicionais habituais devem ser incluídas no cálculo do 13º. A Súmula 45 do TST estabelece que as horas extras habituais integram o 13º salário. O FGTS sobre o 13º é devido e deve ser depositado mensalmente junto com o FGTS normal.' },
      { question: 'Qual a diferença entre primeira e segunda parcela do 13º?', answer: 'A primeira parcela corresponde à metade do salário bruto do mês anterior ao pagamento, sem descontos de INSS ou IRRF. A segunda parcela corresponde ao valor restante, mas com a incidência de INSS e IRRF sobre o valor total do 13º, descontando-se o valor já pago na primeira parcela. Por isso, a segunda parcela é geralmente menor que a primeira.' },
    ],
    tips: [
      'A primeira parcela do 13º é paga sem descontos de INSS nem IRRF, correspondendo a exatamente metade do salário bruto',
      'A segunda parcela tem descontos de INSS e IRRF sobre o valor total do 13º, resultando em valor líquido menor que a primeira parcela',
      'Faltas não justificadas acima de 15 dias no mês podem reduzir em 1/12 o valor do 13º proporcional',
      'Horas extras e adicionais habituais integram o cálculo do 13º salário pela média dos meses trabalhados',
      'O FGTS sobre o 13º salário é devido e deve ser depositado pelo empregador na conta do FGTS do trabalhador',
    ],
    metaDescription: 'Calcule seu 13º salário online: integral, proporcional, primeira e segunda parcela com descontos de INSS e IRRF. Calculadora gratuita.',
    keywords: ['calcular 13º salário', 'décimo terceiro', '13º proporcional', 'primeira parcela 13º', 'segunda parcela 13º'],
  },
  {
    id: 'fgts',
    title: 'Calculadora de FGTS',
    description: 'Calcule o saldo do seu FGTS mês a mês com base no salário e depósitos mensais. Simule valor com juros, correção e multa rescisória.',
    longIntro: `O Fundo de Garantia do Tempo de Serviço (FGTS) foi criado pela Lei 5.107/1966 e atualmente é regido pela Lei 8.036/1990. O FGTS substituiu o sistema de estabilidade decenal no emprego e tem como objetivo formar uma poupança forçada em nome do trabalhador, que pode ser utilizada em situações específicas como a dispensa sem justa causa, aposentadoria, compra da casa própria ou doenças graves.

Mensalmente, o empregador é obrigado a depositar 8% do salário bruto do funcionário em uma conta vinculada ao FGTS, aberta na Caixa Econômica Federal em nome do trabalhador. Esse depósito é feito até o dia 20 de cada mês e não pode ser descontado do salário do empregado. Além dos depósitos mensais de 8% sobre o salário, o empregador também deposita 8% sobre o valor do 13º salário.

O saldo do FGTS é corrigido pela Taxa Referencial (TR) e acrescido de juros de 3% ao ano. Historicamente, essa correção tem sido motivo de debates judiciais, pois a TR frequentemente fica abaixo da inflação, resultando em perda do poder de compra do saldo. Em 2023, o STF decidiu que a correção do FGTS deve ser feita pelo IPCA em casos de déficit de correção, mas a decisão ainda está em fase de implementação.

Em caso de dispensa sem justa causa, o trabalhador tem direito a sacar todo o saldo do FGTS, além de receber a multa de 40% sobre esse saldo, paga integralmente pelo empregador. Na rescisão por acordo, o saque é de 80% do saldo e a multa é de 20%. O FGTS também pode ser sacado para aquisição da casa própria, financiamento habitacional, aposentadoria, doenças graves como câncer ou HIV, e calamidade pública reconhecida pelo governo.`,
    category: 'Benefícios',
    icon: 'PiggyBank',
    calculatorType: 'fgts',
    questions: [
      { question: 'Qual o percentual de depósito mensal do FGTS?', answer: 'O empregador deve depositar 8% do salário bruto do funcionário em conta vinculada do FGTS na Caixa Econômica Federal. Esse depósito é obrigatório e não pode ser descontado do salário do trabalhador. Além disso, o empregador também deposita 8% sobre o valor do 13º salário. O depósito mensal deve ser feito até o dia 20 de cada mês.' },
      { question: 'Em quais situações posso sacar o FGTS?', answer: 'As principais hipóteses de saque do FGTS são: demissão sem justa causa (saldo total), rescisão por acordo (80% do saldo), aposentadoria, compra da casa própria pelo SFH, amortização ou liquidação de financiamento habitacional, doenças graves (câncer, HIV, doenças cardiovasculares), calamidade pública, falecimento do trabalhador (saque pelos dependentes), saque-aniversário, e saque por necessidade pessoal do FGTS inativo.' },
      { question: 'Como funciona o saque-aniversário do FGTS?', answer: 'O saque-aniversário permite ao trabalhador retirar anualmente uma parte do saldo do FGTS no mês do seu aniversário. O valor a ser sacado varia conforme uma tabela progressiva: quanto maior o saldo, menor o percentual de saque. O percentual varia de 5% (saldo acima de R$ 20.000,00) a 50% (saldo até R$ 500,00). Ao optar pela modalidade, o trabalhador abre mão do saque total em caso de demissão.' },
      { question: 'A multa de 40% do FGTS é sacada do meu saldo?', answer: 'Não. A multa de 40% sobre o saldo do FGTS em caso de dispensa sem justa causa é paga integralmente pelo empregador, e não descontada do saldo do trabalhador. O empregador deve recolher a multa juntamente com as demais verbas rescisórias. O trabalhador saca o saldo integral do FGTS mais o valor da multa paga pelo empregador.' },
      { question: 'Como o FGTS rende ao longo do tempo?', answer: 'O FGTS rende juros de 3% ao ano mais a variação da TR (Taxa Referencial). Historicamente, o rendimento do FGTS é inferior à poupança e muito inferior a outros investimentos como CDBs, Tesouro Direto ou fundos de renda fixa. Por isso, especialistas recomendam sacar o FGTS nas situações permitidas e investir em opções mais rentáveis, especialmente para objetivos de longo prazo como a aposentadoria.' },
    ],
    tips: [
      'O FGTS rende apenas 3% ao ano + TR, muito abaixo de investimentos como Tesouro Direto, CDBs ou fundos de renda fixa',
      'A multa de 40% sobre o saldo do FGTS em caso de demissão sem justa causa é paga pelo empregador, não descontada do seu saldo',
      'Consulte o saldo do FGTS pelo aplicativo FGTS da Caixa Econômica Federal (disponível para Android e iOS)',
      'O saque-aniversário permite retirar parte do saldo anualmente, mas você perde o direito ao saque total em caso de demissão',
      'O FGTS pode ser usado para dar entrada ou amortizar financiamento da casa própria pelo Sistema Financeiro de Habitação',
    ],
    metaDescription: 'Calcule o saldo do seu FGTS mês a mês. Simule depósitos, juros de 3% ao ano, multa de 40% e saques. Calculadora online gratuita.',
    keywords: ['calcular FGTS', 'saldo FGTS', 'multa FGTS 40%', 'depósito FGTS 8%', 'simulador FGTS'],
  },
  {
    id: 'multa-fgts',
    title: 'Calculadora de Multa do FGTS (40% e 20%)',
    description: 'Calcule a multa rescisória de 40% sobre o saldo do FGTS para dispensa sem justa causa e 20% para rescisão por acordo.',
    longIntro: `A multa do FGTS é um dos principais direitos do trabalhador em caso de demissão sem justa causa e está prevista no artigo 18 da Lei 8.036/1990. Esta multa tem como objetivo compensar o trabalhador pela perda do emprego e pelo fato de não poder mais contar com a estabilidade que existia no sistema anterior ao FGTS.

Em caso de dispensa sem justa causa, a multa corresponde a 40% sobre o saldo total do FGTS depositado durante todo o contrato de trabalho, incluindo os depósitos mensais e os depósitos sobre o 13º salário. O valor é pago integralmente pelo empregador através de guia específica (GRRF) e creditado na conta do FGTS do trabalhador, que então pode sacá-lo juntamente com o saldo existente.

A Reforma Trabalhista de 2017 criou a modalidade de rescisão por acordo, que tem regras específicas para a multa do FGTS. Nessa modalidade, a multa é reduzida para 20% sobre o saldo do FGTS. O trabalhador pode sacar 80% do saldo existente, mas perde o direito ao seguro-desemprego. Essa modalidade tem sido cada vez mais utilizada como alternativa à dispensa sem justa causa tradicional.

É importante destacar que a multa do FGTS não se confunde com o saque do saldo. Enquanto o saque do saldo é o valor que a Caixa Econômica Federal libera ao trabalhador, a multa é um valor adicional pago pelo empregador. Em caso de pedido de demissão, não há direito à multa de 40% do FGTS, apenas ao saque do saldo existente. A multa também não é devida em caso de dispensa por justa causa.`,
    category: 'Rescisão e Saída',
    icon: 'AlertTriangle',
    calculatorType: 'multa-fgts',
    questions: [
      { question: 'Quando a multa de 40% do FGTS é devida?', answer: 'A multa de 40% do FGTS é devida exclusivamente em caso de dispensa sem justa causa (imotivada) ou despedida indireta (quando o empregador comete falta grave equiparável à justa causa). Em caso de pedido de demissão ou dispensa por justa causa, a multa não é devida. Na rescisão por acordo, a multa é de 20% sobre o saldo.' },
      { question: 'Qual o valor da multa do FGTS na rescisão por acordo?', answer: 'Na rescisão por acordo, introduzida pela Reforma Trabalhista de 2017 (Lei 13.467/2017), a multa do FGTS é reduzida para 20% sobre o saldo total do FGTS. O trabalhador pode sacar 80% do saldo, mas não tem direito ao seguro-desemprego. As demais verbas rescisórias são pagas integralmente.' },
      { question: 'A multa do FGTS incide sobre o 13º depositado?', answer: 'Sim. A multa de 40% (ou 20% em caso de acordo) incide sobre todo o saldo do FGTS, incluindo não apenas os depósitos mensais de 8% sobre o salário, mas também os depósitos referentes ao 13º salário de todo o período do contrato de trabalho. O cálculo é feito sobre o saldo total existente na conta do FGTS no momento da rescisão.' },
      { question: 'Como a multa do FGTS é recolhida e paga ao trabalhador?', answer: 'A multa do FGTS é recolhida pelo empregador através da Guia de Recolhimento Rescisório do FGTS (GRRF), que pode ser emitida no site da Caixa Econômica Federal. O valor é creditado na conta do FGTS do trabalhador, que então pode solicitar o saque juntamente com o saldo existente. A multa não é paga diretamente ao trabalhador como as demais verbas rescisórias.' },
      { question: 'O trabalhador pode negociar um valor menor para a multa do FGTS?', answer: 'Não. A multa do FGTS é um direito indisponível do trabalhador, não podendo ser negociada para menos em acordo individual. O valor de 40% (ou 20% na rescisão por acordo) é fixado em lei e não pode ser reduzido por acordo entre as partes. Qualquer negociação que reduza o valor da multa é considerada nula de pleno direito pela Justiça do Trabalho.' },
    ],
    tips: [
      'A multa de 40% é calculada sobre o saldo TOTAL do FGTS, incluindo os depósitos de 13º salário de todo o período do contrato',
      'Em caso de pedido de demissão, o trabalhador não tem direito à multa de 40% do FGTS — apenas ao saque do saldo',
      'A multa deve ser paga até o 10º dia corrido após o desligamento, via GRRF (Guia de Recolhimento Rescisório do FGTS)',
      'Na rescisão por acordo (Reforma Trabalhista de 2017), a multa é de 20% e o saque é de 80% do saldo do FGTS',
      'A multa do FGTS não pode ser descontada do salário do trabalhador ou do saldo da sua conta do FGTS',
    ],
    metaDescription: 'Calcule a multa rescisória de 40% do FGTS para dispensa sem justa causa e 20% para rescisão por acordo. Simulador online gratuito.',
    keywords: ['multa FGTS', 'multa 40% FGTS', 'calcular multa FGTS', 'multa rescisória FGTS'],
  },
  {
    id: 'aviso-previo',
    title: 'Calculadora de Aviso Prévio',
    description: 'Calcule os dias de aviso prévio com proporcionalidade ao tempo de serviço. Simule aviso trabalhado, indenizado e os direitos durante o período.',
    longIntro: `O aviso prévio é um direito constitucional do trabalhador, previsto no artigo 7º, inciso XXI da Constituição Federal e regulamentado pela Lei 12.506/2011. O aviso prévio assegura ao trabalhador o recebimento dos dias proporcionais ao tempo de serviço quando dispensado sem justa causa, ou exige que o empregado comunique com antecedência seu pedido de demissão.

O aviso prévio mínimo é de 30 dias para contratos de até 1 ano de trabalho. Para cada ano adicional completo de serviço prestado ao mesmo empregador, acrescentam-se 3 dias ao aviso prévio, conforme determina a Lei 12.506/2011. O aviso prévio máximo é de 90 dias, sendo 30 dias base mais 60 dias adicionais (equivalentes a 20 anos completos de trabalho na mesma empresa).

O aviso prévio pode ser concedido em duas modalidades distintas. No aviso prévio trabalhado, o empregado cumpre o período na empresa, mas com redução de 2 horas diárias de jornada ou direito a faltar 7 dias corridos sem prejuízo do salário para procurar novo emprego. No aviso prévio indenizado, o empregador paga o valor correspondente aos dias de aviso sem exigir que o trabalhador cumpra o período, sendo esta a modalidade mais comum em dispensas sem justa causa.

O período de aviso prévio, seja trabalhado ou indenizado, integra o contrato de trabalho para todos os efeitos legais. Isso significa que o tempo de aviso prévio conta para férias (podendo gerar direito a férias proporcionais), 13º salário e FGTS. Durante o aviso prévio trabalhado, o empregado também tem direito ao vale-transporte e demais benefícios normalmente recebidos.`,
    category: 'Rescisão e Saída',
    icon: 'Bell',
    calculatorType: 'aviso-previo',
    questions: [
      { question: 'Como calcular o aviso prévio proporcional ao tempo de serviço?', answer: 'O aviso prévio proporcional segue a Lei 12.506/2011. São 30 dias para contratos de até 1 ano de trabalho. Acrescentam-se 3 dias para cada ano adicional completo de serviço prestado ao mesmo empregador, limitado ao máximo de 90 dias. Exemplo: 5 anos completos de trabalho = 30 + (4 × 3) = 42 dias de aviso prévio. Para 10 anos = 30 + (9 × 3) = 57 dias.' },
      { question: 'Qual a diferença entre aviso prévio trabalhado e indenizado?', answer: 'No aviso prévio trabalhado, o empregado cumpre o período na empresa trabalhando normalmente, mas com redução de 2 horas diárias de jornada (ou 7 dias corridos de folga) para buscar novo emprego. No aviso indenizado, o empregador paga o valor dos dias sem exigir trabalho, sendo mais comum em dispensas sem justa causa. O aviso indenizado evita o convívio desgastante após a comunicação da dispensa.' },
      { question: 'O aviso prévio conta como tempo de serviço para todos os efeitos?', answer: 'Sim. O período de aviso prévio, seja na modalidade trabalhada ou indenizada, integra o contrato de trabalho para todos os efeitos legais. Isso inclui férias (período aquisitivo), 13º salário, FGTS e contagem de tempo para fins de adicional de aviso prévio. O TST já consolidou esse entendimento em sua jurisprudência.' },
      { question: 'Quais os direitos do trabalhador durante o aviso prévio trabalhado?', answer: 'Durante o aviso prévio trabalhado, o empregado tem direito a: redução de 2 horas diárias de jornada ou 7 dias corridos de folga para buscar novo emprego, vale-transporte normalmente, manutenção do plano de saúde e demais benefícios, e salário normal acrescido das verbas contratuais. O empregado também pode sair mais cedo ou faltar sem prejuízo do salário.' },
      { question: 'O que acontece se o empregador não cumprir o aviso prévio?', answer: 'Se o empregador dispensar o trabalhador sem conceder o aviso prévio (trabalhado ou indenizado), os dias de aviso devem ser pagos em dobro. Esse direito está previsto no artigo 487, §1º da CLT. Se o empregado pedir demissão e não cumprir o aviso prévio, o empregador pode descontar o valor correspondente das verbas rescisórias.' },
    ],
    tips: [
      'No aviso prévio trabalhado, você tem direito a 2 horas de redução diária da jornada ou a 7 dias corridos de folga para buscar novo emprego',
      'O aviso prévio indenizado integra o tempo de serviço para todos os efeitos legais: férias, 13º salário, FGTS e contagem de tempo',
      'Se o empregador não cumprir o aviso prévio, os dias devem ser pagos em dobro ao trabalhador',
      'O aviso prévio de 30 a 90 dias conforme o tempo de serviço é um direito proporcional ao tempo na empresa',
      'Durante o aviso prévio, o trabalhador mantém todos os benefícios como plano de saúde, vale-transporte e vale-refeição',
    ],
    metaDescription: 'Calcule o aviso prévio online: dias proporcionais ao tempo de serviço, aviso trabalhado e indenizado. Simulador gratuito atualizado Lei 12.506/2011.',
    keywords: ['calcular aviso prévio', 'aviso prévio proporcional', 'aviso prévio indenizado', 'aviso prévio trabalhado'],
  },
  {
    id: 'inss',
    title: 'Calculadora de INSS',
    description: 'Calcule o desconto do INSS sobre seu salário com base na tabela progressiva. Descubra o valor da contribuição previdenciária e o salário líquido.',
    longIntro: `O Instituto Nacional do Seguro Social (INSS) é o órgão federal responsável pela previdência social dos trabalhadores brasileiros. A contribuição ao INSS garante ao trabalhador acesso a uma série de benefícios previdenciários como aposentadoria por idade, aposentadoria por tempo de contribuição, auxílio-doença, salário-maternidade, pensão por morte, auxílio-acidente e reabilitação profissional.

Para empregados com carteira assinada, a contribuição ao INSS é descontada diretamente na folha de pagamento pela empresa, que repassa o valor ao governo. O desconto segue alíquotas progressivas conforme a tabela vigente, que em 2024 varia de 7,5% a 14% sobre faixas salariais. O cálculo é feito de forma progressiva por faixa, ou seja, cada parte do salário é tributada pela alíquota correspondente à sua faixa, e não a maior alíquota sobre o salário total.

Para trabalhadores autônomos e contribuintes individuais, a alíquota de contribuição é de 11% sobre o salário mínimo (para quem opta pelo plano simplificado) ou 20% sobre o valor declarado de contribuição, que pode variar entre o salário mínimo e o teto do INSS. O Microempreendedor Individual (MEI) contribui com 11% do salário mínimo através do DAS mensal.

O valor contribuído ao INSS impacta diretamente o valor dos benefícios futuros, especialmente a aposentadoria. Quanto maior o valor e o tempo de contribuição, maior será o valor do benefício. Por isso, é importante manter o histórico de contribuições regular e atualizado, evitando lacunas que possam prejudicar a concessão ou o valor dos benefícios previdenciários.`,
    category: 'Benefícios',
    icon: 'Shield',
    calculatorType: 'inss',
    questions: [
      { question: 'Quais as alíquotas atuais de INSS para empregados com carteira assinada?', answer: 'A tabela progressiva de INSS para 2024 tem 4 faixas: 1ª faixa: até R$ 1.412,00 (7,5%); 2ª faixa: de R$ 1.412,01 a R$ 2.666,68 (9%); 3ª faixa: de R$ 2.666,69 a R$ 4.000,03 (12%); 4ª faixa: de R$ 4.000,04 a R$ 7.786,02 (14%). O desconto é progressivo: cada faixa tem sua própria alíquota.' },
      { question: 'Qual é o teto do INSS para 2024?', answer: 'O teto do INSS para 2024 é de R$ 7.786,02. Este é o valor máximo que serve de base para cálculo da contribuição previdenciária e também o valor máximo dos benefícios pagos pelo INSS, como aposentadorias e pensões. Nenhum benefício do INSS pode ultrapassar este valor, exceto em casos específicos previstos em lei.' },
      { question: 'O MEI precisa contribuir para o INSS e quais benefícios tem direito?', answer: 'Sim. O MEI (Microempreendedor Individual) contribui com 11% do salário mínimo vigente através do DAS (Documento de Arrecadação do Simples Nacional). Em 2024, são R$ 155,32 mensais. Essa contribuição garante ao MEI acesso a benefícios como aposentadoria por idade, auxílio-doença, salário-maternidade, pensão por morte e auxílio-reclusão.' },
      { question: 'Como o desconto progressivo do INSS funciona na prática?', answer: 'O desconto do INSS é progressivo, não cumulativo. Isso significa que cada faixa salarial tem sua própria alíquota. Exemplo: salário de R$ 5.000,00. 1ª faixa: R$ 1.412,00 × 7,5% = R$ 105,90. 2ª faixa: R$ 1.254,68 × 9% = R$ 112,92. 3ª faixa: R$ 1.333,35 × 12% = R$ 160,00. 4ª faixa: R$ 999,99 × 14% = R$ 140,00. Total INSS = R$ 518,82.' },
      { question: 'Como o tempo de contribuição ao INSS afeta a aposentadoria?', answer: 'O tempo de contribuição é um dos principais fatores para a concessão e o valor da aposentadoria. Para a aposentadoria por tempo de contribuição, homens precisam de 35 anos e mulheres de 30 anos de contribuição. Para a aposentadoria por idade, homens precisam de 65 anos e mulheres de 62 anos, com no mínimo 15 anos de contribuição.' },
    ],
    tips: [
      'O desconto do INSS é progressivo por faixa salarial, não se aplica a maior alíquota sobre o salário total — cada faixa tem seu próprio percentual',
      'O tempo de contribuição ao INSS é essencial para a aposentadoria. Mantenha seu histórico de contribuições regular e atualizado',
      'Contribuições em atraso podem gerar multa e juros. Mantenha o pagamento em dia para não perder benefícios previdenciários',
      'Autônomos podem contribuir com 11% do salário mínimo (plano simplificado) ou 20% sobre o valor desejado (plano normal)',
      'Consulte seu extrato previdenciário (CNIS) pelo site Meu INSS para verificar se todas as contribuições estão registradas corretamente',
    ],
    metaDescription: 'Calcule o desconto de INSS online com a tabela progressiva vigente. Simule contribuição previdenciária e salário líquido. Calculadora gratuita.',
    keywords: ['calcular INSS', 'tabela INSS', 'desconto INSS', 'contribuição INSS', 'salário líquido'],
  },
  {
    id: 'salario-liquido',
    title: 'Calculadora de Salário Líquido',
    description: 'Calcule seu salário líquido a partir do salário bruto com descontos de INSS, IRRF, vale-transporte, dependentes e pensão alimentícia.',
    longIntro: `O salário líquido é o valor que efetivamente cai na conta do trabalhador ao final do mês, após todos os descontos legais e facultativos serem aplicados sobre o salário bruto. Entender a diferença entre salário bruto e líquido é fundamental para o planejamento financeiro pessoal e para negociações salariais.

Os principais descontos que incidem sobre o salário bruto são o INSS (contribuição previdenciária com alíquotas progressivas de 7,5% a 14%), o Imposto de Renda Retido na Fonte (IRRF, com alíquotas progressivas de 0% a 27,5%), e o vale-transporte (até 6% do salário, mas apenas se o trabalhador optar por receber o benefício). Além desses, existem descontos facultativos como plano de saúde, seguro de vida, previdência privada, contribuição sindical e pensão alimentícia.

O cálculo do IRRF leva em conta diversas deduções legais que reduzem a base de cálculo do imposto. As principais deduções são o valor de R$ 189,59 por dependente para fins de IR, a pensão alimentícia judicial, e a contribuição ao INSS. A base de cálculo do IRRF é o salário bruto menos o desconto do INSS, menos as deduções por dependentes, menos a pensão alimentícia. Sobre essa base, aplica-se a alíquota correspondente à faixa salarial e deduz-se a parcela a deduzir.

Conhecer detalhadamente os descontos que incidem sobre o salário ajuda o trabalhador a planejar suas finanças e a identificar possíveis erros na folha de pagamento. É importante verificar mensalmente o holerite para conferir se os descontos estão corretos e se os valores correspondem às alíquotas vigentes da tabela de INSS e IRRF.`,
    category: 'Benefícios',
    icon: 'Wallet',
    calculatorType: 'salario-liquido',
    questions: [
      { question: 'Qual a diferença entre salário bruto e salário líquido?', answer: 'Salário bruto é o valor total do contrato de trabalho, acordado entre empregado e empregador, sem qualquer desconto. Salário líquido é o valor que o trabalhador efetivamente recebe após todos os descontos legais e facultativos. A diferença entre os dois pode chegar a 30% ou mais, dependendo da faixa salarial e dos descontos aplicáveis.' },
      { question: 'Quais descontos são obrigatórios no salário?', answer: 'Os descontos obrigatórios por lei são INSS (contribuição previdenciária) e IRRF (Imposto de Renda Retido na Fonte), quando aplicável conforme a faixa salarial. Descontos como vale-transporte, plano de saúde, seguro de vida, previdência privada e contribuição sindical são facultativos e dependem de adesão voluntária do trabalhador ou de previsão em acordo coletivo.' },
      { question: 'Como calcular o IRRF na fonte passo a passo?', answer: '1) Salário bruto; 2) Subtraia o desconto do INSS; 3) Subtraia R$ 189,59 por dependente; 4) Subtraia pensão alimentícia (se houver); 5) O resultado é a base de cálculo; 6) Aplique a alíquota conforme a faixa: até R$ 2.112,00 (isento), R$ 2.112,01 a R$ 2.826,65 (7,5%), R$ 2.826,66 a R$ 3.751,05 (15%), R$ 3.751,06 a R$ 4.664,68 (22,5%), acima de R$ 4.664,68 (27,5%); 7) Subtraia a parcela a deduzir.' },
      { question: 'Vale-transporte é obrigatório? Como funciona o desconto?', answer: 'O vale-transporte é um benefício optativo, não obrigatório. O trabalhador pode recusá-lo por escrito. Se optar por receber, o desconto mensal é de até 6% do salário base, limitado ao valor necessário para cobrir as despesas de deslocamento casa-trabalho. Se o custo do transporte for menor que 6% do salário, o desconto será apenas o valor do transporte.' },
      { question: 'Plano de saúde e previdência privada podem ser descontados do salário?', answer: 'Sim, desde que haja autorização prévia e por escrito do funcionário. O plano de saúde pode ser descontado integralmente ou parcialmente, conforme o contrato com a operadora. A previdência privada (PGBL ou VGBL) também pode ser descontada mediante adesão voluntária. Esses descontos não têm relação com o IRRF ou INSS.' },
    ],
    tips: [
      'A base de cálculo do IRRF é o salário bruto menos INSS e deduções legais: R$ 189,59 por dependente e pensão alimentícia judicial',
      'O vale-transporte é opcional: você pode recusá-lo por escrito se não precisar, evitando o desconto de até 6% do salário',
      'Plano de saúde e previdência privada são descontos facultativos que exigem autorização prévia do funcionário',
      'Verifique seu holerite mensalmente para conferir se os descontos de INSS e IRRF estão de acordo com as tabelas vigentes',
      'Dependentes para fins de IRRF incluem cônjuges, filhos de até 21 anos (ou 24 se universitários), e tutelados/curatelados',
    ],
    metaDescription: 'Calcule seu salário líquido online: simule descontos de INSS, IRRF e vale-transporte a partir do salário bruto. Calculadora gratuita e atualizada.',
    keywords: ['salário líquido', 'calcular salário líquido', 'salário bruto para líquido', 'descontos salariais'],
  },
  {
    id: 'seguro-desemprego',
    title: 'Calculadora de Seguro-Desemprego',
    description: 'Calcule quantas parcelas do seguro-desemprego você tem direito e o valor de cada parcela com base no seu salário e tempo trabalhado.',
    longIntro: `O seguro-desemprego é um benefício temporário concedido ao trabalhador dispensado sem justa causa, garantido pela Lei 7.998/1990 e pela Constituição Federal em seu artigo 7º, incisos I e II. O benefício tem como objetivo proporcionar assistência financeira ao trabalhador durante o período de busca por recolocação profissional.

O número de parcelas do seguro-desemprego varia conforme o tempo trabalhado nos últimos 36 meses e a quantidade de solicitações anteriores. Para a primeira solicitação: 4 parcelas (6 a 11 meses trabalhados) ou 5 parcelas (12 a 23 meses). Para a segunda solicitação: 3 parcelas (6 a 11 meses), 5 parcelas (12 a 23 meses). Para a terceira solicitação em diante: 3 parcelas (6 a 11 meses), 5 parcelas (12 a 23 meses). Em qualquer caso, o mínimo de meses trabalhados é 6 nos últimos 36 meses.

O valor de cada parcela é calculado com base na média dos três últimos salários recebidos antes da dispensa, seguindo faixas de reajuste estabelecidas periodicamente pelo governo federal. O benefício não pode ser inferior ao salário mínimo vigente nem superior ao teto legal estabelecido. Em 2024, o valor máximo da parcela é de R$ 2.313,74.

Para solicitar o seguro-desemprego, o trabalhador deve apresentar os documentos exigidos no momento da rescisão, incluindo as guias fornecidas pelo empregador (requerimento do seguro-desemprego). A solicitação pode ser feita presencialmente nas unidades das Superintendências Regionais do Trabalho, agências da Caixa Econômica Federal, ou online pelo portal Gov.br e aplicativo Carteira de Trabalho Digital.`,
    category: 'Rescisão e Saída',
    icon: 'Briefcase',
    calculatorType: 'seguro-desemprego',
    questions: [
      { question: 'Quantas parcelas do seguro-desemprego tenho direito?', answer: 'O número de parcelas depende do tempo trabalhado nos últimos 36 meses e da quantidade de solicitações anteriores. Para a 1ª solicitação: 6 a 11 meses = 4 parcelas, 12 a 23 meses = 5 parcelas. Para a 2ª solicitação: 6 a 11 meses = 3 parcelas, 12 a 23 meses = 5 parcelas. Para a 3ª solicitação em diante: 6 a 11 meses = 3 parcelas, 12 a 23 meses = 5 parcelas.' },
      { question: 'Qual o valor de cada parcela do seguro-desemprego?', answer: 'O valor é calculado pela média dos 3 últimos salários: até R$ 2.041,39 multiplique a média por 0,8; de R$ 2.041,40 a R$ 3.402,65, o valor que exceder R$ 2.041,39 multiplica-se por 0,5 e soma-se a R$ 1.633,11; acima de R$ 3.402,65, o valor da parcela é fixo de R$ 2.313,74. O valor nunca pode ser inferior ao salário mínimo.' },
      { question: 'Quem tem direito ao seguro-desemprego?', answer: 'Tem direito o trabalhador dispensado sem justa causa, que tenha trabalhado pelo menos 6 meses nos últimos 36 meses, que não possua renda própria para sustento próprio ou familiar, que não esteja recebendo benefício previdenciário (exceto pensão por morte e auxílio-acidente), e que não tenha solicitado o seguro-desemprego nos últimos 4 meses.' },
      { question: 'Como solicitar o seguro-desemprego?', answer: 'A solicitação pode ser feita de forma online pelo portal Gov.br ou pelo aplicativo Carteira de Trabalho Digital, ou presencialmente nas unidades das Superintendências Regionais do Trabalho, agências da Caixa Econômica Federal ou postos do Sine. O prazo para solicitar é do 7º ao 120º dia após a data da dispensa, e é necessário ter as guias fornecidas pelo empregador.' },
      { question: 'Perco o seguro-desemprego se conseguir um novo emprego?', answer: 'Sim. Se o trabalhador conseguir um novo emprego com carteira assinada durante o período de recebimento do seguro-desemprego, ele perde o direito às parcelas restantes. É obrigatório comunicar o retorno ao trabalho ao órgão pagador. No entanto, se o novo emprego for encerrado sem justa causa, o trabalhador pode solicitar o saldo remanescente das parcelas.' },
    ],
    tips: [
      'O seguro-desemprego é pago em 3 a 5 parcelas mensais consecutivas, depositadas em conta da Caixa ou Poupança Social Digital',
      'Para ter direito ao benefício, é necessário não possuir renda própria para sustento e não estar recebendo benefício previdenciário',
      'O prazo para solicitar o seguro-desemprego é do 7º ao 120º dia após a data da dispensa — não perca o prazo',
      'Se conseguir novo emprego com carteira assinada, você perde o direito às parcelas restantes do seguro-desemprego',
      'A solicitação pode ser feita online pelo aplicativo Carteira de Trabalho Digital ou pelo portal Gov.br, sem sair de casa',
    ],
    metaDescription: 'Calcule o seguro-desemprego online: número de parcelas e valor de cada uma. Simulador atualizado com as regras e faixas vigentes.',
    keywords: ['seguro desemprego', 'calcular seguro desemprego', 'parcelas seguro desemprego'],
  },
  {
    id: 'juros-compostos',
    title: 'Calculadora de Juros Compostos',
    description: 'Calcule juros compostos para investimentos, financiamentos e correção de débitos trabalhistas com aportes mensais.',
    longIntro: `Os juros compostos, conhecidos como "juros sobre juros", são a base da matemática financeira moderna e essenciais para entender tanto o crescimento de investimentos quanto a evolução de dívidas. No contexto trabalhista, os juros compostos são aplicados sobre os débitos reconhecidos em juízo, na forma de juros de mora, que incidem sobre o valor principal atualizado monetariamente.

A fórmula fundamental dos juros compostos é M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros por período e t é o tempo. Para a correção de débitos trabalhistas, os juros de mora de 1% ao mês são aplicados de forma composta sobre o valor principal já corrigido pela TR, conforme determina a legislação trabalhista e a jurisprudência do TST.

Entender juros compostos é fundamental para o planejamento financeiro pessoal, pois demonstra o poder do tempo sobre o dinheiro. Um pequeno investimento mensal pode se transformar em um grande patrimônio ao longo dos anos graças ao efeito exponencial dos juros compostos. O segredo é começar cedo e manter a consistência dos aportes mensais.

Nossa calculadora de juros compostos permite simular diferentes cenários de investimento variando o valor inicial, aporte mensal, taxa de juros e período. Você pode visualizar o crescimento do seu patrimônio ao longo do tempo e comparar diferentes estratégias de investimento. A ferramenta também é útil para calcular a evolução de débitos trabalhistas com juros de mora.`,
    category: 'Finanças e Correção',
    icon: 'TrendingUp',
    calculatorType: 'juros-compostos',
    questions: [
      { question: 'Qual a diferença entre juros simples e juros compostos?', answer: 'Nos juros simples, a taxa incide apenas sobre o valor principal inicial, resultando em crescimento linear. Nos juros compostos, a taxa incide sobre o valor acumulado a cada período (juros sobre juros), gerando crescimento exponencial. Por exemplo, R$ 10.000,00 a 1% ao mês em 12 meses: juros simples = R$ 11.200,00; juros compostos = R$ 11.268,25.' },
      { question: 'Como calcular juros compostos para causas trabalhistas?', answer: 'Na Justiça do Trabalho, aplicam-se juros de mora de 1% ao mês sobre o valor principal corrigido monetariamente. O cálculo é mês a mês, com capitalização composta. Primeiro corrige-se o valor pelo índice de correção monetária (TR) e depois aplicam-se os juros de mora de 1% ao mês de forma composta sobre o valor corrigido.' },
      { question: 'Como os juros compostos podem me ajudar a investir melhor?', answer: 'Os juros compostos são o melhor amigo do investidor de longo prazo. Investir R$ 500,00 por mês a 0,8% ao mês resulta em aproximadamente R$ 95.000,00 em 10 anos, R$ 290.000,00 em 20 anos e R$ 750.000,00 em 30 anos. Quanto mais cedo você começar, maior o efeito multiplicador dos juros compostos sobre seu patrimônio.' },
      { question: 'Qual a taxa de juros compostos usada na correção de débitos trabalhistas?', answer: 'Para débitos trabalhistas, a taxa de juros de mora é de 1% ao mês, aplicada de forma composta (juros sobre juros). Essa taxa incide sobre o valor principal já corrigido monetariamente pela TR (Taxa Referencial). O entendimento atual do TST é que os juros de mora são computados mês a mês sobre o valor atualizado.' },
      { question: 'Qual o impacto de aportes mensais nos juros compostos?', answer: 'Aportes mensais regulares potencializam significativamente o efeito dos juros compostos. Por exemplo: investindo R$ 0 inicial e R$ 1.000,00 por mês a 1% ao mês, em 10 anos você terá aproximadamente R$ 230.000,00 (sendo R$ 120.000,00 de aportes e R$ 110.000,00 de juros). Em 20 anos, seriam cerca de R$ 990.000,00.' },
    ],
    tips: [
      'Comece a investir o quanto antes: o tempo é o maior aliado dos juros compostos — cada ano a mais faz grande diferença no resultado final',
      'Na correção de débitos trabalhistas, os juros de mora de 1% ao mês são aplicados de forma composta sobre o valor corrigido',
      'Use a calculadora para simular diferentes cenários com aportes mensais, variando valor, taxa e prazo para encontrar a melhor estratégia',
      'A consistência dos aportes é mais importante que o valor inicial: R$ 200/mês por 30 anos supera R$ 50.000 parados por 10 anos',
      'Lembre-se de descontar a inflação real ao projetar investimentos de longo prazo para ter uma visão realista do poder de compra',
    ],
    metaDescription: 'Calcule juros compostos online: investimentos, financiamentos e correção de débitos trabalhistas. Simulador gratuito com aportes mensais.',
    keywords: ['juros compostos', 'calcular juros compostos', 'simulador juros compostos', 'juros compostos investimentos'],
  },
  {
    id: 'correcao-monetaria',
    title: 'Calculadora de Correção Monetária',
    description: 'Corrija valores monetários pelo IPCA, INPC, TR ou Poupança. Simule a atualização de débitos trabalhistas, cíveis e aluguéis.',
    longIntro: `A correção monetária é um mecanismo essencial para preservar o poder de compra da moeda ao longo do tempo em um cenário de inflação. No âmbito trabalhista e cível, a correção monetária é aplicada sobre valores devidos para evitar que o credor seja prejudicado pela demora no pagamento.

No contexto trabalhista, o índice de correção mais comumente aplicado é a TR (Taxa Referencial), acrescida de juros de mora de 1% ao mês. No entanto, decisões recentes do Supremo Tribunal Federal (STF) e do Tribunal Superior do Trabalho (TST) têm gerado debates sobre qual índice deve ser aplicado, com algumas decisões determinando a aplicação do IPCA-E em substituição à TR.

Existem diversos índices de correção monetária no Brasil, cada um com sua finalidade específica. O IPCA (Índice de Preços ao Consumidor Amplo) é considerado o índice oficial de inflação do Brasil e é utilizado como referência pelo Banco Central para o sistema de metas de inflação. O INPC (Índice Nacional de Preços ao Consumidor) considera famílias com renda de até 5 salários mínimos e é usado para reajuste salarial. O IGPM é comumente utilizado em contratos de aluguel e energia elétrica.`,
    category: 'Finanças e Correção',
    icon: 'DollarSign',
    calculatorType: 'correcao-monetaria',
    questions: [
      { question: 'Qual índice usar para correção de débitos trabalhistas atualmente?', answer: 'Atualmente, a orientação predominante é utilizar a TR (Taxa Referencial) para correção monetária dos débitos trabalhistas, acrescida de juros de mora de 1% ao mês. No entanto, decisões recentes do STF (ADC 58) e do TST têm alterado os índices aplicáveis. Em alguns casos, o IPCA-E vem sendo aplicado como índice de correção. Consulte sempre a jurisprudência mais recente.' },
      { question: 'Qual a diferença entre IPCA e INPC?', answer: 'O IPCA (Índice de Preços ao Consumidor Amplo) é o índice oficial de inflação do Brasil e serve como referência para o sistema de metas de inflação do Banco Central. O INPC (Índice Nacional de Preços ao Consumidor) considera apenas famílias com renda de até 5 salários mínimos. Ambos são calculados pelo IBGE, mas o INPC é geralmente usado para reajuste de salários.' },
      { question: 'O que é a TR e por que é controversa para correção de débitos?', answer: 'A TR (Taxa Referencial) foi criada pelo governo federal como taxa básica de juros e calculada com base na taxa média dos CDBs de 30 dias dos grandes bancos. Atualmente, a TR está próxima de zero (0% ou valores muito baixos), o que gerou intensos debates sobre sua adequação para correção de débitos trabalhistas. Muitos advogados defendem a aplicação do IPCA, que reflete melhor a inflação real.' },
      { question: 'Qual índice usar para reajuste de aluguéis?', answer: 'O índice mais comum para reajuste de aluguéis é o IGPM (Índice Geral de Preços do Mercado), calculado pela FGV. No entanto, o IPCA também é utilizado em muitos contratos. O índice aplicável deve estar previsto no contrato de locação. Em caso de ausência de previsão contratual, pode-se utilizar o IPCA como índice padrão.' },
      { question: 'Como calcular a correção monetária acumulada por vários meses?', answer: 'Para calcular a correção monetária acumulada, utiliza-se a fórmula: Valor Corrigido = Valor Original × (1 + taxa1) × (1 + taxa2) × ... × (1 + taxan), onde cada taxa é a variação mensal do índice escolhido. A forma mais precisa é utilizar as tabelas de correção disponíveis em sites oficiais ou nossa calculadora que já aplica a metodologia correta.' },
    ],
    tips: [
      'Para causas trabalhistas, utilize TR + juros de mora de 1% ao mês como índice padrão, mas fique atento às decisões judiciais recentes',
      'O IPCA é o índice mais recomendado para correção de valores em contratos cíveis e aluguéis quando não houver previsão contratual específica',
      'A correção monetária incide sobre o valor devido desde a data em que o pagamento deveria ter sido feito até a data do efetivo pagamento',
      'Para cálculos precisos em processos judiciais, utilize as tabelas oficiais dos tribunais ou nossa calculadora com índices atualizados',
      'Diferentes índices aplicados ao mesmo valor por um mesmo período podem resultar em diferenças significativas no valor final corrigido',
    ],
    metaDescription: 'Corrija valores monetários online pelos índices IPCA, INPC, TR e Poupança. Calculadora de correção para débitos trabalhistas e cíveis.',
    keywords: ['correção monetária', 'calcular correção monetária', 'IPCA', 'INPC', 'TR', 'correção débitos trabalhistas'],
  },
  {
    id: 'adicional-periculosidade',
    title: 'Calculadora de Adicional de Periculosidade',
    description: 'Calcule o adicional de periculosidade de 30% sobre o salário base devido a trabalhadores expostos a atividades perigosas.',
    longIntro: `O adicional de periculosidade é um direito dos trabalhadores que exercem atividades consideradas perigosas pela legislação trabalhista, regulamentado pelo artigo 193 da CLT. O adicional corresponde a 30% sobre o salário base do empregado, sem inclusão de gratificações, prêmios ou outros adicionais na base de cálculo.

São consideradas atividades ou operações perigosas, na forma da regulamentação aprovada pelo Ministério do Trabalho e Emprego, aquelas que, por sua natureza ou métodos de trabalho, impliquem risco acentuado em virtude de exposição permanente do trabalhador a inflamáveis, explosivos, energia elétrica, radiações ionizantes, substâncias radioativas, e atividades de segurança patrimonial ou pessoal (vigilância).

A caracterização da periculosidade é feita exclusivamente por perícia técnica, realizada por engenheiro do trabalho ou médico do trabalho, que emitirá o Laudo Técnico de Condições Ambientais do Trabalho (LTCAT). O laudo pericial é a principal prova utilizada em processos trabalhistas para comprovar a exposição do trabalhador a condições perigosas e garantir o direito ao adicional.

O adicional de periculosidade difere do adicional de insalubridade em sua natureza e base de cálculo. Enquanto a insalubridade protege contra agentes nocivos à saúde (químicos, físicos, biológicos), a periculosidade protege contra riscos de morte ou acidentes graves. A base de cálculo da periculosidade é o salário base, enquanto a insalubridade calcula-se sobre o salário mínimo.`,
    category: 'Adicionais Salariais',
    icon: 'Zap',
    calculatorType: 'periculosidade',
    questions: [
      { question: 'Qual o percentual do adicional de periculosidade e como é calculado?', answer: 'O adicional de periculosidade é de 30% sobre o salário base do empregado, conforme artigo 193, §1º da CLT. O cálculo é simples: Salário Base × 0,30 = Valor do Adicional. Exemplo: salário base de R$ 2.500,00 → adicional de R$ 750,00 → total de R$ 3.250,00. Gratificações, prêmios e outros adicionais não entram na base de cálculo.' },
      { question: 'Quais atividades dão direito ao adicional de periculosidade?', answer: 'As atividades que dão direito ao adicional de periculosidade estão listadas na Norma Regulamentadora NR-16 do Ministério do Trabalho. Incluem: inflamáveis (postos de gasolina, indústrias químicas), explosivos, energia elétrica (eletricistas), radiações ionizantes e substâncias radioativas, e atividades de vigilância patrimonial e segurança pessoal (vigilantes).' },
      { question: 'Um trabalhador pode receber adicional de periculosidade e insalubridade juntos?', answer: 'Antes da Reforma Trabalhista de 2017, a CLT proibia o acúmulo de ambos os adicionais. O trabalhador precisava optar pelo que fosse mais benéfico. A Reforma Trabalhista (Lei 13.467/2017) alterou o artigo 193, §2º da CLT para permitir o acúmulo de ambos os adicionais, desde que haja previsão em acordo ou convenção coletiva de trabalho.' },
      { question: 'A perícia técnica é obrigatória para caracterizar a periculosidade?', answer: 'Sim. A caracterização da periculosidade exige perícia técnica realizada por engenheiro do trabalho ou médico do trabalho, conforme artigo 195 da CLT. O perito emitirá o Laudo Técnico de Condições Ambientais do Trabalho (LTCAT) que servirá como prova da exposição do trabalhador a condições perigosas. Sem o laudo pericial, o direito ao adicional pode não ser reconhecido.' },
      { question: 'O adicional de periculosidade integra o salário para outros benefícios?', answer: 'Sim. O adicional de periculosidade recebido de forma habitual integra o salário do trabalhador para todos os efeitos legais, incluindo férias (com 1/3 constitucional), 13º salário, FGTS, aviso prévio e horas extras. Isso significa que o adicional deve ser incluído na base de cálculo de todas essas verbas trabalhistas.' },
    ],
    tips: [
      'O adicional de periculosidade é de 30% sobre o salário base, calculado sem inclusão de gratificações, prêmios ou comissões',
      'A caracterização da periculosidade exige perícia técnica realizada por engenheiro do trabalho ou médico do trabalho',
      'O adicional integra o salário para todos os efeitos legais: férias, 13º salário, FGTS, aviso prévio e horas extras',
      'Vigilantes, eletricistas, frentistas de postos de gasolina e trabalhadores de indústrias químicas estão entre as categorias com direito ao adicional',
      'O adicional de periculosidade pode ser acumulado com o adicional de insalubridade se houver previsão em acordo coletivo',
    ],
    metaDescription: 'Calcule o adicional de periculosidade online: 30% sobre o salário base para atividades perigosas. Simulador gratuito CLT atualizado.',
    keywords: ['adicional de periculosidade', 'periculosidade', '30% periculosidade', 'atividade perigosa'],
  },
  {
    id: 'adicional-insalubridade',
    title: 'Calculadora de Adicional de Insalubridade',
    description: 'Calcule o adicional de insalubridade de 10%, 20% ou 40% sobre o salário mínimo para atividades nocivas à saúde do trabalhador.',
    longIntro: `O adicional de insalubridade é um direito dos trabalhadores expostos a agentes nocivos à saúde acima dos limites de tolerância estabelecidos pelo Ministério do Trabalho. Regulamentado pelo artigo 192 da CLT e pelas Normas Regulamentadoras NR-15, o adicional varia conforme o grau de insalubridade a que o trabalhador está exposto.

Os graus de insalubridade são classificados em três níveis: mínimo (10%), médio (20%) e máximo (40%), calculados sobre o salário mínimo nacional ou regional, exceto para categorias que possuem previsão em convenção coletiva estabelecendo base de cálculo diferente. A caracterização e classificação da insalubridade são feitas por perícia técnica.

Agentes insalubres incluem ruído excessivo acima dos limites de tolerância, calor ou frio intensos (exposição a temperaturas extremas), agentes químicos (gases, vapores, névoas e poeiras tóxicas), agentes biológicos (hospitais, laboratórios, coleta de lixo), poeiras minerais (mineração, cerâmica, mármore), radiações ionizantes e não ionizantes, umidade excessiva e vibrações.

A eliminação ou neutralização da insalubridade com Equipamentos de Proteção Individual (EPIs) adequados e certificados pode reduzir ou até eliminar o direito ao adicional. No entanto, o simples fornecimento do EPI não basta — o empregador deve fiscalizar o uso correto e o equipamento deve ser eficaz para neutralizar o agente insalubre, conforme Súmula 289 do TST.`,
    category: 'Adicionais Salariais',
    icon: 'AlertCircle',
    calculatorType: 'insalubridade',
    questions: [
      { question: 'Quais os percentuais do adicional de insalubridade para cada grau?', answer: 'Grau máximo: 40% do salário mínimo; grau médio: 20% do salário mínimo; grau mínimo: 10% do salário mínimo. A classificação depende do agente insalubre e do nível de exposição. Exemplo com salário mínimo de R$ 1.412,00 (2024): grau máximo = R$ 564,80; grau médio = R$ 282,40; grau mínimo = R$ 141,20.' },
      { question: 'Quais atividades e agentes são considerados insalubres pela NR-15?', answer: 'A NR-15 do Ministério do Trabalho lista dezenas de atividades insalubres. Os principais grupos são: ruído contínuo ou de impacto acima dos limites, calor (avaliação pelo IBUTG), frio intenso, agentes químicos (arsênico, chumbo, mercúrio, benzeno), poeiras minerais (sílica, amianto), agentes biológicos (hospitais, laboratórios, coleta de lixo), radiações ionizantes e não ionizantes, umidade e vibrações.' },
      { question: 'O uso de EPIs pode eliminar o direito ao adicional de insalubridade?', answer: 'Sim. Se os Equipamentos de Proteção Individual (EPIs) forem capazes de neutralizar ou eliminar completamente a insalubridade, e o empregador fornecer os equipamentos adequados e certificados com fiscalização efetiva do uso, o adicional de insalubridade pode ser suprimido. O fornecimento de EPIs inadequados ou a falta de fiscalização mantém o direito ao adicional.' },
      { question: 'Qual a base de cálculo do adicional de insalubridade?', answer: 'A base de cálculo do adicional de insalubridade é o salário mínimo nacional ou regional, conforme Súmula Vinculante 4 do STF. No entanto, algumas convenções coletivas estabelecem base de cálculo sobre o salário base da categoria, o que é mais benéfico ao trabalhador. A Súmula 228 do TST já foi cancelada, e atualmente prevalece o salário mínimo como base.' },
      { question: 'O adicional de insalubridade integra o cálculo de férias e 13º?', answer: 'Sim. O adicional de insalubridade recebido de forma habitual integra o salário para todos os efeitos legais. Isso significa que ele deve ser incluído no cálculo de férias (com 1/3 constitucional), 13º salário, FGTS, aviso prévio e horas extras. A Súmula 139 do TST estabelece que o adicional de insalubridade integra o salário para esses fins.' },
    ],
    tips: [
      'O adicional de insalubridade é calculado sobre o salário mínimo, não sobre o salário base (salvo previsão contrária em convenção coletiva)',
      'A perícia técnica é obrigatória para caracterizar a insalubridade, e o laudo pericial é a principal prova no processo trabalhista',
      'O fornecimento de EPIs adequados com fiscalização de uso pode reduzir ou eliminar o direito ao adicional de insalubridade',
      'O adicional de insalubridade integra o cálculo de férias, 13º, FGTS e aviso prévio quando recebido de forma habitual',
      'Em caso de acúmulo com periculosidade, a Reforma Trabalhista de 2017 permite o recebimento conjunto se houver previsão em acordo coletivo',
    ],
    metaDescription: 'Calcule o adicional de insalubridade online: graus mínimo (10%), médio (20%) e máximo (40%) sobre o salário mínimo. Simulador gratuito.',
    keywords: ['adicional de insalubridade', 'insalubridade', 'grau de insalubridade', 'adicional insalubridade CLT'],
  },
  {
    id: 'hora-extra-noturna',
    title: 'Calculadora de Hora Extra Noturna',
    description: 'Calcule horas extras realizadas em período noturno com adicionais acumulados: noturno + hora extra + redução da hora noturna.',
    longIntro: `A hora extra noturna ocorre quando o trabalhador realiza horas extraordinárias durante o período noturno compreendido entre 22h e 5h. Nessa situação especial, o empregado tem direito a receber ambos os adicionais de forma acumulada: o adicional noturno de 20% e o adicional de hora extra de no mínimo 50%, além da redução da hora noturna para 52 minutos e 30 segundos.

O cálculo da hora extra noturna é feito em cascata, seguindo uma ordem específica. Primeiro calcula-se o valor da hora normal dividindo o salário pela carga horária mensal. Em seguida, aplica-se o adicional noturno de 20% sobre esse valor. Depois, sobre o valor já majorado pelo adicional noturno, aplica-se o adicional de hora extra correspondente (50% para dias úteis ou 100% para domingos e feriados).

Além dos adicionais, a hora noturna reduzida também se aplica às horas extras realizadas no período noturno. Isso significa que cada hora extra noturna trabalhada tem duração de 52 minutos e 30 segundos, mas é paga como uma hora cheia com todos os adicionais. Esse é um direito importante e frequentemente desrespeitado pelas empresas.

A hora extra noturna é mais comum em setores que operam 24 horas com regime de turnos, como saúde, segurança, indústria química e petroquímica, logística e transportes, serviços de emergência, call centers noturnos, e indústria com turnos ininterruptos de revezamento. O cálculo correto desses adicionais acumulados é essencial para garantir o recebimento integral dos direitos.`,
    category: 'Jornada de Trabalho',
    icon: 'Clock',
    calculatorType: 'hora-extra-noturna',
    questions: [
      { question: 'Qual o valor final da hora extra noturna?', answer: 'A hora extra noturna acumula o adicional noturno (20%) + o adicional de hora extra (mínimo 50%), totalizando no mínimo 80% sobre o valor da hora normal. Em domingos e feriados, com adicional de 100% de hora extra, o total mínimo é de 140% sobre a hora normal. Exemplo: hora normal R$ 10,00 + 20% + 50% = R$ 18,00/hora.' },
      { question: 'Como calcular a hora extra noturna passo a passo?', answer: '1) Calcule a hora normal: salário ÷ 220. 2) Aplique adicional noturno (20%): hora normal × 1,2 = hora noturna. 3) Aplique adicional de hora extra: hora noturna × 1,5 (50%) ou × 2 (100%). 4) Aplique a redução da hora noturna: cada 60 minutos = 52,5 minutos. 5) Total = valor da hora extra noturna × número de horas efetivamente trabalhadas.' },
      { question: 'A redução da hora noturna de 52min30s se aplica também às horas extras?', answer: 'Sim. A hora noturna reduzida de 52 minutos e 30 segundos também se aplica às horas extras realizadas no período noturno (22h às 5h). Isso significa que se o trabalhador fizer 1 hora extra noturna (60 minutos no relógio), ela corresponde a 52,5 minutos de trabalho e é paga como 60 minutos com todos os adicionais.' },
      { question: 'Em quais setores a hora extra noturna é mais comum?', answer: 'A hora extra noturna é frequente em setores com operação 24 horas: saúde (enfermeiros, médicos, técnicos), segurança patrimonial e vigilância, indústria química e petroquímica, logística e centros de distribuição, transportes e entregas noturnas, serviços de emergência (bombeiros, resgate), call centers com atendimento 24h, e indústria com turnos ininterruptos de revezamento.' },
      { question: 'A hora extra noturna gera reflexos em outras verbas trabalhistas?', answer: 'Sim. Assim como as horas extras diurnas, a hora extra noturna habitual gera reflexos em outras verbas trabalhistas. Ela deve ser incluída no cálculo do DSR (Descanso Semanal Remunerado), das férias (com 1/3 constitucional), do 13º salário, do FGTS e do aviso prévio. O cálculo da média é feito com base nos valores recebidos nos últimos 12 meses.' },
    ],
    tips: [
      'A hora extra noturna acumula adicional noturno (20%) + hora extra (50% ou 100%), totalizando no mínimo 80% sobre a hora normal',
      'A hora noturna reduzida de 52 minutos e 30 segundos também se aplica às horas extras realizadas entre 22h e 5h',
      'Mantenha registro detalhado dos horários de trabalho para comprovar as horas extras noturnas realizadas',
      'Em domingos e feriados, o adicional de hora extra é de 100%, elevando o total da hora extra noturna para no mínimo 140%',
      'A hora extra noturna habitual gera reflexos no DSR, férias, 13º e FGTS — não deixe de cobrar esses valores',
    ],
    metaDescription: 'Calcule hora extra noturna online: adicional noturno 20% + hora extra 50%/100% + redução da hora noturna. Calculadora gratuita CLT.',
    keywords: ['hora extra noturna', 'cálculo hora extra noturna', 'adicional noturno hora extra'],
  },
  {
    id: 'dsr',
    title: 'Calculadora de DSR (Descanso Semanal Remunerado)',
    description: 'Calcule o valor do Descanso Semanal Remunerado sobre horas extras e comissões. Saiba quanto você tem direito a receber.',
    longIntro: `O Descanso Semanal Remunerado (DSR) é um direito garantido pela Lei 605/1949 e pela Constituição Federal em seu artigo 7º, inciso XV. Todo trabalhador tem direito a um dia de descanso remunerado por semana, preferencialmente aos domingos, além dos feriados civis e religiosos.

O DSR sobre horas extras e comissões é um direito importante e frequentemente desrespeitado. O cálculo considera o total de horas extras ou comissões recebidas em cada mês, que é dividido pelo número de dias úteis (segunda a sábado) e multiplicado pelo número de domingos e feriados do período. Esse valor deve ser pago juntamente com o salário do mês.

O cálculo do DSR é especialmente relevante para trabalhadores que fazem horas extras com frequência ou recebem comissões variáveis, pois essas verbas geram reflexos no descanso semanal. Por exemplo, se um trabalhador faz R$ 800,00 em horas extras em um mês com 26 dias úteis e 4 domingos, ele tem direito a aproximadamente R$ 123,08 de DSR sobre essas horas extras.

A Súmula 172 do TST estabelece que as horas extras habituais integram o cálculo do DSR. Da mesma forma, as comissões recebidas pelo trabalhador também geram reflexo no DSR, com o mesmo método de cálculo: total de comissões dividido pelos dias úteis e multiplicado pelos dias de descanso. O não pagamento correto do DSR pode gerar reclamações trabalhistas com direito a diferenças salariais.`,
    category: 'Jornada de Trabalho',
    icon: 'Sun',
    calculatorType: 'dsr',
    questions: [
      { question: 'Como calcular o DSR sobre horas extras?', answer: 'A fórmula é: (Total de Horas Extras do Mês ÷ Número de Dias Úteis) × Número de Domingos e Feriados. Por exemplo: R$ 800,00 de HE, 26 dias úteis, 4 domingos = (800 ÷ 26) × 4 = R$ 123,08 de DSR sobre horas extras. O sábado é considerado dia útil para este cálculo, conforme entendimento consolidado do TST.' },
      { question: 'Qual a diferença entre DSR e repouso semanal remunerado?', answer: 'DSR e repouso semanal remunerado são a mesma coisa: o direito do trabalhador a um dia de descanso por semana com remuneração normal, garantido pela Lei 605/1949 e pela Constituição Federal. O termo DSR é mais técnico, utilizado na legislação. O repouso semanal deve ser preferencialmente aos domingos e pode incluir feriados.' },
      { question: 'O DSR incide sobre comissões recebidas pelo trabalhador?', answer: 'Sim. As comissões recebidas pelo trabalhador também geram reflexo no DSR, com o mesmo método de cálculo aplicado às horas extras: total de comissões do mês dividido pelos dias úteis e multiplicado pelos dias de descanso. A Súmula 27 do TST estabelece que as comissões pagas integram o cálculo do descanso semanal remunerado.' },
      { question: 'Qual a consequência do não pagamento do DSR sobre horas extras?', answer: 'O não pagamento correto do DSR sobre horas extras gera direito a reclamação trabalhista para cobrança das diferenças. O empregador pode ser condenado ao pagamento dos valores devidos com correção monetária e juros, além de eventual indenização por danos materiais. O prazo prescricional é de 5 anos para trabalhadores com contrato em vigor.' },
      { question: 'O DSR sobre horas extras integra o cálculo de férias e 13º?', answer: 'Sim. O DSR sobre horas extras, quando pago de forma habitual, integra o salário do trabalhador para todos os efeitos legais. Isso significa que o valor recebido a título de DSR sobre horas extras deve ser incluído na média para cálculo de férias (com 1/3 constitucional), 13º salário, FGTS e aviso prévio.' },
    ],
    tips: [
      'O DSR sobre horas extras é calculado dividindo o total de horas extras do mês pelos dias úteis e multiplicando pelos domingos e feriados',
      'Sábado é considerado dia útil para fins de cálculo do DSR, conforme jurisprudência consolidada do TST',
      'O DSR sobre comissões segue o mesmo método de cálculo das horas extras',
      'O não pagamento correto do DSR pode gerar ação trabalhista para cobrança dos valores devidos com juros e correção',
      'O DSR sobre horas extras habituais integra o cálculo de férias, 13º salário e FGTS como parte da remuneração',
    ],
    metaDescription: 'Calcule o DSR online: Descanso Semanal Remunerado sobre horas extras e comissões. Simulador gratuito CLT com fórmula de cálculo.',
    keywords: ['DSR', 'descanso semanal remunerado', 'calcular DSR', 'DSR horas extras'],
  },
  {
    id: 'vale-transporte',
    title: 'Calculadora de Vale-Transporte',
    description: 'Calcule o desconto do vale-transporte de até 6% do salário e descubra se o benefício cobre seus gastos com transporte público.',
    longIntro: `O vale-transporte é um benefício trabalhista garantido pela Lei 7.418/1985 e regulamentado pelo Decreto 95.247/1987. O benefício assegura ao trabalhador o custeio parcial de suas despesas com transporte público coletivo para o deslocamento de ida e volta entre sua residência e o local de trabalho, nos dias úteis de serviço.

O empregador pode descontar até 6% do salário base do funcionário a título de contribuição para o vale-transporte. Este desconto tem um limite máximo de 6% do salário, mas o valor efetivamente descontado é o menor entre este percentual e o custo total do transporte do trabalhador. Se o custo do transporte para ir e voltar ao trabalho for inferior a 6% do salário, o desconto será limitado ao valor do transporte. Se for superior, a empresa arca com a diferença.

O benefício do vale-transporte cobre exclusivamente o transporte público coletivo municipal, intermunicipal, interestadual ou internacional (no trajeto residência-trabalho). Estão incluídos ônibus, metrô, trem, barca e VLT. O benefício não cobre transporte por aplicativo (Uber, 99, etc.), táxi, transporte fretado particular ou condução própria.

O trabalhador tem a opção de recusar o vale-transporte. Nesse caso, deve manifestar sua opção por escrito ao empregador, e a empresa não é obrigada a oferecer nenhum outro tipo de auxílio-transporte em substituição. A recusa ao vale-transporte é uma decisão pessoal do trabalhador, que pode optar por não receber o benefício se, por exemplo, utiliza condução própria ou outros meios de transporte.`,
    category: 'Benefícios',
    icon: 'Bus',
    calculatorType: 'vale-transporte',
    questions: [
      { question: 'Qual o percentual máximo de desconto do vale-transporte?', answer: 'O desconto máximo permitido por lei é de 6% sobre o salário base do trabalhador. No entanto, o desconto efetivo será o menor valor entre 6% do salário e o custo total do transporte público necessário para ida e volta ao trabalho. Se o transporte custar R$ 200,00/mês e 6% do salário for R$ 150,00, o desconto será de R$ 150,00.' },
      { question: 'O trabalhador pode recusar o vale-transporte?', answer: 'Sim. O vale-transporte é um benefício optativo, não obrigatório. O trabalhador pode recusá-lo por escrito, manifestando sua opção ao empregador. Se recusar, não terá direito a nenhum outro tipo de auxílio-transporte da empresa. A recusa é comum entre trabalhadores que utilizam transporte próprio, carona ou moram perto do trabalho.' },
      { question: 'Quais meios de transporte são cobertos pelo vale-transporte?', answer: 'O vale-transporte cobre exclusivamente o transporte público coletivo: ônibus (municipal, intermunicipal, interestadual), metrô, trem, barca e VLT (Veículo Leve sobre Trilhos). Não cobre táxi, transporte por aplicativo (Uber, 99, Cabify), transporte escolar, fretado particular, nem despesas com veículo próprio ou estacionamento.' },
      { question: 'O vale-transporte pode ser utilizado em dias de folga ou fins de semana?', answer: 'Não. O vale-transporte é exclusivo para o deslocamento residência-trabalho-residência em dias úteis de serviço. Não pode ser utilizado em dias de folga, fins de semana, férias ou para qualquer outro fim que não seja o trajeto para o trabalho. O benefício é intransferível e de uso pessoal do trabalhador.' },
      { question: 'O vale-transporte precisa ser devolvido em caso de falta ao trabalho?', answer: 'Não, o trabalhador não precisa devolver os vales ou valores não utilizados em dias de falta. O desconto é feito sobre a previsão de dias úteis do mês, e o trabalhador recebe os vales ou créditos correspondentes independentemente de suas faltas. O vale-transporte não utilizado em um dia pode ser utilizado em outro dia útil.' },
    ],
    tips: [
      'O desconto do vale-transporte é limitado a 6% do salário base, mas o benefício cobre o valor total do transporte necessário',
      'Você pode optar por não receber o vale-transporte por escrito, mas não receberá nenhum outro auxílio da empresa no lugar',
      'O vale-transporte cobre apenas transporte público coletivo: ônibus, metrô, trem e barca. Não cobre Uber, táxi ou carro próprio',
      'O benefício é para uso exclusivo em dias úteis de trabalho, no trajeto residência-trabalho-residência',
      'Trabalhadores que utilizam vale-transporte precisam recarregar mensalmente o bilhete único ou VT no seu meio de transporte',
    ],
    metaDescription: 'Calcule o vale-transporte online: desconto de até 6% do salário para transporte público. Simulador gratuito para trabalhadores.',
    keywords: ['vale transporte', 'calcular vale transporte', 'desconto vale transporte', '6% vale transporte'],
  },
  {
    id: 'participacao-lucros',
    title: 'Calculadora de PLR (Participação nos Lucros)',
    description: 'Calcule a Participação nos Lucros e Resultados com base em regras da empresa, metas e faixa salarial. Simule o valor do benefício.',
    longIntro: `A Participação nos Lucros e Resultados (PLR) é um benefício previsto na Lei 10.101/2000, que permite aos trabalhadores receber uma parcela dos lucros ou resultados da empresa como forma de reconhecimento pelo desempenho e incentivo ao atingimento de metas.

A PLR não tem valor fixo estabelecido em lei, ao contrário de outros benefícios trabalhistas. Cada empresa negocia com o sindicato da categoria as regras de distribuição, que podem incluir critérios como metas individuais e coletivas, tempo de empresa, faixa salarial, resultados financeiros e indicadores de produtividade.

Uma das principais vantagens da PLR é sua natureza não salarial. Conforme estabelece o artigo 3º da Lei 10.101/2000, a PLR não tem natureza salarial e, portanto, não incide INSS, FGTS nem IRRF (até determinados limites). Isso beneficia tanto o trabalhador (que recebe um valor maior sem descontos) quanto a empresa (que pode distribuir lucros sem encargos trabalhistas).

A periodicidade do pagamento da PLR também varia conforme o acordo coletivo de cada categoria. Pode ser semestral, anual, quadrimestral ou vinculada a resultados específicos de projetos. Alguns acordos estabelecem um valor fixo por faixa salarial, enquanto outros vinculam o pagamento ao atingimento de metas específicas de produção, vendas, qualidade ou resultados financeiros.`,
    category: 'Benefícios',
    icon: 'Target',
    calculatorType: 'plr',
    questions: [
      { question: 'A PLR é obrigatória por lei?', answer: 'Não. A PLR não é obrigatória por lei. Cabe à empresa decidir se institui o programa de participação nos lucros. Se optar por instituir, a empresa deve negociar as regras com o sindicato da categoria através de acordo ou convenção coletiva, conforme estabelece a Lei 10.101/2000. A não instituição da PLR não gera qualquer penalidade.' },
      { question: 'A PLR tem descontos de INSS e Imposto de Renda?', answer: 'A PLR não tem incidência de INSS nem FGTS, por não ter natureza salarial (artigo 3º da Lei 10.101/2000). O Imposto de Renda é devido apenas sobre valores que excederem certos limites estabelecidos pela Receita Federal, com tributação exclusiva na fonte, seguindo tabela progressiva específica para PLR.' },
      { question: 'Qual o valor mínimo e máximo da PLR?', answer: 'A lei não estabelece valor mínimo ou máximo para a PLR. Cada empresa negocia com o sindicato os valores e regras de distribuição. Alguns acordos preveem valores fixos por faixa salarial (ex: R$ 2.000,00 para salários até R$ 5.000,00), enquanto outros vinculam o valor ao lucro da empresa e ao atingimento de metas.' },
      { question: 'A PLR pode ser paga em quantas parcelas ao ano?', answer: 'A PLR pode ser paga em uma ou mais parcelas ao longo do ano, conforme previsto no acordo coletivo. A periodicidade mais comum é semestral ou anual. Alguns acordos preveem pagamento trimestral ou vinculado a resultados específicos de projetos. Não há limite legal para o número de parcelas.' },
      { question: 'A PLR gera reflexos em férias, 13º e FGTS?', answer: 'Não. Por expressa disposição legal (artigo 3º da Lei 10.101/2000), a PLR não tem natureza salarial. Isso significa que ela não gera reflexos em férias, 13º salário, FGTS, aviso prévio ou qualquer outra verba trabalhista. O valor recebido a título de PLR é um pagamento único que não se incorpora à remuneração para nenhum efeito.' },
    ],
    tips: [
      'A PLR não tem natureza salarial, portanto não gera reflexos em férias, 13º, FGTS nem aviso prévio',
      'O pagamento da PLR deve seguir as regras do acordo coletivo ou acordo específico entre empresa e empregados',
      'A PLR não incide INSS nem FGTS, mas pode ter incidência de IRRF conforme tabela específica da Receita Federal',
      'Algumas empresas pagam PLR semestralmente, outras anualmente — depende do acordo com o sindicato',
      'Para receber a PLR é necessário que a empresa tenha lucro ou que as metas estabelecidas no acordo sejam atingidas',
    ],
    metaDescription: 'Calcule a PLR online: Participação nos Lucros e Resultados com base em salário e metas. Simulador gratuito trabalhista.',
    keywords: ['PLR', 'participação nos lucros', 'calcular PLR', 'PLR trabalhista'],
  },
  {
    id: 'adicional-transferencia',
    title: 'Calculadora de Adicional de Transferência',
    description: 'Calcule o adicional de transferência de 25% sobre o salário devido em caso de transferência provisória do empregado para outro município.',
    longIntro: `O adicional de transferência é um direito previsto no artigo 469 da CLT, que protege o trabalhador quando o empregador exige sua mudança de domicílio para outro município em caráter provisório. O adicional corresponde a um acréscimo mínimo de 25% sobre o salário do empregado enquanto durar a transferência.

A transferência pode ser definitiva ou provisória, e as regras são diferentes para cada caso. Na transferência definitiva, o empregador não é obrigado a pagar adicional, desde que haja concordância do empregado ou previsão em contrato de trabalho que já considere a possibilidade de transferência. Na transferência provisória, o adicional de 25% é devido obrigatoriamente.

O adicional de transferência não se confunde com o reembolso de despesas de mudança. O empregador também deve arcar com as despesas de transporte, mudança e instalação do empregado e sua família no novo local de trabalho, além do pagamento do adicional de 25% sobre o salário. As despesas de mudança não têm natureza salarial e não se incorporam ao salário para outros efeitos.

A jurisprudência do TST estabelece que o adicional de transferência é devido enquanto durar a transferência provisória, e seu não pagamento pode gerar reclamação trabalhista. O adicional integra o salário para todos os efeitos legais durante o período de transferência, incluindo férias, 13º salário, FGTS e aviso prévio.`,
    category: 'Adicionais Salariais',
    icon: 'MapPin',
    calculatorType: 'transferencia',
    questions: [
      { question: 'Quando o adicional de transferência é devido?', answer: 'O adicional de transferência é devido quando o empregador transfere o funcionário provisoriamente para outro município, em caráter temporário. Nesse caso, o empregado tem direito a um adicional mínimo de 25% sobre o salário enquanto durar a transferência, conforme artigo 469, §3º da CLT.' },
      { question: 'Qual a diferença entre transferência provisória e definitiva?', answer: 'Na transferência provisória, o empregado é enviado temporariamente para outro município com previsão de retorno. O adicional de 25% é obrigatório. Na transferência definitiva, o empregado muda de domicílio permanentemente. Nesse caso, o adicional não é devido, desde que haja concordância do empregado ou previsão contratual.' },
      { question: 'O adicional de transferência integra o salário para outros benefícios?', answer: 'Sim. O adicional de transferência recebido durante o período de transferência provisória integra o salário para todos os efeitos legais, incluindo horas extras, DSR, férias (com 1/3 constitucional), 13º salário, FGTS e aviso prévio.' },
      { question: 'As despesas de mudança são separadas do adicional?', answer: 'Sim. Além do adicional de 25% sobre o salário, o empregador também deve arcar com todas as despesas de transporte, mudança e instalação do empregado e sua família. Essas despesas não têm natureza salarial e não se incorporam ao salário.' },
      { question: 'O adicional de transferência é devido a todos os trabalhadores transferidos?', answer: 'O adicional é devido apenas em caso de transferência provisória para outro município. A transferência dentro do mesmo município não gera direito ao adicional, salvo se houver previsão em acordo ou convenção coletiva.' },
    ],
    tips: [
      'A transferência provisória para outro município gera direito a adicional de 25% sobre o salário enquanto durar a transferência',
      'A transferência definitiva, com concordância do empregado, não gera direito ao adicional de 25%',
      'Além do adicional, o empregador deve pagar todas as despesas de mudança, transporte e instalação do funcionário e sua família',
      'O adicional de transferência integra o salário para fins de férias, 13º, FGTS e horas extras durante o período de transferência',
      'A transferência dentro do mesmo município não gera direito ao adicional de transferência',
    ],
    metaDescription: 'Calcule o adicional de transferência online: 25% sobre o salário para transferência provisória para outro município. Simulador gratuito.',
    keywords: ['adicional de transferência', 'transferência provisória', 'adicional transferência CLT'],
  },
];

export const categories = [
  { id: 'rescisao', name: 'Rescisão e Saída', icon: 'FileText' },
  { id: 'jornada', name: 'Jornada de Trabalho', icon: 'Clock' },
  { id: 'adicionais', name: 'Adicionais Salariais', icon: 'PlusCircle' },
  { id: 'beneficios', name: 'Benefícios', icon: 'Gift' },
  { id: 'financas', name: 'Finanças e Correção', icon: 'TrendingUp' },
];

export const guides = [
  {
    id: 'direitos-trabalhistas',
    title: 'Guia Completo de Direitos Trabalhistas',
    description: 'Conheça todos os seus direitos como trabalhador CLT: férias, 13º, FGTS, horas extras, rescisão e adicionais.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'como-calcular-horas-extras',
    title: 'Como Calcular Horas Extras: Guia Passo a Passo',
    description: 'Aprenda o passo a passo completo para calcular horas extras com adicionais de 50%, 100% e reflexos no DSR.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'diferencas-clt-pj',
    title: 'CLT vs PJ: Qual a Melhor Opção para Você?',
    description: 'Compare todas as vantagens e desvantagens de trabalhar como CLT ou PJ e descubra qual compensa mais.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'guia-fgts',
    title: 'Guia Completo do FGTS: Saques, Multa e Rendimentos',
    description: 'Tudo sobre FGTS: depósitos, saques, multa de 40%, saque-aniversário e como consultar seu saldo.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'passo-rescisao',
    title: 'Passo a Passo da Rescisão Trabalhista',
    description: 'Guia completo sobre o processo de rescisão contratual: documentos, prazos, verbas devidas e direitos do trabalhador.',
    category: 'Guias',
    icon: 'BookOpen',
  },
];
