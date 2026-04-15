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
        url: "/users?type=user",
      },
      {
        text: "Иргэн",
        url: "/users?type=citizen",
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

// Re-export official fetched administrative divisions
export { type AdminDivision } from "./admin-divisions-fetched";

// The fetched data file contains only _id and name fields. derive parentId
// from the numeric code suffix in the _id (e.g. '...view.1101' -> suffix '1101').
// Province codes are the first two digits of the sum suffix (e.g. '11').
// Sum codes are the first four digits of the bag/khoroo suffix (e.g. '1101').
import {
  AIMAGS as RAW_AIMAGS,
  SUMS as RAW_SUMS,
  BAG_KHOROOS as RAW_BAG_KHOROOS,
} from "./admin-divisions-fetched";

const AIMAGS = RAW_AIMAGS;

const SUMS = RAW_SUMS.map((s) => {
  try {
    const suffix = s._id.split(".").pop() || ""; // e.g. '1101'
    const provinceCode = suffix.slice(0, 2); // '11'
    const parent = AIMAGS.find((a) => a._id.endsWith(`.${provinceCode}`));
    return {
      ...s,
      parentId: parent?._id,
    };
  } catch (e) {
    return s;
  }
});

const BAG_KHOROOS = RAW_BAG_KHOROOS.map((b) => {
  try {
    const suffix = b._id.split(".").pop() || ""; // e.g. '110151'
    const sumCode = suffix.slice(0, 4); // '1101'
    const parent = SUMS.find((s) => s._id.endsWith(`.${sumCode}`));
    return {
      ...b,
      parentId: parent?._id,
    };
  } catch (e) {
    return b;
  }
});

export { AIMAGS, SUMS, BAG_KHOROOS };

export { MENU_ITEMS, ROLES, ENUM_ROLES };
