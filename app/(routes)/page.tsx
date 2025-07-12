import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import dynamic from "next/dynamic";

const Billboard = dynamic(() => import("@/components/billboard"), {
  loading: () => <p>Loading...</p>, // Optional fallback
  ssr: true, // Keep true if you want to server-render it; false for client-only
});

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard data={billboard} />}
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
