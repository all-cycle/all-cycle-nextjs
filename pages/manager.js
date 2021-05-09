import { useState } from "react";
// import Image from "next/image";

export default function Manager() {
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState(null);

  async function fetchData(e) {
    e.preventDefault();

    try {
      let res = await fetch("api/manager/product");
      res = await res.json();

      console.log(res.data);

      if (res.result === "ok") {
        setProductList((prev) => prev.concat(res.data));
        return;
      }

      setMessage(res.error);
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <div>
      관리자페이지
      <button
        type="button"
        onClick={fetchData}
      >
        제품 업데이트
      </button>
      <ul>
        {productList.length > 0 && (
          productList.map((item, index) => {
            const { productName, imgUrl, imgAlt } = item;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={imgUrl + index}>
                {productName}
                <div>
                  <img
                    src={imgUrl}
                    alt={imgAlt}
                  />
                </div>
              </li>
            );
          })
        )}
      </ul>
      <p>
        {message && message}
      </p>
    </div>
  );
}
