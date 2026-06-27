const sections = [
  {
    title: '1. Informações que Coletamos',
    content: 'Podemos coletar informações que você fornece voluntariamente, como nome e email ao utilizar nosso formulário de contato. Também podemos coletar informações não pessoais automaticamente, como endereço IP, tipo de navegador, páginas visitadas e tempo de navegação, através de cookies e tecnologias similares.'
  },
  {
    title: '2. Uso das Informações',
    content: 'As informações coletadas são utilizadas para melhorar sua experiência no site, responder a suas dúvidas, analisar o tráfego e comportamento dos usuários, e exibir anúncios personalizados através do Google AdSense.'
  },
  {
    title: '3. Cookies',
    content: 'Utilizamos cookies do Google AdSense e do Google Analytics para exibir anúncios relevantes e analisar o tráfego do site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.'
  },
  {
    title: '4. Google AdSense',
    content: 'Este site utiliza o Google AdSense, que usa cookies para exibir anúncios baseados em visitas anteriores dos usuários. Você pode optar por desativar a publicidade personalizada nas configurações de anúncios do Google.'
  },
  {
    title: '5. Compartilhamento de Informações',
    content: 'Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário para operar o site e seus serviços, ou quando exigido por lei.'
  },
  {
    title: '6. Links para Terceiros',
    content: 'Este site pode conter links para sites de terceiros (Amazon, Shopee). Não nos responsabilizamos pelas práticas de privacidade desses sites.'
  },
  {
    title: '7. Segurança',
    content: 'Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela internet é 100% seguro.'
  },
  {
    title: '8. Alterações',
    content: 'Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente. O uso continuado do site após alterações constitui aceitação da nova política.'
  },
  {
    title: '9. Contato',
    content: 'Para dúvidas sobre esta política, entre em contato através da nossa página de contato.'
  },
];

export default function Privacidade() {
  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade",
    "description": "Política de privacidade do site Calculadora Trabalhista"
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: ld}} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
      <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <div className="prose-custom">
        <p>
          A sua privacidade é importante para nós. Esta política de privacidade descreve como o site CalculadoraTrabalhista.com.br
          coleta, usa e protege as informações dos usuários.
        </p>
        {sections.map((s, i) => (
          <div key={i}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
