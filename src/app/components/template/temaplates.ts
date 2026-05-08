export const template1 = `
clasificador_industria:
  input:
    - nombre_empresa
    - url
    - pais
    - descripcion_opcional

  pasos:
    - Buscar sitio oficial.
    - Extraer propuesta de valor, CTAs, palabras clave y estructura del sitio.
    - Detectar si el modelo es transaccional, lead-based, SaaS, marketplace o servicio.
    - Identificar industria primaria y subindustria.
    - Elegir template.
    - Si hay ambigüedad, devolver hasta 2 templates candidatos con nivel de confianza.

  output:
    industria_detectada:
    subindustria:
    pais:
    template_sugerido:
    confianza:
    razon:
    señales_detectadas:
    requiere_confirmacion_usuario: true/false
`;

export const template2 = `id: ecommerce_ar
nombre: Ecommerce / Retail Digital
pais: Argentina

aplica_cuando:
  - La empresa vende productos online.
  - Hay catálogo, carrito, checkout o medios de pago.
  - El sitio muestra productos, precios, envíos, promociones o cuotas.
  - Usa plataformas como VTEX, Shopify, Tiendanube, WooCommerce, Magento o Salesforce Commerce Cloud.

no_aplica_cuando:
  - La web solo captura leads B2B.
  - No hay flujo de compra directo.
  - El producto vendido es software empresarial o servicios consultivos.

objetivo_del_analisis:
  Detectar oportunidades para mejorar conversión, experiencia de compra, performance, confianza, accesibilidad, medios de pago, logística y retención.

señales_de_clasificacion:
  - Botones como "Agregar al carrito", "Comprar ahora", "Finalizar compra".
  - Páginas de producto con precio, variantes, stock o cuotas.
  - Checkout, carrito, métodos de envío y medios de pago.
  - Palabras clave: envío, devolución, cupón, stock, talle, cuotas, carrito.

dimensiones_a_analizar:
  experiencia_de_compra:
    - Cantidad de clics desde home hasta agregar un producto al carrito.
    - Cantidad de pasos del checkout.
    - Existencia de checkout como invitado.
    - Claridad de costos de envío antes del checkout.
    - Claridad de cambios, devoluciones y tiempos de entrega.

  conversion:
    - Visibilidad de CTAs principales.
    - Fricciones en formulario de compra.
    - Mensajes de confianza: garantías, seguridad, reseñas, medios de pago.
    - Promociones, cuotas y beneficios visibles.
    - Recuperación de carrito abandonado.

  mobile:
    - Experiencia mobile-first.
    - Legibilidad de cards de producto.
    - Sticky CTA en producto.
    - Facilidad para filtrar y ordenar.
    - Performance en 4G.

  performance_tecnica:
    - Core Web Vitals.
    - Peso de imágenes.
    - Lazy loading.
    - Errores de consola en flujo crítico.
    - Tiempo de carga en página de producto y checkout.

  accesibilidad:
    - Contraste en botones principales.
    - Labels en formularios.
    - Navegación por teclado.
    - Alt text en imágenes relevantes.
    - Estados de error comprensibles.

  pagos_y_logistica_argentina:
    - Mercado Pago.
    - MODO.
    - Transferencia.
    - Cuotas sin interés.
    - Pago Fácil / Rapipago si aplica.
    - Andreani, OCA, Correo Argentino u operadores similares.
    - Cálculo de envío por CP.

  retencion:
    - Recomendaciones de productos.
    - Programa de fidelidad.
    - Cross-sell / upsell.
    - Email, WhatsApp o push post-compra.
    - Personalización para cliente recurrente.

fuentes_recomendadas:
  - Sitio web del target.
  - PageSpeed Insights / Lighthouse.
  - Google Trends.
  - CACE.
  - Reviews de Google.
  - App Store / Play Store si tiene app.
  - Reddit: r/argentina, r/ecommerce, menciones del rubro.
  - Sitios de competidores directos.

competidores_referencia:
  generales_argentina:
    - Mercado Libre
    - Frávega
    - Musimundo
    - Farmacity
    - Jumbo
    - Tiendanube como referencia de plataforma
  criterio:
    - Elegir 3 competidores según categoría real del target.
    - No comparar moda con electrodomésticos ni marketplace con marca directa salvo que sea útil.

preguntas_que_debe_responder:
  - ¿Dónde pierde conversión el flujo actual?
  - ¿Qué hace mejor la competencia?
  - ¿Qué espera el consumidor argentino en esta categoría?
  - ¿Hay fricciones mobile evidentes?
  - ¿Hay problemas de confianza, pagos o logística?
  - ¿Qué oportunidad concreta puede vender nuestra empresa?

output_esperado:
  hallazgos:
    cantidad: 5-8
    formato:
      - problema_detectado
      - evidencia
      - comparación_con_competidor
      - impacto_estimado
      - recomendación

  recomendaciones:
    cantidad: 3-5
    formato:
      - iniciativa
      - descripción
      - esfuerzo: S/M/L
      - impacto: bajo/medio/alto
      - métrica_afectada: conversión / ticket promedio / recompra / abandono

oportunidades_tipicas:
  - Optimización de checkout.
  - Mejora mobile.
  - Rediseño de PDP.
  - Mejoras de performance.
  - Automatización de recuperación de carrito.
  - Integración de medios de pago locales.
  - Personalización y recomendadores.

riesgos_de_propuesta_generica:
  - Recomendar "mejorar UX" sin evidencia.
  - No distinguir entre ecommerce transaccional y plataforma SaaS de ecommerce.
  - Comparar contra competidores que no venden la misma categoría.
  - Ignorar medios de pago y logística local.`;

export const template3 = `id: insurance_b2b_ar
nombre: Seguros / Insurtech / SaaS B2B para Aseguradoras
pais: Argentina

aplica_cuando:
  - La empresa trabaja con aseguradoras, brokers, productores, inspecciones, siniestros o gestión de pólizas.
  - El producto es B2B o B2B2C.
  - La web busca generar leads, demos o contacto comercial.
  - No hay compra directa, sino venta consultiva.

no_aplica_cuando:
  - Es ecommerce transaccional.
  - Es una aseguradora B2C pura y solo vende pólizas online.
  - Es una fintech sin relación con seguros, riesgo, claims o compliance.

objetivo_del_analisis:
  Detectar oportunidades comerciales vinculadas a digitalización de procesos, automatización de siniestros, eficiencia operativa, experiencia del asegurado, reducción de fraude, integración con sistemas legacy y diferenciación frente a competidores del mercado asegurador.

señales_de_clasificacion:
  - Palabras clave: seguros, pólizas, siniestros, inspecciones, claims, fraude, riesgo, peritaje, aseguradoras, productores.
  - CTAs como "Solicitar demo", "Contactar ventas", "Hablar con un especialista".
  - Casos de uso para compañías de seguro, brokers o áreas operativas.
  - Mención de integraciones, APIs, compliance, backoffice o automatización.

dimensiones_a_analizar:
  posicionamiento:
    - ¿A quién le vende? Aseguradoras, brokers, productores, bancos, fintechs, flotas, empresas.
    - ¿Qué problema promete resolver?
    - ¿El mensaje es específico o genérico?
    - ¿Tiene vertical claro: autos, hogar, ART, vida, caución, salud?
    - ¿Explica impacto económico o solo features?

  producto_y_capacidades:
    - Módulos visibles.
    - Flujos que automatiza.
    - Integraciones mencionadas.
    - Uso de IA, OCR, visión computacional, scoring o reglas de negocio.
    - Evidencia de producto real: screenshots, demos, documentación, casos.

  eficiencia_operativa:
    - Reducción de tiempos de inspección.
    - Reducción de tiempos de liquidación de siniestros.
    - Automatización de tareas manuales.
    - Trazabilidad del proceso.
    - Priorización de casos críticos.

  experiencia_del_cliente_final:
    - Autogestión.
    - Carga de documentación.
    - Seguimiento de estado.
    - Comunicación por WhatsApp/email/app.
    - Claridad del proceso de reclamo o inspección.

  datos_y_decision:
    - Dashboards.
    - Scoring de riesgo.
    - Alertas de fraude.
    - Reportes operativos.
    - Datos para underwriting o pricing.

  compliance_y_confianza:
    - Seguridad de datos.
    - Auditoría.
    - Permisos y roles.
    - Cumplimiento regulatorio local.
    - Evidencia de clientes reales.

  mercado_y_tendencias:
    - Digitalización de siniestros.
    - IA para inspección de daños.
    - Automatización de claims.
    - Telemática.
    - Prevención de fraude.
    - Omnicanalidad.
    - Modernización de sistemas legacy.

fuentes_recomendadas:
  industria_argentina:
    - Superintendencia de Seguros de la Nación.
    - AAPAS.
    - 100% Seguro.
    - El Seguro en Acción.
    - Rankings y datos públicos del mercado asegurador.

  mercado_global:
    - Insurance Journal.
    - McKinsey Insurance.
    - Deloitte Insurance Outlook.
    - EY Insurance.
    - CB Insights insurtech reports si hay acceso.
    - Notas de inversión o adquisiciones en insurtech.

  reviews_y_demanda:
    - G2.
    - Capterra.
    - TrustRadius.
    - LinkedIn posts de profesionales de seguros.
    - Reddit: r/Insurance.
    - Foros o comunidades de productores si están disponibles.

  señales_competitivas:
    - Sitios de competidores.
    - Casos de éxito.
    - Ofertas laborales.
    - Documentación pública.
    - Integraciones publicadas.
    - Noticias recientes.

competidores_referencia:
  globales:
    - CCC Intelligent Solutions
    - Mitchell
    - Snapsheet
    - Tractable
    - Shift Technology
    - Guidewire

  argentina_o_latam:
    - A definir por búsqueda según subvertical.
    - Buscar competidores de claims, inspecciones, fraude, core insurance, brokers o gestión de pólizas.

  criterio:
    - Primero identificar subindustria exacta.
    - Luego elegir 3 competidores comparables.
    - Separar competidores globales aspiracionales de competidores regionales reales.

preguntas_que_debe_responder:
  - ¿Qué proceso de seguros podría optimizar nuestra empresa para este target?
  - ¿Dónde hay fricción operativa o costo manual?
  - ¿Qué tendencias están empujando inversión en esta vertical?
  - ¿Qué competidores ya resuelven parte del problema?
  - ¿Qué oportunidad queda abierta?
  - ¿Qué propuesta comercial sería creíble para una aseguradora argentina?
  - ¿Qué evidencia hace que la propuesta no suene genérica?

output_esperado:
  analisis_target:
    - Qué tipo de empresa es.
    - Qué segmento atiende.
    - Qué problema parece resolver.
    - Qué madurez digital muestra.
    - Qué señales comerciales aparecen.

  matriz_benchmark:
    columnas:
      - competidor
      - segmento
      - features_clave
      - integraciones
      - uso_de_ia
      - clientes_publicos
      - diferencial
      - gap_vs_target

  tendencias:
    cantidad: 3-5
    formato:
      - tendencia
      - evidencia
      - impacto_en_argentina
      - oportunidad_comercial

  recomendaciones:
    cantidad: 3-5
    formato:
      - iniciativa
      - problema_que_resuelve
      - comprador_probable
      - impacto_esperado
      - esfuerzo: S/M/L
      - urgencia: baja/media/alta

oportunidades_tipicas:
  - Automatización de inspecciones.
  - Digitalización de siniestros.
  - Portal de autogestión para asegurados.
  - Scoring de fraude.
  - Integración con sistemas legacy.
  - Dashboard operativo para gerencias.
  - Reducción de tiempos de resolución.
  - Mejora de comunicación con productor o asegurado.

riesgos_de_propuesta_generica:
  - Tratar seguros como si fuera ecommerce.
  - Analizar solo la web pública y no el proceso operativo.
  - No distinguir aseguradora, broker, productor, insurtech y proveedor SaaS.
  - Proponer IA sin caso de uso concreto.
  - Ignorar regulación y confianza.`;
