/* ============================================================
   Francesco Di Rienzo — Portfolio logic
   - bilingual content (EN / IT)
   - rendered sections, scroll reveal, counters, typewriter,
     network canvas, scrollspy, nav state
   ============================================================ */

const DATA = {
  en: {
    meta: { lang: "EN" },
    nav: { about: "About", experience: "Experience", skills: "Skills", certs: "Certs", contact: "Contact" },
    hero: {
      status: "Available for new opportunities",
      l1: "Francesco",
      l2: "Di Rienzo",
      roles: [
        "Network Engineer",
        "Cybersecurity Specialist",
        "Linux System Administrator",
        "OSCP candidate // ethical hacking"
      ],
      bio: "System Administrator with a strong passion for cybersecurity and offensive security — building, securing and scaling network infrastructure across data centers and 200+ sites.",
      cta1: "Establish contact",
      cta2: "View experience",
      cv: "Download CV"
    },
    stats: [
      { n: 200, suf: "+", l: "Sites managed" },
      { n: 3, suf: "", l: "Data center hubs" },
      { n: 4, suf: "+", l: "Years in the field" },
      { n: 3, suf: "", l: "Certifications" }
    ],
    about: {
      eyebrow: "// whoami",
      title: "Securing infrastructure, end to end.",
      lead: "From the physical layer to the application edge — I design, harden and operate networks that have to stay up.",
      p1: "I'm a <strong>Linux & Network Systems Administrator</strong> currently engineering the network for the Italian Ministry of Enterprises, where I run the physical and logical infrastructure of 200+ sites and 3 main data-center hubs.",
      p2: "My background spans <strong>offensive and defensive security</strong>: penetration testing, vulnerability assessment, incident response and threat hunting — alongside hands-on operations on Fortinet, Cisco, F5 and Arbor systems.",
      p3: "I'm currently preparing for the <strong>OSCP</strong> and finalizing FCP & VCP certifications. I'm looking for a challenging role in a high-tech, dynamic environment to grow in ethical hacking.",
      focus: ["Offensive Security", "Network Engineering", "Incident Response", "Automation"],
      term: {
        title: "francesco@infra: ~",
        host: "fdr-node",
        loc: "Rome — Minturno, IT",
        role: "Network & Security Engineer",
        focusLabel: "focus",
        focusVal: "OSCP / Red Team",
        statusLabel: "status",
        statusVal: "open to work"
      }
    },
    experience: {
      eyebrow: "// career.log",
      title: "Experience",
      lead: "Four years operating mission-critical networks for national infrastructure and IT-security firms.",
      items: [
        {
          period: "Mar 2025 — Present", now: "NOW",
          role: "Network Engineer",
          org: "Ministry of Enterprises and Made in Italy — NOC",
          company: "for NSR · Endpoint & Network Security",
          bullets: [
            "Managed the physical and logical infrastructure of 200+ sites and 3 main data-center hubs.",
            "Led data-center migration and site upgrades (Alcatel→Cisco, SonicWall→Fortinet).",
            "Deployed FortiManager & SD-WAN for branch management; LibreNMS & Oxidized for monitoring and backup.",
            "Configured public DNS zones and F5 BIG-IP (WAF & app publishing); rolled out FortiNAC for access control."
          ],
          tags: ["Cisco", "Fortinet", "F5 BIG-IP", "SonicWall", "LibreNMS", "Oxidized", "SD-WAN", "FortiNAC"]
        },
        {
          period: "Sep 2024 — Mar 2025",
          role: "CyberSecurity Consultant & SysNet Admin",
          org: "Network Operations Command (COR) — Italian Ministry of Defense",
          company: "for FATA Informatica · IT Security Company",
          bullets: [
            "Provided security consulting, network troubleshooting and incident response.",
            "Engineered objects, rules and policies for the Fortinet Security Fabric and Arbor Anti-DDoS systems.",
            "Configured and maintained Mellanox switches and Cisco routing & switching infrastructure."
          ],
          tags: ["Cisco IOS XE/XR", "Arbor Netscout", "Fortinet Fabric", "Mellanox", "Anti-DDoS"]
        },
        {
          period: "Sep 2023 — Sep 2024",
          role: "Linux System Administrator",
          org: "Network Operations Command (COR) — Italian Ministry of Defense",
          company: "for FATA Informatica · IT Security Company",
          bullets: [
            "Configured and maintained network applications; monitoring via Sentinet3 (Nagios-based).",
            "Architected branch DNS infrastructure (Bind9 + DNSMasq + Nginx reverse proxy).",
            "Automated workflows via scripting; contributed to a global BGP alert system for emergency response."
          ],
          tags: ["Linux RHEL/Ubuntu", "Bind9", "Nginx", "GNS3", "Nutanix", "VMware", "BGP"]
        },
        {
          period: "Jan 2023 — Sep 2023",
          role: "CyberSecurity Intern",
          org: "FATA Informatica — Rome",
          company: "Junior Security Analyst",
          bullets: [
            "Operated and tuned Sentinet3 (Nagios-based) monitoring appliances.",
            "Conducted Threat Hunting & Malware Analysis simulations.",
            "Performed OSINT investigations and internal Penetration Testing / Vulnerability Assessments."
          ],
          tags: ["Metasploit", "BurpSuite", "Wireshark", "Nmap", "Maltego", "Kali", "OSINT"]
        }
      ]
    },
    skills: {
      eyebrow: "// stack",
      title: "Technical skills",
      lead: "The tools I reach for across security, networking, systems and development.",
      groups: [
        { h: "Languages", items: ["Python", "Bash (awk, sed)", "C++", "PHP", "TypeScript", "JavaScript"] },
        { h: "Frameworks", items: ["Flask", "NumPy", "Pandas", "TensorFlow", "React", "Node.js", "Qt"] },
        { h: "Network & Security", items: ["F5 BIG-IP", "Fortinet Suite", "SonicWall", "Alcatel", "Arbor Netscout", "Metasploit", "BurpSuite", "Wireshark", "Nmap", "Maltego"] },
        { h: "Operating Systems", items: ["Cisco IOS / XE / XR", "FortiOS", "ArbOS", "Debian / Ubuntu", "RHEL / CentOS", "Arch", "Kali", "Windows Server"] },
        { h: "Infrastructure", items: ["Nginx", "Apache", "Splunk", "Grafana", "Nagios", "Bind9", "Nutanix", "VMware ESXi", "GNS3", "Lantime NTP"] },
        { h: "Protocols", items: ["IPSEC", "BGP", "MPLS", "OSPF", "DNS", "SNMP", "SSH (SSL/TLS)", "HTTP/S", "TACACS", "RADIUS", "LDAP"] },
        { h: "Databases", items: ["Oracle", "MS SQL Server", "MySQL", "PostgreSQL", "InfluxDB"] },
        { h: "Dev Tools", items: ["Git", "GitLab", "Ansible", "Vim", "VS Code", "PyCharm"] }
      ]
    },
    certs: {
      eyebrow: "// credentials",
      title: "Certifications",
      lead: "In active pursuit — sharpening the offensive and infrastructure edge.",
      items: [
        { abbr: "OSCP", name: "Offensive Security Certified Professional", full: "PEN-200 · Offensive Security", status: "In preparation", state: "prep", pct: 65 },
        { abbr: "FCP", name: "FCP Network Security", full: "Fortinet Certified Professional", status: "Finalizing", state: "final", pct: 85 },
        { abbr: "VCP", name: "VMware Certified Professional", full: "VMware · Data Center Virtualization", status: "Finalizing", state: "final", pct: 80 }
      ]
    },
    languages: {
      eyebrow: "// human protocols",
      title: "Languages & strengths",
      lead: "How I communicate, and how I work.",
      langTitle: "Languages",
      list: [
        { name: "Italian", lvl: "Native", dots: 5 },
        { name: "English", lvl: "Professional", dots: 4 },
        { name: "Spanish", lvl: "Basic", dots: 1 }
      ],
      softTitle: "Soft skills",
      soft: ["Autonomous", "Optimizer", "Problem solving", "Agile", "Googling / Dorks", "AI tools prompting"]
    },
    contact: {
      eyebrow: "// uplink",
      title1: "Let's build something",
      title2: "secure.",
      sub: "Open to challenging roles in high-tech, dynamic environments. Available for travel and professional development.",
      cta1: "Send an email",
      cta2: "GitHub",
      labels: { email: "email", phone: "phone", loc: "location", gh: "github" }
    },
    footer: { tag: "Built & deployed via GitHub Pages", rights: "All systems operational" }
  },

  it: {
    meta: { lang: "IT" },
    nav: { about: "Chi sono", experience: "Esperienza", skills: "Competenze", certs: "Certificazioni", contact: "Contatti" },
    hero: {
      status: "Disponibile per nuove opportunità",
      l1: "Francesco",
      l2: "Di Rienzo",
      roles: [
        "Network Engineer",
        "Specialista in Cybersecurity",
        "Linux System Administrator",
        "Candidato OSCP // ethical hacking"
      ],
      bio: "System Administrator con una forte passione per la cybersecurity e l'offensive security — progetto, metto in sicurezza e scalo infrastrutture di rete su data center e oltre 200 siti.",
      cta1: "Mettiti in contatto",
      cta2: "Vedi l'esperienza",
      cv: "Scarica il CV"
    },
    stats: [
      { n: 200, suf: "+", l: "Siti gestiti" },
      { n: 3, suf: "", l: "Hub data center" },
      { n: 4, suf: "+", l: "Anni sul campo" },
      { n: 3, suf: "", l: "Certificazioni" }
    ],
    about: {
      eyebrow: "// whoami",
      title: "Sicurezza dell'infrastruttura, end to end.",
      lead: "Dal livello fisico all'edge applicativo — progetto, irrobustisco e gestisco reti che devono restare in piedi.",
      p1: "Sono un <strong>Amministratore di Sistemi Linux e di Rete</strong> e attualmente curo la rete del Ministero delle Imprese, gestendo l'infrastruttura fisica e logica di oltre 200 siti e 3 hub data center principali.",
      p2: "La mia esperienza copre la <strong>sicurezza offensiva e difensiva</strong>: penetration testing, vulnerability assessment, incident response e threat hunting — insieme alla gestione operativa di sistemi Fortinet, Cisco, F5 e Arbor.",
      p3: "Sto preparando l'<strong>OSCP</strong> e finalizzando le certificazioni FCP e VCP. Cerco un ruolo stimolante in un ambiente high-tech e dinamico per crescere nell'ethical hacking.",
      focus: ["Offensive Security", "Network Engineering", "Incident Response", "Automazione"],
      term: {
        title: "francesco@infra: ~",
        host: "fdr-node",
        loc: "Roma — Minturno, IT",
        role: "Network & Security Engineer",
        focusLabel: "focus",
        focusVal: "OSCP / Red Team",
        statusLabel: "stato",
        statusVal: "disponibile"
      }
    },
    experience: {
      eyebrow: "// career.log",
      title: "Esperienza",
      lead: "Quattro anni alla gestione di reti mission-critical per infrastrutture nazionali e aziende di IT-security.",
      items: [
        {
          period: "Mar 2025 — Presente", now: "ORA",
          role: "Network Engineer",
          org: "Ministero delle Imprese e del Made in Italy — NOC",
          company: "per NSR · Endpoint & Network Security",
          bullets: [
            "Gestione dell'infrastruttura fisica e logica di oltre 200 siti e 3 hub data center principali.",
            "Migrazione data center e upgrade dei siti (Alcatel→Cisco, SonicWall→Fortinet).",
            "Implementazione di FortiManager e SD-WAN per la gestione delle filiali; LibreNMS e Oxidized per monitoraggio e backup.",
            "Configurazione di zone DNS pubbliche e F5 BIG-IP (WAF & publishing); deploy di FortiNAC per il controllo accessi."
          ],
          tags: ["Cisco", "Fortinet", "F5 BIG-IP", "SonicWall", "LibreNMS", "Oxidized", "SD-WAN", "FortiNAC"]
        },
        {
          period: "Set 2024 — Mar 2025",
          role: "Consulente CyberSecurity & SysNet Admin",
          org: "Comando Operazioni in Rete (COR) — Ministero della Difesa",
          company: "per FATA Informatica · IT Security Company",
          bullets: [
            "Consulenza di sicurezza, network troubleshooting e incident response.",
            "Ingegnerizzazione di oggetti, regole e policy per il Fortinet Security Fabric e i sistemi Arbor Anti-DDoS.",
            "Configurazione e manutenzione di switch Mellanox e infrastruttura di routing & switching Cisco."
          ],
          tags: ["Cisco IOS XE/XR", "Arbor Netscout", "Fortinet Fabric", "Mellanox", "Anti-DDoS"]
        },
        {
          period: "Set 2023 — Set 2024",
          role: "Amministratore di Sistemi Linux",
          org: "Comando Operazioni in Rete (COR) — Ministero della Difesa",
          company: "per FATA Informatica · IT Security Company",
          bullets: [
            "Configurazione e manutenzione di applicazioni di rete; monitoraggio con Sentinet3 (basato su Nagios).",
            "Progettazione dell'infrastruttura DNS di filiale (Bind9 + DNSMasq + reverse proxy Nginx).",
            "Automazione dei workflow via scripting; contributo a un sistema globale di alert BGP per le emergenze."
          ],
          tags: ["Linux RHEL/Ubuntu", "Bind9", "Nginx", "GNS3", "Nutanix", "VMware", "BGP"]
        },
        {
          period: "Gen 2023 — Set 2023",
          role: "Stagista CyberSecurity",
          org: "FATA Informatica — Roma",
          company: "Junior Security Analyst",
          bullets: [
            "Gestione e tuning degli appliance di monitoraggio Sentinet3 (basati su Nagios).",
            "Simulazioni di Threat Hunting e Malware Analysis.",
            "Indagini OSINT e Penetration Testing / Vulnerability Assessment interni."
          ],
          tags: ["Metasploit", "BurpSuite", "Wireshark", "Nmap", "Maltego", "Kali", "OSINT"]
        }
      ]
    },
    skills: {
      eyebrow: "// stack",
      title: "Competenze tecniche",
      lead: "Gli strumenti che uso tra sicurezza, networking, sistemi e sviluppo.",
      groups: [
        { h: "Linguaggi", items: ["Python", "Bash (awk, sed)", "C++", "PHP", "TypeScript", "JavaScript"] },
        { h: "Framework", items: ["Flask", "NumPy", "Pandas", "TensorFlow", "React", "Node.js", "Qt"] },
        { h: "Network & Security", items: ["F5 BIG-IP", "Suite Fortinet", "SonicWall", "Alcatel", "Arbor Netscout", "Metasploit", "BurpSuite", "Wireshark", "Nmap", "Maltego"] },
        { h: "Sistemi Operativi", items: ["Cisco IOS / XE / XR", "FortiOS", "ArbOS", "Debian / Ubuntu", "RHEL / CentOS", "Arch", "Kali", "Windows Server"] },
        { h: "Infrastruttura", items: ["Nginx", "Apache", "Splunk", "Grafana", "Nagios", "Bind9", "Nutanix", "VMware ESXi", "GNS3", "Lantime NTP"] },
        { h: "Protocolli", items: ["IPSEC", "BGP", "MPLS", "OSPF", "DNS", "SNMP", "SSH (SSL/TLS)", "HTTP/S", "TACACS", "RADIUS", "LDAP"] },
        { h: "Database", items: ["Oracle", "MS SQL Server", "MySQL", "PostgreSQL", "InfluxDB"] },
        { h: "Strumenti Dev", items: ["Git", "GitLab", "Ansible", "Vim", "VS Code", "PyCharm"] }
      ]
    },
    certs: {
      eyebrow: "// credenziali",
      title: "Certificazioni",
      lead: "In corso di conseguimento — affinando il lato offensive e infrastrutturale.",
      items: [
        { abbr: "OSCP", name: "Offensive Security Certified Professional", full: "PEN-200 · Offensive Security", status: "In preparazione", state: "prep", pct: 65 },
        { abbr: "FCP", name: "FCP Network Security", full: "Fortinet Certified Professional", status: "In finalizzazione", state: "final", pct: 85 },
        { abbr: "VCP", name: "VMware Certified Professional", full: "VMware · Data Center Virtualization", status: "In finalizzazione", state: "final", pct: 80 }
      ]
    },
    languages: {
      eyebrow: "// protocolli umani",
      title: "Lingue e punti di forza",
      lead: "Come comunico e come lavoro.",
      langTitle: "Lingue",
      list: [
        { name: "Italiano", lvl: "Madrelingua", dots: 5 },
        { name: "Inglese", lvl: "Professionale", dots: 4 },
        { name: "Spagnolo", lvl: "Base", dots: 1 }
      ],
      softTitle: "Soft skills",
      soft: ["Autonomia", "Ottimizzazione", "Problem solving", "Agile", "Googling / Dorks", "Prompting AI"]
    },
    contact: {
      eyebrow: "// uplink",
      title1: "Costruiamo qualcosa",
      title2: "di sicuro.",
      sub: "Aperto a ruoli stimolanti in ambienti high-tech e dinamici. Disponibile per trasferte e crescita professionale.",
      cta1: "Invia una email",
      cta2: "GitHub",
      labels: { email: "email", phone: "telefono", loc: "località", gh: "github" }
    },
    footer: { tag: "Costruito e pubblicato con GitHub Pages", rights: "Tutti i sistemi operativi" }
  }
};

const CONTACT = {
  email: "francesco.di.rienzo.00@gmail.com",
  phone: "+39 327 977 0949",
  github: "https://github.com/france5cogreen",
  githubLabel: "github.com/france5cogreen",
  linkedin: "https://linkedin.com/in/francesco-di-rienzo",
  location: "Rome — Minturno, IT"
};

let LANG = localStorage.getItem("fdr_lang") || "en";

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};

/* ============================================================
   RENDER
   ============================================================ */
function render() {
  const d = DATA[LANG];
  document.documentElement.lang = LANG === "en" ? "en" : "it";

  // nav
  $("#nav-about").innerHTML = `<span class="idx">01</span>${d.nav.about}`;
  $("#nav-exp").innerHTML = `<span class="idx">02</span>${d.nav.experience}`;
  $("#nav-skills").innerHTML = `<span class="idx">03</span>${d.nav.skills}`;
  $("#nav-certs").innerHTML = `<span class="idx">04</span>${d.nav.certs}`;
  $("#nav-contact").innerHTML = `<span class="idx">05</span>${d.nav.contact}`;
  // mobile menu
  $("#mm").innerHTML = [
    ["#about", "01", d.nav.about],
    ["#experience", "02", d.nav.experience],
    ["#skills", "03", d.nav.skills],
    ["#certs", "04", d.nav.certs],
    ["#contact", "05", d.nav.contact]
  ].map(([h, i, t]) => `<a href="${h}" data-close><span class="idx">${i}</span>${t}</a>`).join("");

  // hero
  $("#hero-status").textContent = d.hero.status;
  $("#hero-h1").innerHTML = `<span class="ln">${d.hero.l1}</span><span class="ln accent">${d.hero.l2}</span>`;
  $("#hero-bio").textContent = d.hero.bio;
  $("#cta1").innerHTML = `${d.hero.cta1} <span class="arrow">↗</span>`;
  $("#cta2").textContent = d.hero.cta2;
  $("#cv-btn").innerHTML = `${d.hero.cv} <span class="arrow">↓</span>`;
  $$(".cv-link").forEach(a => a.setAttribute("href", "assets/CV_DiRienzo.pdf"));

  // about
  fillHead("about", d.about);
  $("#about-copy").innerHTML = `<p>${d.about.p1}</p><p>${d.about.p2}</p><p>${d.about.p3}</p>`;
  $("#about-tags").innerHTML = d.about.focus.map((f, i) =>
    `<span class="focus${i === 0 ? " hot" : ""}">${f}</span>`).join("");
  const t = d.about.term;
  $("#term-title").textContent = t.title;
  $("#term-body").innerHTML = `
    <div class="ln cmd"><span class="p">${t.host}:~$</span> <span class="c">whoami</span></div>
    <div class="ln out"><span class="v">Francesco Di Rienzo</span> — <span class="k">${t.role}</span></div>
    <div class="ln cmd"><span class="p">${t.host}:~$</span> <span class="c">cat profile.json</span></div>
    <div class="ln out">{</div>
    <div class="ln out">  "<span class="k">location</span>": "<span class="v">${t.loc}</span>",</div>
    <div class="ln out">  "<span class="k">${t.focusLabel}</span>": "<span class="v">${t.focusVal}</span>",</div>
    <div class="ln out">  "<span class="k">${t.statusLabel}</span>": "<span class="v">${t.statusVal}</span>"</div>
    <div class="ln out">}</div>
    <div class="ln cmd"><span class="p">${t.host}:~$</span> <span class="c">_</span></div>`;

  // experience
  fillHead("exp", d.experience);
  $("#timeline").innerHTML = d.experience.items.map((x, i) => `
    <div class="tl-item reveal${x.now ? " current" : ""}">
      <div class="tl-rail"><span class="tl-node"></span>
        <div class="tl-period">${x.period}${x.now ? `<span class="now">● ${x.now}</span>` : ""}</div>
      </div>
      <div class="tl-card">
        <h3>${x.role}</h3>
        <div class="org">${x.org}</div>
        <div class="company">${x.company}</div>
        <ul>${x.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="chips">${x.tags.map(tg => `<span class="chip">${tg}</span>`).join("")}</div>
      </div>
    </div>`).join("");

  // skills
  fillHead("skills", d.skills);
  $("#skills-grid").innerHTML = d.skills.groups.map((g, i) => `
    <div class="skill-card reveal reveal-d${(i % 4) + 1}">
      <div class="sc-head"><h3>${g.h}</h3><span class="sc-idx">${String(i + 1).padStart(2, "0")}</span></div>
      <div class="chips">${g.items.map(it => `<span class="chip">${it}</span>`).join("")}</div>
    </div>`).join("");

  // certs
  fillHead("certs", d.certs);
  $("#cert-grid").innerHTML = d.certs.items.map((c, i) => `
    <div class="cert reveal reveal-d${i + 1}${c.state === "final" ? " final" : ""}">
      <div class="badge">${c.abbr}</div>
      <h3>${c.name}</h3>
      <div class="full">${c.full}</div>
      <div class="status ${c.state}"><span class="sd"></span>${c.status}</div>
      <div class="bar-track"><div class="bar-fill" data-pct="${c.pct}"></div></div>
    </div>`).join("");

  // languages + soft
  fillHead("lang", d.languages);
  $("#lang-subtitle").textContent = d.languages.langTitle;
  $("#lang-list").innerHTML = d.languages.list.map(l => `
    <div class="lang-row">
      <div class="name">${l.name}<span class="lvl">${l.lvl}</span></div>
      <div class="dots">${[1,2,3,4,5].map(n => `<span class="d${n <= l.dots ? " on" : ""}"></span>`).join("")}</div>
    </div>`).join("");
  $("#soft-title").textContent = d.languages.softTitle;
  $("#soft-grid").innerHTML = d.languages.soft.map(s => `<span class="soft">${s}</span>`).join("");

  // contact
  const c = d.contact;
  $("#contact-eyebrow").textContent = c.eyebrow;
  $("#contact-title").innerHTML = `${c.title1} <span class="accent">${c.title2}</span>`;
  $("#contact-sub").textContent = c.sub;
  $("#contact-cta1").innerHTML = `${c.cta1} <span class="arrow">↗</span>`;
  $("#contact-cta1").setAttribute("href", `mailto:${CONTACT.email}`);
  $("#contact-cta2").textContent = c.cta2;
  $("#contact-cta2").setAttribute("href", CONTACT.github);
  $("#contact-meta").innerHTML = `
    <a href="mailto:${CONTACT.email}"><span class="k">${c.labels.email}:</span> ${CONTACT.email}</a>
    <a href="tel:${CONTACT.phone.replace(/\s/g,"")}"><span class="k">${c.labels.phone}:</span> ${CONTACT.phone}</a>
    <a href="${CONTACT.github}" target="_blank" rel="noopener"><span class="k">${c.labels.gh}:</span> ${CONTACT.githubLabel}</a>
    <span><span class="k">${c.labels.loc}:</span> ${CONTACT.location}</span>`;

  // footer
  $("#ft-tag").textContent = d.footer.tag;
  $("#ft-rights").textContent = d.footer.rights;

  // lang toggle active
  $$(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === LANG));

  // re-arm observers for freshly-rendered nodes
  armReveal();
  observeCerts();
  observeDots();
}

function fillHead(id, src) {
  $(`#${id}-eyebrow`).textContent = src.eyebrow;
  $(`#${id}-title`).textContent = src.title;
  $(`#${id}-lead`).textContent = src.lead;
}

/* ============================================================
   TYPEWRITER (hero role) — language-aware
   ============================================================ */
let twTimer = null;
function typewriter() {
  clearTimeout(twTimer);
  const target = $("#typed");
  if (!target) return;
  const roles = () => DATA[LANG].hero.roles;
  let ri = 0, ci = 0, deleting = false;
  function tick() {
    const list = roles();
    const word = list[ri % list.length];
    target.textContent = word.slice(0, ci);
    if (!deleting) {
      if (ci < word.length) { ci++; twTimer = setTimeout(tick, 55 + Math.random() * 40); }
      else { deleting = true; twTimer = setTimeout(tick, 1500); }
    } else {
      if (ci > 0) { ci--; twTimer = setTimeout(tick, 28); }
      else { deleting = false; ri++; twTimer = setTimeout(tick, 320); }
    }
  }
  tick();
}

/* ============================================================
   COUNTERS
   ============================================================ */
function runCounters() {
  const d = DATA[LANG];
  $$(".stat").forEach((node, i) => {
    const s = d.stats[i];
    const numEl = $(".num", node);
    const dur = 1400, start = performance.now();
    function step(t) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      numEl.innerHTML = `${Math.round(s.n * eased)}<span class="suf">${s.suf}</span>`;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}
function fillStatLabels() {
  const d = DATA[LANG];
  $$(".stat").forEach((node, i) => { $(".lbl", node).textContent = d.stats[i].l; });
}

/* ============================================================
   OBSERVERS
   ============================================================ */
let revealObs;
function armReveal() {
  if (!revealObs) {
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  }
  $$(".reveal:not(.in)").forEach(n => revealObs.observe(n));
}
let certObs;
function observeCerts() {
  if (certObs) certObs.disconnect();
  certObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$(".bar-fill", e.target).forEach(b => { b.style.width = b.dataset.pct + "%"; });
        certObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  $$(".cert").forEach(c => certObs.observe(c));
}
let dotsDone = false, dotsObs;
function observeDots() {
  if (dotsObs) dotsObs.disconnect();
  dotsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$(".dots .d.on", e.target).forEach((dot, i) => {
          dot.style.transitionDelay = (i * 90) + "ms";
        });
        dotsObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  $$(".lang-row").forEach(r => dotsObs.observe(r));
}

let statsRan = false;
function observeStats() {
  const band = $("#stats");
  if (!band) return;
  const o = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting && !statsRan) { statsRan = true; runCounters(); o.disconnect(); } });
  }, { threshold: 0.4 });
  o.observe(band);
}

/* ============================================================
   SCROLLSPY + NAV
   ============================================================ */
function scrollSpy() {
  const sections = ["about", "experience", "skills", "certs", "contact"];
  const map = { about: "nav-about", experience: "nav-exp", skills: "nav-skills", certs: "nav-certs", contact: "nav-contact" };
  const o = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$(".nav-links a").forEach(a => a.classList.remove("active"));
        const link = $("#" + map[e.target.id]);
        if (link) link.classList.add("active");
      }
    });
  }, { threshold: 0.3, rootMargin: "-30% 0px -55% 0px" });
  sections.forEach(s => { const n = $("#" + s); if (n) o.observe(n); });
}

/* ============================================================
   NETWORK CANVAS BACKGROUND
   ============================================================ */
function networkCanvas() {
  const cv = $("#net-canvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  let w, h, nodes, raf;
  const mouse = { x: -9999, y: -9999 };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(70, Math.floor((innerWidth * innerHeight) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > innerWidth) n.vx *= -1;
      if (n.y < 0 || n.y > innerHeight) n.vy *= -1;
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const op = (1 - dist / 130) * 0.16;
          ctx.strokeStyle = `rgba(16,185,129,${op})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // mouse link
      const a = nodes[i];
      const mdx = a.x - mouse.x, mdy = a.y - mouse.y;
      const md = Math.hypot(mdx, mdy);
      if (md < 170) {
        const op = (1 - md / 170) * 0.4;
        ctx.strokeStyle = `rgba(52,211,153,${op})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    // nodes
    for (const n of nodes) {
      ctx.fillStyle = "rgba(16,185,129,0.55)";
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }
  resize();
  if (reduce) { draw(); cancelAnimationFrame(raf); ctx.globalAlpha = 1; return; }
  draw();
  addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); draw(); });
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });
}

/* ============================================================
   PHOTO FALLBACK
   ============================================================ */
function photoFallback() {
  const img = $("#profile-img");
  if (!img) return;
  img.addEventListener("error", () => {
    img.style.display = "none";
    const ph = $("#photo-fallback");
    if (ph) ph.style.display = "grid";
  });
}

/* ============================================================
   NAV behaviour
   ============================================================ */
function navBehaviour() {
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 24);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#burger"), mm = $("#mm");
  burger.addEventListener("click", () => mm.classList.toggle("open"));
  mm.addEventListener("click", e => { if (e.target.closest("[data-close]")) mm.classList.remove("open"); });
}

/* ============================================================
   LANGUAGE SWITCH
   ============================================================ */
function bindLang() {
  $$(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => {
      if (b.dataset.lang === LANG) return;
      LANG = b.dataset.lang;
      localStorage.setItem("fdr_lang", LANG);
      render();
      fillStatLabels();
      typewriter();
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  render();
  fillStatLabels();
  typewriter();
  photoFallback();
  navBehaviour();
  bindLang();
  networkCanvas();
  scrollSpy();
  observeStats();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
