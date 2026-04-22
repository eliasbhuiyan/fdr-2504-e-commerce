import axios from "axios";
import React, { useEffect, useState } from "react";
//  async await, then catch, try catch
//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await axios.get(
//           "https://jsonplaceholder.typicode.com/users",
//         );
//         console.log(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

const Api = () => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  const handelPost = async () => {

    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: postData.title,
        body: postData.body,
      },
    );

    console.log("Post APi res =>", data);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 w-40">
        <input
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="Title"
          className="border"
        />
        <input
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, body: e.target.value }))
          }
          type="text"
          placeholder="Body"
          className="border"
        />

        <button onClick={handelPost}>Submit</button>
      </div>
    </div>
  );
};

export default Api;
