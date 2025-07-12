import { Skeleton } from "./ui/skeleton";

const NavSkeleton = () => {
  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-14" />
      <Skeleton className="h-4 w-18" />
    </div>
  );
};

export default NavSkeleton;
