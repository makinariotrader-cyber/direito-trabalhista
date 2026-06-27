export default function Termos() {
  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos de Uso",
    "description": "Termos de uso do site Calculadora Trabalhista"
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: ld}} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h1>
      <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <div className="prose-custom">
        <h2>1. Aceitação dos Termos</h2>
        <p>Ao acessar e usar o site CalculadoraTrabalhista.com.br, você aceita e concorda com estes termos de uso. Se não concordar, não utilize o site.</p>

        <h2>2. Natureza Informativa</h2>
        <p>As calculadoras e conteúdos deste site são fornecidos apenas para fins informativos e educacionais. Eles não constituem consultoria jurídica, contábil ou financeira. Os cálculos são estimativas baseadas em regras gerais da legislação trabalhista brasileira.</p>

        <h2>3. Precisão das Informações</h2>
        <p>Nos esforçamos para manter as informações precisas e atualizadas, mas não garantimos a exatidão, completeza ou atualidade dos cálculos. A legislação trabalhista pode variar conforme acordos coletivos, convenções sindicais e decisões judiciais.</p>

        <h2>4. Consulta Profissional</h2>
        <p>Recomendamos fortemente consultar um advogado trabalhista ou contador para questões específicas sobre seus direitos trabalhistas. Cada caso tem particularidades que podem afetar os valores devidos.</p>

        <h2>5. Isenção de Responsabilidade</h2>
        <p>O site não se responsabiliza por decisões tomadas com base nas informações fornecidas. O uso das ferramentas é de sua inteira responsabilidade.</p>

        <h2>6. Propriedade Intelectual</h2>
        <p>Todo o conteúdo do site, incluindo textos, calculadoras, design e código, é propriedade do CalculadoraTrabalhista.com.br e protegido por leis de direitos autorais.</p>

        <h2>7. Links para Terceiros</h2>
        <p>Nosso site pode conter links de afiliados para Amazon e Shopee. Não somos responsáveis pelo conteúdo ou práticas desses sites. Os links de afiliados podem gerar comissão sem custo adicional para você.</p>

        <h2>8. Limitação de Idade</h2>
        <p>O site é destinado a maiores de 18 anos. Ao utilizar o site, você declara ter 18 anos ou mais.</p>

        <h2>9. Alterações</h2>
        <p>Estes termos podem ser alterados a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado do site constitui aceitação dos novos termos.</p>

        <h2>10. Legislação Aplicável</h2>
        <p>Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca do usuário.</p>

        <h2>11. Contato</h2>
        <p>Para dúvidas sobre estes termos, entre em contato através da página de contato.</p>
      </div>
    </div>
  );
}
