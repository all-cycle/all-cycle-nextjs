import axios from "axios";
import cheerio from "cheerio";
import connectDB from "@/utils/connectDB";

import Product from "@/models/Product";

// TODO constant로 관리
const scrapOptions = {
  CHILSUNG: {
    commonUrl: "https://mmall.lottechilsung.co.kr/mobile/display/getGoodsListAjax.lecs?displayNo=CF2A01A02&allYn=Y&displayNos=CF2A01A02A01&viewType=img&currentPage=",
    urls: [
      "1&listSortCode=11&detailViewYn=N",
      "2&listSortCode=11&detailViewYn=N",
      "3&listSortCode=11&detailViewYn=N",
      "4&listSortCode=11&detailViewYn=N",
      "5&listSortCode=11&detailViewYn=N",
    ],
    selector: "ul.lc_item_container > li > a",
    src: {
      selector: ".item img",
      attr: "data-src",
    },
    alt: {
      selector: ".item img",
      attr: "alt",
    },
    productName: {
      selector: ".item_info span.name",
    },
  },
};

// 여기로 api 요청을 쏘면 바로 크롤링해서 DB로 보낸다
export default async (req, res) => {
  await connectDB();

  try {
    // TODO req.body.회사이름 으로 받아서 일괄처리하자
    const {
      commonUrl,
      urls,
      selector,
      src,
      alt,
      productName,
    } = scrapOptions.CHILSUNG;

    const productList = [];
    let count = 0;

    for (let i = 0; i < urls.length; i++) {
      const html = await axios.get(commonUrl + urls[i]);
      const $ = cheerio.load(html.data);

      $(selector).each(function (i, elem) {
        const imgUrl = $(this).find(src.selector).attr(src.attr);
        const imgAlt = $(this).find(alt.selector).attr(alt.attr);
        const name = $(this).find(productName.selector).text();

        productList.push({ imgUrl, imgAlt, name });
      });
    }

    // update를 자꾸하면 오히려 안좋으니 한번에 잘 넣자
    for (let j = 0; j < productList.length; j++) {
      const { imgUrl, imgAlt, name } = productList[j];

      const type = name.match(/\([^)]*\)/);

      let recycleType;
      switch (type) {
        case "펫":
          recycleType = "plastic";
          break;
        case "캔":
          recycleType = "aluminum";
          break;
        case "병":
          recycleType = "glass";
          break;
        default:
          recycleType = "etc";
      }

      const product = await Product.findOne({ name });

      if (!product && imgUrl) { // 주류의 경우 이미지가 나오지 않음
        await Product.create({
          name,
          imgUrl,
          imgAlt,
          recycleType,
        });

        count++;
      }
    }

    res.json({
      result: true,
      data: count,
    });
  } catch (err) {
    res.json({
      result: false,
      error: err.message,
    });
  }
};
