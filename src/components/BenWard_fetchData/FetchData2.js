//fetch data from API
//display JSON
//display name and thumbnail
//add a button to fetch next user from ?page=1
//append next user to the list

import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData2() {
  const [output, setOutput] = useState();
  const [userInfos, setUserInfos] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const url = "https://randomuser.me/api/";
  //  ?page=1
  //`${url}'?page='${pageNumber}`

  function getRandomData(nextPageNumber) {
    return axios
      .get(`https://randomuser.me/api/?page=${nextPageNumber}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }

  function getfullUserName(item) {
    const {
      name: { first, last }
    } = item;
    return `${first} ${last}`;
  }

  const getNextUser = () => {
    getRandomData(nextPageNumber).then((randomData) => {
      setOutput(JSON.stringify(randomData, null, 2) || "No user data");
      if (randomData === undefined) return;
      const newUserInfos = [...userInfos, ...randomData.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(randomData.info.page + 1);
    });
  };

  useEffect(() => {
    getNextUser();
  }, []);

  return (
    <div>
      <button onClick={getNextUser}>Fetch more</button>
      {userInfos.map((item, index) => (
        <>
          <p>{getfullUserName(item)}</p>
          <img src={item.picture.medium} alt="img" />
        </>
      ))}
      {/* <pre>{output}</pre> */}
    </div>
  );
}
