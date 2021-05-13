import { useState } from "react";

import StyledButton from "@/components/common/StyledButton";

export default function Manager() {
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState(null);

  // NOTE useSWR?
  async function fetchData(e) {
    e.preventDefault();

    try {
      let res = await fetch("/api/manager");
      res = await res.json();

      if (res.result) {
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
      <h3>관리자페이지</h3>
      <StyledButton onClick={fetchData}>
        제품 업데이트
      </StyledButton>
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
