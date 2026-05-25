export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: "bank" | "industry" | "tech";
  website?: string;
}

export const partners: Partner[] = [
  // Banks
  { id: "1",  name: "Shinhan Bank",           logo: "/images/partners/shinhan.jpg",               category: "bank" },
  { id: "2",  name: "Woori Bank Vietnam",      logo: "/images/partners/woori-bank.jpg",            category: "bank" },
  { id: "3",  name: "IBK Vietnam",             logo: "/images/partners/ibk-vietnam.jpg",           category: "bank" },
  { id: "4",  name: "BNK",                     logo: "/images/partners/bnk.jpg",                   category: "bank" },
  { id: "5",  name: "KEB Hana Bank",           logo: "/images/partners/keb-hana.jpg",              category: "bank" },
  // Industry / Conglomerates
  { id: "6",  name: "POSCO ICT",               logo: "/images/partners/posco-ict.jpg",             category: "industry" },
  { id: "7",  name: "LG Display",              logo: "/images/partners/lg-display.jpg",            category: "industry" },
  { id: "8",  name: "GS",                      logo: "/images/partners/gs.jpg",                    category: "industry" },
  { id: "9",  name: "GS E&C",                  logo: "/images/partners/gs-enc.jpg",                category: "industry" },
  { id: "10", name: "CJ",                      logo: "/images/partners/cj.jpg",                    category: "industry" },
  { id: "11", name: "Hyosung",                 logo: "/images/partners/hyosung.jpg",               category: "industry" },
  { id: "12", name: "Doosan",                  logo: "/images/partners/doosan.jpg",                category: "industry" },
  { id: "13", name: "Kotra",                   logo: "/images/partners/kotra.jpg",                 category: "industry" },
  { id: "14", name: "Orion",                   logo: "/images/partners/orion.jpg",                 category: "industry" },
  { id: "15", name: "Chemtronics",             logo: "/images/partners/chemtronics.jpg",           category: "industry" },
  { id: "16", name: "Tous les Jours",          logo: "/images/partners/tous-les-jours.jpg",        category: "industry" },
  { id: "17", name: "Comet Vina",              logo: "/images/partners/comet.jpg",                 category: "industry" },
  { id: "18", name: "Jevisco",                 logo: "/images/partners/jevisco.jpg",               category: "industry" },
  { id: "19", name: "CEO Suite",               logo: "/images/partners/ceo-suite.jpg",             category: "industry" },
  { id: "20", name: "Glotech",                 logo: "/images/partners/glotech.jpg",               category: "industry" },
  { id: "21", name: "Haeng Sung",              logo: "/images/partners/haeng-sung.jpg",            category: "industry" },
  { id: "22", name: "Dongdo Electronics",      logo: "/images/partners/dongdo-electronics.jpg",   category: "industry" },
  { id: "23", name: "Korean Cultural Center",  logo: "/images/partners/korean-cultural-center.jpg", category: "industry" },
  { id: "24", name: "Gap International",       logo: "/images/partners/gap-international.jpg",     category: "industry" },
];
