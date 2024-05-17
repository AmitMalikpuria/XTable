import React, { useEffect, useState } from "react";

function App() {

  const JSONData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]

  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    setSortData(JSONData);
  }, [])

  const handleSortonViews = () => {
    const filteronviews = JSONData.sort((a, b) => b.views - a.views);
    setSortData(filteronviews);
  }

  const handleSortonDate = () => {
    const filterondate = JSONData.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortData(filterondate);
  }

  return (
    <div >
      <h2>Date and Views Table</h2>
      <button onClick={() => handleSortonDate()}>Sort by Date</button>
      <button onClick={() => handleSortonViews()}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {
            sortData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
