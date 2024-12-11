import { useContext } from "react";
import instance from "../services";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsTable = () => {
  const { state, dispatch } = useContext(ProductsContext);
  console.log(state);

  const handleRemove = async (id) => {
    if (confirm("Are you sure delete")) {
      await instance.delete(`/products,${id}`);
      dispatch({ type: "DELETE_PRODUCTS", payload: id });
    }
  };

  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {state.products &&
            state.products.map((item) => {
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.price}</th>
                <th>{item.description}</th>
                <th>{item.thumbnail}</th>
                <th>{item.stock}</th>
                <th>
                  <Link
                    className="btn btn-warning"
                    to={`/products/update/${item.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </th>
              </tr>;
            })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
