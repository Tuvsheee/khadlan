declare global {
  type Role = "user" | "admin" | "citizen";
  type Status = "paid" | "pending" | "cancelled" | "confirmed";
}
export {};
