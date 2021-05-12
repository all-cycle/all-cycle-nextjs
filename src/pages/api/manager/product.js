import cheerio from "cheerio";
import connectDB from "../../../core/api/connectDB";
import Product from "../../../core/models/Product";

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
    name: {
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
      name,
    } = scrapOptions.CHILSUNG;

    const data = [];
    let count = 0;

    for (let i = 0; i < urls.length; i++) {
      const html = await fetch(commonUrl + urls[i]);
      const $ = cheerio.load(html.data);

      $(selector).each(function (i, elem) {
        const imgUrl = $(this).find(src.selector).attr(src.attr);
        const imgAlt = $(this).find(alt.selector).attr(alt.attr);
        const productName = $(this).find(name.selector).text();

        data.push({ imgUrl, imgAlt, productName });
      });
    }

    for (let j = 0; j < data.length; j++) {
      const { imgUrl, imgAlt, productName } = data[j];

      const product = await Product.findOne({ productName });

      if (!product && imgUrl) { // 주류의 경우 이미지가 나오지 않음
        await Product.create({
          imgUrl,
          imgAlt,
          productName,
        });

        count++;
      }
    }

    res.json({
      result: "ok",
      count,
      data,
    });
  } catch (err) {
    res.json({
      result: "fail",
      error: err.message,
    });
  }
};
