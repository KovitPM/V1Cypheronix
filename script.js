// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 19, 156, 0.98)"
  } else {
    header.style.background = "rgba(0, 19, 156, 0.95)"
  }
})

// PayPal Payment Handler (Example function)
function handlePayPalPayment(productType) {
  const products = {
    free: {
      name: translations[currentLanguage].product1Title,
      price: 0,
      description: translations[currentLanguage].product1Feature1,
    },
    startup: {
      name: translations[currentLanguage].product2Title,
      price: 19,
      description: translations[currentLanguage].product2Feature1,
    },
    sme: {
      name: translations[currentLanguage].product3Title,
      price: 49,
      description: translations[currentLanguage].product3Feature1,
    },
    enterprise: {
      name: translations[currentLanguage].product4Title,
      price: 129,
      description: translations[currentLanguage].product4Feature1,
    },
    consulting: {
      name: translations[currentLanguage].consultingTitle,
      price: 500,
      description: translations[currentLanguage].consultingFeature1,
    },
  }

  const product = products[productType]

  if (product) {
    if (product.price === 0) {
      alert(`${product.name} is free! Contact us to get started.`)
      return
    }

    const confirmed = confirm(
      `Do you want to proceed with payment for ${product.name}?\n` +
        `Price: $${product.price} CAD\n` +
        `Description: ${product.description}\n\n` +
        `Note: This is a demonstration. In real implementation it would connect with PayPal API.`,
    )

    if (confirmed) {
      console.log("Starting payment process for:", product)
      alert("Redirecting to PayPal... (Example function)")
    }
  }
}

// Contact Form Handler
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const message = this.querySelector("textarea").value

  // Basic validation
  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un email válido.")
    return
  }

  // Simulate form submission
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
  this.reset()

  // En una implementación real, aquí enviarías los datos al servidor
  console.log("Datos del formulario:", { name, email, message })
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .product-card, .feature-card")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Language translations and functionality
let currentLanguage = "en"

const translations = {
  en: {
    // Navigation
    inicio: "Home",
    servicios: "Services",
    productos: "Products",
    nosotros: "About Us",
    contacto: "Contact",

    // Hero Section
    heroTitle: "Advanced Technology Solutions",
    heroSubtitle:
      "We protect and optimize your business with cutting-edge technology in cybersecurity and software development",
    heroBtn1: "Our Services",
    heroBtn2: "Contact",

    // Services Section
    servicesTitle: "Our Services",
    service1Title: "Cybersecurity",
    service1Desc:
      "We protect businesses with advanced cybersecurity solutions, safeguarding data and digital assets from evolving threats.",
    service2Title: "Software Development",
    service2Desc: "We design and build innovative software tailored to meet modern business needs.",
    service3Title: "Network Creation and Security",
    service3Desc: "We develop and secure reliable networks to ensure seamless connectivity and protection.",

    // Products Section - Updated with new pricing and plans
    productsTitle: "Our Products",
    product1Title: "Free Plan",
    product1Price: "$0 CAD",
    product1Feature1: "Basic security scanning",
    product1Feature2: "Vulnerability alerts",
    product1Feature3: "Monthly limited report",
    product1Feature4: "Community support",
    product2Title: "Startup Plan",
    product2Price: "$19 CAD/month",
    product2PriceAnnual: "$190 CAD/year",
    product2Feature1: "Automatic vulnerability scanning",
    product2Feature2: "Password management with 2FA",
    product2Feature3: "Intelligent firewall",
    product2Feature4: "Real-time alerts and reports",
    product2Feature5: "Encrypted cloud backup",
    product3Title: "SME Plan",
    product3Price: "$49 CAD/month",
    product3PriceAnnual: "$490 CAD/year",
    product3Feature1: "All Startup features",
    product3Feature2: "Advanced ML analysis",
    product3Feature3: "Policy compliance (GDPR, HIPAA)",
    product3Feature4: "Platform integrations",
    product4Title: "Medium Enterprise",
    product4Price: "$129 CAD/month",
    product4PriceAnnual: "$1,290 CAD/year",
    product4Feature1: "All SME features",
    product4Feature2: "Multi-user dashboard",
    product4Feature3: "Priority support",
    product4Feature4: "Custom integrations",
    consultingTitle: "Consulting Services",
    consultingPrice: "$500 - $10,000 CAD",
    consultingFeature1: "Automated incident response",
    consultingFeature2: "Advanced ML analysis",
    consultingFeature3: "Policy compliance",
    consultingFeature4: "Custom integrations",
    featuredBadge: "Most Popular",
    paypalBtn: "Pay with PayPal",
    getStarted: "Get Started",

    // Why Us Section
    whyUsTitle: "Why choose us?",
    feature1Title: "Wide Network",
    feature1Desc: "We serve you no matter where you are.",
    feature2Title: "Unmatched Assistance",
    feature2Desc: "Virtual assistance. Talk to us and resolve any doubt, 24/7.",
    feature3Title: "Beginner Friendly",
    feature3Desc: "Simple user interface. Our interface is simple and easy to use.",

    // Contact Section
    contactTitle: "Contact Us",
    contactInfoTitle: "Contact Information",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendBtn: "Send Message",

    // Footer
    footerDesc: "Advanced technology solutions and comprehensive cybersecurity services.",
    footerServices: "Services",
    footerCyber: "Cybersecurity",
    footerDev: "Software Development",
    footerNetwork: "Network Security",
    footerFollow: "Follow Us",
    footerCopyright: "© 2024 Cypheronix. All rights reserved.",
  },
  es: {
    // Navigation
    inicio: "Inicio",
    servicios: "Servicios",
    productos: "Productos",
    nosotros: "Nosotros",
    contacto: "Contacto",

    // Hero Section
    heroTitle: "Soluciones Tecnológicas Avanzadas",
    heroSubtitle:
      "Protegemos y optimizamos tu negocio con tecnología de vanguardia en ciberseguridad y desarrollo de software",
    heroBtn1: "Nuestros Servicios",
    heroBtn2: "Contactar",

    // Services Section
    servicesTitle: "Nuestros Servicios",
    service1Title: "Ciberseguridad",
    service1Desc:
      "Protegemos empresas con soluciones avanzadas de ciberseguridad, salvaguardando datos y activos digitales contra amenazas en evolución.",
    service2Title: "Desarrollo de Software",
    service2Desc:
      "Diseñamos y construimos software innovador adaptado para satisfacer las necesidades empresariales modernas.",
    service3Title: "Creación y Seguridad de Redes",
    service3Desc: "Desarrollamos y aseguramos redes confiables para garantizar conectividad perfecta y protección.",

    // Products Section - Updated with new pricing and plans
    productsTitle: "Nuestros Productos",
    product1Title: "Plan Gratuito",
    product1Price: "$0 CAD",
    product1Feature1: "Escaneo básico de seguridad",
    product1Feature2: "Alertas de vulnerabilidad",
    product1Feature3: "Reporte mensual limitado",
    product1Feature4: "Soporte comunitario",
    product2Title: "Plan Startup",
    product2Price: "$19 CAD/mes",
    product2PriceAnnual: "$190 CAD/año",
    product2Feature1: "Escaneo automático de vulnerabilidades",
    product2Feature2: "Gestión de contraseñas con 2FA",
    product2Feature3: "Firewall inteligente",
    product2Feature4: "Alertas y reportes en tiempo real",
    product2Feature5: "Copia de seguridad en la nube encriptada",
    product3Title: "Plan PYME",
    product3Price: "$49 CAD/mes",
    product3PriceAnnual: "$490 CAD/año",
    product3Feature1: "Todas las características de Startup",
    product3Feature2: "Análisis avanzado con ML",
    product3Feature3: "Cumplimiento de políticas (GDPR, HIPAA)",
    product3Feature4: "Integraciones de plataforma",
    product4Title: "Empresa Mediana",
    product4Price: "$129 CAD/mes",
    product4PriceAnnual: "$1,290 CAD/año",
    product4Feature1: "Todas las características de PYME",
    product4Feature2: "Panel multi-usuario",
    product4Feature3: "Soporte prioritario",
    product4Feature4: "Integraciones personalizadas",
    consultingTitle: "Servicios de Consultoría",
    consultingPrice: "$500 - $10,000 CAD",
    consultingFeature1: "Respuesta a incidentes automatizada",
    consultingFeature2: "Análisis avanzado con ML",
    consultingFeature3: "Cumplimiento de políticas",
    consultingFeature4: "Integraciones personalizadas",
    featuredBadge: "Más Popular",
    paypalBtn: "Pagar con PayPal",
    getStarted: "Comenzar",

    // Why Us Section
    whyUsTitle: "¿Por qué nosotros?",
    feature1Title: "Red Amplia",
    feature1Desc: "Te atendemos sin importar dónde te encuentres.",
    feature2Title: "Asistencia Inigualable",
    feature2Desc: "Asistencia virtual. Habla con nosotros y resuelve cualquier duda, 24/7.",
    feature3Title: "Apto para Principiantes",
    feature3Desc: "Interfaz de usuario simple. Nuestra interfaz es sencilla y fácil de usar.",

    // Contact Section
    contactTitle: "Contactanos",
    contactInfoTitle: "Información de Contacto",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    messagePlaceholder: "Mensaje",
    sendBtn: "Enviar Mensaje",

    // Footer
    footerDesc: "Soluciones tecnológicas avanzadas y servicios integrales de ciberseguridad.",
    footerServices: "Servicios",
    footerCyber: "Ciberseguridad",
    footerDev: "Desarrollo de Software",
    footerNetwork: "Seguridad de Redes",
    footerFollow: "Síguenos",
    footerCopyright: "© 2024 Cypheronix. Todos los derechos reservados.",
  },
  fr: {
    // Navigation
    inicio: "Accueil",
    servicios: "Services",
    productos: "Produits",
    nosotros: "À propos",
    contacto: "Contact",

    // Hero Section
    heroTitle: "Solutions Technologiques Avancées",
    heroSubtitle:
      "Nous protégeons et optimisons votre entreprise avec une technologie de pointe en cybersécurité et développement logiciel",
    heroBtn1: "Nos Services",
    heroBtn2: "Contact",

    // Services Section
    servicesTitle: "Nos Services",
    service1Title: "Cybersécurité",
    service1Desc:
      "Nous protégeons les entreprises avec des solutions avancées de cybersécurité, sauvegardant les données et actifs numériques contre les menaces évolutives.",
    service2Title: "Développement Logiciel",
    service2Desc:
      "Nous concevons et construisons des logiciels innovants adaptés aux besoins des entreprises modernes.",
    service3Title: "Création et Sécurité de Réseaux",
    service3Desc:
      "Nous développons et sécurisons des réseaux fiables pour assurer une connectivité transparente et une protection.",

    // Products Section - Updated with new pricing and plans
    productsTitle: "Nos Produits",
    product1Title: "Plan Gratuit",
    product1Price: "$0 CAD",
    product1Feature1: "Analyse de sécurité de base",
    product1Feature2: "Alertes de vulnérabilité",
    product1Feature3: "Rapport mensuel limité",
    product1Feature4: "Support communautaire",
    product2Title: "Plan Startup",
    product2Price: "$19 CAD/mois",
    product2PriceAnnual: "$190 CAD/an",
    product2Feature1: "Analyse automatique des vulnérabilités",
    product2Feature2: "Gestion des mots de passe avec 2FA",
    product2Feature3: "Pare-feu intelligent",
    product2Feature4: "Alertes et rapports en temps réel",
    product2Feature5: "Sauvegarde cloud cryptée",
    product3Title: "Plan PME",
    product3Price: "$49 CAD/mois",
    product3PriceAnnual: "$490 CAD/an",
    product3Feature1: "Toutes les fonctionnalités Startup",
    product3Feature2: "Analyse avancée avec ML",
    product3Feature3: "Conformité aux politiques (GDPR, HIPAA)",
    product3Feature4: "Intégrations de plateforme",
    product4Title: "Entreprise Moyenne",
    product4Price: "$129 CAD/mois",
    product4PriceAnnual: "$1,290 CAD/an",
    product4Feature1: "Toutes les fonctionnalités PME",
    product4Feature2: "Tableau de bord multi-utilisateur",
    product4Feature3: "Support prioritaire",
    product4Feature4: "Intégrations personnalisées",
    consultingTitle: "Services de Conseil",
    consultingPrice: "$500 - $10,000 CAD",
    consultingFeature1: "Réponse automatisée aux incidents",
    consultingFeature2: "Analyse avancée avec ML",
    consultingFeature3: "Conformité aux politiques",
    consultingFeature4: "Intégrations personnalisées",
    featuredBadge: "Plus Populaire",
    paypalBtn: "Payer avec PayPal",
    getStarted: "Commencer",

    // Why Us Section
    whyUsTitle: "Pourquoi nous choisir?",
    feature1Title: "Réseau Étendu",
    feature1Desc: "Nous vous servons peu importe où vous vous trouvez.",
    feature2Title: "Assistance Inégalée",
    feature2Desc: "Assistance virtuelle. Parlez-nous et résolvez tout doute, 24/7.",
    feature3Title: "Convivial pour Débutants",
    feature3Desc: "Interface utilisateur simple. Notre interface est simple et facile à utiliser.",

    // Contact Section
    contactTitle: "Contactez-nous",
    contactInfoTitle: "Informations de Contact",
    namePlaceholder: "Nom",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendBtn: "Envoyer le Message",

    // Footer
    footerDesc: "Solutions technologiques avancées et services complets de cybersécurité.",
    footerServices: "Services",
    footerCyber: "Cybersécurité",
    footerDev: "Développement Logiciel",
    footerNetwork: "Sécurité Réseau",
    footerFollow: "Suivez-nous",
    footerCopyright: "© 2024 Cypheronix. Tous droits réservés.",
  },
}

function toggleLanguage() {
  const languages = ["en", "fr"] //agregar "es" para el idioma español
  const currentIndex = languages.indexOf(currentLanguage)
  const nextIndex = (currentIndex + 1) % languages.length
  currentLanguage = languages[nextIndex]
  updateLanguage()

  const langNames = { en: "EN", es: "ES", fr: "FR" }
  document.getElementById("current-lang").textContent = langNames[currentLanguage]
}

function updateLanguage() {
  const t = translations[currentLanguage]

  // Update navigation
  document.querySelector('a[href="#inicio"]').textContent = t.inicio
  document.querySelector('a[href="#servicios"]').textContent = t.servicios
  document.querySelector('a[href="#productos"]').textContent = t.productos
  document.querySelector('a[href="#nosotros"]').textContent = t.nosotros
  document.querySelector('a[href="#contacto"]').textContent = t.contacto

  // Update hero section
  document.querySelector(".hero-title").textContent = t.heroTitle
  document.querySelector(".hero-subtitle").textContent = t.heroSubtitle
  document.querySelector(".hero-buttons .btn-primary").textContent = t.heroBtn1
  document.querySelector(".hero-buttons .btn-secondary").textContent = t.heroBtn2

  // Update services section
  document.querySelector("#servicios .section-title").textContent = t.servicesTitle
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards[0].querySelector("h3").textContent = t.service1Title
  serviceCards[0].querySelector("p").textContent = t.service1Desc
  serviceCards[1].querySelector("h3").textContent = t.service2Title
  serviceCards[1].querySelector("p").textContent = t.service2Desc
  serviceCards[2].querySelector("h3").textContent = t.service3Title
  serviceCards[2].querySelector("p").textContent = t.service3Desc

  // Update products section with new structure
  document.querySelector("#productos .section-title").textContent = t.productsTitle
  const productCards = document.querySelectorAll(".product-card")

  // Update all product cards with new pricing structure
  if (productCards.length >= 5) {
    // Free Plan
    productCards[0].querySelector("h3").textContent = t.product1Title
    productCards[0].querySelector(".product-price").textContent = t.product1Price
    const product1Features = productCards[0].querySelectorAll(".product-features li")
    if (product1Features.length >= 4) {
      product1Features[0].textContent = t.product1Feature1
      product1Features[1].textContent = t.product1Feature2
      product1Features[2].textContent = t.product1Feature3
      product1Features[3].textContent = t.product1Feature4
    }

    // Startup Plan
    productCards[1].querySelector("h3").textContent = t.product2Title
    productCards[1].querySelector(".product-price").innerHTML =
      `${t.product2Price}<br><small>${t.product2PriceAnnual}</small>`
    const product2Features = productCards[1].querySelectorAll(".product-features li")
    if (product2Features.length >= 5) {
      product2Features[0].textContent = t.product2Feature1
      product2Features[1].textContent = t.product2Feature2
      product2Features[2].textContent = t.product2Feature3
      product2Features[3].textContent = t.product2Feature4
      product2Features[4].textContent = t.product2Feature5
    }

    // SME Plan (Most Popular)
    const featuredBadge = productCards[2].querySelector(".featured-badge")
    if (featuredBadge) featuredBadge.textContent = t.featuredBadge
    productCards[2].querySelector("h3").textContent = t.product3Title
    productCards[2].querySelector(".product-price").innerHTML =
      `${t.product3Price}<br><small>${t.product3PriceAnnual}</small>`
    const product3Features = productCards[2].querySelectorAll(".product-features li")
    if (product3Features.length >= 4) {
      product3Features[0].textContent = t.product3Feature1
      product3Features[1].textContent = t.product3Feature2
      product3Features[2].textContent = t.product3Feature3
      product3Features[3].textContent = t.product3Feature4
    }

    // Medium Enterprise Plan
    productCards[3].querySelector("h3").textContent = t.product4Title
    productCards[3].querySelector(".product-price").innerHTML =
      `${t.product4Price}<br><small>${t.product4PriceAnnual}</small>`
    const product4Features = productCards[3].querySelectorAll(".product-features li")
    if (product4Features.length >= 4) {
      product4Features[0].textContent = t.product4Feature1
      product4Features[1].textContent = t.product4Feature2
      product4Features[2].textContent = t.product4Feature3
      product4Features[3].textContent = t.product4Feature4
    }

    // Consulting Services
    productCards[4].querySelector("h3").textContent = t.consultingTitle
    productCards[4].querySelector(".product-price").textContent = t.consultingPrice
    const consultingFeatures = productCards[4].querySelectorAll(".product-features li")
    if (consultingFeatures.length >= 4) {
      consultingFeatures[0].textContent = t.consultingFeature1
      consultingFeatures[1].textContent = t.consultingFeature2
      consultingFeatures[2].textContent = t.consultingFeature3
      consultingFeatures[3].textContent = t.consultingFeature4
    }
  }

  // Update PayPal buttons
  document.querySelectorAll(".paypal-button").forEach((btn) => {
    btn.innerHTML = `<i class="fab fa-paypal"></i> ${t.paypalBtn}`
  })

  // Update Get Started buttons
  document.querySelectorAll(".btn-outline").forEach((btn) => {
    if (
      btn.textContent.includes("Get Started") ||
      btn.textContent.includes("Comenzar") ||
      btn.textContent.includes("Commencer")
    ) {
      btn.textContent = t.getStarted
    }
  })

  // Update why us section
  document.querySelector("#nosotros .section-title").textContent = t.whyUsTitle
  const featureCards = document.querySelectorAll(".feature-card")
  if (featureCards.length >= 3) {
    featureCards[0].querySelector("h3").textContent = t.feature1Title
    featureCards[0].querySelector("p").textContent = t.feature1Desc
    featureCards[1].querySelector("h3").textContent = t.feature2Title
    featureCards[1].querySelector("p").textContent = t.feature2Desc
    featureCards[2].querySelector("h3").textContent = t.feature3Title
    featureCards[2].querySelector("p").textContent = t.feature3Desc
  }

  // Update contact section
  document.querySelector("#contacto .section-title").textContent = t.contactTitle
  const contactInfoTitle = document.querySelector(".contact-info h3")
  if (contactInfoTitle) contactInfoTitle.textContent = t.contactInfoTitle

  const nameInput = document.querySelector('input[type="text"]')
  const emailInput = document.querySelector('input[type="email"]')
  const messageTextarea = document.querySelector("textarea")
  const sendBtn = document.querySelector(".contact-form .btn-primary")

  if (nameInput) nameInput.placeholder = t.namePlaceholder
  if (emailInput) emailInput.placeholder = t.emailPlaceholder
  if (messageTextarea) messageTextarea.placeholder = t.messagePlaceholder
  if (sendBtn) sendBtn.textContent = t.sendBtn

  // Update footer
  const footerDesc = document.querySelector(".footer-section p")
  if (footerDesc) footerDesc.textContent = t.footerDesc

  const footerSections = document.querySelectorAll(".footer-section")
  if (footerSections.length >= 3) {
    const servicesHeader = footerSections[1].querySelector("h4")
    if (servicesHeader) servicesHeader.textContent = t.footerServices

    const footerLinks = footerSections[1].querySelectorAll("a")
    if (footerLinks.length >= 3) {
      footerLinks[0].textContent = t.footerCyber
      footerLinks[1].textContent = t.footerDev
      footerLinks[2].textContent = t.footerNetwork
    }

    const followHeader = footerSections[2].querySelector("h4")
    if (followHeader) followHeader.textContent = t.footerFollow
  }

  const footerCopyright = document.querySelector(".footer-bottom p")
  if (footerCopyright) footerCopyright.textContent = t.footerCopyright

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-lang").textContent = "EN"
  updateLanguage()
})
