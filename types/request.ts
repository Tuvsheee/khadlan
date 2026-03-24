export type Status = "paid" | "pending" | "cancelled" | "confirmed";

export interface RequestData {
  _id: string;
  sender: {
    _id: string;
    firstName: string | null;
    lastName: string | null;
    profileImageUrl: string | null;
    regNumber: string | null;
    LoginInfoId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  landSize: number;
  status: Status;
}

export interface RequestDetailData {
  requestId: string;
  street: string;
  landName: string;
  landSize: number;
  filePath: string | string[];
  contractFiles: string | string[];
  status: Status;
  bagKhoroo: string;
  subDistrict: string;
  district: string;
  sender: {
    isActive: boolean;
    email: string;
    firstName: string | null;
    lastName: string | null;
    profileImageUrl: string | null;
  };
  grassInfo: {
    boodol: number;
    buhal: number;
  };
}

export interface RequestPagination {
  total: number;
  pages: number;
  totalPages: number;
  limit: number;
}

export const STATUS_MAP: Record<Status, { label: string; color: string }> = {
  confirmed: {
    label: "Баталгаажсан",
    color: "text-white bg-green-500",
  },
  paid: {
    label: "Төлбөр төлөгдсөн",
    color: "text-white bg-blue-500",
  },
  pending: {
    label: "Хүлээгдэж буй",
    color: "text-white bg-orange-500",
  },
  cancelled: {
    label: "Цуцлагдсан",
    color: "text-white bg-destructive",
  },
};
