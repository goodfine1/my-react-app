import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Получаем текущую дату с помощью Day.js
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

  // Получаем данные из API с помощью Axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка при получении данных:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Отображаем текущую дату */}
        <h1>Текущая дата и время:</h1>
        <p>{currentDate}</p>

        {/* Отображаем данные из API */}
        <h1>Данные из API:</h1>
        {loading ? (
          <p>Загрузка...</p>
        ) : data ? (
          <div style={{ textAlign: 'left' }}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Не удалось загрузить данные</p>
        )}
      </header>
    </div>
  );
}

export default App;