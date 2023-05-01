import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../utils/useAxios";
import Heading from "./Heading";
import Alert from "../utils/Alerts";


function UpdateExpense() {
    const [formData, setFormData] = useState({
        date: "",
        amount: "",
        category: "",
        description: "",
    });

  const [alerts, setAlerts] = useState({});
  const params = useParams();
  const id = params.id;
  const [errors, setErrors] = useState({});
  const api = useAxios();

  const readExpense = async () => {
    try {
      const options = { headers: { "content-type": "application/json" } };
      const response = await api.get(`/expenses/read_expense/${id}/`, options);
      setFormData(response.data);
    } catch (error) {
      setAlerts({
        message: "Well could not be read. Please try again!",
        type: "error",
      });
    }
  };

  useEffect(() => {
    readExpense();
  }, []);

  const navigate=useNavigate();
  const updateExpense = async (formData) => {
    try {
      const options = { headers: { "content-type": "multipart/form-data" } };
      await api.put(`/expenses/update_expense/${id}/`, formData, options);
      setAlerts({ message: "Well updated succesfully!", type: "success" });
      setErrors({});
      navigate('/expenses/show_expenses');
    } catch (error) {
      setAlerts({
        message: "Something went wrong! Please try again.",
        type: "error",
      });
      setErrors(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateExpense(formData);
  };



  return(<>
    <Heading heading={"Edit Expense"} />
    {alerts.message && <Alert message={alerts.message} type={alerts.type} />}
    <form
    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-16"
    onSubmit={handleSubmit}
    >
    <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
        Date
    </label>
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        />
    <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="amount">
        Amount
    </label>
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="amount"
        type="number"
        name="amount"
        min="0"
        step="1"
        value={formData.amount}
        onChange={handleChange}
        required
        />
    <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="category">
        Category
    </label>
    <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        >
        <option value="" disabled hidden>
        Choose a category
        </option>
        <option value="housing">Housing</option>
        <option value="transportation">Transportation</option>
        <option value="Groceries">Groceries</option>
        <option value="Health Care">Health Care</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Miscellaneous">Miscellaneous</option>
    </select>
    <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="description">
        Description
    </label>
    <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        name="description"
        rows="3"
        value={formData.description}
        onChange={handleChange}
    ></textarea>
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        >
        Update Expense
        </button>
    </form>
    </>);
}

export default UpdateExpense

