import { Button } from "@/components/ui/button";
import { useMutationUtil } from "@/hooks/use-mutation";

const ChangeStatus = ({
  isActive,
  userId,
  onClose,
}: {
  isActive: boolean;
  userId: string;
  onClose: () => void;
}) => {
  const { mutate: changeStatus, isPending } = useMutationUtil({
    endpoint: `/auth/${userId}/changeStatus`,
    queryKey: ["users", "user", userId],
    successMessage: "Хэрэглэгчийн төлөв амжилттай өөрчлөгдлөө",
    onSuccessCallback(res) {
      onClose();
    },
  });

  const handleStatusChange = () => {
    if (!userId) return;
    changeStatus({ isActive: !isActive });
  };
  return (
    <Button
      variant={isActive ? "destructive" : "default"}
      size="sm"
      onClick={handleStatusChange}
      disabled={isPending}
    >
      {isActive ? "Идэвхгүй болгох" : "Идэвхжүүлэх"}
    </Button>
  );
};

export default ChangeStatus;
