import { addNewProduct } from "@/Services/productSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../../styles/Product.module.css";

const AddProduct = () => {
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
  const {message , error , status} = useSelector((state) => state?.productSlice);
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("title", data?.title);
    formData.append("price", data?.price);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    dispatch(addNewProduct(formData));
    reset();
    setProductImage({image:""})
  };

  useEffect(() => {
    watch((value) => {   
      setProductImage({image:URL?.createObjectURL(value?.image[0])});
    });
  }, [watch]);

  useEffect(()=>{
    if(status === 'Success'){
        toast.success(message)
    }else if(error){
        toast.error(error)
    }
  },[message ,error,status , productImage])

  return (
    <>
      <div className={Styles.product_page_wr}>
        <h3>Add Product</h3>
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
                  {productImage !== '' ? (
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
                        src={require("../../../assets/images/avatar.png")}
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
                <button type="submit" style={{width:"126px"}}>add product</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
