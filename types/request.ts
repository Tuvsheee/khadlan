export type Status = "paid" | "pending" | "cancelled" | "confirmed";

export interface RequestData {
  _id: string;
  bagKhorooId?: string | null;
  district?: string | null;
  subDistrict?: string | null;
  bagKhoroo?: string | null;
  createdAt?: string;
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
  userType?: string;
  contractSignature?: string;
  filePath: string | string[];
  contractFiles: string | string[];
  status: Status;
  approvalChecks?: Record<string, boolean>;
  bagKhoroo: string;
  subDistrict: string;
  district: string;
  mapCoordinates?: {
    latitude: number;
    longitude: number;
  } | null;
  googleMapUrl?: string;
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
