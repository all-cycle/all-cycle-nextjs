import { useSelector } from "react-redux";

export default function Product() {
  return (
    <div>
      Product
    </div>
  );
}

// 들어오는 순간
// context : params, req, res, query, preview, previewData,
// resolvedUrl, locale, locales, defaultLocale
// return props, notFound(bool)
// export async function getServerSideProps(context) {
//   const response = await
//   return {
//     props: {},
//   };
// }
