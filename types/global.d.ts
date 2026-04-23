declare global {
  type Role = "user" | "admin" | "superadmin" | "citizen";
  type Status = "paid" | "pending" | "cancelled" | "confirmed";
}
export {};
