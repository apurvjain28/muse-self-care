// the data will be fetched using shopify product-api
// render all the products and give option to show only recommended products by the owner
// give option to all the product in cart

const ProductPage = () => {
  const DUMMY_DATA = [
    {
      id: "p1",
      name: "The Misho Trifecta",
      price: 65,
      description: `Pamper yourself with a trio of my mama's favourite daily ritual: 
                    Aventurine Gua Sha - larger in size than our Jade Gua sha, which my Mom prefers.
                    1 Mystic Rain Oil elixir - hydrates, combats dullness and scars with the calming scent of rosemary and lavender! 
                    1 Lunar Ritual Under-eye Treatment - sweet almond oil, sacha inchi and sea buckthorn makes this an antioxidant rich powerhouse. 
                    Use the Oil Elixir for your Gua Sha treatment, then seal the deal will the Lunar Ritual afterwards to soothe puffiness and drain the toxins away.`,
    },
    {
      id: "p2",
      name: "Velvet Glow Facial Oil Elixir",
      price: 30,
      description: `Velvet Glow says it all. Looking for healthy, glowing, nourished & hydrated skin? This lightweight beauty oil uses a blend of all-natural and high-performance ingredients to leave your skin supple and radiant. Can be used on the face or any place that needs a little TLC.`,
    },
  ];

  return <div>Product IS NOT FOUND!</div>;
};

export default ProductPage;
