export interface HomeStat {
  order: string;
  value: string;
  title: string;
  subtitle: string;
  link?: string;
}

export interface HomeContent {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  ctaText: string;
  logoUrl?: string;
  backgroundImageUrl?: string;
  stats: HomeStat[];
}

export interface HomeContentResponse {
  success: boolean;
  message: string;
  data: HomeContent;
}
