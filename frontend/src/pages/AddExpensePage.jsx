import React from "react";

const AddExpense = () => {

    return (
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div id="form" className="block bg-slate-50 p-6 round-xl shadow-md shadow-slate-300 w-90">
                <form action="">
                    <h2 className="text-blue-700 text-3xl font-semibold my-4">Add Expense</h2>

                    <label for="amount" className="text-sm">Amount</label> <br />
                    <input type="Numeric" name="amount" id="amount" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/> <br />

                    <label for="category" className="text-sm">Category</label> <br />
                    <select name="category" id="category" className="bg-white rounded-md border border-slate-300" value="Select a category" required>
                        <option value="Housing">Housing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Education">Education</option>
                        <option value="Personal Care">Personal Care</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <br />
                    <label for="description" className="text-sm">Description</label> <br />
                    <textarea id="description" name="description" rows="4" cols="40" placeholder="Enter description" className="rounded-md border border-slate-300"></textarea> <br />


                    <input type="submit" name="" id="addexpense" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-2 outline-blue-600 outline-offset-2 text-sm" /> <br />

                </form>
            </div>
        </div>
    )
}

export default AddExpense