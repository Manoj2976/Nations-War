
export type SectionId = 'home' | 'environments' | 'theme' | 'roles' | 'weapon_sector' | 'contact_us';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Environment {
  name: string;
  subtitle: string;
  details: string;
}

export interface ThemeItem {
  name: string;
  description: string;
}

export interface Role {
  name: string;
  subtitle: string;
}

export interface WeaponProgression {
  environment: string;
  progression: string[];
}

export interface Developer {
  name: string;
  id: string;
  email: string;
  phone?: string;
  imageUrl: string;
}
