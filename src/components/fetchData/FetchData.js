import { useState, useEffect } from "react";
import styles from './fetchData.module.css'
function FetchData() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <div className={styles.container}>
        <div className={styles.filterBtn}>
            <button onClick={() => setResourceType("posts")}>post</button>
            <button onClick={() => setResourceType("users")}>user</button>
            <button onClick={() => setResourceType("comments")}>comments</button>
        </div>
        <div className={styles.output}>{resourceType}</div>
        {items.map((i) => {
            return <pre>{JSON.stringify(i, null, 2)}</pre>;
        })}
    </div>
  );
}

export default FetchData;
