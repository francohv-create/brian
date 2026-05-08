export const TEMPLATES_DATA = [
  {
    id: 1,
    template: 1,
    icon: '🛒',
    iconBg: 'linear-gradient(135deg,#c8ff9e,#a8f06e)',
    name: 'Ecommerce / Digital Retail',
    category: 'Ecommerce · Argentina', // Keeping Argentina as it's a country name
    desc: 'Identifies opportunities to improve conversion, shopping experience, performance, trust, local payment methods, and retention.',
    tags: [
      { l: 'Ecommerce', c: 'tt-mint' },
      { l: 'Conversion', c: 'tt-violet' },
      { l: 'Mobile', c: 'tt-sky' },
      { l: 'Argentina', c: 'tt-orange' }, // Keeping Argentina as it's a country name
    ],
    fields: [
      { label: 'Country', val: 'Argentina' },
      { label: 'Last edited', val: '2 days ago' },
      { label: 'Findings', val: '5–8' },
      { label: 'Recommendations', val: '3–5' },
    ],
    filters: ['ecommerce', 'current'], // Translated 'actual' to 'current'
    detail: {
      aplica: [ // "Applies to"
        'The company sells products online.',
        'There is a catalog, shopping cart, checkout, or payment methods.',
        'The site displays products, prices, shipping, promotions, or installments.',
        'Uses platforms like VTEX, Shopify, Tiendanube, WooCommerce, or Magento.',
      ],
      no_aplica: [ // "Does not apply to"
        'The website only captures B2B leads.',
        'There is no direct purchase flow.',
        'The product sold is enterprise software or consulting services.',
      ],
      dimensiones: [ // "Dimensions"
        {
          name: 'Shopping experience',
          items:
            'Clicks to add to cart · Checkout steps · Guest checkout · Clarity of shipping costs · Exchange and return policy.',
        },
        {
          name: 'Conversion',
          items:
            'CTA visibility · Friction in the form · Trust messages · Visible installments and promotions · Abandoned cart recovery.',
        },
        {
          name: 'Mobile',
          items:
            'Mobile-first experience · Product card readability · Sticky CTA · Easy filtering · 4G performance.',
        },
        {
          name: 'Technical performance',
          items:
            'Core Web Vitals · Image weight · Lazy loading · Errors in critical flow · Loading time on PDP and checkout.',
        },
        {
          name: 'Accesibilidad',
          items:
            'Button contrast · Form labels · Keyboard navigation · Alt text on images · Understandable error states.',
        },
        {
          name: 'Payments & logistics ARG',
          items:
            'Mercado Pago, MODO, Transfer · Interest-free installments · Pago Fácil / Rapipago · Andreani, OCA, Correo Argentino · Shipping calculation by postal code.',
        },
        {
          name: 'Retención',
          items:
            'Product recommendations · Loyalty program · Cross-sell / upsell · Email, WhatsApp or post-purchase push · Personalization for recurring customers.',
        },
      ],
      output: { hallazgos: '5–8', recomendaciones: '3–5' }, // "findings", "recommendations"
      competidores: // "Competitors"
        'Mercado Libre, Fravega, Musimundo, Farmacity, Jumbo, Tiendanube — choose 3 based on actual target category.',
      fuentes: // "Sources"
        'Website · PageSpeed Insights · Google Trends · CACE · Google Reviews · App Store/Play Store · Reddit r/argentina.',
    },
  },
  {
    id: 2,
    icon: '🏢',
    template: 2,
    iconBg: 'linear-gradient(135deg,#f2e3ff,#e0ccf5)',
    name: 'Wholesale B2B Expansion',
    category: 'B2B · New Client',
    desc: 'Structures a wholesale platform proposal for retailers looking to enable B2B sales with differentiated catalogs and pricing.',
    tags: [
      { l: 'B2B', c: 'tt-lav' },
      { l: 'Wholesale', c: 'tt-gray' },
      { l: 'Expansion', c: 'tt-violet' },
    ],
    fields: [
      { label: 'Industria', val: 'Retail / B2B' },
      { label: 'Last edited', val: '5 days ago' },
      { label: 'Pages', val: '14–18' },
      { label: 'Type', val: 'New Client' },
    ],
    filters: ['b2b', 'new'], // Translated 'nuevo' to 'new'
  },
  {
    id: 3,
    template: 3,
    icon: '🔍',
    iconBg: 'linear-gradient(135deg,#edf0ff,#d8e2ff)',
    name: 'UX Audit & Redesign',
    category: 'UX / Design · Current Client',
    desc: 'Analyzes current user experience, identifies abandonment points, and presents a phased redesign plan with estimated ROI.',
    tags: [
      { l: 'UX', c: 'tt-sky' },
      { l: 'Redesign', c: 'tt-violet' },
      { l: 'Audit', c: 'tt-gray' },
    ],
    fields: [
      { label: 'Industry', val: 'Cross-sector' },
      { label: 'Last edited', val: '1 week ago' },
      { label: 'Pages', val: '10–14' },
      { label: 'Type', val: 'Current Client' },
    ],
    filters: ['ux', 'current'], // Translated 'actual' to 'current'
  },
  // {
  //   id: 4,
  //   icon: '🤖',
  //   iconBg: 'linear-gradient(135deg,#2a2b40,#535768)',
  //   name: 'Motor de búsqueda con IA',
  //   category: 'SaaS · Cliente actual',
  //   desc: 'Propuesta para implementar búsqueda semántica y recomendaciones personalizadas, con benchmark de mejora en relevancia y conversión.',
  //   tags: [
  //     { l: 'IA', c: 'tt-violet' },
  //     { l: 'Búsqueda', c: 'tt-lav' },
  //     { l: 'SaaS', c: 'tt-gray' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'Ecommerce / SaaS' },
  //     { label: 'Última edición', val: 'Hace 3 días' },
  //     { label: 'Páginas', val: '16–20' },
  //     { label: 'Tipo', val: 'Cliente actual' },
  //   ],
  //   filters: ['saas', 'ecommerce', 'actual'],
  // },
  // {
  //   id: 5,
  //   icon: '⚡',
  //   iconBg: 'linear-gradient(135deg,#fff3c8,#ffe080)',
  //   name: 'Checkout simplificado',
  //   category: 'Ecommerce · Cliente nuevo',
  //   desc: 'Reduce pasos del proceso de pago a 2 o 3 etapas, integra wallets locales y optimiza el flujo para reducir abandono en móvil.',
  //   tags: [
  //     { l: 'Checkout', c: 'tt-orange' },
  //     { l: 'Ecommerce', c: 'tt-mint' },
  //     { l: 'Pagos', c: 'tt-gray' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'Ecommerce' },
  //     { label: 'Última edición', val: 'Ayer' },
  //     { label: 'Páginas', val: '8–12' },
  //     { label: 'Tipo', val: 'Cliente nuevo' },
  //   ],
  //   filters: ['ecommerce', 'nuevo'],
  // },
  // {
  //   id: 6,
  //   icon: '🎯',
  //   iconBg: 'linear-gradient(135deg,#ffd6d6,#ffb3b3)',
  //   name: 'Onboarding optimizado',
  //   category: 'SaaS · Cliente nuevo',
  //   desc: 'Define el flujo de activación ideal para nuevos usuarios, con wizard de configuración, tooltips contextuales y métricas de activación.',
  //   tags: [
  //     { l: 'Onboarding', c: 'tt-orange' },
  //     { l: 'SaaS', c: 'tt-violet' },
  //     { l: 'Activación', c: 'tt-sky' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'SaaS' },
  //     { label: 'Última edición', val: 'Hace 4 días' },
  //     { label: 'Páginas', val: '10–14' },
  //     { label: 'Tipo', val: 'Cliente nuevo' },
  //   ],
  //   filters: ['saas', 'nuevo'],
  // },
  // {
  //   id: 7,
  //   icon: '📊',
  //   iconBg: 'linear-gradient(135deg,#a7ccff,#7aaff5)',
  //   name: 'Benchmark sectorial',
  //   category: 'Transversal · Cliente actual',
  //   desc: 'Compara al cliente con los 5 referentes de su industria en UX, performance, funcionalidades clave y posicionamiento digital.',
  //   tags: [
  //     { l: 'Benchmark', c: 'tt-sky' },
  //     { l: 'Análisis', c: 'tt-violet' },
  //     { l: 'Competencia', c: 'tt-gray' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'Transversal' },
  //     { label: 'Última edición', val: 'Hace 6 días' },
  //     { label: 'Páginas', val: '18–24' },
  //     { label: 'Tipo', val: 'Cliente actual' },
  //   ],
  //   filters: ['actual'],
  // },
  // {
  //   id: 8,
  //   icon: '🚀',
  //   iconBg: 'linear-gradient(135deg,#c0f5ff,#8fe8ff)',
  //   name: 'Propuesta SaaS B2B completa',
  //   category: 'SaaS · B2B · Cliente nuevo',
  //   desc: 'Template integral para proponer una solución SaaS desde cero: problema, solución, arquitectura, roadmap, pricing y próximos pasos.',
  //   tags: [
  //     { l: 'SaaS', c: 'tt-violet' },
  //     { l: 'B2B', c: 'tt-lav' },
  //     { l: 'Roadmap', c: 'tt-sky' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'SaaS / B2B' },
  //     { label: 'Última edición', val: 'Hace 1 semana' },
  //     { label: 'Páginas', val: '20–28' },
  //     { label: 'Tipo', val: 'Producto nuevo' },
  //   ],
  //   filters: ['saas', 'b2b', 'nuevo'],
  // },
  // {
  //   id: 9,
  //   icon: '🛍️',
  //   iconBg: 'linear-gradient(135deg,#dcfcff,#b8f4ff)',
  //   name: 'Omnicanalidad retail',
  //   category: 'Retail · Cliente actual',
  //   desc: 'Integra tienda física y digital: click & collect, inventario unificado, loyalty program y experiencia consistente en todos los canales.',
  //   tags: [
  //     { l: 'Retail', c: 'tt-mint' },
  //     { l: 'Omnicanal', c: 'tt-orange' },
  //     { l: 'Loyalty', c: 'tt-gray' },
  //   ],
  //   fields: [
  //     { label: 'Industria', val: 'Retail' },
  //     { label: 'Última edición', val: 'Hace 2 días' },
  //     { label: 'Páginas', val: '14–18' },
  //     { label: 'Tipo', val: 'Cliente actual' },
  //   ],
  //   filters: ['actual'],
  // },
];
