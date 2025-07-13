import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          {/* Gallery + Product Info Side by Side */}
          <div className="flex flex-col lg:flex-row gap-8">
            <Gallery images={product.images} />
            <div className="w-full lg:w-1/2">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-10" />

          {/* Related Products */}
          <ProductList
            title="Related Items"
            products={suggestedProducts || []}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
