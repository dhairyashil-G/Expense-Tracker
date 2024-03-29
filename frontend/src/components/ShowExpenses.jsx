import useAxios from "../utils/useAxios";
import { useEffect,useState } from "react";
import Table from "./Table";
import { useMemo } from "react";

function ShowExpensesView() {
  const [expenses, setExpenses] = useState([]);
  const api = useAxios();
  
  const getdata = async () => {
    try {
      const response = await api.get(`/expenses/show_expenses/`);
      //   console.log(JSON.parse(response.data.bar_fig));
        console.log(response.data);
      //   console.log(JSON.parse(response.data.pie_fig));
      //   console.log(JSON.parse(response.data.df));
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  useEffect(() => {
    getdata();
  }, []);


  const table_data = useMemo(
    () => [...expenses],
    [expenses]
  );

  const columns_table = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Description",
        accessor: "description",
      },
    ],
    []
  );

  return (
      <Table columns={columns_table} data={table_data}/>
    );
}

export default ShowExpensesView;
