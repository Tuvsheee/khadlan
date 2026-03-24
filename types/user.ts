import { RequestData } from "./request";

export interface UserData {
  _id: string;
  username: string;
  role: Role;
  phone: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  firstName: string | null;
  lastName: string | null;
  district: string | null;
  subDistrict: string | null;
  regNumber: string | null;
  profileImageUrl: string | null;
  otp: string | null;
}
interface UserDetailRequest extends RequestData {
  landName: string;
  street: string;
}

export interface UserProfileData {
  userId: string;
  username: string;
  firstname: string | null;
  lastname: string | null;
  regNumber: string | null;
  status: boolean;
  role: Role;
  createdAt: string;
  updatedAt: string;
  requests: UserDetailRequest[];
  phone: number;
  district: string;
  districtId: string;
  subDistrict: string;
  subDistrictId: string;
  bagKhoroo: string;
  bagKhorooId: string;
  profileImageUrl: string | null;
}

export interface UpdateProfileData {
  regNumber: string;
  phone: number;
  lastName: string;
  firstName: string;
}
