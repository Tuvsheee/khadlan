import { IMenu } from "@/types/interface";

const MENU_ITEMS: IMenu[] = [
  {
    text: "Хэрэглэгчид",
    url: "/users",
    roles: ["admin"],
    type: "dropdown",
    items: [
      {
        text: "Бүгд",
        url: "/users",
      },
      {
        text: "Хэрэглэгч",
        url: "/users?role=user",
      },
      {
        text: "Иргэн",
        url: "/users?role=citizen",
      },
    ],
  },
  {
    text: "Хүсэлтүүд",
    url: "/",
    roles: ["admin", "user", "citizen"],
    type: "dropdown",
    items: [
      {
        text: "Бүгд",
        url: "/",
      },
      {
        text: "Төлсөн",
        url: "/?type=paid",
      },
      {
        text: "Баталгаажсан",
        url: "/?type=confirmed",
      },
      {
        text: "Хянагдаж байгаа",
        url: "/?type=pending",
      },
      {
        text: "Цуцалсан",
        url: "/?type=cancelled",
      },
    ],
  },
  {
    text: "Аудит",
    url: "/logs",
    roles: ["admin"],
  },
];

const ROLES = [
  {
    text: "Админ",
    value: "admin",
  },
  {
    text: "Хэрэглэгч",
    value: "user",
  },
  {
    text: "Иргэн",
    value: "citizen",
  },
];
const ENUM_ROLES = ["admin", "user", "citizen"] as const;

export { MENU_ITEMS, ROLES, ENUM_ROLES };
