export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: "bank" | "industry" | "tech";
  website?: string;
}

export const partners: Partner[] = [
  { id: "1", name: "Shinhan Bank", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=Shinhan+Bank", category: "bank" },
  { id: "2", name: "Woori Bank Vietnam", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=Woori+Bank", category: "bank" },
  { id: "3", name: "IBK Vietnam", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=IBK+Vietnam", category: "bank" },
  { id: "4", name: "BNK", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=BNK", category: "bank" },
  { id: "5", name: "KEB Hana Bank", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=KEB+Hana", category: "bank" },
  { id: "6", name: "POSCO ICT", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=POSCO+ICT", category: "industry" },
  { id: "7", name: "LG Display", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=LG+Display", category: "industry" },
  { id: "8", name: "GS", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=GS+Group", category: "industry" },
  { id: "9", name: "CJ", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=CJ", category: "industry" },
  { id: "10", name: "Hyosung", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=Hyosung", category: "industry" },
  { id: "11", name: "Doosan", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=Doosan", category: "industry" },
  { id: "12", name: "Kotra", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=Kotra", category: "industry" },
  { id: "13", name: "Orion", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=Orion", category: "industry" },
  { id: "14", name: "Chemtronics", logo: "https://placehold.co/160x80/f8fafc/0F3A8F?text=Chemtronics", category: "industry" },
  { id: "15", name: "Tous les Jours", logo: "https://placehold.co/160x80/f8fafc/1B4FBF?text=Tous+les+Jours", category: "industry" },
];
