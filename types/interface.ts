export interface IMenu {
  text: string;
  url?: string;
  roles: string[];
  type?: "dropdown";
  items?: {
    text: string;
    url: string;
  }[];
}
