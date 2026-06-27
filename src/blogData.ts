export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageAlt: string;
  faq: { question: string; answer: string }[];
  interlinks: { text: string; to: string }[];
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'reforma-trabalhista-2025',
    slug: 'reforma-trabalhista-2025-mudancas',
    title: 'Reforma Trabalhista 2025: Principais Mudanças e Impactos para o Trabalhador',
    excerpt: 'Conheça as principais alterações na CLT em 2025 e como elas afetam seus direitos trabalhistas, incluindo novas regras de jornada, FGTS e rescisão.',
    content: `O ano de 2025 trouxe importantes atualizações na legislação trabalhista brasileira que afetam diretamente milhões de trabalhadores. Segundo dados oficiais do Ministério do Trabalho e Emprego (MTE), as mudanças visam modernizar as relações de trabalho e acompanhar as transformações do mercado, mantendo a proteção aos direitos fundamentais dos empregados previstos na Constituição Federal.

Uma das principais alterações diz respeito à atualização dos valores do salário mínimo, que em 2025 foi reajustado para R$ 1.518,00 conforme decreto federal publicado no Diário Oficial da União. Esse reajuste impacta diretamente o cálculo de benefícios como o seguro-desemprego, o abono salarial PIS/PASEP e as contribuições previdenciárias do INSS, que têm o salário mínimo como base de referência.

Para a previdência social, a tabela progressiva do INSS foi atualizada com novas faixas de contribuição, seguindo a política de valorização do salário mínimo. O teto do INSS também foi reajustado, passando a R$ 8.157,41 em 2025, conforme portaria interministerial publicada no Diário Oficial. Esses valores são essenciais para o cálculo correto da aposentadoria e dos demais benefícios previdenciários.

No âmbito do FGTS, o governo federal implementou novas regras para o saque-aniversário, ampliando as possibilidades de antecipação dos recursos mediante contratação de empréstimos consignados com garantia do FGTS. A Caixa Econômica Federal, gestora do fundo, informou que mais de 30 milhões de trabalhadores aderiram à modalidade desde sua criação.

A Reforma Trabalhista de 2017 completa oito anos em 2025, e suas disposições continuam sendo aplicadas pela Justiça do Trabalho. O Tribunal Superior do Trabalho (TST) tem consolidado jurisprudência sobre temas como o trabalho intermitente, a jornada 12x36 e o teletrabalho, que ganhou ainda mais relevância com o crescimento do home office no Brasil pós-pandemia.

Para calcular corretamente seus direitos trabalhistas com base na legislação atualizada, utilize nossa calculadora de rescisão trabalhista e os demais simuladores disponíveis no site.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-27',
    category: 'Legislação',
    tags: ['reforma trabalhista', 'CLT 2025', 'salário mínimo', 'direitos trabalhistas'],
    imageAlt: 'Reforma Trabalhista 2025 - Mudanças na CLT',
    faq: [
      { question: 'Qual o valor do salário mínimo em 2025?', answer: 'O salário mínimo em 2025 é de R$ 1.518,00, conforme decreto federal publicado no Diário Oficial da União. Este valor serve como base para cálculo de benefícios como seguro-desemprego, abono salarial PIS/PASEP e contribuições do INSS.' },
      { question: 'Qual o teto do INSS em 2025?', answer: 'O teto do INSS em 2025 é de R$ 8.157,41, conforme portaria interministerial publicada no Diário Oficial da União. Este é o valor máximo que serve como base para o cálculo dos benefícios previdenciários.' },
      { question: 'O trabalho intermitente ainda existe em 2025?', answer: 'Sim, o trabalho intermitente, criado pela Reforma Trabalhista de 2017, continua em vigor. O TST tem consolidado jurisprudência sobre o tema, garantindo direitos como férias proporcionais, 13º salário e FGTS para os trabalhadores contratados nessa modalidade.' },
    ],
    interlinks: [
      { text: 'Calcule sua rescisão trabalhista', to: '/ferramentas/rescisao-trabalhista' },
      { text: 'Guia completo de direitos trabalhistas', to: '/guias/direitos-trabalhistas' },
      { text: 'Simulador de INSS', to: '/ferramentas/inss' },
    ],
    metaDescription: 'Reforma Trabalhista 2025: confira as principais mudanças na CLT, novo salário mínimo, teto do INSS e impactos nos direitos dos trabalhadores brasileiros.',
    keywords: ['reforma trabalhista 2025', 'CLT 2025', 'salário mínimo 2025', 'teto INSS 2025', 'mudanças trabalhistas'],
  },
  {
    id: 'calculo-horas-extras',
    slug: 'como-calcular-horas-extras-corretamente',
    title: 'Como Calcular Horas Extras Corretamente: Guia Completo com Exemplos',
    excerpt: 'Aprenda o cálculo correto de horas extras com adicional de 50% e 100%, incluindo reflexos no DSR, férias e 13º salário. Exemplos práticos passo a passo.',
    content: `O cálculo correto de horas extras é uma das principais dúvidas dos trabalhadores brasileiros. De acordo com o artigo 7º, inciso XVI da Constituição Federal, a remuneração do serviço extraordinário deve ser superior à da hora normal em, no mínimo, 50%. No entanto, cada categoria pode ter percentuais maiores definidos em convenção coletiva de trabalho.

Para calcular o valor da hora extra, o primeiro passo é descobrir quanto vale sua hora normal de trabalho. Conforme a Súmula 124 do TST, o divisor para jornada de 44 horas semanais é 220. Basta dividir seu salário mensal por 220 para obter o valor da hora normal. Por exemplo: um salário de R$ 3.300,00 ÷ 220 = R$ 15,00 por hora trabalhada.

A hora extra em dias úteis tem adicional mínimo de 50%. No nosso exemplo: R$ 15,00 × 1,5 = R$ 22,50 por hora extra. Já o trabalho em domingos e feriados deve ser pago com adicional de 100%: R$ 15,00 × 2 = R$ 30,00 por hora. Estes percentuais são os mínimos legais estabelecidos pela CLT, podendo ser maiores conforme acordo ou convenção coletiva.

É fundamental saber que as horas extras habituais geram reflexos em diversas outras verbas trabalhistas. De acordo com a Orientação Jurisprudencial 394 da SDI-1 do TST, a média das horas extras dos últimos 12 meses deve integrar o cálculo de férias, 13º salário e aviso prévio. Além disso, o reflexo no Descanso Semanal Remunerado (DSR) é calculado proporcionalmente.

O limite legal para horas extras é de duas horas por jornada, totalizando no máximo 10 horas diárias de trabalho, conforme artigo 59 da CLT. Acordos de compensação de jornada, como o banco de horas, podem flexibilizar esse limite, desde que estabelecidos em convenção coletiva.

Para calcular automaticamente suas horas extras e todos os reflexos, utilize nossa calculadora de horas extras, que já aplica os percentuais corretos e calcula os reflexos no DSR.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-25',
    category: 'Jornada de Trabalho',
    tags: ['horas extras', 'cálculo hora extra', 'adicional 50%', 'DSR'],
    imageAlt: 'Como calcular horas extras - Guia completo',
    faq: [
      { question: 'Qual o divisor para calcular hora extra na jornada 44h?', answer: 'O divisor para jornada de 44 horas semanais é 220, conforme Súmula 124 do TST. Basta dividir o salário mensal por 220 para obter o valor da hora normal de trabalho.' },
      { question: 'Horas extras geram reflexo no DSR?', answer: 'Sim. As horas extras habituais geram reflexo no Descanso Semanal Remunerado (DSR). O cálculo é feito dividindo o total de horas extras do mês pelos dias úteis e multiplicando pelos dias de descanso (domingos e feriados).' },
      { question: 'Qual o limite máximo de horas extras por dia?', answer: 'O limite legal é de 2 horas extras por dia, totalizando no máximo 10 horas diárias, conforme artigo 59 da CLT. Acordos de banco de horas podem flexibilizar esse limite.' },
    ],
    interlinks: [
      { text: 'Calculadora de Horas Extras', to: '/ferramentas/horas-extras' },
      { text: 'Calculadora de Hora Extra Noturna', to: '/ferramentas/hora-extra-noturna' },
      { text: 'Calculadora de DSR', to: '/ferramentas/dsr' },
      { text: 'Guia: Como Calcular Horas Extras', to: '/guias/como-calcular-horas-extras' },
    ],
    metaDescription: 'Aprenda a calcular horas extras corretamente: adicional de 50% e 100%, reflexos no DSR, férias e 13º. Guia completo com exemplos práticos e base na CLT.',
    keywords: ['calcular horas extras', 'hora extra 50%', 'hora extra 100%', 'reflexo DSR', 'cálculo hora extra CLT'],
  },
  {
    id: 'direito-ferias-trabalhador',
    slug: 'direito-a-ferias-tudo-que-voce-precisa-saber',
    title: 'Direito a Férias: Tudo que Você Precisa Saber (1/3 Constitucional, Abono, Parcelamento)',
    excerpt: 'Entenda seus direitos a férias trabalhistas: período aquisitivo, concessivo, 1/3 constitucional, abono pecuniário, parcelamento e férias em dobro.',
    content: `As férias são um direito social fundamental garantido pela Constituição Federal em seu artigo 7º, inciso XVII, que assegura ao trabalhador o gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal. A regulamentação detalhada está nos artigos 129 a 153 da Consolidação das Leis do Trabalho (CLT).

Após cada período de 12 meses de trabalho, chamado de período aquisitivo, o empregado adquire o direito a 30 dias corridos de férias. O empregador tem então o período concessivo de 12 meses seguintes para conceder as férias. Se não o fizer dentro desse prazo, as férias deverão ser pagas em dobro, conforme artigo 137 da CLT, incluindo o adicional de 1/3 constitucional.

O valor das férias corresponde ao salário normal acrescido do adicional de 1/3 constitucional. Por exemplo: se seu salário é R$ 3.600,00, você receberá R$ 4.800,00 (R$ 3.600 + R$ 1.200 de 1/3). As médias de horas extras e adicionais recebidos nos últimos 12 meses também integram o cálculo, conforme Súmula 45 do TST.

A Reforma Trabalhista de 2017 (Lei 13.467/2017) flexibilizou o parcelamento das férias. Agora é possível dividir em até três períodos, desde que um deles tenha no mínimo 14 dias e os demais não sejam inferiores a 5 dias cada. O parcelamento depende de concordância entre empregado e empregador.

O abono pecuniário, previsto no artigo 143 da CLT, permite ao trabalhador converter 1/3 do período de férias (10 dias) em abono em dinheiro. O valor do abono é calculado sobre o salário acrescido do 1/3 constitucional, sem qualquer desconto. O pedido deve ser feito até 15 dias antes do término do período aquisitivo.

Para simular o valor exato das suas férias com todos os adicionais e descontos, utilize nossa calculadora de férias online e gratuita.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-23',
    category: 'Benefícios',
    tags: ['férias', 'terço constitucional', 'abono pecuniário', 'férias em dobro'],
    imageAlt: 'Direito a férias trabalhistas - Guia completo',
    faq: [
      { question: 'Quando as férias devem ser pagas em dobro?', answer: 'As férias são pagas em dobro quando o empregador não concede as férias dentro do período concessivo de 12 meses após o período aquisitivo. O artigo 137 da CLT determina que, nesse caso, as férias deverão ser pagas em dobro, incluindo o adicional de 1/3.' },
      { question: 'Como funciona o abono pecuniário (vender 1/3 das férias)?', answer: 'O abono pecuniário permite converter 1/3 do período de 30 dias de férias (10 dias) em dinheiro, conforme artigo 143 da CLT. O valor é calculado sobre o salário mais 1/3 constitucional, sem descontos. O pedido deve ser feito até 15 dias antes do fim do período aquisitivo.' },
      { question: 'Faltas não justificadas reduzem os dias de férias?', answer: 'Sim. Conforme artigo 130 da CLT, as faltas não justificadas no período aquisitivo reduzem os dias de férias: até 5 faltas = 30 dias; 6 a 14 = 24 dias; 15 a 23 = 18 dias; 24 a 32 = 12 dias; acima de 32 = perde o direito.' },
    ],
    interlinks: [
      { text: 'Calculadora de Férias', to: '/ferramentas/ferias' },
      { text: 'Calculadora de 13º Salário', to: '/ferramentas/decimo-terceiro' },
      { text: 'Calculadora de Salário Líquido', to: '/ferramentas/salario-liquido' },
    ],
    metaDescription: 'Guia completo sobre direito a férias trabalhistas: 1/3 constitucional, abono pecuniário, parcelamento em até 3 períodos e férias em dobro. Base legal na CLT.',
    keywords: ['direito a férias', 'terço constitucional de férias', 'abono pecuniário', 'férias em dobro', 'parcelamento de férias'],
  },
  {
    id: 'fgts-saque',
    slug: 'fgts-saques-regras-2025',
    title: 'FGTS: Todas as Regras de Saque em 2025 (Demissão, Saque-Aniversário, Casa Própria)',
    excerpt: 'Confira todas as situações que permitem o saque do FGTS em 2025: demissão sem justa causa, saque-aniversário, casa própria, aposentadoria e doenças graves.',
    content: `O Fundo de Garantia do Tempo de Serviço (FGTS), regulamentado pela Lei 8.036/1990, é um dos principais direitos dos trabalhadores brasileiros com carteira assinada. Mensalmente, o empregador deposita 8% do salário bruto do funcionário em uma conta vinculada na Caixa Econômica Federal, que administra o fundo com mais de R$ 600 bilhões em ativos.

Em caso de demissão sem justa causa, o trabalhador tem direito a sacar integralmente o saldo do FGTS, além de receber a multa de 40% paga pelo empregador. Para solicitar o saque, basta apresentar o Termo de Rescisão do Contrato de Trabalho (TRCT) assinado, as guias de recolhimento do FGTS e o documento de identificação em qualquer agência da Caixa ou pelo aplicativo FGTS.

O saque-aniversário, criado em 2019, permite ao trabalhador retirar anualmente uma parte do saldo do FGTS no mês do seu aniversário. Os valores seguem uma tabela progressiva da Caixa Econômica: saldos de até R$ 500,00 permitem saque de 50%; saldos acima de R$ 20.000,00 permitem saque de 5% mais parcela adicional fixa. Ao optar pela modalidade, o trabalhador abre mão do saque total em caso de demissão.

Para aquisição da casa própria, o FGTS pode ser utilizado para pagamento de entrada, amortização ou liquidação de financiamento habitacional pelo Sistema Financeiro de Habitação (SFH), conforme Lei 8.036/1990. Os requisitos mínimos são três anos de trabalho com carteira assinada e não possuir imóvel no município de trabalho ou residência.

O saque por doença grave (câncer, HIV, cardiopatia grave, entre outras) é permitido ao trabalhador ou seus dependentes, mediante comprovação médica. Da mesma forma, a aposentadoria autoriza o saque integral do saldo das contas do FGTS. Em casos de calamidade pública reconhecida pelo governo federal, também é possível solicitar o saque.

Para simular quanto você tem direito a receber em cada modalidade de saque, utilize nossa calculadora de FGTS completa.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-20',
    category: 'Benefícios',
    tags: ['FGTS', 'saque FGTS', 'saque-aniversário', 'multa FGTS', 'casa própria'],
    imageAlt: 'FGTS - Regras de saque 2025',
    faq: [
      { question: 'Quais documentos são necessários para sacar o FGTS por demissão?', answer: 'Para sacar o FGTS por demissão sem justa causa, são necessários: Termo de Rescisão do Contrato de Trabalho (TRCT) assinado pelo empregador e sindicato, guias de recolhimento do FGTS, carteira de trabalho e documento de identificação com foto. O saque pode ser solicitado pelo aplicativo FGTS da Caixa.' },
      { question: 'Vale a pena aderir ao saque-aniversário do FGTS?', answer: 'Depende do seu perfil. O saque-aniversário permite retirar parte do saldo anualmente, mas você perde o direito ao saque total em caso de demissão. Se você pretende trocar de emprego, não é recomendável. Se prefere ter acesso periódico aos recursos, pode ser vantajoso.' },
      { question: 'Como usar o FGTS para comprar a casa própria?', answer: 'O FGTS pode ser usado para dar entrada, amortizar ou liquidar financiamento habitacional pelo SFH. Os requisitos são: 3 anos de trabalho com carteira assinada, não possuir imóvel no município e o imóvel deve estar dentro do valor máximo do SFH (até R$ 1,5 milhão em 2025).' },
    ],
    interlinks: [
      { text: 'Calculadora de FGTS', to: '/ferramentas/fgts' },
      { text: 'Calculadora de Multa do FGTS (40% e 20%)', to: '/ferramentas/multa-fgts' },
      { text: 'Guia completo sobre FGTS', to: '/guias/guia-fgts' },
    ],
    metaDescription: 'Guia completo do FGTS 2025: saque por demissão, saque-aniversário, casa própria, aposentadoria e doenças graves. Regras atualizadas da Caixa Econômica Federal.',
    keywords: ['FGTS', 'saque FGTS', 'saque aniversário FGTS', 'multa 40% FGTS', 'FGTS casa própria'],
  },
  {
    id: 'seguro-desemprego-regras',
    slug: 'seguro-desemprego-regras-2025-parcelas-valores',
    title: 'Seguro-Desemprego 2025: Quantas Parcelas, Valores e Como Solicitar',
    excerpt: 'Guia completo do seguro-desemprego em 2025: número de parcelas por tempo trabalhado, cálculo do valor, prazos e passo a passo da solicitação online.',
    content: `O seguro-desemprego é um benefício constitucional garantido pelo artigo 7º da Constituição Federal, regulamentado pela Lei 7.998/1990, que proporciona assistência financeira temporária ao trabalhador dispensado sem justa causa durante o período de busca por nova colocação profissional.

O número de parcelas do seguro-desemprego varia conforme o tempo trabalhado nos últimos 36 meses e o número de solicitações anteriores do benefício. Para a primeira solicitação: 6 a 11 meses trabalhados geram direito a 4 parcelas; 12 a 23 meses garantem 5 parcelas. Na segunda solicitação: 3 parcelas para 6 a 11 meses e 5 parcelas para 12 a 23 meses. A partir da terceira solicitação, as regras são similares à segunda.

Em 2025, o valor de cada parcela é calculado com base na média dos três últimos salários recebidos antes da dispensa. As faixas de cálculo foram atualizadas conforme portaria interministerial: salários até R$ 2.108,72 têm a média multiplicada por 0,8; entre R$ 2.108,73 e R$ 3.514,53, o excedente à primeira faixa é multiplicado por 0,5 e somado a R$ 1.686,98; acima de R$ 3.514,53, o valor é fixo de R$ 2.390,95. O benefício nunca pode ser inferior ao salário mínimo vigente de R$ 1.518,00.

Para solicitar o seguro-desemprego, o trabalhador tem o prazo do 7º ao 120º dia após a data da dispensa. A solicitação pode ser feita de forma 100% online pelo portal Gov.br ou pelo aplicativo Carteira de Trabalho Digital, bastando ter em mãos o requerimento do seguro-desemprego fornecido pelo empregador no momento da rescisão.

O benefício é depositado mensalmente em conta corrente ou poupança da Caixa Econômica Federal, ou em Poupança Social Digital, aberta automaticamente em nome do trabalhador. Caso o trabalhador consiga um novo emprego com carteira assinada durante o recebimento, deve comunicar imediatamente o órgão pagador para cessar o benefício.

Para simular quantas parcelas e qual valor você tem direito a receber, utilize nossa calculadora de seguro-desemprego online.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-18',
    category: 'Rescisão e Saída',
    tags: ['seguro desemprego', 'parcelas', 'cálculo seguro desemprego', 'solicitação'],
    imageAlt: 'Seguro-desemprego 2025 - Regras e valores',
    faq: [
      { question: 'Qual o prazo para solicitar o seguro-desemprego?', answer: 'O prazo para solicitar o seguro-desemprego é do 7º ao 120º dia após a data da dispensa. Perder esse prazo implica na perda do direito ao benefício. A solicitação pode ser feita online pelo portal Gov.br ou aplicativo Carteira de Trabalho Digital.' },
      { question: 'Quantas parcelas do seguro-desemprego tenho direito?', answer: 'Na primeira solicitação: 4 parcelas (6 a 11 meses trabalhados) ou 5 parcelas (12 a 23 meses). Na segunda solicitação: 3 parcelas (6 a 11 meses) ou 5 parcelas (12 a 23 meses). Na terceira solicitação em diante: as mesmas regras da segunda.' },
      { question: 'Perco o seguro-desemprego se conseguir um novo emprego?', answer: 'Sim. Se você conseguir um novo emprego com carteira assinada durante o período de recebimento do seguro-desemprego, perde o direito às parcelas restantes. É obrigatório comunicar o retorno ao trabalho pelo portal Gov.br.' },
    ],
    interlinks: [
      { text: 'Calculadora de Seguro-Desemprego', to: '/ferramentas/seguro-desemprego' },
      { text: 'Calculadora de Rescisão Trabalhista', to: '/ferramentas/rescisao-trabalhista' },
      { text: 'Guia Passo a Passo da Rescisão', to: '/guias/passo-rescisao' },
    ],
    metaDescription: 'Seguro-desemprego 2025: quantas parcelas, valores atualizados, faixas de cálculo e como solicitar online pelo Gov.br. Guia completo e atualizado.',
    keywords: ['seguro desemprego 2025', 'parcelas seguro desemprego', 'calcular seguro desemprego', 'solicitar seguro desemprego'],
  },
  {
    id: 'adicional-periculosidade-insalubridade',
    slug: 'diferenca-adicional-periculosidade-insalubridade',
    title: 'Adicional de Periculosidade vs Insalubridade: Diferenças e Como Calcular',
    excerpt: 'Entenda as diferenças entre adicional de periculosidade (30% do salário) e insalubridade (10%, 20% ou 40% do salário mínimo). Saiba como calcular e quando cada um é devido.',
    content: `Os adicionais de periculosidade e insalubridade são direitos trabalhistas que protegem a saúde e a integridade física do trabalhador exposto a condições de risco, mas cada um tem regras e bases de cálculo específicas estabelecidas na CLT e nas Normas Regulamentadoras do Ministério do Trabalho e Emprego.

O adicional de periculosidade, previsto no artigo 193 da CLT, é de 30% sobre o salário base do empregado, sem inclusão de gratificações ou outros adicionais na base de cálculo. Ele é devido a trabalhadores expostos a atividades perigosas como inflamáveis, explosivos, energia elétrica e segurança patrimonial. A caracterização é feita por perícia técnica (NR-16), que emite o Laudo Técnico de Condições Ambientais de Trabalho (LTCAT).

O adicional de insalubridade, regulamentado pelo artigo 192 da CLT e pela NR-15, tem três graus: mínimo (10%), médio (20%) e máximo (40%), calculados sobre o salário mínimo nacional (exceto para categorias com previsão em convenção coletiva). Os agentes insalubres incluem ruído excessivo, calor intenso, agentes químicos e biológicos, radiações e poeiras minerais como a sílica.

A Reforma Trabalhista de 2017 (Lei 13.467/2017) alterou o artigo 193, §2º da CLT para permitir o acúmulo de ambos os adicionais, desde que haja previsão em acordo ou convenção coletiva de trabalho. Antes da reforma, o trabalhador precisava optar pelo adicional mais benéfico, não podendo acumular os dois.

Em 2025, com o salário mínimo de R$ 1.518,00, os valores do adicional de insalubridade são: grau mínimo (10%) = R$ 151,80; grau médio (20%) = R$ 303,60; grau máximo (40%) = R$ 607,20. Já a periculosidade (30% do salário base) pode resultar em valores significativamente maiores, especialmente para trabalhadores com salários mais elevados.

Para calcular automaticamente ambos os adicionais, utilize nossa calculadora de periculosidade ou nossa calculadora de insalubridade, que já aplicam os percentuais corretos conforme a legislação vigente.`,
    author: 'Equipe Calculadora Trabalhista',
    date: '2025-06-16',
    category: 'Adicionais Salariais',
    tags: ['periculosidade', 'insalubridade', 'adicional', 'NR-15', 'NR-16'],
    imageAlt: 'Diferença entre periculosidade e insalubridade',
    faq: [
      { question: 'Qual a principal diferença entre periculosidade e insalubridade?', answer: 'A periculosidade protege contra risco de morte ou acidentes graves (30% do salário base), enquanto a insalubridade protege contra agentes nocivos à saúde (10% a 40% do salário mínimo). A periculosidade tem base no salário base; a insalubridade, no salário mínimo.' },
      { question: 'Posso receber periculosidade e insalubridade ao mesmo tempo?', answer: 'Sim, desde a Reforma Trabalhista de 2017 (Lei 13.467/2017). A alteração do artigo 193, §2º da CLT passou a permitir o acúmulo dos dois adicionais, desde que haja previsão em acordo ou convenção coletiva de trabalho da categoria.' },
      { question: 'O uso de EPIs elimina o direito ao adicional de insalubridade?', answer: 'Sim, se os Equipamentos de Proteção Individual forem capazes de neutralizar completamente a insalubridade, e houver fornecimento adequado com fiscalização efetiva do uso. Caso contrário, o direito ao adicional é mantido, conforme Súmula 289 do TST.' },
    ],
    interlinks: [
      { text: 'Calculadora de Adicional de Periculosidade', to: '/ferramentas/adicional-periculosidade' },
      { text: 'Calculadora de Adicional de Insalubridade', to: '/ferramentas/adicional-insalubridade' },
      { text: 'Calculadora de Adicional de Transferência', to: '/ferramentas/adicional-transferencia' },
    ],
    metaDescription: 'Diferenças entre adicional de periculosidade (30% do salário) e insalubridade (10% a 40% do salário mínimo). Aprenda a calcular cada um conforme a CLT e NRs.',
    keywords: ['periculosidade', 'insalubridade', 'adicional de periculosidade', 'adicional de insalubridade', 'diferença periculosidade insalubridade'],
  },
];

export const blogCategories = [
  'Legislação',
  'Jornada de Trabalho',
  'Benefícios',
  'Rescisão e Saída',
  'Adicionais Salariais',
  'Finanças e Correção',
];

export const blogAuthors = [
  { name: 'Equipe Calculadora Trabalhista', role: 'Redação Técnica' },
];
