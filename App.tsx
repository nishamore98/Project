import * as React from 'react';
import './style.css';

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json.users);
        console.log(json.users);
      });
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h4>Select an account</h4>
      </div>
      <div className="Emp-list">
        {data.length &&
          data.map((item, index) => {
            return (
              <div className="user-container" key={index}>
                <img width="30" src={item.profilepicture} />
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
