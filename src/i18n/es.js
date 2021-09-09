import signupBannerImagePath from '../img/signup-es.png';
import loginBannerImagePath from '../img/login-es.png';

// Basic constants
const year = new Date().getFullYear();
const urlDopplerLegacy = process.env.REACT_APP_DOPPLER_LEGACY_URL;
const urlSite = `https://www.fromdoppler.com`;
const urlHelp = `https://help.fromdoppler.com/es`;
const urlShopify = process.env.REACT_APP_SHOPIFY_URL;
const dopplerUiLibraryVersion = process.env.REACT_APP_DOPPLER_UI_LIBRARY_VERSION;

// Common URLs
const urlHelpAdvancedReports = `${urlHelp}/reportes-avanzados`;
const urlPrivacy = `${urlSite}/legal/privacidad`;
const urlPrivacyFromSignup = `${urlPrivacy}`;
const urlPrivacyFromSignup_HTMLEncoded = `${urlPrivacy}`;
const urlPrivacyFromLogin = `${urlPrivacy}`;
const urlPrivacyFromForgot = `${urlPrivacy}`;
const mailtoSupport = `mailto:soporte@fromdoppler.com`;
const mailtoAdmin = `mailto:administracion@fromdoppler.com`;
const subjectBlockedAccountNoPay = `?subject=Cuenta%20suspendida%20por%20falta%20de%20pago%20-%20Login`;
const subjectCanceledAccountNoPay = `?subject=Cuenta%20cancelada%20por%20falta%20de%20pago%20-%20Login`;
const subjectCanceledAccountOtherReason = `?subject=Cuenta%20cancelada%20-%20Login`;
const subjectBlockedAccountInvalidPassword = `?subject=Cuenta%20bloqueada%20por%20intentos%20fallidos%20-%20Login`;
const urlControlPanel = `${urlDopplerLegacy}/ControlPanel`;
const urlBuyMonthly = `${urlControlPanel}/AccountPreferences/UpgradeAccount?Plan=monthly`;
const urlSiteTracking = `${urlControlPanel}/CampaignsPreferences/SiteTrackingSettings`;
const urlSiteFromSignup = `${urlSite}/`;
const urlSiteFromLogin = `${urlSite}/`;
const urlSiteFromForgot = `${urlSite}/`;
const urlSiteContact = `${urlSite}/contacto/`;
const urlControlPanelMain = `${urlControlPanel}/ControlPanel`;
const urlMasterSubscriber = `${urlDopplerLegacy}/Lists/MasterSubscriber/`;
const urlCreateSubscriberList = `${urlDopplerLegacy}/Lists/List`;
const urlDraft = `${urlDopplerLegacy}`;
const urlUpgradePlan = `${urlDopplerLegacy}/ControlPanel/AccountPreferences/UpgradeAccount`;

const messages_es = {
  agencies: {
    breadcrumb: 'Planes',
    breadcrumb_url: `${urlBuyMonthly}`,
    feature_access: 'Acceso al panel de Client Manager para gestionar las cuentas de tus clientes.',
    feature_admin: 'Administración de perfiles de usuario y permisos de acceso para tus clientes.',
    feature_consultancy: 'Asesoramiento exclusivo para gestionar múltiples cuentas.',
    feature_custom: 'Personalización con el logotipo de tu empresa.',
    feature_reports: 'Reportes Avanzados sobre el desempeño de las Campañas.',
    features_title: '¿Qué incluye el Plan para Agencias?',
    form_legend: 'Completa este Formulario y te contactaremos en breve.',
    label_volume: 'Volumen de Emails por mes:',
    submit: 'Solicitar demo',
    submitted: 'Continuar en Doppler',
    subtitle_MD: `Conoce todo lo que el Email Marketing puede hacer por tu Agencia con una **demo personalizada**.`,
    success_msg: '¡Excelente! Nos pondremos en contacto contigo.',
    title: 'Plan para Agencias',
    volume_0: 'Menos de 500k',
    volume_10m: 'Más de 10m',
    volume_1m: 'Entre 1m y 10m',
    volume_500: 'Entre 500k y 1m',
    volume_do_not_know: 'No lo sé',
  },
  big_query: {
    add_google_account: `Agregar cuenta de Google.`,
    add_permission_google_account: `Agregar permiso para cuentas de Google.`,
    free_alt_image: `big query`,
    free_btn_redirect: `Ver planes plus`,
    free_text_data_studio_MD: `[Configura el tablero prediseñado de Google Data Studio en unos pocos pasos](https://developers.google.com/datastudio) para analizar reportes detallados sobre tus campañas,
    tus suscriptores y otros datos de tu cuenta en un tablero personalizable`,
    free_text_strong: `Potencia tus Campañas con reportes de Google Data Studio, Tableau, Power BI y otras herramientas de Data Analytics.`,
    free_text_summary: `Accede a reportes detallados para analizar el rendimiento de tus Campañas de Email & Automation Marketing. Con esta integración podrás: `,
    free_title: `Conecta Doppler con BigQuery`,
    free_ul_item_filter: `Aplicar diferentes filtros para enfocar el análisis en uno o varios aspectos de tu estrategia.`,
    free_ul_item_insights: `Trabajar desde un tablero personalizado y con vistas editables.`,
    free_ul_item_strategy: `Obtener información valiosa para tu estrategia.`,
    plus_beginning: `Inicio`,
    plus_big_query: `BigQuery`,
    plus_body_step_one_MD: `Otorgar acceso a BigQuery. [HELP](https://cloud.google.com/bigquery/docs/?hl=es-419)`,
    plus_body_step_two_MD: `Crear reportes. [HELP](https://datastudio.google.com/overview)`,
    plus_configuration: `Configuración`,
    plus_control_panel: `Panel de Control`,
    plus_header_MD: `Accede a reportes detallados para analizar el rendimiento de tus Campañas de Email & Automation Marketing.`,
    plus_message_remember: `Recuerda guardar los cambios`,
    plus_message_saved: `Cambios guardados con éxito`,
    plus_paragraph_two: `Google BigQuery`,
    plus_step_one: `Primer paso`,
    plus_step_one_paragraph: `Los usuarios tendrán acceso a la información de tu cuenta almacenada en BigQuery. Recibirán una notificación por correo electrónico informando que les has dado dichos accesos.`,
    plus_step_one_paragraph_MD: `**¡Psst!** Solo puedes otorgar acceso a **correos electrónicos de Google**, tanto de Gmail como de dominios empresariales.`,
    plus_step_two: `Segundo paso`,
    plus_step_two_paragraph_MD: `Conecta Doppler y BigQuery para visualizar reportes detallados en tu herramienta de Data Analytics. Doppler te proveerá un **tablero prediseñado de Google Data Studio** que
    podrás configurar en simples pasos.`,
    plus_title: `Conecta Doppler con BigQuery`,
    upgrade_plan_url: `${urlUpgradePlan}`,
    url_legacy_control_panel: `${urlControlPanelMain}`,
    url_legacy_doppler: `${urlDopplerLegacy}`,
  },
  change_plan: {
    all_of_plan: `Todo lo de {plan} más:`,
    ask_demo: 'Solicitar demo',
    banner_exclusive_features_description: `¿Necesitas <Bold>asesoría y acompañamiento exclusivo, IPs dedicadas o funcionalidades extras</Bold>? Podemos diseñar un Plan a la medida de tu negocio.`,
    banner_exclusive_features_title: 'Servicios adicionales',
    big_data_tooltip: 'Funcionalidad Big Data',
    calculate_price: 'Calcular Precio',
    card_agencies_description: 'Gestiona múltiples cuentas desde un solo lugar.',
    card_agencies_title: 'Agencias',
    card_free_description: 'Envía Campañas ilimitadas hasta 500 Contactos, sin contratos ni tarjetas de crédito.',
    card_free_title: 'GRATUITO',
    card_plus_description: 'Aumenta la efectividad de tus Campañas con Big Data. ¡Contarás con atención personalizada!',
    card_plus_title: 'Plus',
    card_standard_description: 'Suma funcionalidades a tu estrategia eligiendo el tipo de Plan.',
    card_standard_title: 'Avanzado',
    current_plan: 'Plan Actual',
    features_HTML_agencies: `
    <star>Acceso al panel de Client Manager para gestionar múltiples cuentas.</star>
    <star>Configuración de niveles de permiso y accesos para cada cuenta o cliente.</star>
    <option>Personalización con el logo de tu empresa.</option>
    <option>Reportes Avanzados sobre el desempeño de las Campañas de cada cliente.</option>
    <option>Asesoramiento exclusivo para la gestión del Client Manager.</option>`,
    features_HTML_free: `
    <option>Acceso a la API de Doppler.</option>
    <option>Formularios de Suscripción Clásicos y Pop-up.</option>
    <option>Campañas clásicas y sociales ilimitadas.</option>
    <option>Email Automation básico.</option>
    <option>Reportes en tiempo real.</option>
    <option>Atención al Cliente por múltiples canales.</option>
    <option>Integraciones con otras plataformas.</option>
    <option>Emojis y Campos Personalizados en Asuntos.</option>
    <newOption>Guía de buenas prácticas en Asuntos.</newOption>
    <newOption>Listado de Asuntos más efectivos.</newOption>
    <optionComingSoon>Limpieza inteligente de Contactos.</optionComingSoon>`,
    features_HTML_plus: `
    <star>Hasta 3 Reportes personalizados bonificados.</star>
    <bigData>Integración con BigQuery y herramientas de Data Analytics.</bigData>
    <bigData>Tablero de Google Data Studio 100% personalizable.</bigData>
    <bigData>Predicción de eficacia en Asuntos.</bigData>
    <bigData>Envío Inteligente en el mejor día y horario para cada Contacto.</bigData>
    <newOption>Política de Contacto.</newOption>
    <newOption>Detener Envío en progreso.</newOption>
    <optionComingSoon>Creación automática de Segmentos.</optionComingSoon>
    <optionComingSoon>Corrección automática de direcciones de Email incorrectas.</optionComingSoon>
    <optionComingSoon>Predicción de Spam.</optionComingSoon>
    <optionComingSoon>Email Automation de Re Engagement.</optionComingSoon>
    <optionComingSoon>Plantillas Inteligentes.</optionComingSoon>`,
    features_HTML_standard: `
    <star>Email Automation avanzado para E-commerce.</star>
    <star>Análisis de Comportamiento en Sitio.</star>
    <star>Reportes Avanzados.</star>
    <star>Campañas SMS.</star>
    <star>Envío Inteligente en el mejor horario para cada Contacto.</star>
    <option>Campañas Test A/B.</option>
    <option>Campañas 100% personalizadas sin la firma de Doppler.</option>
    <optionComingSoon>Botón de WhatsApp para Sitios Web.</optionComingSoon>`,
    features_title_agencies: 'Funcionalidades del Plan Plus, más:',
    features_title_plus: 'Funcionalidades del Plan Avanzado, más:',
    features_title_standard: 'Funcionalidades del Plan Gratuito, más:',
    hide_features: 'Ocultar Funcionalidades',
    increase_action_monthly_deliveries: 'Aumentar Envíos',
    increase_action_prepaid: 'Comprar Créditos',
    increase_action_subscribers: 'Aumentar Contactos',
    link_exclusive_features: 'Solicitar',
    new_label: 'Nuevo',
    option_coming: 'Próximamente',
    per_month: 'por mes',
    recommended: 'Recomendado',
    show_features: 'Ver todas las Funcionalidades',
    since: 'Desde',
    title: 'Planes que acompañan cada etapa de tu negocio',
    until_x_subscribers: `Hasta {subscribers} Contactos.`,
  },
  checkoutProcessForm: {
    billing_information_address: 'Dirección',
    billing_information_answer_question: 'Ingresa la respuesta a la pregunta elegida:',
    billing_information_choose_question: 'Elige la pregunta que prefieras:',
    billing_information_city: 'Ciudad',
    billing_information_country: 'País',
    billing_information_firstname: 'Nombre',
    billing_information_lastname: 'Apellido',
    billing_information_phone: 'Teléfono',
    billing_information_province: 'Estado / Provincia:',
    billing_information_same_address: 'Es la misma que la Información de Contacto.',
    billing_information_title: `Información de Facturación`,
    billing_information_zip_code: 'Código postal',
    contact_information_address: 'Dirección',
    contact_information_city: 'Ciudad',
    contact_information_company: 'Empresa',
    contact_information_country: 'País',
    contact_information_firstname: 'Nombre',
    contact_information_industry: 'Industria',
    contact_information_lastname: 'Apellido',
    contact_information_phone: 'Teléfono',
    contact_information_province: 'Estado / Provincia',
    contact_information_security_question: 'Pregunta de seguridad',
    contact_information_security_response: 'Respuesta',
    contact_information_title: `Información de Contacto`,
    contact_information_zip_code: 'Código postal',
    discount_half_yearly: 'Semestral',
    discount_monthly: 'Mensual',
    discount_quarterly: 'Trimestral',
    discount_subscription_half_yearly: 'Posees un tipo de renovación Semestral',
    discount_subscription_monthly: 'Posees un tipo de renovación Mensual',
    discount_subscription_quarterly: 'Posees un tipo de renovación Trimestral',
    discount_subscription_subtitle: 'SOBRE EL PRECIO DEL PLAN',
    discount_subscription_yearly: 'Posees un tipo de renovación Anual',
    discount_title: 'Tipo de renovación:',
    discount_yearly: 'Anual',
    edit: 'Editar',
    empty_option_select: `Selecciona una opción`,
    payment_method: {
      credit_card: 'Tarjeta de Crédito',
      mercado_pago: 'Mercado Pago',
      title: 'Método de Pago',
      transfer: 'Transferencia',
      valid_thru: 'válido hasta',
    },
    save_continue: 'Guardar y continuar',
    title: `Proceso de pago`,
  },
  cloud_tags: {
    tag_already_exist: `El tag {tagName} ya existe.`,
    tag_limit_exceeded: `Solo puede agregar {max} tags.`,
  },
  common: {
    advanced_preferences: `Integraciones y Preferencias Avanzadas`,
    back: `Atrás`,
    cancel: `Cancelar`,
    connect: `Conectar`,
    control_panel: `Panel de Control`,
    control_panel_advanced_pref_url: `${urlControlPanelMain}?section=AdvancedPreferences`,
    control_panel_section_url: `${urlControlPanel}`,
    control_panel_url: `${urlControlPanelMain}`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacy}).`,
    emails: 'Emails',
    empty_data: `Tu dominio no tiene datos para mostrar en esta sección aún.`,
    feature_no_available: `La funcionalidad no está disponible aún`,
    hide: `Ocultar`,
    homeUrl: `${urlDraft}`,
    message: `Mensaje`,
    message_last_plan: `Cuéntanos tus necesidades y diseñaremos el Plan perfecto para ti`,
    message_success: `¡Hecho! Tu solicitud ha sido enviada`,
    new: `Nueva`,
    optional_message: `Mensaje (Opcional)`,
    recaptcha_legal_MD: `Sitio protegido por reCAPTCHA. [Política de Privacidad](https://policies.google.com/privacy?hl=es) y [Condiciones del Servicio](https://policies.google.com/terms?hl=es) de Google.`,
    save: `Guardar`,
    send: `Enviar`,
    show: `Mostrar`,
    synchronizing: `Syncronizando`,
    ui_library_image: `https://cdn.fromdoppler.com/doppler-ui-library/${dopplerUiLibraryVersion}/img/{imageUrl}`,
    unexpected_error: `¡Ouch! Ocurrio un error inesperado, intenta nuevamente`,
    unsaved_changes_message: `Es posible que no se guarden los cambios que realizó.`,
  },
  contact_policy: {
    amount_description: 'Enviar hasta',
    error_invalid_range_msg_MD: 'Puedes configurar hasta **999 Emails y 30 días** como máximo.',
    exclude_list_description_MD: `
Puedes seleccionar **hasta 10 Listas** para que sean excluídas del límite de envíos. Los Contactos de las Listas excluídas **recibirán todas tus Campañas.**`,
    exclude_list_selector: {
      description_MD: `Los Contactos de las Listas que excluyas recibirán todas tus Campañas. **Recuerda que puedes seleccionar hasta {maxToSelect} Listas.**`,
      max_limit_exceeded: 'Has seleccionado el máximo de Listas que puedes excluir de la Política de Contacto.',
      title: 'Excluir Listas de la Política de Contacto',
    },
    exclude_list_title: `Excluir Listas`,
    interval_description: 'en un plazo de',
    interval_unit: 'días',
    meta_title: 'Doppler | Política de Contacto',
    promotional: {
      action_text: 'Ver Planes PLUS',
      description_MD: 'Contrata un Plan Plus y accede a esta funcionalidad para definir la **cantidad máxima de Emails** que tus Contactos recibirán en un período determinado. También podrás:',
      features: {
        exclude_campaigns_MD: '**Excluir Campañas** de la Política de Contacto.',
        exclude_lists_MD: '**Excluir Listas** de la Política de Contacto.',
      },
      paragraph: 'Optimiza los resultados de tus Campañas definiendo una Política de Contacto acorde a tu estrategia.',
      upgrade_plan_url: `${urlUpgradePlan}`,
    },
    select_lists: 'Seleccionar Listas',
    subtitle_MD: `
Define la **cantidad máxima de Emails** que tus Contactos podrán recibir en un período de tiempo determinado.

¿Quieres saber más? Presiona [HELP](${urlHelp}/politica-de-contacto).`,
    success_msg: 'Los cambios han sido guardados.',
    title: 'Política de Contacto',
    toggle_text: 'Definir número máximo de envíos',
    tooltip_max_limit_exceeded: `Has seleccionado el máximo de Listas que puedes excluir de la Política de Contacto.`,
  },
  default_banner_data: {
    background_url: `https://cdn.fromdoppler.com/doppler-ui-library/${dopplerUiLibraryVersion}/img/violet-yellow.png`,
    description: 'Clásicos y pop-ups con suscripción Simple o Doble Opt-In. ¡Tú eliges cómo quieres que luzcan, qué datos solicitar y dónde ubicarlos!',
    functionality: 'Formularios de suscripción',
    image_url: `https://cdn.fromdoppler.com/doppler-ui-library/${dopplerUiLibraryVersion}/img/login-es.png`,
    title: 'Suma contactos a tus Listas con Formularios personalizados',
  },
  empty_notification_text: `No tienes notificaciones pendientes.`,
  exclusive_form: {
    advisory: 'Asesoría y Consultoría.',
    breadcrumb: 'Planes',
    breadcrumb_url: `${urlBuyMonthly}`,
    custom_onboarding: 'Onboarding personalizado',
    custom_reports: 'Reportes a medida',
    dedicated_ip: 'IPs Dedicadas',
    demo: 'ENVIAR',
    description: '¿Necesitas funcionalidades especiales para tu negocio? Cuéntanos cuáles son y podremos ayudarte con un Plan pensado para ti.',
    design_layout_emails: 'Diseño, maquetacion y envio de Emails',
    development_custom_features: 'Desarrollo de Funcionalidades personalizadas',
    features_for_you: 'Funcionalidades a tu medida',
    form_features: 'Selecciona las características que te interesan:',
    form_hour_contact: '¿En qué horario podemos llamarte?',
    form_legend: 'Completa el siguiente formulario de planes',
    form_title: 'Completa este Formulario y te contactaremos en breve.',
    message: 'Cuéntanos que necesitas',
    meta_description: 'Características especiales pensados para los usuarios más exigentes.',
    new: 'Nueva',
    others: 'Otras',
    strategic_accompaniment: 'Acompañamiento Estratégico.',
    success: '¡Excelente! Nos pondremos en contacto a la brevedad',
    testAb: 'Campañas Test A/B',
    title: 'Características personalizadas',
  },
  faq: {
    answer_1: `**Tarjeta de crédito internacional** Visa, Mastercard o American Express; **transferencia bancaria** a partir de un monto mínimo (para clientes de Argentina, México y Colombia);
    **tarjeta de crédito a través de Mercado Pago** (para Argentina).`,
    answer_2: `**No, puedes darte de baja cuando quieras** y solo se cobrará el mes en curso. Si necesitas un contrato por la prestación del servicio, podemos hacerlo.`,
    answer_3: `**Sí, todos los Planes se renuevan automáticamente** tanto si pagas todos los meses o por adelantado. La renovación se realiza el **primer día del mes**.`,
    answer_4: `Podrías adquirir un **Plan por Envíos**, que ofrece un **costo unitario por Email más bajo** a medida que aumenta el tamaño del Plan.
    Y si tienes alguna otra necesidad, podemos cotizar un **Plan con Servicios adicionales**.`,
    answer_5: `No. **Los Créditos son acumulables y no se vencen**. Puedes utilizarlos para enviar Campañas y hacer recompras cuando quieras.`,
    answer_6: `Una vez que **elijas el Plan**, al seleccionar el **Método de Pago** verás tu **resumen de compra** a la derecha de la pantalla.
    Allí podrás ingresar tu Código de Promoción, y si este es válido verás el descuento que se aplicará a la compra del Plan. _**Los Códigos de Promoción no son acumulables con descuentos por pago adelantado**_.`,
    answer_7: `**Sí. Cualquier Plan por Envíos, Contactos o Créditos** permite enviar Campañas de SMS y obtener Reportes sobre ellos. Ten en cuenta que **los SMS no vienen incluídos dentro del precio del Plan**.`,
    answer_8: `En los Planes por Envíos, el total que hayas contratado se renovará el primer día del mes y **no se acumulan**.`,
    answer_9: `No. Los Contactos que hayas importado en un primer momento en una cuenta gratuita se contabilizarán dentro del total que hayas contratado.`,
    question_1: `¿Cuáles son los métodos de pago disponibles?`,
    question_2: `¿Hay un tiempo mínimo de permanencia para solicitar la baja del servicio?`,
    question_3: `¿Los Planes se renuevan automáticamente?`,
    question_4: `Tengo más de 100.000 Contactos. ¿Qué Plan me conviene contratar?`,
    question_5: `En los Planes por Créditos, ¿hay una fecha límite para usarlos?`,
    question_6: `¿Cómo aplico un Código de Promoción para contratar un Plan?`,
    question_7: `¿Es necesario un Plan Pago para hacer SMS Marketing?`,
    question_8: `¿Qué pasa si no uso todos los Envíos que contraté por mes?`,
    question_9: `Al comprar un Plan, ¿puedo reemplazar los Contactos que subí en la versión gratis?`,
    title: `Preguntas frecuentes sobre Planes`,
  },
  feature_panel: {
    email_automation: `Email Automation`,
    email_automation_description: `Llega con el mensaje adecuado en el momento justo`,
    email_automation_remarks: `Envía Emails 100% personalizados de acuerdo al comportamiento y los intereses de tus Suscriptores. ¡Gana tiempo y ahorra dinero!`,
    forms: `Formularios de suscripción`,
    forms_description: `Suma contactos a tus Listas con Formularios personalizados`,
    forms_remarks: `Clásicos y pop-ups con suscripción Simple o Doble Opt-In. ¡Tú eliges cómo quieres que luzcan, qué datos solicitar y dónde ubicarlos!`,
  },
  footer: {
    iso: `Certificación de Calidad ISO 9001:2008`,
  },
  forgot_password: {
    back_login: `¿Recordaste tu Contraseña? ¡Haz clic aquí y vuelve atrás!`,
    back_login_after_forgot: `Volver al Log in`,
    blocked_account_MD: `Tu cuenta se encuentra cancelada. Para más información [contáctanos](${urlSiteContact}).`,
    button_request: `Solicitar`,
    confirmation_message_MD: `
¡Revisa tu casilla!

Encontrarás un Email con los pasos a seguir.`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromForgot}).`,
    description: `¡No te preocupes! Nos sucede a todos. Ingresa tu Email y te ayudaremos a recuperarla.`,
    expired_data: `Tus datos expiraron. Por favor regresa al Email que te enviamos para restablecer tu contraseña.`,
    expired_link: `¡Link expirado! Por favor haz click en ¿No recuerdas tu contraseña?.`,
    image_path: `${loginBannerImagePath}`,
    max_attempts_sec_question: `No ha respondido correctamente. Por favor, inicie nuevamente el proceso para reestablecer su contraseña de Doppler. `,
    pass_reset_ok: `¡Tu Contraseña ha sido actualizada exitosamente!`,
    placeholder_email: `¡Psst! Es el Email con el que creaste tu cuenta`,
    url_site: `${urlSiteFromForgot}`,
  },
  forms: {
    label_contact_schedule: `¿En qué horario podemos llamarte?`,
    label_email: `Email: `,
    label_firstname: `Nombre: `,
    label_lastname: `Apellido: `,
    label_phone: `Teléfono: `,
    placeholder_phone: `9 11 2345-6789`,
  },
  header: {
    availables: 'disponibles',
    enabled: 'HABILITADO',
    help_url: `${urlHelp}`,
    plan_emails: 'Emails',
    plan_prepaid: 'Plan Prepago',
    plan_suscribers: 'Suscriptores',
    profile: 'Perfil',
    send_mails: 'Envío de Emails',
    send_request: 'SOLICITUD ENVIADA',
    tooltip_last_plan: 'Estamos diseñando un Plan a la medida de tus necesidades. ¡Te contactaremos pronto!',
  },
  invoices_list: {
    amount_column: `Importe`,
    balance_column: `A Saldar`,
    control_panel_account_preferences_url: `${urlControlPanelMain}?section=AccountPreferences`,
    control_panel_billing_information_section: `Información de Facturación`,
    control_panel_billing_information_url: `${urlControlPanel}/AccountPreferences/BillingInformationSettings`,
    control_panel_section: `Panel de Control`,
    creation_date_column: `Fecha Creación`,
    currency_column: `Moneda`,
    date_column: `Fecha`,
    document_FC: `Factura`,
    document_NC: `Nota de Crédito`,
    document_number_column: `Número Comprobante`,
    document_type_column: `Tipo Comprobante`,
    download_msg: `Descargar`,
    downloads_column: `Descargas`,
    due_date_column: `Fecha Vencimiento`,
    error_msg: `¡Ouch! Ocurrió un error al intentar cargar tus facturas.`,
    no_data_msg: `Aún no hay facturas emitidas para mostrar.`,
    no_download_msg: `Aún no hay factura para descargar`,
    paid_to_date_column: `Pagado`,
    sub_title: `Aquí está detalle de las facturas que hemos emitido. Recuerda que puedes descargar cada una.`,
    title: `Facturas Emitidas`,
  },
  loading: `Cargando...`,
  login: {
    button_login: `Ingresa`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromLogin}).`,
    enter_doppler: `Ingresa a tu cuenta`,
    enter_doppler_sub: `¡Hoy es un buen día para potenciar tu negocio con el poder del Email, Automation & Data Marketing!`,
    forgot_password: `¿No recuerdas tu Contraseña?`,
    head_description: `Atrae, convierte y fideliza clientes con el poder del Email Marketing Automation. ¡Ingresa a Doppler!`,
    head_title: `Email Marketing Automation gratis y con envíos ilimitados | Doppler`,
    image_path: `${loginBannerImagePath}`,
    label_user: `Nombre de Usuario: `,
    placeholder_email: `¡Psst! Es tu Email`,
    signup: `Regístrate gratis`,
    url_site: `${urlSiteFromLogin}`,
    you_want_create_account: `¿Aún no tienes una cuenta?`,
  },
  master_subscriber: {
    header_title: `Reporte de Actividad General del Suscriptor`,
    page_description: `Mediante este reporte usted podrá conocer la actividad general de un suscriptor determinado`,
    page_title: `Doppler | Historial por Suscriptor`,
    search_form: {
      aria_label: `Formulario de filtros para buscar Historial de Suscriptores`,
      aria_search_field: `Ingrese un Email, Nombre o Apellido para buscar Historial de Suscriptor`,
      search_field_placeholder: `Busca un suscriptor por su Email, Nombre o Apellido...`,
      search_form_legend: `Busqueda avanzada de Historial de Suscriptor`,
    },
    table_result: {
      aria_label_email: `Email`,
      aria_label_lastname: `Apellido`,
      aria_label_name: `Nombre`,
      aria_label_score: `Puntuación`,
      aria_label_state: `Estado`,
      aria_label_table: `Resultado de Historial de Suscriptores`,
    },
  },
  master_subscriber_current_search: {
    grid_email: `Email`,
    grid_firstname: `Nombre`,
    grid_lastname: `Apellido`,
    grid_ranking: `Ranking`,
    grid_status: `Estado`,
  },
  master_subscriber_sent_campaigns: {
    grid_campaign: `Campaña`,
    grid_clicks: `Clicks Únicos`,
    grid_delivery: `Comportamiento`,
    grid_subject: `Asunto`,
  },
  pagination: {
    go_back_pages: 'Retroceder 5 páginas',
    go_foward_pages: 'Avanzar 5 páginas',
  },
  plan_calculator: {
    banner_for_monthly_deliveries: `¿Necesitas más Envíos? <Link>Escríbenos</Link>.`,
    banner_for_prepaid: `¿Necesitas más Créditos? Te recomendamos los <Link>Planes por Envíos</Link>.`,
    banner_for_subscribers: `¿Necesitas más Contactos? Te recomendamos los <Link>Planes por Envíos</Link>.`,
    banner_for_unknown: ' ',
    button_back: 'Volver',
    button_purchase: 'Continuar',
    button_purchase_tooltip: '¡Este es el Plan que tienes actualmente! Modifícalo para continuar.',
    cost_per_email: 'Costo por email',
    discount_clarification: 'La renovación es automática y puedes cancelarla cuando quieras. El precio del Plan no incluye impuestos.',
    discount_clarification_prepaid: 'El precio del Plan no incluye impuestos.',
    discount_half_yearly: '6 meses',
    discount_monthly: '1 mes',
    discount_quarterly: '3 meses',
    discount_subscription_half_yearly: 'Posees una suscripción Semestral',
    discount_subscription_monthly: 'Posees una suscripción Mensual',
    discount_subscription_quarterly: 'Posees una suscripción Trimestral',
    discount_subscription_subtitle: 'SOBRE EL PRECIO DEL PLAN',
    discount_subscription_yearly: 'Posees una suscripción Anual',
    discount_title: 'Suscripción',
    discount_yearly: '12 meses',
    per_month: 'por mes',
    plan_plus_subtitle: 'Elige el tipo de Plan y estima su costo deslizando el botón, de acuerdo al número de Contactos o Envíos que necesites.',
    plan_plus_title: 'Plan PLUS',
    plan_standard_subtitle: 'Elige el tipo de Plan y estima el precio deslizando el botón, de acuerdo al número de Contactos, Envíos o Créditos que necesites.',
    plan_standard_title: 'Plan AVANZADO',
    plan_type_monthly_deliveries: 'por Envíos',
    plan_type_monthly_deliveries_tooltip: 'Planes ideales para quienes envían gran cantidad de Campañas, ya que tienen menor costo unitario por Email. ',
    plan_type_prepaid: 'por Créditos',
    plan_type_prepaid_tooltip: 'Planes ideales para quienes envían Campañas esporádicamente. ¡Los créditos son acumulables y no tienen vencimiento!',
    plan_type_subscribers: 'por Contactos',
    plan_type_subscribers_tooltip: 'Planes basados en la cantidad de Contactos, sin límite de envíos. ¡Pagando por adelantado ahorras hasta 25%!',
    suggestion_for_monthly_deliveries: '¿Realizas más de 10.000.000 de envíos? <Link>Contáctanos y te asesoraremos.</Link>',
    suggestion_for_prepaid: ' ',
    suggestion_for_subscribers: '¿Tienes más de 100.000 contactos? Te recomendamos nuestros <Bold>PLANES POR ENVÍOS</Bold>, <Link>contáctanos y te asesoraremos.</Link>',
    suggestion_for_unknown: ' ',
    with_half_yearly_discount: 'Pago por 6 meses:',
    with_quarterly_discount: 'Pago por 3 meses:',
    with_yearly_discount: 'Pago por 12 meses:',
  },
  plans: {
    monthly_deliveries_amount_description: 'Emails',
    prepaid_amount_description: 'Créditos',
    subscribers_amount_description: 'Contactos',
    unknown_amount_description: ' ',
  },
  reports: {
    allow_enable_trial_MD: `Activa el periodo de prueba y accede a Reportes detallados sobre el comportamiento de los
    usuarios en tu Sitio Web o E-commerce. Descubre cuáles son las páginas más visitadas, cuántos
    visitantes poseen un Email que Doppler ha identificado y cuántos no. ¿Necesitas ayuda? [HELP](${urlHelpAdvancedReports}).`,
    allow_enable_trial_button: `Activa período de prueba`,
    allow_enable_trial_title: `Prueba Automation de Comportamiento en Sitio por tiempo limitado`,
    datahub_not_domains_title: `Agrega el dominio de tu Web y analiza el comportamiento de tus usuarios`,
    no_domains_MD: `
Registra el o los dominios sobre los que quieres realizar el seguimiento y accede a Reportes
detallados. Descubre cuáles son las páginas más visitadas de tu Sitio Web o E-commerce, cuántos
visitantes poseen un Email que Doppler ha identificado y cuántos no. ¿Necesitas ayuda? [HELP](${urlHelpAdvancedReports}).`,
    no_domains_button: `Agrega tu dominio`,
    no_domains_button_destination: `${urlSiteTracking}`,
    promotional: {
      description_MD: 'Accede a **Reportes detallados** para entender el comportamiento de los visitantes de tu Sitio Web o E-commerce. Descubre:',
      features: {
        feature_1: 'Cuáles son las páginas más visitadas.',
        feature_2: 'Cuántos visitantes ya están en tus Listas de Contacto.',
        feature_3: 'Cuántos visitantes no aún se han suscripto para recibir tus Campañas.',
      },
      link_text: 'REVISAR LOS PLANES',
      paragraph: `Contrata cualquier Plan Pago y accede a esta funcionalidad.`,
      title: `Analiza el comportamiento de tus visitantes y optimiza tus acciones`,
      upgrade_plan_url: `${urlUpgradePlan}`,
    },
  },
  reports_box: {
    to: `a`,
    visits_description_with_email: `Número total de usuarios que visitaron tu Sitio Web y cuyo Correo Electrónico ha sido identificado por Doppler. Si un usuario ingresó varias veces, solo se contabilizará una.`,
    visits_description_without_emails: `Número total de usuarios que visitaron tu Sitio Web y cuyo Correo Electrónico no ha sido identificado por Doppler. Si un usuario ingresó varias veces, solo se contabilizará una.`,
    visits_with_email: `Usuarios con Email`,
    visits_without_emails: `Usuarios sin Email`,
    without_included: `(sin incluir)`,
  },
  reports_daily_visits: {
    title: `Páginas vistas únicas`,
    tooltip_page_views: `Páginas vistas: `,
    tooltip_with_email: `Usuarios con Email: `,
    tooltip_without_email: `Usuarios sin Email: `,
  },
  reports_filters: {
    all_pages: `Todas las paginas`,
    description_MD: `
Descubre cuáles son las páginas más visitadas de tu Sitio Web o E-commerce, cuántos visitantes poseen un Email que Doppler ha identificado y cuántos no. ¡Sigue el recorrido de
los usuarios, detecta puntos de fuga y oportunidades de mejora! Si necesitas ayuda, presiona [HELP](${urlHelpAdvancedReports}).
      `,
    domain: `Dominio`,
    domain_not_verified_MD: `Tu dominio no está verificado. Es necesario para comenzar a obtener datos sobre tus visitas. [VERIFICAR DOMINIO](${urlSiteTracking}).`,
    pages: `Página`,
    rank_time: `Período de tiempo analizado`,
    title: `Analiza el comportamiento de los usuarios y optimiza tu estrategia`,
    today: `Hoy`,
    verified_domain: `Última visita registrada:`,
    week_with_plural: `{weeksCount, plural, =0 {sin semanas} one {# semana}other {# semanas} }`,
  },
  reports_hours_visits: {
    few_visits: `0 a {max}`,
    lot_visits: `+{min}`,
    medium_visits: `{min} a {max}`,
    title: `Días de semana y horas`,
    users: `Páginas vistas:`,
    users_with_email: `Usuarios con email:`,
    users_without_email: `Usuarios sin email:`,
  },
  reports_pageranking: {
    more_results: `Mostrar mas resultados`,
    top_pages: `Páginas más visitadas`,
    total_visits: `Visitas`,
    visits_with_email: `Visitas de usuarios con Email`,
    visits_without_email: `Visitas de usuarios sin Email`,
  },
  reports_partials_campaigns: {
    campaign_name: `Nombre de la  Campaña: `,
    campaign_state: `Estado de la Campaña `,
    campaign_subject: `Asunto: `,
    campaign_summary: `Resumen de la Campaña`,
    delivery_rate: `Tasa de entrega`,
    emails_delivered: `Emails Entregados:`,
    hard_and_soft: `Rebotes Hard y Soft`,
    header_description_shipped: `Tu Campaña ha sido enviada. Estas son las métricas finales de tu envío.`,
    header_description_shipping: `Tu Campaña está en progreso. Estas son las métricas parciales de tu envío.`,
    header_title_shipped: `Reporte de Campaña`,
    header_title_shipping: `Reporte Parcial`,
    last_click_date: `Último Click:`,
    last_open_date: `Última Apertura:`,
    not_open: `No Abiertos`,
    opened: `Abiertos`,
    page_description: `Reporte parcial`,
    page_title: `Doppler | Reporte parcial`,
    shipped: `Enviada`,
    shipping: `Enviando`,
    total_clicks: `Clicks Totales:`,
    total_forwarded: `Cantidad de Reenvíos:`,
    total_openings: `Total de Aperturas:`,
    total_recipients: `Destinatarios totales`,
    total_sent_so_far: `Emails enviados hasta el momento`,
    total_subscribers: `Total de Suscriptores:`,
    total_unsubscribers: `Cantidad de Remociones:`,
    unique_clicks: `Clicks Únicos:`,
    unique_opens: `Aperturas Únicas:`,
  },
  reports_title: `Doppler | Reportes`,
  shopify: {
    admin_apps: `Panel de control de Shopify`,
    admin_apps_url: `https://{shopName}/admin/apps`,
    connect_url: `${urlShopify}/install`,
    error_cannot_access_api: `Ouch! No pudimos conectar con la API de Shopify, por favor vuelve a intentarlo luego.`,
    header_disconnected_warning: `Al presionar "Conectar" serás redirigido a Shopify, donde podrás realizar todos los pasos necesarios para integrar.`,
    header_store: `Nombre de la cuenta:`,
    header_subtitle_MD: `
Envía automáticamente los Contactos de tu tienda y toda su información a una Lista de Doppler. Además, podrás importar los productos de tu tienda en
Plantillas de Email y crear Automations de Carrito Abandonado y Producto Visitado. ¿Tienes dudas? Presiona [HELP](${urlHelp}/como-integrar-doppler-y-shopify/).`,
    header_synchronization_date: `Fecha de última sincronización:`,
    header_title: `Conecta Doppler con tu tienda Shopify`,
    list_subtitle: `Puedes sincronizar los datos manualmente cuando gustes.`,
    list_title: `Lista sincronizada`,
    no_list_available: `Esperando Lista...`,
    table_list: `Nombre de la Lista`,
    table_shopify_customers_count: `Suscriptores`,
    title: `Doppler | Shopify`,
  },
  signup: {
    activate_account_instructions: `* Al hacer click en el botón que aparece en el Email, activarás tu cuenta y estarás listo para disfrutar todos los beneficios de Doppler.`,
    button_signup: `Crea tu cuenta gratis`,
    check_inbox: `Revisa tu casilla. ¡Tienes un Email!`,
    check_inbox_icon_description: `Fíjate en tu correo electrónico`,
    copyright_MD: `© ${year} Doppler LLC. Todos los derechos reservados. [Política de Privacidad y Legales](${urlPrivacyFromSignup}).`,
    do_you_already_have_an_account: `¿Tienes una cuenta?`,
    email_not_received: `¿No has recibido el Email?`,
    head_description: `Atrae, convierte y fideliza clientes con el poder del Email Marketing Automation. ¡Ingresa a Doppler!`,
    head_title: `Email Marketing Automation gratis y con envíos ilimitados | Doppler`,
    image_path: `${signupBannerImagePath}`,
    label_email: `Email: `,
    label_firstname: `Nombre: `,
    label_lastname: `Apellido: `,
    label_password: `Contraseña: `,
    label_phone: `Teléfono: `,
    legal_MD: `
Doppler te informa que los datos de carácter personal que nos proporciones al rellenar el presente formulario serán tratados por Doppler LLC como responsable de esta web.

**Finalidad:** Darte de alta en nuestra plataforma y brindarte los servicios que nos requieras..

**Legitimación:** Consentimiento del interesado..

**Destinatarios:** Tus datos serán guardados por Doppler, Zoho como CRM, Google como proveedor del servicio de reCAPTCHA,
Digital Ocean, Cogeco Peer1 y Rackspace como empresas de hosting.

**Información adicional:** En la [Política de Privacidad](${urlPrivacyFromSignup_HTMLEncoded}) de Doppler encontrarás información adicional sobre
la recopilación y el uso de su información personal por parte de Doppler, incluida información sobre acceso, conservación, rectificación,
eliminación, seguridad, transferencias transfronterizas y otros temas.
  `,
    log_in: `Ingresa`,
    no_more_resend_MD: `¿Aún no has recibido el Email? Ya te lo hemos reenviado, si no llega en los próximos minutos, por favor [contáctate con Soporte](${mailtoSupport}).`,
    placeholder_email: `Tu Email será tu Nombre de Usuario`,
    placeholder_password: `Escribe tu clave secreta`,
    placeholder_phone: `9 11 2345-6789`,
    privacy_policy_consent_MD: `Acepto la [Política de Privacidad](${urlPrivacyFromSignup_HTMLEncoded}) de Doppler.`,
    promotions_consent: `Quiero recibir promociones de Doppler y sus aliados.`,
    resend_email: `Reenvíalo`,
    sign_up: `Email, Automation & Data Marketing`,
    sign_up_sub: `Atrae, Convierte y Fideliza. Envíos ilimitados y gratis hasta 500 Suscriptores.`,
    thanks_for_registering: `Gracias por registrarte`,
    url_site: `${urlSiteFromSignup}`,
  },
  subscriber: {
    status: {
      active: 'Activo',
      inactive: 'Activo no Asociado a Listas',
      pending: 'Pendiente',
      standBy: 'En Espera de Ampliación de Plan',
      unsubscribed_by_client: 'Removido por el Cliente',
      unsubscribed_by_hard: 'Removido por Rebote Hard',
      unsubscribed_by_never_open: 'Removido por No Aperturas',
      unsubscribed_by_soft: 'Removido por Rebote Soft',
      unsubscribed_by_subscriber: 'Removido por el Suscriptor',
    },
  },
  subscriber_gdpr: {
    consent: 'Consentimiento:',
    description: 'Aquí encontrarás el historial de todos los consentimientos dados por tu Suscriptor.',
    download_permission_history: 'Descargar historial completo',
    empty_data: 'Este Suscriptor no ha aceptado ni rechazado ningun permiso.',
    empty_html_text: 'Sin texto legal definido',
    latest_results: 'Últimos 10 resultados',
    modification_date: 'Fecha de modificación:',
    modification_source: 'Origen:',
    modification_source_ip: 'IP origen de modificación:',
    permission_description: 'Texto personalizado',
    permission_name: 'Nombre del campo',
    permission_value: 'Valor',
    title: 'Historial de permisos RGPD del Suscriptor',
    value_false: 'Rechazado',
    value_none: 'Sin respuesta',
    value_true: 'Aceptado',
  },
  subscriber_history: {
    alt_image: 'Preview de la Campaña',
    delivery_status: {
      hardBounced: 'Rebotado Hard',
      notOpened: 'No Abierto',
      opened: 'Abierto',
      softBounced: 'Rebotado Soft',
    },
    description: 'Aquí podrás conocer el historial de comportamiento en Campañas de tus Suscriptores.',
    empty_data: 'Hasta el momento no hay Campañas enviadas',
    subscriber_breadcrumb: 'Suscriptores',
    subscriber_breadcrumb_url: `${urlMasterSubscriber}`,
    table_result: {
      aria_label_table: `Resultado de Historial de Campañas`,
    },
    title: 'Comportamiento histórico del Suscriptor',
    unsubscribed_date: 'Fecha de Remoción:',
  },
  subscriber_list_selector: {
    confirm_selection: 'Confirmar Selección',
    error_loading_list: 'Error al mostrar las Listas. Cierra esta ventana y vuelve a abrirla desde el botón "Seleccionar Listas".',
    max_limit_exceeded: `Ya seleccionaste el número máximo de listas permitidas.`,
    no_list: {
      create_list: 'Crear una lista',
      create_list_url: `${urlCreateSubscriberList}`,
      description_MD: `
Contar con una **Base de Datos actualizada** es clave para la efectividad del Email & Automation Marketing.
Con Doppler puedes generar Segmentos con intereses o características comunes, crear Formularios para atraer nuevos Contactos y más.`,
      not_now: 'Ahora no',
      strong_text: '¡Crea tu primera Lista e importa tus Contactos en simples pasos!',
      title: '¡Aún no tienes Listas creadas!',
    },

    table_columns: {
      list_name: 'Nombre de la lista',
      subscribers: 'Suscriptores',
    },
  },
  trafficSources: {
    direct: `Directo`,
    email: `Email`,
    organic: `Búsqueda Orgánica`,
    paid: `Publicidad en Buscadores`,
    referral: `Referencia`,
    social: `Redes Sociales`,
    title: `Fuentes de trafico`,
    users_with_email: `Usuarios con email`,
    users_without_email: `Usuarios sin email`,
  },
  upgradePlanForm: {
    confirmation_subtitle_contact: `Acabas de contratar un nuevo Plan Mensual para enviar Campañas ilimitadas hasta <bold>Contactos.</bold> Te enviaremos un email con el detalle del nuevo Plan.`,
    confirmation_subtitle_shipping: `Acabas de contratar un nuevo Plan Mensual para enviar Campañas ilimitadas hasta <bold>Envíos.</bold> Te enviaremos un email con el detalle del nuevo Plan.`,
    confirmation_title: `¡Hecho!`,
    message_placeholder: `Tu mensaje`,
    plan_select: `Selecciona el Plan`,
    title: `Solicita una actualización de tu Plan`,
    update: `Actualizar Plan`,
  },
  upgrade_suggestion_form: {
    breadcrumb: 'Planes',
    breadcrumb_url: `${urlBuyMonthly}`,
    description: 'Cuéntanos cuáles son tus necesidades y diseñaremos el Plan ideal para ti.',
    form_hour_contact: '¿En qué horario podemos contactarte?',
    form_legend: 'Completa el siguiente formulario',
    form_title: 'Completa el Formulario y nos contactaremos pronto',
    message: 'Selecciona los servicios adicionales de tu interés',
    message_placeholder: 'Escribe aquí tu mensaje',
    meta_description: 'Formulario para sugerir upgrade de plan.',
    submit_button: 'Enviar consulta',
    success: '¡Excelente! Nos pondremos en contacto a la brevedad',
    title: 'Servicios adicionales',
  },
  validation_messages: {
    error_account_contact_zoho_chat: `<button>Chatea con el equipo de Atención al Cliente</button> para solucionarlo.`,
    error_account_is_blocked_disabled_by_cm: `Esta cuenta fue bloqueada por el administrador. Contáctate para más información: `,
    error_account_is_blocked_invalid_password: `¡Ouch! Esta cuenta ha sido bloqueada debido a intentos de acceso fallidos.`,
    error_account_is_blocked_invalid_password_contact_support_MD: `Por favor [contacta al equipo de Atención al Cliente](${mailtoAdmin + subjectBlockedAccountInvalidPassword}) para solucionarlo.`,
    error_account_is_blocked_invalid_password_zoho_chat_msg: `¡Hola! ¿Me ayudas con mi cuenta bloqueada por intentos fallidos?`,
    error_account_is_blocked_not_pay: `¡Ouch! Esta cuenta ha sido suspendida por falta de pago.`,
    error_account_is_blocked_not_pay_contact_support_MD: `Por favor [contacta al equipo de Atención al Cliente](${mailtoAdmin + subjectBlockedAccountNoPay}) para solucionarlo.`,
    error_account_is_blocked_not_pay_zoho_chat_msg: `¡Hola! ¿Me ayudas con mi cuenta suspendida por falta de pago?`,
    error_account_is_canceled_not_pay: `¡Ouch! Esta cuenta ha sido cancelada por falta de pago.`,
    error_account_is_canceled_not_pay_contact_support_MD: `Por favor [contacta al equipo de Atención al Cliente](${mailtoAdmin + subjectCanceledAccountNoPay}) para solucionarlo.`,
    error_account_is_canceled_not_pay_zoho_chat_msg: `¡Hola! ¿Me ayudas con mi cuenta cancelada por falta de pago?`,
    error_account_is_canceled_other_reason: `¡Ouch! Esta cuenta ha sido cancelada.`,
    error_account_is_canceled_other_reason_contact_support_MD: `Por favor [contacta al equipo de Atención al Cliente](${mailtoAdmin + subjectCanceledAccountOtherReason}) para solucionarlo.`,
    error_account_is_canceled_other_reason_zoho_chat_msg: `¡Hola! ¿Me ayudas con mi cuenta cancelada?`,
    error_checkbox_policy: `¡Ouch! No has aceptado la Política de Privacidad de Doppler.`,
    error_email_already_exists: `¡Ouch! Ya posees una cuenta en Doppler.`,
    error_has_accents: `¡Ouch! El Email no debe contener tildes ni acentos.`,
    error_invalid_captcha: `¡Ouch! No pudimos validar que seas humano, por favor refresca la pantalla e intenta nuevamente.`,
    error_invalid_domain: `¡Ouch! Algo salió mal. Por favor revisa que tu Email sea correcto o intenta con otro.`,
    error_invalid_domain_to_register_account: `¡Ouch! Email inválido para crear una cuenta.`,
    error_invalid_email_address: `¡Ouch! El formato del Email es incorrecto`,
    error_invalid_login: `¡Ouch! Hay un error en tu Usuario o Contraseña. Vuelve a intentarlo.`,
    error_invalid_name: `¡Ouch! Escribe usando solo letras y no números.`,
    error_min_length: `¡Ouch! Minimo de caracteres invalido.`,
    error_min_length_2: `¡Ouch! Escribe al menos dos caracteres.`,
    error_password_character_length: `8 caracteres como mínimo`,
    error_password_digit: `Un número`,
    error_password_letter: `Una letra`,
    error_password_safe: `¡Tu Contraseña es segura!`,
    error_phone_invalid: `¡Ouch! Escribe un teléfono válido.`,
    error_phone_invalid_country: `¡Ouch! El código de país no es válido.`,
    error_phone_too_long: `¡Ouch! El número de teléfono es demasiado largo.`,
    error_phone_too_short: `¡Ouch! El número de teléfono es demasiado corto.`,
    error_register_denied: `¡Alto ahí! Has alcanzado el límite de cuentas permitido.`,
    error_required_field: `¡Ouch! El campo está vacío.`,
    error_unexpected_MD: `¡Ouch! Detectamos un problema de conexión. Por favor inténtalo nuevamente en unos minutos.`,
    error_unexpected_register_MD: `¡Ouch! Algo salió mal. Por favor, vuelve a intentarlo más tarde o [contacta a nuestro equipo de Soporte](${mailtoSupport}).`,
  },
};

export default messages_es;
