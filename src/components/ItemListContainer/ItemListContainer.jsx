import getDataItems, { getDataItemsCategory } from "../../services/mockService";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [loadItems, setLoadItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let categoryID = useParams().id;

  useEffect(() => {
    if (categoryID === undefined) {
      getDataItems().then((resp) => {
        setLoadItems(resp);
        setIsLoading(false);
      });
    } else {
      getDataItemsCategory(categoryID).then((resp) => {
        setLoadItems(resp);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ItemList loadItems={loadItems} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
