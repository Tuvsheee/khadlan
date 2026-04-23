"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  total: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  total,
}: PaginationProps) {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const startIndex = (currentPage - 1) * 4 + 1;
  const endIndex = Math.min(currentPage * 4, total);

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <p className="text-sm text-muted-foreground">
        Нийт {total} үр дүнгийн {startIndex}-{endIndex}
      </p>
      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(1)}
          disabled={!canGoPrevious}
          className="h-7 w-7 rounded-md"
        >
          <ChevronsLeft className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          className="h-7 w-7 rounded-md"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </Button>

        <div className="flex items-center gap-1">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            const isWithinRange =
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1);

            if (!isWithinRange) {
              if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page}>...</span>;
              }
              return null;
            }

            return (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => onPageChange(page)}
                className="h-7 w-7 rounded-md text-xs"
              >
                {page}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className="h-7 w-7 rounded-md"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(totalPages)}
          disabled={!canGoNext}
          className="h-7 w-7 rounded-md"
        >
          <ChevronsRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
