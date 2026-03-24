"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MoreHorizontal,
  Search,
  UserCog,
  Shield,
  Trash2,
  FileText,
  User,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQueryUtil } from "@/hooks/use-query";
import { useMutationUtil } from "@/hooks/use-mutation";
import { format } from "date-fns";
import UserDetail from "./user-detail";
import Pagination from "@/components/common/pagination";
import { cn } from "@/lib/utils";
import { RequestPagination } from "@/types/request";
import { UserData } from "@/types/user";
import { RoleGate } from "@/components/common/auth/role-gate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Filter from "@/components/common/filter";
import { useSearchParams } from "next/navigation";

interface UserResponse {
  success: boolean;
  message: string;
  data: UserData[];
  pagination: RequestPagination;
}

export default function UserList() {
  const params = useSearchParams();
  const type = params.get("type");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<boolean | null>(null);

  const { data, isLoading } = useQueryUtil<UserResponse>({
    queryKey: ["users", page, searchQuery, activeStatus, type],
    endpoint: `/auth/list`,
    params: {
      page: page.toString(),
      search: searchQuery,
      isActive: activeStatus?.toString(),
      type: type,
    },
  });

  const { mutate: deleteUser } = useMutationUtil({
    endpoint: "/auth/delete",
    method: "delete",
    queryKey: ["users"],
    successMessage: "Хэрэглэгч амжилттай устгагдлаа",
  });

  const handleDeleteUser = (userId: string) => {
    if (window.confirm("Хэрэглэгчийг устгахдаа итгэлтэй байна уу?")) {
      deleteUser({ userId });
    }
  };

  const statusOptions = [
    {
      label: "Идэвхтэй",
      value: true,
      color: "text-green-500 font-medium",
    },
    {
      label: "Идэвхгүй",
      value: false,
      color: "text-red-500 font-medium",
    },
  ];

  return (
    <div className="relative space-y-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row md:items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Нэр, Регистр, И-мэйл хаягаар хайх..."
            className="pl-9 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Filter<boolean>
          value={activeStatus}
          onChange={setActiveStatus}
          options={statusOptions}
          label="Бүгд"
        />
      </div>

      {/* Table Section */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-muted/50">
              <TableHead className="font-semibold">И-мэйл</TableHead>
              <TableHead className="font-semibold">Овог</TableHead>
              <TableHead className="font-semibold">Нэр</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  Төрөл
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Утас
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Төлөв
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Аймаг
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Сум
                </div>
              </TableHead>
              <RoleGate allowedRoles="admin">
                <TableHead className="w-[50px]"></TableHead>
              </RoleGate>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span>Уншиж байна...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : data?.data && data.data.length > 0 ? (
              data.data.map((user) => (
                <TableRow key={user._id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={
                            user.profileImageUrl ||
                            "/images/profile-default.svg"
                          }
                          alt={user.username}
                        />
                        <AvatarFallback>
                          {user.firstName
                            ? `${user.firstName[0]}${user.lastName?.[0] || ""}`
                            : user.username.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{user.username}</span>
                          {user.isVerified && (
                            <Badge className="h-5 px-1.5">Баталгаажсан</Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.regNumber || "Регистр оруулаагүй"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {user.lastName || "-"}
                  </TableCell>
                  <TableCell className="font-medium">
                    {user.firstName || "-"}
                  </TableCell>
                  <TableCell className="text-muted-foreground font-medium">
                    {user.role === "admin"
                      ? "Админ"
                      : user.role === "user"
                      ? "Хэрэглэгч"
                      : "Иргэн"}
                  </TableCell>
                  <TableCell className="font-medium">
                    {user.phone || "-"}
                  </TableCell>
                  <TableCell>
                    <p
                      className={cn(
                        "inline-block px-2 py-1 rounded-2xl text-sm font-medium",
                        user.isActive
                          ? "text-white bg-green-500"
                          : "text-white bg-destructive"
                      )}
                    >
                      {user.isActive ? "Идэвхтэй" : "Идэвхгүй"}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground">
                      {user?.district}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground">
                      {user?.subDistrict}
                    </div>
                  </TableCell>
                  <RoleGate allowedRoles="admin">
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuLabel>Үйлдлүүд</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => setSelectedUserId(user._id)}
                            className="cursor-pointer"
                          >
                            <UserCog className="mr-2 h-4 w-4" />
                            Дэлгэрэнгүй
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600 cursor-pointer"
                            onClick={() => handleDeleteUser(user._id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Устгах
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </RoleGate>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="h-32">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">
                      {searchQuery
                        ? "Хайлтын илэрц олдсонгүй"
                        : "Хэрэглэгч олдсонгүй"}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-[300px] mt-2">
                      {searchQuery
                        ? "Хайлтын үр дүнд тохирох хэрэглэгч олдсонгүй"
                        : "Та хэрэглэгч үүсгээгүй байна"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {data?.pagination && data.pagination.pages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.pagination.pages}
          total={data.pagination.total}
          onPageChange={setPage}
        />
      )}

      {/* User Detail Modal */}
      {selectedUserId && (
        <UserDetail
          isOpen={!!selectedUserId}
          onClose={() => setSelectedUserId(null)}
          userId={selectedUserId}
        />
      )}
    </div>
  );
}
