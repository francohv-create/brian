export const TEMPLATES_DATA = [
  {
    id: 1,
    template: 1,
    icon: '🛒',
    iconBg: 'linear-gradient(135deg,#c8ff9e,#a8f06e)',
    name: 'Ecommerce / Retail Digital',
    category: 'Ecommerce · Argentina',
    desc: 'Detecta oportunidades para mejorar conversión, experiencia de compra, performance, confianza, medios de pago locales y retención.',
    tags: [
      { l: 'Ecommerce', c: 'tt-mint' },
      { l: 'Conversión', c: 'tt-violet' },
      { l: 'Mobile', c: 'tt-sky' },
      { l: 'Argentina', c: 'tt-orange' },
    ],
    fields: [
      { label: 'País', val: 'Argentina' },
      { label: 'Última edición', val: 'Hace 2 días' },
      { label: 'Hallazgos', val: '5–8' },
      { label: 'Recomendaciones', val: '3–5' },
    ],
    filters: ['ecommerce', 'actual'],
    detail: {
      aplica: [
        'La empresa vende productos online.',
        'Hay catálogo, carrito, checkout o medios de pago.',
        'El sitio muestra productos, precios, envíos, promociones o cuotas.',
        'Usa plataformas como VTEX, Shopify, Tiendanube, WooCommerce o Magento.',
      ],
      no_aplica: [
        'La web solo captura leads B2B.',
        'No hay flujo de compra directo.',
        'El producto vendido es software empresarial o servicios consultivos.',
      ],
      dimensiones: [
        {
          name: 'Experiencia de compra',
          items:
            'Clics hasta agregar al carrito · Pasos del checkout · Checkout como invitado · Claridad de costos de envío · Política de cambios y devoluciones.',
        },
        {
          name: 'Conversión',
          items:
            'Visibilidad de CTAs · Fricciones en el formulario · Mensajes de confianza · Cuotas y promociones visibles · Recuperación de carrito abandonado.',
        },
        {
          name: 'Mobile',
          items:
            'Experiencia mobile-first · Legibilidad de cards de producto · Sticky CTA · Facilidad para filtrar · Performance en 4G.',
        },
        {
          name: 'Performance técnica',
          items:
            'Core Web Vitals · Peso de imágenes · Lazy loading · Errores en flujo crítico · Tiempo de carga en PDP y checkout.',
        },
        {
          name: 'Accesibilidad',
          items:
            'Contraste en botones · Labels en formularios · Navegación por teclado · Alt text en imágenes · Estados de error comprensibles.',
        },
        {
          name: 'Pagos & logística ARG',
          items:
            'Mercado Pago, MODO, Transferencia · Cuotas sin interés · Pago Fácil / Rapipago · Andreani, OCA, Correo Argentino · Cálculo de envío por CP.',
        },
        {
          name: 'Retención',
          items:
            'Recomendaciones de productos · Programa de fidelidad · Cross-sell / upsell · Email, WhatsApp o push post-compra · Personalización para cliente recurrente.',
        },
      ],
      output: { hallazgos: '5–8', recomendaciones: '3–5' },
      competidores:
        'Mercado Libre, Frávega, Musimundo, Farmacity, Jumbo, Tiendanube — elegir 3 según categoría real del target.',
      fuentes:
        'Sitio web · PageSpeed Insights · Google Trends · CACE · Reviews de Google · App Store/Play Store · Reddit r/argentina.',
    },
  },
  {
    id: 2,
    icon: '🏢',
    template: 2,
    iconBg: 'linear-gradient(135deg,#f2e3ff,#e0ccf5)',
    name: 'Expansión B2B mayorista',
    category: 'B2B · Cliente nuevo',
    desc: 'Estructura una propuesta de plataforma mayorista para retailers que quieren habilitar ventas B2B con catálogo y precios diferenciados.',
    tags: [
      { l: 'B2B', c: 'tt-lav' },
      { l: 'Mayorista', c: 'tt-gray' },
      { l: 'Expansión', c: 'tt-violet' },
    ],
    fields: [
      { label: 'Industria', val: 'Retail / B2B' },
      { label: 'Última edición', val: 'Hace 5 días' },
      { label: 'Páginas', val: '14–18' },
      { label: 'Tipo', val: 'Cliente nuevo' },
    ],
    filters: ['b2b', 'nuevo'],
  },
  {
    id: 3,
    template: 3,
    icon: '🔍',
    iconBg: 'linear-gradient(135deg,#edf0ff,#d8e2ff)',
    name: 'Auditoría UX & rediseño',
    category: 'UX / Diseño · Cliente actual',
    desc: 'Analiza la experiencia del usuario actual, detecta puntos de abandono y presenta un plan de rediseño por etapas con ROI estimado.',
    tags: [
      { l: 'UX', c: 'tt-sky' },
      { l: 'Rediseño', c: 'tt-violet' },
      { l: 'Audit', c: 'tt-gray' },
    ],
    fields: [
      { label: 'Industria', val: 'Transversal' },
      { label: 'Última edición', val: 'Hace 1 semana' },
      { label: 'Páginas', val: '10–14' },
      { label: 'Tipo', val: 'Cliente actual' },
    ],
    filters: ['ux', 'actual'],
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
