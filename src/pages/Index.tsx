import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";
import heroImage from "@/assets/generated/hero-acessorios-smartphone.webp";
import casesImage from "@/assets/generated/capinhas-para-celular.webp";
import screenImage from "@/assets/generated/peliculas-protecao.webp";
import chargersImage from "@/assets/generated/carregadores-e-cabos.webp";
import earbudsImage from "@/assets/generated/fones-de-ouvido.webp";
import repairImage from "@/assets/generated/assistencia-tecnica-smartphone.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const whatsappLink =
  "https://wa.me/5511959071660?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20ROCASES.";
const instagramLink = "https://www.instagram.com/rocases__/";
const address =
  "Av. Elísio Cordeiro de Siqueira, 542 - Jardim Santo Elias, São Paulo - SP, 05136-000";
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const categories = [
  {
    name: "Capinhas",
    detail: "Estilo e proteção para o seu celular.",
    image: casesImage,
    alt: "Capinhas de celular em diferentes estilos",
  },
  {
    name: "Películas",
    detail: "Proteção para acompanhar sua rotina.",
    image: screenImage,
    alt: "Película transparente para proteção de smartphone",
  },
  {
    name: "Carregadores & cabos",
    detail: "Acessórios essenciais para o dia a dia.",
    image: chargersImage,
    alt: "Carregadores e cabos para dispositivos móveis",
  },
  {
    name: "Fones de ouvido",
    detail: "Mais praticidade para ouvir do seu jeito.",
    image: earbudsImage,
    alt: "Fones de ouvido sem fio em estojo de carregamento",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Variedade de acessórios",
    description:
      "Opções para deixar seu smartphone mais protegido, prático e com a sua cara.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento próximo",
    description:
      "Fale com a equipe para encontrar o acessório ou serviço que procura.",
  },
  {
    icon: Wrench,
    title: "Assistência técnica",
    description:
      "Serviços para smartphones com atendimento e orçamento pelo WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Escolha com confiança",
    description:
      "Tire suas dúvidas e consulte disponibilidade antes de ir até a loja.",
  },
];

const services = [
  "Troca de touch",
  "Troca de display",
  "Troca de frontal",
  "Reparo de placa",
  "Troca traseira",
  "Troca de tela",
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="ROCASES — início" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <span className="font-display text-lg font-bold tracking-tight">R</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-bold tracking-[0.12em]">
                ROCASES
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                tecnologia & cuidado
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#inicio">Início</a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#produtos">Produtos</a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#sobre">Sobre nós</a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#contato">Contato</a>
          </nav>

          <Button asChild className="hidden rounded-full px-5 md:inline-flex">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale pelo WhatsApp
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="rounded-full md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Menu móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["Início", "#inicio"],
                ["Produtos", "#produtos"],
                ["Sobre nós", "#sobre"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {label}
                </a>
              ))}
              <Button asChild className="mt-3 rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative isolate min-h-[640px] scroll-mt-24">
        <div className="absolute inset-0 -z-20">
          <img
            src={heroImage}
            alt="Acessórios modernos para smartphones em composição rosa e sofisticada"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/55 via-transparent to-background/10" />
        <div className="mx-auto grid min-h-[640px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
          <div className="max-w-[590px]">
            <Badge variant="secondary" className="mb-7 rounded-full px-4 py-2 text-xs font-semibold tracking-wide">
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-primary" />
              ACESSÓRIOS & ASSISTÊNCIA TÉCNICA
            </Badge>
            <h1 className="max-w-[650px] text-balance font-display text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[68px]">
              Seu celular, <span className="text-primary">do seu jeito.</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Acessórios para acompanhar sua rotina e assistência técnica para
              cuidar do seu smartphone. Tudo pertinho de você, na ROCASES.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <a href="#produtos">
                  Conheça nossos produtos <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-foreground/15 bg-background/75 px-6">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chame no WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-border/70 pt-6">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-card shadow-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </span>
                <span className="text-sm">
                  <strong className="font-display font-semibold">5,0</strong>
                  <span className="ml-1 text-muted-foreground">· 135 avaliações</span>
                </span>
              </div>
              <span className="hidden h-7 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                São Paulo, SP
              </div>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
        <a href="#produtos" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary sm:flex">
          Explore a ROCASES <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <section id="produtos" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Escolha com personalidade</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Pequenos detalhes.<br className="hidden sm:block" /> Grande diferença.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
              Descubra acessórios para completar seu dia a dia. Consulte pelo WhatsApp os modelos disponíveis na loja.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <a
                key={category.name}
                href={`${whatsappLink}%20Tenho%20interesse%20em%20${encodeURIComponent(category.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <div className={`${index === 0 ? "aspect-[1.15] sm:aspect-[1.05]" : "aspect-[1.3] sm:aspect-[1.18]"} overflow-hidden`}>
                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-transparent px-5 pb-5 pt-16 text-background sm:px-6 sm:pb-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{category.name}</h3>
                      <p className="mt-1 text-sm text-background/80">{category.detail}</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background/40 bg-background/15 transition-all group-hover:border-background group-hover:bg-background group-hover:text-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Smartphone className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display font-semibold">Procurando outro acessório?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Consulte a equipe sobre outros produtos disponíveis.</p>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Consultar disponibilidade <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Cuidado que continua</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Seu smartphone em boas mãos.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              Conte com a assistência técnica da ROCASES para diferentes serviços em smartphones.
              Fale com a equipe para entender as opções e consultar seu caso.
            </p>
          </div>
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={repairImage}
                alt="Técnico realizando manutenção cuidadosa em um smartphone"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border/50 bg-background/90 px-4 py-3 shadow-sm backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Wrench className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Serviços de</span>
                  <span className="font-display text-sm font-semibold">assistência técnica</span>
                </span>
              </div>
            </div>
            <div className="lg:pl-6">
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Reparos para voltar à rotina.</h3>
              <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
                A loja oferece serviços como troca de tela, display e outros reparos.
                Descreva o que aconteceu com seu aparelho e consulte a equipe sobre avaliação e disponibilidade.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {service}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild className="rounded-full px-5">
                  <a href={`${whatsappLink}%20Quero%20consultar%20um%20servi%C3%A7o%20de%20assist%C3%AAncia%20t%C3%A9cnica.`} target="_blank" rel="noreferrer">
                    Consultar serviço <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  Consulte as condições diretamente com a loja
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-12">
          <div className="lg:sticky lg:top-32">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Sobre a ROCASES</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tecnologia com um toque mais pessoal.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              A ROCASES reúne acessórios para dispositivos móveis e serviços de assistência técnica em São Paulo.
              Um lugar para encontrar o que precisa e conversar com uma equipe de verdade.
            </p>
            <a href={mapLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-start gap-3 text-sm transition-colors hover:text-primary">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="max-w-sm leading-6">{address}</span>
            </a>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <a href={mapLink} target="_blank" rel="noreferrer">
                Ver como chegar <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article key={reason.title} className="rounded-[1.35rem] border border-border bg-card p-6 transition-colors hover:bg-secondary/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{reason.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-4 flex flex-col gap-5 rounded-[1.35rem] bg-foreground p-6 text-background sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/65">Atendimento direto</p>
                <h3 className="mt-2 font-display text-xl font-semibold">Tem uma dúvida? Vamos conversar.</h3>
              </div>
              <Button asChild variant="secondary" className="shrink-0 rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Falar com a ROCASES
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Quem já conhece</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                A confiança está nos detalhes.
              </h2>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                A experiência de quem passa pela ROCASES é parte importante do nosso dia a dia.
              </p>
              <a
                href="https://www.google.com/search?q=R%C3%B4+Cases+S%C3%A3o+Paulo+avalia%C3%A7%C3%B5es"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ver avaliações <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-background p-7 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-5xl font-semibold tracking-tight">5,0</span>
                    <div className="flex text-primary" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">135 avaliações no Google</p>
                </div>
                <div className="flex gap-1" aria-hidden="true">
                  {[42, 56, 70, 84, 100].map((width, index) => (
                    <span key={index} className="flex h-10 w-8 items-end rounded-t-md bg-secondary p-1">
                      <span className="w-full rounded-t-sm bg-primary" style={{ height: `${width}%` }} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="my-7 h-px bg-border" />
              <blockquote className="font-display text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                “Atendimento maravilhoso e produtos com ótimo custo benefício!!”
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">Avaliação compartilhada por cliente da loja</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Mais da ROCASES</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Acompanhe no Instagram.</h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <a href={instagramLink} target="_blank" rel="noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> @rocases__ <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { image: casesImage, alt: "Capinhas de celular em diferentes estilos", label: "Seu estilo, do seu jeito" },
              { image: chargersImage, alt: "Carregadores e cabos para dispositivos móveis", label: "Acessórios para a rotina" },
              { image: earbudsImage, alt: "Fones de ouvido sem fio em estojo de carregamento", label: "Som que acompanha você" },
              { image: screenImage, alt: "Película transparente para proteção de smartphone", label: "Cuidado em cada detalhe" },
            ].map((post) => (
              <a key={post.label} href={instagramLink} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl">
                <img src={post.image} alt={post.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 via-transparent to-transparent p-4 text-sm font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 sm:p-5">
                  {post.label} <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-primary-foreground/15 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-primary-foreground/15 sm:h-72 sm:w-72" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/75">Estamos por aqui</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                O próximo passo é uma conversa.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-primary-foreground/80">
                Consulte acessórios, disponibilidade e serviços direto com a equipe da ROCASES.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" variant="secondary" className="h-12 rounded-full px-6">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chamar no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={instagramLink} target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 grid gap-4 border-t border-primary-foreground/25 pt-6 text-sm sm:grid-cols-2">
            <a href={mapLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-opacity hover:opacity-80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{address}</span>
            </a>
            <div className="flex items-start gap-3 text-primary-foreground/85">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Consulte o horário de atendimento pelo WhatsApp.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="font-display font-bold">R</span>
              </span>
              <span>
                <span className="block font-display text-sm font-bold tracking-[0.12em]">ROCASES</span>
                <span className="mt-0.5 block text-[9px] uppercase tracking-[0.18em] text-muted-foreground">tecnologia & cuidado</span>
              </span>
            </a>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground" aria-label="Navegação do rodapé">
              <a className="transition-colors hover:text-primary" href="#produtos">Produtos</a>
              <a className="transition-colors hover:text-primary" href="#sobre">Sobre nós</a>
              <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
              <a className="transition-colors hover:text-primary" href={instagramLink} target="_blank" rel="noreferrer">Instagram</a>
            </nav>
            <a href="tel:+5511959071660" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
              <Headphones className="h-4 w-4 text-primary" />
              (11) 95907-1660
            </a>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ROCASES. Todos os direitos reservados.</p>
            <p>Acessórios para celulares · Assistência técnica</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
