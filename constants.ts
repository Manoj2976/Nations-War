
import { NavItem, Environment, ThemeItem, Role, WeaponProgression, Developer } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'environments', label: 'Environments' },
  { id: 'theme', label: 'Theme' },
  { id: 'roles', label: 'Roles' },
  { id: 'weapon_sector', label: 'Weapon Sector' },
  { id: 'contact_us', label: 'Contact Us' },
];

export const ENVIRONMENTS_DATA: Environment[] = [
  {
    name: "The Sunspire & The Moonflow",
    subtitle: "A land of duality",
    details: "Navigate through 9 treacherous trails.",
  },
  {
    name: "The Ruins",
    subtitle: "The Lost City",
    details: "Uncover secrets across 6 distinct phases.",
  },
  {
    name: "The Base",
    subtitle: "The Termination",
    details: "Sabotage 3 critical machines.",
  },
];

export const THEME_DATA: ThemeItem[] = [
  {
    name: "Own Nation",
    description: "Fight valiantly to defend your home base against encroaching enemy forces. Strategy and defense are key to survival."
  },
  {
    name: "Enemy Nation",
    description: "An aggressive force seeking to expand its territory by occupying the opponent's nation. Overwhelm and conquer."
  }
];

export const ROLES_DATA: Role[] = [
  { name: "Detective", subtitle: "The Inspector" },
  { name: "Map Analyst", subtitle: "The Navigator" },
  { name: "Sharpshooter", subtitle: "Gun Specialist" },
  { name: "Medic & Food", subtitle: "Rescue Specialist" },
];

export const WEAPONS_DATA: WeaponProgression[] = [
    { 
        environment: "The Sunspire & The Moonflow", 
        progression: ["No Weapon", "Archery", "Next Level Entry + Katana"] 
    },
    { 
        environment: "The Ruins (The Lost City)", 
        progression: ["Research Pistol", "Guns"] 
    },
    { 
        environment: "The Base (The Termination)", 
        progression: ["Grenades", "Launchers", "Termination (Part 2...)"] 
    },
];

export const DEVELOPERS_DATA: Developer[] = [
  {
    name: "Manoj Kumar",
    id: "46645TP8",
    email: "manojkumar@email.com",
    imageUrl: "https://picsum.photos/seed/manoj/200",
  },
  {
    name: "Durga Prasad",
    id: "ID Hidden",
    phone: "9598519935",
    email: "123durga@email.com",
    imageUrl: "https://picsum.photos/seed/durga/200",
  },
];
