import { addNewProduct, getSingleAdminAddedProduct, updateAdminAddedProduct } from "@/Services/Admin/adminProductSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../styles/Product.module.css";

const AddProductForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [productImage, setProductImage] = useState("");
  const [updatedId, setUpdatedId] = useState();
  const { singleProduct, updateProduct, productStatus , message, error, } = useSelector(
    (state) => state?.adminProduct
  );

  console.log(321321321,productStatus)
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("title", data?.title);
    formData.append("price", data?.price);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    if (updatedId) {
      dispatch(updateAdminAddedProduct({ data: formData, id: updatedId }));
    } else {
      dispatch(addNewProduct(formData));
    }
    reset();
    setProductImage({ image: "" });0
  };

  useEffect(() => {
    watch((value) => {
      if (value?.image?.length > 0) {
        setProductImage({
          image: window?.URL?.createObjectURL(value?.image?.[0]),
        });
      }
    });
  }, [watch]);

  useEffect(() => {
    if (productStatus === "success") {
      toast.success(message);
      router.push("/admin/dashboard/productlist");
    } else if (error) {
      toast.error(error);
    } else if (updatedId !== undefined && productStatus === "success") {
      toast.success(updateProduct);
      setUpdatedId("");
      router.push("/admin/dashboard/productlist");
    }
  }, [error, productStatus , router?.query?.id]);

  useEffect(() => {
    if (router?.query?.id) {
      dispatch(getSingleAdminAddedProduct(router?.query?.id));
      setUpdatedId(router?.query?.id);
    }
  }, [dispatch]);

  useEffect(() => {
    if (updatedId) {
      setValue("title", singleProduct?.title);
      setValue("price", singleProduct?.price);
      setValue("description", singleProduct?.description);
      setProductImage({ image: singleProduct?.image });
    }
  }, [singleProduct]);

  return (
    <>
      <div className={Styles.product_page_wr}>
        <h3>{router?.query?.id ? "Update Product" : "Add Product"}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <table>
            <tr>
              <td>
                <div className="form_field">
                  <input
                    type="text"
                    placeholder="Title"
                    {...register("title", {
                      required: true,
                    })}
                  />
                  {errors?.title?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
              </td>
              <td rowSpan={3}>
                <div className={Styles.product_images}>
                  {productImage !== "" ? (
                    <>
                      <img
                        src={productImage?.image}
                        width="100"
                        height="50"
                        alt="product_img"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={require("../../assets/images/avatar.png")}
                        alt="product_img"
                      />
                    </>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form_field">
                  <input
                    type="text"
                    placeholder="Price"
                    {...register("price", {
                      required: true,
                    })}
                  />
                  {errors?.price?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form_field">
                  <input
                    type="text"
                    placeholder="Discription"
                    {...register("description", {
                      required: true,
                    })}
                  />
                  {errors?.description?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form_field">
                  <input
                    type="file"
                    placeholder="image"
                    {...register("image", {
                      required: true,
                    })}
                  />
                  {errors?.image?.type === "required" && (
                    <p className="fileerror">Required*</p>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" style={{ width: "126px" }}>
                  add product
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
