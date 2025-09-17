import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./List.css";

const List = () => {
  const [foods, setFoods] = useState([]);

  // Call API lấy danh sách món ăn
  const fetchFoods = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/food/list");
      if (res.data.success) {
        setFoods(res.data.data); // data backend trả về
      } else {
        toast.error("❌ Failed to load foods");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠ Error fetching foods");
    }
  };

  // Hàm xóa món ăn
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/food/remove/${id}`
      );
      if (res.data.success) {
        toast.success("🗑 Food deleted");
        // Cập nhật lại danh sách sau khi xóa
        setFoods((prev) => prev.filter((f) => f._id !== id));
      } else {
        toast.error("❌ Failed to delete");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠ Error deleting food");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="list-page">
      <h2>Food List</h2>
      <table className="list-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.length > 0 ? (
            foods.map((food) => (
              <tr key={food._id}>
                <td>
                  <img
                    src={`http://localhost:4000/images/${food.image}`}
                    alt={food.name}
                    className="list-img"
                  />
                </td>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.category}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(food._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No foods found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Toast notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default List;
