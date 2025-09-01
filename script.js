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
  // Esta función es un ejemplo para mostrar cómo se integraría PayPal
  // En una implementación real, aquí se inicializaría la API de PayPal

  const products = {
    audit: {
      name: "Auditoría de Seguridad",
      price: 2500,
      description: "Análisis completo de vulnerabilidades",
    },
    webapp: {
      name: "Desarrollo de Aplicación Web",
      price: 8500,
      description: "Aplicación web personalizada",
    },
    network: {
      name: "Configuración de Red Segura",
      price: 4200,
      description: "Configuración de firewall y VPN",
    },
  }

  const product = products[productType]

  if (product) {
    // Mostrar modal de confirmación (ejemplo)
    const confirmed = confirm(
      `¿Deseas proceder con el pago de ${product.name}?\n` +
        `Precio: $${product.price}\n` +
        `Descripción: ${product.description}\n\n` +
        `Nota: Esta es una demostración. En la implementación real se conectaría con la API de PayPal.`,
    )

    if (confirmed) {
      // Aquí se integraría con la API real de PayPal
      console.log("Iniciando proceso de pago para:", product)
      alert("Redirigiendo a PayPal... (Función de ejemplo)")

      // Ejemplo de lo que se haría en una implementación real:
      // paypal.Buttons({
      //     createOrder: function(data, actions) {
      //         return actions.order.create({
      //             purchase_units: [{
      //                 amount: {
      //                     value: product.price
      //                 },
      //                 description: product.description
      //             }]
      //         });
      //     },
      //     onApprove: function(data, actions) {
      //         return actions.order.capture().then(function(details) {
      //             alert('Pago completado por ' + details.payer.name.given_name);
      //         });
      //     }
      // }).render('#paypal-button-container');
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
let currentLanguage = "es"

const translations = {
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

    // Products Section
    productsTitle: "Nuestros Productos",
    product1Title: "Auditoría de Seguridad",
    product1Feature1: "Análisis completo de vulnerabilidades",
    product1Feature2: "Reporte detallado",
    product1Feature3: "Recomendaciones de seguridad",
    product1Feature4: "Soporte post-auditoría",
    product2Title: "Desarrollo de Aplicación Web",
    product2Feature1: "Aplicación web personalizada",
    product2Feature2: "Diseño responsive",
    product2Feature3: "Base de datos incluida",
    product2Feature4: "Hosting por 1 año",
    product2Feature5: "Mantenimiento 6 meses",
    product3Title: "Configuración de Red Segura",
    product3Feature1: "Configuración de firewall",
    product3Feature2: "VPN empresarial",
    product3Feature3: "Monitoreo 24/7",
    product3Feature4: "Capacitación del personal",
    featuredBadge: "Más Popular",
    paypalBtn: "Pagar con PayPal",

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

    // Products Section
    productsTitle: "Our Products",
    product1Title: "Security Audit",
    product1Feature1: "Complete vulnerability analysis",
    product1Feature2: "Detailed report",
    product1Feature3: "Security recommendations",
    product1Feature4: "Post-audit support",
    product2Title: "Web Application Development",
    product2Feature1: "Custom web application",
    product2Feature2: "Responsive design",
    product2Feature3: "Database included",
    product2Feature4: "1-year hosting",
    product2Feature5: "6-month maintenance",
    product3Title: "Secure Network Configuration",
    product3Feature1: "Firewall configuration",
    product3Feature2: "Enterprise VPN",
    product3Feature3: "24/7 monitoring",
    product3Feature4: "Staff training",
    featuredBadge: "Most Popular",
    paypalBtn: "Pay with PayPal",

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
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"
  updateLanguage()
  document.getElementById("current-lang").textContent = currentLanguage.toUpperCase()
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

  // Update products section
  document.querySelector("#productos .section-title").textContent = t.productsTitle
  const productCards = document.querySelectorAll(".product-card")

  // Product 1
  productCards[0].querySelector("h3").textContent = t.product1Title
  const product1Features = productCards[0].querySelectorAll(".product-features li")
  product1Features[0].textContent = t.product1Feature1
  product1Features[1].textContent = t.product1Feature2
  product1Features[2].textContent = t.product1Feature3
  product1Features[3].textContent = t.product1Feature4

  // Product 2
  productCards[1].querySelector(".featured-badge").textContent = t.featuredBadge
  productCards[1].querySelector("h3").textContent = t.product2Title
  const product2Features = productCards[1].querySelectorAll(".product-features li")
  product2Features[0].textContent = t.product2Feature1
  product2Features[1].textContent = t.product2Feature2
  product2Features[2].textContent = t.product2Feature3
  product2Features[3].textContent = t.product2Feature4
  product2Features[4].textContent = t.product2Feature5

  // Product 3
  productCards[2].querySelector("h3").textContent = t.product3Title
  const product3Features = productCards[2].querySelectorAll(".product-features li")
  product3Features[0].textContent = t.product3Feature1
  product3Features[1].textContent = t.product3Feature2
  product3Features[2].textContent = t.product3Feature3
  product3Features[3].textContent = t.product3Feature4

  // Update PayPal buttons
  document.querySelectorAll(".paypal-button").forEach((btn) => {
    btn.innerHTML = `<i class="fab fa-paypal"></i> ${t.paypalBtn}`
  })

  // Update why us section
  document.querySelector("#nosotros .section-title").textContent = t.whyUsTitle
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards[0].querySelector("h3").textContent = t.feature1Title
  featureCards[0].querySelector("p").textContent = t.feature1Desc
  featureCards[1].querySelector("h3").textContent = t.feature2Title
  featureCards[1].querySelector("p").textContent = t.feature2Desc
  featureCards[2].querySelector("h3").textContent = t.feature3Title
  featureCards[2].querySelector("p").textContent = t.feature3Desc

  // Update contact section
  document.querySelector("#contacto .section-title").textContent = t.contactTitle
  document.querySelector(".contact-info h3").textContent = t.contactInfoTitle
  document.querySelector('input[type="text"]').placeholder = t.namePlaceholder
  document.querySelector('input[type="email"]').placeholder = t.emailPlaceholder
  document.querySelector("textarea").placeholder = t.messagePlaceholder
  document.querySelector(".contact-form .btn-primary").textContent = t.sendBtn

  // Update footer
  document.querySelector(".footer-section p").textContent = t.footerDesc
  const footerSections = document.querySelectorAll(".footer-section")
  footerSections[1].querySelector("h4").textContent = t.footerServices
  const footerLinks = footerSections[1].querySelectorAll("a")
  footerLinks[0].textContent = t.footerCyber
  footerLinks[1].textContent = t.footerDev
  footerLinks[2].textContent = t.footerNetwork
  footerSections[2].querySelector("h4").textContent = t.footerFollow
  document.querySelector(".footer-bottom p").textContent = t.footerCopyright

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage()
})
