import { getAllProduct } from "@/Services/productSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./Loder";

const AllProduct = () => {
    const dispatch = useDispatch();   
    const router = useRouter();
    useEffect(() => {
        dispatch(getAllProduct());
      }, []);
      const { products , loading } = useSelector((state) => state?.productSlice);
      const singleProduct = (id) => {
        router.push(`/products/${id}`);
      };

  return (
    <>
      <div className="feature_product_list">
        {!loading ? (
          <>
            {products?.length > 0 ? (
              <>
                {products?.map((item, index) => {
                  return (
                    <div className="feature_card" key={index}>
                      <div
                        className="feat_card_image"
                        onClick={() => singleProduct(item?._id)}
                      >
                        <img src={item?.image} alt="item_image" />
                        <div className="shop_icon">
                          <i className="fa fa-shopping-bag"></i>
                        </div>
                      </div>
                      <div className="feat_card_content">
                        <h3>{item?.title}</h3>
                        <span className="product_category">
                          {item.description}
                        </span>
                        <span className="price">
                          <del>
                            <span className="product_price">$25.00</span>
                          </del>
                          <span className="orignal_price">${item?.price}</span>
                        </span>
                        <div className="star_rating">
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p className="empty">No Product Available</p>
              </>
            )}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};
export default AllProduct;
