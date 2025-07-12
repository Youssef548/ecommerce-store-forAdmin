import Link from "next/link";
import dynamic from "next/dynamic";

import Container from "@/components/ui/container";
import NavSkeleton from "@/components/nav-skeleton";
import { getCategories } from "@/actions/get-categories";

const MainNav = dynamic(() => import("@/components/main-nav"), {
  loading: () => <NavSkeleton />,
});

const NavbarActions = dynamic(() => import("@/components/navbar-actions"), {
  loading: () => <NavSkeleton />,
});

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="bg-white border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2 text-xl ">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
