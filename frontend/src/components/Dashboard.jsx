import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import useAxios from "../utils/useAxios";
import Heading from "./Heading"

export default function Dashboard() {
  const api = useAxios();
  const [bar, setBar] = useState();
  const [line, setLine] = useState();
  const [pie, setPie] = useState();
  const [df, setDf] = useState([]);

  const getPlots = async () => {
    try {
      const response = await api.get(`/expenses/dashboard/`);
      //   console.log(JSON.parse(response.data.bar_fig));
        console.log(JSON.parse(response.data.line_fig));
      //   console.log(JSON.parse(response.data.pie_fig));
      //   console.log(JSON.parse(response.data.df));
      setBar(JSON.parse(response.data.bar_fig));
      setLine(JSON.parse(response.data.line_fig));
      setPie(JSON.parse(response.data.pie_fig));
      setDf(JSON.parse(response.data.df));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlots();
  }, []);

  return (
    <>
      <Heading heading="DashBoard"/>
      <div>
        <Plot
          data={bar?.data}
          layout={bar?.layout}
          useResizeHandler
          style={{ width: "100%" }}
        />
        <Plot
          data={line?.data}
          layout={line?.layout}
          useResizeHandler
          style={{ width: "100%" }}
        />
        <Plot
          data={pie?.data}
          layout={pie?.layout}
          useResizeHandler
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
