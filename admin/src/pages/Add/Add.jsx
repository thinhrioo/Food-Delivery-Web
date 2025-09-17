import React, { useState } from "react";
import axios from "axios";     // thư viện để gửi request HTTP
import "./Add.css";
import { toast } from "react-toastify";

const AddItem = () => {
  // lưu đường dẫn tạm để hiển thị preview ảnh
  const [image, setImage] = useState(null);

  // lưu file gốc (dùng để gửi formData lên backend)
  const [file, setFile] = useState(null);

  // lưu dữ liệu form (tên, mô tả, giá, category)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // cập nhật state khi người dùng nhập vào input / textarea / select
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value, // update đúng field theo "name" của input
    }));
  };

  // xử lý khi người dùng chọn ảnh
  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);  // giữ lại file gốc để upload
    setImage(URL.createObjectURL(selected)); // tạo link preview ảnh
  };

  // xử lý submit form
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    if (file) {
      formData.append("image", file);
    }

    const res = await axios.post(
      "http://localhost:4000/api/food/add",
      formData
    );

    if (res.data.success) {
      toast.success("Item added successfully!");

      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
      setFile(null);
    } else {
      toast.error("Failed: " + res.data.message);
    }
  } catch (err) {
    console.error(err);
    toast.error("Error while adding item");
  }
};


  return (
    <div className="add-item">
      {/* Form thêm sản phẩm */}
      <form className="add-form" onSubmit={handleSubmit}>
        
        {/* Upload ảnh */}
        <div className="form-group">
          <label>Upload Image</label>
          <div className="upload-box">
            {/* Input file ẩn, chỉ trigger qua label */}
            <input type="file" id="file" hidden onChange={handleImageChange} />
            <label htmlFor="file" className="upload-label">
              {image ? (
                // hiển thị ảnh preview nếu có
                <img src={image} alt="preview" className="preview" />
              ) : (
                "Upload"
              )}
            </label>
          </div>
        </div>

        {/* Tên sản phẩm */}
        <div className="form-group">
          <label>Product name</label>
          <input
            name="name"
            value={data.name}
            onChange={onchangeHandler}
            type="text"
            placeholder="Type here"
          />
        </div>

        {/* Mô tả sản phẩm */}
        <div className="form-group">
          <label>Product description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={onchangeHandler}
            placeholder="Write content here"
          ></textarea>
        </div>

        {/* Danh mục + Giá sản phẩm */}
        <div className="form-inline">
          <div className="form-group">
            <label>Product category</label>
            <select
              name="category"
              value={data.category}
              onChange={onchangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product price</label>
            <input
              name="price"
              value={data.price}
              onChange={onchangeHandler}
              type="text"
              placeholder="$20"
            />
          </div>
        </div>

        {/* Nút submit */}
        <button type="submit" className="btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItem;
