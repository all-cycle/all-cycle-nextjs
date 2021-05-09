import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";

import { scrapProducts } from "../store/actions";

export default function Manager() {
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  async function fetchData(e) {
    e.preventDefault();

    try {
      const res = await fetch("api/manager/product");

      if (res.result === "ok") {
        dispatch(scrapProducts());
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
          productList.map((item) => {
            const { name, url, alt } = item;

            return (
              <li key={name}>
                {item.name}
                <img src={url} alt={alt} />
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
