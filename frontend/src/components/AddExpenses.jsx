import { useState } from "react";
import useAxios from "../utils/useAxios";
import Heading from "./Heading";
import Alert from "../utils/Alerts";


const CreateExpenseForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
  });
  const [alerts,setalert]=useState({})
  const api = useAxios();

  const handleSubmit = async (event) => {
    console.log(formData)
    event.preventDefault();
    try {
        const options = { headers: { "content-type": "application/json"} };
        await api.post("/expenses/add_expense/", formData,options);
        setalert({message :"Expense added successfully",type : "success"})
        setFormData({ date: "", amount: "", category: "", description: "" });
    } catch (error) {
      setalert({message :"Please enter valid data !",type : "success"}) 
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
        <>
        <Heading heading={"Add Expense"} />
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
            Add Expense
            </button>
        </form>
        </>
    );
  };
  
  export default CreateExpenseForm;