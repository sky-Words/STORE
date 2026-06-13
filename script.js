const PHONE = "212638631128";

const products = [
  { id: 1, size: "90×190 cm", sizeAr: "90×190 سم", price: 1150, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&h=400&q=80", badge: { fr: "Format individuel", ar: "مقاس فردي" } },
  { id: 2, size: "140×190 cm", sizeAr: "140×190 سم", price: 2090, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=400&q=80", badge: { fr: "Format double", ar: "مقاس مزدوج" } },
  { id: 3, size: "160×200 cm", sizeAr: "160×200 سم", price: 2390, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80", badge: { fr: "Format queen", ar: "مقاس كوين" } },
  { id: 4, size: "180×200 cm", sizeAr: "180×200 سم", price: 2790, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&h=400&q=80", badge: { fr: "Format king", ar: "مقاس كينغ" } },
  { id: 5, size: "200×200 cm", sizeAr: "200×200 سم", price: 3690, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&h=400&fit=crop&crop=top&q=80", badge: { fr: "Format king XXL", ar: "مقاس كينغ XXL" } },
];

const tr = {
  fr: {
    nav: { produits: "Produits", caracteristiques: "Caractéristiques", livraison: "Livraison", faq: "FAQ", contact: "Contact", commander: "Commander" },
    hero: { title: "Le secret des nuits sans fin", desc: "Des matelas d'exception pour un sommeil profond, réparateur et confortable.", btn1: "Commander sur WhatsApp", btn2: "Appeler Maintenant" },
    trust: ["Garantie 10 ans", "Livraison gratuite partout au Maroc", "Paiement à la livraison", "Confort mi-ferme / ferme", "Qualité supérieure", "Service client réactif"],
    hs1: "100% Paiement livraison", hs2: "Garantie 10 ans", hs3: "Livraison gratuite Maroc", hs4: "Confort mi-ferme / ferme",
    stat1: "Ans Garantie", stat2: "Clients", stat3: "Livraison",
    products: { tag: "Nos matelas", title: "Choisissez votre taille", desc: "Du 90×190 au 200×200, trouvez le matelas MATLETY adapté à votre literie.", benefits: ["Confort hôtel de luxe", "Soutien médical du dos", "Garantie 10 ans"], btn: "Commander sur WhatsApp" },
    features: { tag: "Caractéristiques", title: "Pourquoi choisir MATLETY ?", desc: "Un matelas pensé pour votre santé et votre confort." },
    featuresList: [
      { title: "Confort hôtel de luxe", desc: "Un moelleux exceptionnel pour des nuits dignes des plus grands palaces." },
      { title: "Soutien médical du dos", desc: "Ergonomie étudiée pour soulager les points de pression et aligner la colonne." },
      { title: "Matériaux premium respirants", desc: "Tissus nobles et mousses à mémoire de forme pour une ventilation optimale." },
      { title: "Durabilité longue durée", desc: "Construit pour durer dans le temps sans s'affaisser." },
      { title: "Système de soutien haute densité", desc: "Noyau en mousse haute densité pour un maintien ferme et durable." },
      { title: "Sommeil profond et réparateur", desc: "Retrouvez un sommeil de qualité dès la première nuit." },
    ],
    delivery: { tag: "Livraison", title: "Livraison gratuite dans tout le Maroc", desc: "Nous livrons rapidement dans toutes les villes du Maroc avec paiement à la réception.", btn: "Commander maintenant" },
    cities: ["Casablanca","Rabat","Marrakech","Fès","Tanger","Agadir","Oujda","Laâyoune","Tétouan","Meknès","Salé","Kénitra"],
    testimonials: { tag: "Témoignages", title: "Ils ont choisi MATLETY", desc: "Des clients satisfaits partout au Maroc." },
    testimonialsList: [
      { name: "Fatima B.", city: "Casablanca", text: "Depuis que j'ai mon matelas MATLETY, je dors comme un bébé. Mon mal de dos a disparu en une semaine. Je recommande à 100% !" },
      { name: "Youssef M.", city: "Rabat", text: "Je cherchais un matelas de qualité sans me ruiner. MATLETY m'a livré en 48h à Rabat. Qualité incroyable pour le prix." },
      { name: "Amina K.", city: "Marrakech", text: "J'ai pris le 160×200 pour notre chambre. Confort hôtel 5 étoiles à la maison. Toute la famille adore." },
      { name: "Karim D.", city: "Fès", text: "Service client exceptionnel. J'ai été conseillé par WhatsApp, commandé et reçu en 3 jours." },
      { name: "Nadia L.", city: "Tanger", text: "Après des années à galérer, le 140×190 de MATLETY a changé ma vie. Vraiment confortable." },
      { name: "Hicham E.", city: "Agadir", text: "Je suis sportif et j'avais besoin d'un bon soutien. Le MATLETY 90×190 est parfait." },
    ],
    faq: { tag: "FAQ", title: "Questions fréquentes", desc: "Tout ce que vous devez savoir avant de commander." },
    faqList: [
      { q: "Puis-je payer à la livraison ?", a: "Oui, le paiement s'effectue à la réception du matelas. Vous ne payez qu'après avoir reçu et vérifié votre commande." },
      { q: "Livrez-vous dans tout le Maroc ?", a: "Oui, nous livrons gratuitement dans toutes les villes du Maroc. De Casablanca à Oujda, de Tanger à Laâyoune." },
      { q: "Quelle est la garantie ?", a: "Tous nos matelas sont garantis 10 ans contre tout défaut de fabrication." },
      { q: "Quels sont les délais de livraison ?", a: "Les délais sont rapides selon votre région. Comptez généralement 24 à 72h ouvrées." },
      { q: "Le matelas est-il livré emballé ?", a: "Oui, chaque matelas est livré sous vide, compressé et roulé." },
      { q: "Puis-je retourner le matelas ?", a: "Bien sûr. Si vous n'êtes pas satisfait, contactez-nous sous 7 jours." },
    ],
    cta: { title: "Prêt à changer vos nuits ?", desc: "Commandez votre matelas MATLETY dès maintenant et dormez comme jamais.", btn: "Commander sur WhatsApp" },
    contact: { tag: "Contact", title: "Besoin d'aide ?", desc: "Notre équipe est disponible 6j/7 pour vous conseiller.", wa: "WhatsApp", waDesc: "Réponse sous 5 minutes", address: "Adresse", addressVal: "Casablanca, Maroc", email: "Email" },
    footer: { desc: "Le secret des nuits sans fin. Matelas premium au Maroc.", copyright: "Tous droits réservés." },
    waFloat: "Commander sur WhatsApp",
  },
  ar: {
    nav: { produits: "المنتجات", caracteristiques: "المميزات", livraison: "التوصيل", faq: "الأسئلة", contact: "اتصل بنا", commander: "اطلب الآن" },
    hero: { title: "سر الليالي التي لا تنتهي", desc: "مراتب استثنائية لنوم عميق ومريح.", btn1: "اطلب عبر واتساب", btn2: "اتصل الآن" },
    trust: ["ضمان 10 سنوات", "توصيل مجاني لجميع المغرب", "الدفع عند الاستلام", "راحة متوسطة/ثابتة", "جودة فائقة", "خدمة عملاء سريعة"],
    hs1: "100% دفع عند الاستلام", hs2: "ضمان 10 سنوات", hs3: "توصيل مجاني المغرب", hs4: "راحة متوسطة/ثابتة",
    stat1: "سنوات ضمان", stat2: "عميل", stat3: "توصيل",
    products: { tag: "مراتبنا", title: "اختر مقاسك", desc: "من 90×190 إلى 200×200، اعثر على مرتبة MATLETY المناسبة لسريرك.", benefits: ["راحة فندق فاخر", "دعم طبي للظهر", "ضمان 10 سنوات"], btn: "اطلب عبر واتساب" },
    features: { tag: "المميزات", title: "لماذا تختار MATLETY؟", desc: "مرتبة مصممة لصحتك وراحتك." },
    featuresList: [
      { title: "راحة فندق فاخر", desc: "نعومة استثنائية لنوم يليق بأفخم القصور." },
      { title: "دعم طبي للظهر", desc: "تصميم هندسي لتخفيف نقاط الضغط ومحاذاة العمود الفقري." },
      { title: "مواد ممتازة قابلة للتنفس", desc: "أقمشة نبيلة وإسفنج ذاكرة لتهوية مثالية." },
      { title: "متانة طويلة الأمد", desc: "مصنوع ليدوم طويلاً دون ترهل." },
      { title: "نظام دعم عالي الكثافة", desc: "لب إسفنجي عالي الكثافة لدعم ثابت ومتين." },
      { title: "نوم عميق ومريح", desc: "استعد نومك الجيد من الليلة الأولى." },
    ],
    delivery: { tag: "التوصيل", title: "توصيل مجاني لجميع المغرب", desc: "نوصل بسرعة لجميع مدن المغرب مع الدفع عند الاستلام.", btn: "اطلب الآن" },
    cities: ["الدار البيضاء","الرباط","مراكش","فاس","طنجة","أكادير","وجدة","العيون","تطوان","مكناس","سلا","القنيطرة"],
    testimonials: { tag: "الشهادات", title: "اختاروا MATLETY", desc: "عملاء راضون في جميع أنحاء المغرب." },
    testimonialsList: [
      { name: "فاطمة ب.", city: "الدار البيضاء", text: "منذ أن اشتريت مرتبة MATLETY، أنام كالطفل. آلام ظهري اختفت في أسبوع." },
      { name: "يوسف م.", city: "الرباط", text: "كنت أبحث عن مرتبة جودة دون إفلاس. MATLETY أوصلتها في 48 ساعة للرباط." },
      { name: "أمينة ك.", city: "مراكش", text: "اشتريت مقاس 160×200 لغرفة نومنا. راحة فندق 5 نجوم في المنزل." },
      { name: "كريم د.", city: "فاس", text: "خدمة عملاء استثنائية. نصحوني عبر واتساب، طلبت واستلمت في 3 أيام." },
      { name: "نادية ل.", city: "طنجة", text: "بعد سنوات من المعاناة، مرتبة 140×190 من MATLETY غيرت حياتي." },
      { name: "هشام E.", city: "أكادير", text: "أنا رياضي وأحتاج دعماً جيداً. مرتبة MATLETY 90×190 مثالية." },
    ],
    faq: { tag: "الأسئلة", title: "أسئلة متكررة", desc: "كل ما تريد معرفته قبل الطلب." },
    faqList: [
      { q: "هل يمكن الدفع عند الاستلام؟", a: "نعم، يتم الدفع عند استلام المرتبة. تدفع فقط بعد استلام الطلب." },
      { q: "هل توصلون إلى جميع مدن المغرب؟", a: "نعم، نوصل مجاناً إلى جميع مدن المغرب." },
      { q: "ما هي مدة الضمان؟", a: "جميع مراتبنا مضمونة لمدة 10 سنوات ضد عيوب التصنيع." },
      { q: "ما هي مدة التوصيل؟", a: "المدة سريعة حسب منطقتك. عموماً 24 إلى 72 ساعة عمل." },
      { q: "هل تأتي المرتبة مغلفة؟", a: "نعم، كل مرتبة تأتي مغلفة بالتفريغ الهوائي." },
      { q: "هل يمكن إرجاع المرتبة؟", a: "بالتأكيد. إذا لم تكن راضياً، اتصل بنا في غضون 7 أيام." },
    ],
    cta: { title: "مستعد لتغيير نومك؟", desc: "اطلب مرتبة MATLETY الآن ونم كما لم تنم من قبل.", btn: "اطلب عبر واتساب" },
    contact: { tag: "اتصل بنا", title: "تحتاج مساعدة؟", desc: "فريقنا متاح 6 أيام في الأسبوع لمساعدتك.", wa: "واتساب", waDesc: "رد خلال 5 دقائق", address: "العنوان", addressVal: "الدار البيضاء، المغرب", email: "البريد الإلكتروني" },
    footer: { desc: "سر الليالي التي لا تنتهي. مراتب فاخرة في المغرب.", copyright: "جميع الحقوق محفوظة." },
    waFloat: "اطلب عبر واتساب",
  },
};

let lang = "fr";

function waOrder(size, price) {
  const msg = lang === "ar"
    ? `مرحباً MATLETY 👋\n\nأرغب في طلب مرتبة MATLETY الطبية.\n\nالمقاس : ${size}\nالسعر : ${price} درهم\n\nالدفع : عند الاستلام\n\nمن فضلك تأكد طلبي.`
    : `Bonjour MATLETY 👋\n\nJe souhaite commander le matelas médical MATLETY.\n\nTaille : ${size}\nPrix : ${price} DH\n\nPaiement : À la livraison\n\nMerci de confirmer ma commande.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function waGreeting() {
  const msg = lang === "ar"
    ? "مرحباً MATLETY 👋 أرغب في طلب مرتبة. هل يمكنكم مساعدتي؟"
    : "Bonjour MATLETY 👋 Je souhaite commander un matelas. Pouvez-vous me conseiller ?";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function renderTrustBadges() {
  const el = document.getElementById("trust-badges");
  el.innerHTML = tr[lang].trust.map(b =>
    `<span class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="#1AA7A1"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>${b}</span>`
  ).join("");
}

function renderProducts() {
  const el = document.getElementById("products-grid");
  el.innerHTML = products.map(p => {
    const sizeLabel = lang === "ar" ? p.sizeAr : p.size;
    const badge = p.badge[lang];
    return `<div class="product-card">
      <div class="product-img">
        <img src="${p.image}" alt="MATLETY ${sizeLabel}" loading="lazy">
        <span class="product-badge">${badge}</span>
        <span class="product-size-badge">${sizeLabel}</span>
      </div>
      <div class="product-body">
        <div class="product-price">
          <span class="price-amount">${p.price} DH</span>
          <span class="price-note">Paiement à la livraison</span>
        </div>
        <ul class="product-benefits">${tr[lang].products.benefits.map(b => `<li>${b}</li>`).join("")}</ul>
        <a href="${waOrder(sizeLabel, p.price)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${tr[lang].products.btn}
        </a>
      </div>
    </div>`;
  }).join("");
}

function renderFeatures() {
  const el = document.getElementById("features-grid");
  el.innerHTML = tr[lang].featuresList.map(f =>
    `<div class="feature-card">
      <div class="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="#1AA7A1"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`
  ).join("");
}

function renderCities() {
  const el = document.getElementById("delivery-cities");
  el.innerHTML = tr[lang].cities.map(c => `<span>${c}</span>`).join("");
}

function renderTestimonials() {
  const el = document.getElementById("testimonials-grid");
  const stars = [...Array(5)].map(() => `<svg width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`).join("");
  el.innerHTML = tr[lang].testimonialsList.map(t =>
    `<div class="testimonial-card">
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name[0]}</div>
        <div><strong>${t.name}</strong><span>${t.city}</span></div>
      </div>
    </div>`
  ).join("");
}

function renderFAQ() {
  const el = document.getElementById("faq-grid");
  el.innerHTML = tr[lang].faqList.map(f =>
    `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`
  ).join("");
}

function renderContact() {
  const el = document.getElementById("contact-wrap");
  const c = tr[lang].contact;
  const wa = waGreeting();
  el.innerHTML = `
    <div class="contact-card">
      <div class="contact-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="#1AA7A1"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
      <h3>${c.wa}</h3>
      <p>${c.waDesc}</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">+212 6 3863 1128</a>
    </div>
    <div class="contact-card">
      <div class="contact-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="#1AA7A1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
      <h3>${c.address}</h3>
      <p>${c.addressVal}</p>
    </div>
    <div class="contact-card">
      <div class="contact-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="#1AA7A1"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
      <h3>${c.email}</h3>
      <p>contact@matlety.ma</p>
    </div>`;
}

function updateWA() {
  document.querySelectorAll('.nav-wa, .wa-sticky-bar a, .cta-banner a, .hero-actions a:first-child, .delivery-content a, .footer-wa a').forEach(a => {
    if (!a.closest('.hero-actions') && !a.classList.contains('btn-gold')) {
      a.href = waGreeting();
    }
  });
  document.querySelectorAll('.hero-actions a:first-child').forEach(a => a.href = waGreeting());
  document.querySelectorAll('.btn-gold').forEach(a => {
    const msg = lang === "ar" ? "مرحباً MATLETY 👋 أريد اتصالاً." : "Bonjour MATLETY 👋 Je souhaite être appelé.";
    a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  });
  document.querySelector('.wa-float').href = waGreeting();
}

function updateLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = key.split(".").reduce((o, k) => o?.[k], tr[lang]);
    if (val) el.textContent = val;
  });
}

function toggleLang() {
  lang = lang === "fr" ? "ar" : "fr";
  document.querySelector(".lang-btn").textContent = lang === "fr" ? "AR" : "FR";
  document.getElementById("app").dir = lang === "ar" ? "rtl" : "ltr";
  renderTrustBadges();
  renderProducts();
  renderFeatures();
  renderCities();
  renderTestimonials();
  renderFAQ();
  renderContact();
  updateWA();
  updateLang();
}

renderTrustBadges();
renderProducts();
renderFeatures();
renderCities();
renderTestimonials();
renderFAQ();
renderContact();
updateLang();
