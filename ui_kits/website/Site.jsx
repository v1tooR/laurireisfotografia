/* global React */
import React from "react";
// Lauri Reis Fotografia — marketing site recreation.
// Composes the design-system primitives passed in via `ui`.

export function Site({ ui }) {
  const { Button, Badge, ServiceCard, Field } = ui;
  const e = React.createElement;
  const [section, setSection] = React.useState("inicio");
  const [lightbox, setLightbox] = React.useState(null);
  const rootRef = React.useRef(null);

  const A = "assets/imagery/";

  const services = [
    { id: "15anos", image: A + "15-anos.jpg", eyebrow: "Debutante", title: "15 Anos", description: "A festa, o vestido, o brilho — do making-of à pista de dança." },
    { id: "newborn", image: A + "newborn.jpg", eyebrow: "Lifestyle", title: "Newborn", description: "Os primeiros dias em casa, com calma, luz suave e muito afeto." },
    { id: "infantil", image: A + "aniversario-infantil.jpg", eyebrow: "Celebração", title: "Aniversário Infantil", description: "A alegria genuína das crianças, sem poses forçadas." },
    { id: "cha", image: A + "cha-de-bebe.jpg", eyebrow: "Família", title: "Chá de Bebê", description: "A espera registrada entre risos e quem você ama." },
    { id: "externo", image: A + "ensaio-externo.jpg", eyebrow: "Ensaio", title: "Ensaio Externo", description: "Luz natural e cenários ao ar livre que combinam com você." },
    { id: "estudio", image: A + "estudio.jpg", eyebrow: "Estúdio", title: "Estúdio", description: "Controle total de luz e fundo para retratos atemporais." },
  ];

  const gallery = [
    A + "15-anos.jpg", A + "newborn.jpg", A + "ensaio-externo.jpg",
    A + "aniversario-infantil.jpg", A + "15-anos-2.jpg", A + "cha-de-bebe.jpg",
    A + "newborn-2.jpg", A + "estudio-2.jpg", A + "aniversario-infantil-2.jpg",
  ];

  const nav = [
    ["inicio", "Início"], ["servicos", "Serviços"],
    ["portfolio", "Portfólio"], ["sobre", "Sobre"], ["contato", "Contato"],
  ];

  function go(id) {
    setSection(id);
    const el = rootRef.current && rootRef.current.querySelector("#sec-" + id);
    if (el) el.scrollIntoView ? window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" }) : null;
  }

  // ---------- Header ----------
  const header = e("header", {
    style: {
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(15,32,48,0.92)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(200,168,75,0.18)",
    },
  },
    e("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 32px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" } },
      e("img", { src: "assets/logo/lr-logo-white.svg", alt: "Lauri Reis Fotografia", style: { height: "26px", cursor: "pointer" }, onClick: () => go("inicio") }),
      e("nav", { style: { display: "flex", gap: "34px", alignItems: "center" } },
        nav.map(([id, label]) => e("button", {
          key: id, onClick: () => go(id),
          style: {
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: section === id ? "var(--lr-gold)" : "rgba(255,255,255,0.78)",
            padding: "6px 0", transition: "color var(--dur) var(--ease-out)",
          },
        }, label)),
      ),
      e("div", { style: { display: "flex" } }, e(Button, { variant: "outline-light", size: "sm", onClick: () => go("contato") }, "Agendar")),
    ),
  );

  // ---------- Hero ----------
  const hero = e("section", { id: "sec-inicio", style: { position: "relative", minHeight: "640px", display: "flex", alignItems: "center", overflow: "hidden" } },
    e("div", { style: { position: "absolute", inset: 0, backgroundImage: `url(${A}15-anos.jpg)`, backgroundSize: "cover", backgroundPosition: "center 30%" } }),
    e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,32,48,0.92) 0%, rgba(15,32,48,0.66) 45%, rgba(15,32,48,0.25) 100%)" } }),
    e("div", { style: { position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "0 32px", width: "100%" } },
      e("div", { style: { maxWidth: "560px" } },
        e(Badge, { variant: "gold-outline" }, "Fotografia de afeto"),
        e("h1", { style: { fontFamily: "var(--font-display)", fontSize: "64px", fontWeight: 500, lineHeight: 1.04, color: "#fff", margin: "22px 0 0", letterSpacing: "0.01em" } },
          "Momentos que ", e("em", { style: { color: "var(--lr-gold)", fontStyle: "italic" } }, "ficam"), " para sempre"),
        e("p", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "18px", lineHeight: 1.65, color: "rgba(255,255,255,0.86)", margin: "24px 0 36px", maxWidth: "470px" } },
          "Ensaios e coberturas com olhar autoral em Lauri Reis — do newborn aos 15 anos, cada história contada com luz, tempo e sensibilidade."),
        e("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" } },
          e(Button, { variant: "gold", size: "lg", onClick: () => go("contato") }, "Agendar ensaio"),
          e(Button, { variant: "outline-light", size: "lg", onClick: () => go("portfolio") }, "Ver portfólio"),
        ),
      ),
    ),
  );

  // ---------- Services ----------
  const servicesSec = e("section", { id: "sec-servicos", style: { background: "var(--lr-paper)", padding: "96px 0" } },
    e("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } },
      sectionHead("O que registramos", "Serviços para cada capítulo", "Da chegada do bebê às grandes comemorações — pacotes pensados para o seu momento."),
      e("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "48px" } },
        services.map((s) => e(ServiceCard, { key: s.id, ...s, href: "#" })),
      ),
    ),
  );

  // ---------- Portfolio ----------
  const portfolioSec = e("section", { id: "sec-portfolio", style: { background: "var(--lr-navy-deep)", padding: "96px 0" } },
    e("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 32px" } },
      sectionHead("Portfólio", "Histórias recentes", "Uma seleção de ensaios e coberturas.", true),
      e("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginTop: "48px" } },
        gallery.map((src, i) => e("button", {
          key: i, onClick: () => setLightbox(src),
          style: { border: "none", padding: 0, cursor: "pointer", aspectRatio: i % 5 === 0 ? "1 / 1" : "3 / 4", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#000" },
        },
          e("img", { src, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform var(--dur-slow) var(--ease-out)" },
            onMouseEnter: (ev) => (ev.target.style.transform = "scale(1.06)"),
            onMouseLeave: (ev) => (ev.target.style.transform = "scale(1)") }),
        )),
      ),
    ),
  );

  // ---------- About ----------
  const aboutSec = e("section", { id: "sec-sobre", style: { background: "var(--lr-paper)", padding: "96px 0" } },
    e("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" } },
      e("div", { style: { position: "relative", aspectRatio: "4 / 5", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-lg)" } },
        e("img", { src: A + "estudio-2.jpg", alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }),
        e("div", { style: { position: "absolute", inset: "14px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "2px", pointerEvents: "none" } }),
      ),
      e("div", null,
        e(Badge, { variant: "soft" }, "Sobre"),
        e("h2", { style: { fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: 500, lineHeight: 1.1, color: "var(--lr-navy-deep)", margin: "18px 0 0" } },
          "Olhar autoral, conforto de verdade"),
        e("p", { style: { fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "16px", lineHeight: 1.7, color: "var(--lr-ink-600)", margin: "22px 0" } },
          "Cada ensaio começa com uma conversa — entender quem você é antes de apontar a câmera. O resultado são imagens naturais, quentes e atemporais, que parecem você no seu melhor dia."),
        e("div", { style: { display: "flex", gap: "48px", margin: "32px 0 36px" } },
          stat("+8", "anos de estrada"), stat("+600", "famílias atendidas"), stat("6", "tipos de ensaio"),
        ),
        e(Button, { variant: "gold", onClick: () => go("contato") }, "Vamos conversar"),
      ),
    ),
  );

  // ---------- Contact ----------
  const contactSec = e("section", { id: "sec-contato", style: { background: "var(--lr-navy-deep)", padding: "96px 0" } },
    e("div", { style: { maxWidth: "1000px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: "64px" } },
      e("div", null,
        e(Badge, { variant: "gold-outline" }, "Contato"),
        e("h2", { style: { fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 500, lineHeight: 1.12, color: "#fff", margin: "18px 0 20px" } }, "Vamos eternizar o seu momento"),
        e("p", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.78)", marginBottom: "28px" } },
          "Conte o que você imagina e retornamos com disponibilidade e pacotes em até 24h."),
        contactLine("E-mail", "ola@laurireis.com.br"),
        contactLine("WhatsApp", "(11) 9 0000-0000"),
        contactLine("Estúdio", "São Paulo · SP"),
      ),
      e("form", { onSubmit: (ev) => { ev.preventDefault(); setSection("enviado"); },
        style: { background: "var(--lr-paper-card)", borderRadius: "var(--radius-md)", padding: "36px", display: "grid", gap: "22px" } },
        e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px" } },
          e(Field, { label: "Nome", placeholder: "Seu nome completo", required: true }),
          e(Field, { label: "Telefone", placeholder: "(00) 0 0000-0000" }),
        ),
        e(Field, { label: "Tipo de ensaio", placeholder: "15 anos, newborn, externo…" }),
        e(Field, { label: "Mensagem", textarea: true, placeholder: "Conte sobre o momento que deseja registrar" }),
        section === "enviado"
          ? e("div", { style: { fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--lr-gold-deep)", fontWeight: 600, letterSpacing: "0.04em" } }, "Recebido! Retornamos em breve ✓")
          : e(Button, { variant: "gold", size: "lg", type: "submit", style: { width: "100%" } }, "Enviar pedido"),
      ),
    ),
  );

  // ---------- Footer ----------
  const footer = e("footer", { style: { background: "#0A1622", padding: "48px 0", borderTop: "1px solid rgba(200,168,75,0.18)" } },
    e("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" } },
      e("img", { src: "assets/logo/lr-symbol-gold.svg", alt: "LR", style: { height: "44px" } }),
      e("span", { style: { fontFamily: "var(--font-body)", fontSize: "12px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" } }, "© Lauri Reis Fotografia — todos os momentos reservados"),
    ),
  );

  // ---------- Lightbox ----------
  const lb = lightbox && e("div", {
    onClick: () => setLightbox(null),
    style: { position: "fixed", inset: 0, zIndex: 100, background: "rgba(8,16,24,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", cursor: "zoom-out" },
  },
    e("img", { src: lightbox, alt: "", style: { maxWidth: "90%", maxHeight: "90%", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)" } }),
  );

  function sectionHead(eyebrow, title, sub, onDark) {
    return e("div", { style: { maxWidth: "560px" } },
      e("div", { style: { fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--lr-gold)", marginBottom: "12px" } }, eyebrow),
      e("h2", { style: { fontFamily: "var(--font-display)", fontSize: "44px", fontWeight: 500, lineHeight: 1.08, color: onDark ? "#fff" : "var(--lr-navy-deep)", margin: 0 } }, title),
      sub && e("p", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "16px", lineHeight: 1.65, color: onDark ? "rgba(255,255,255,0.74)" : "var(--lr-ink-600)", marginTop: "16px" } }, sub),
    );
  }
  function stat(num, label) {
    return e("div", null,
      e("div", { style: { fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 500, color: "var(--lr-gold-deep)", lineHeight: 1 } }, num),
      e("div", { style: { fontFamily: "var(--font-body)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--lr-ink-400)", marginTop: "8px" } }, label),
    );
  }
  function contactLine(label, value) {
    return e("div", { style: { marginBottom: "18px" } },
      e("div", { style: { fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--lr-gold)" } }, label),
      e("div", { style: { fontFamily: "var(--font-display)", fontSize: "22px", color: "#fff", marginTop: "4px" } }, value),
    );
  }

  return e("div", { ref: rootRef, style: { background: "var(--lr-navy-deep)" } },
    header, hero, servicesSec, portfolioSec, aboutSec, contactSec, footer, lb,
  );
}
