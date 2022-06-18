import Item from "./Item";
import { PRODUCTS, RESOURCES, CONTACTS } from "./Data";
const ItemsContainer = () => {
  return (
    <div className="sm:grid  sm:grid-cols-2  lg:grid-cols-3 md:gap-6 sm:px-8 px-5 gap-20 flex sm:w-fit flex-col  items-center sm:items-stretch">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={CONTACTS} title="CONTACTS" />
    </div>
  );
};

export default ItemsContainer;
