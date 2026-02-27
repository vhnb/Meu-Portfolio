import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationContent {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
}

export function PaginationDemo({ currentPage, totalPages, onPageChange }: PaginationContent) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => onPageChange(Math.max(currentPage - 1, 1))} className={currentPage === 1 ? "pointer-events-none opacity-40" : "cursor-pointer"} />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1

                    return (
                        <PaginationItem key={page}>
                            <PaginationLink className="cursor-pointer" isActive={currentPage === page} onClick={() => onPageChange(page)}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} className={currentPage === totalPages ? "pointer-events-none opacity-40" : "cursor-pointer"} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
