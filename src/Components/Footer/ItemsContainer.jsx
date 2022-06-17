import Item from "./Item";
import { PRODUCTS, RESOURCES, CONTACTS, SUPPORT } from "./Data";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 md:gap-6 sm:px-8 px-5 gap-20 ">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={CONTACTS} title="CONTACTS" />
    </div>
  );
};

export default ItemsContainer;
