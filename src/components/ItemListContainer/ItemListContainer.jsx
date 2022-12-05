import getDataItems, { getDataItemsCategory } from "../../services/mockService";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [loadItems, setLoadItems] = useState([]);
  let categoryID = useParams().id;

  useEffect(() => {
    if (categoryID === undefined) {
        getDataItems().then((resp) => {
            setLoadItems(resp);
        });
    } else {
        getDataItemsCategory(categoryID).then((resp) => {
            setLoadItems(resp);
        }); 
    }
  }, [categoryID]);

  return (
    <div>
      <ItemList loadItems={loadItems} />
    </div>
  );
}

export default ItemListContainer;
