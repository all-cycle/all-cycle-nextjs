import fs from "fs";
import cheerio from "cheerio";
import imgDownload from "image-downloader";

async function generateLetters() {
  const urls = [
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/2",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/3",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/4",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/5",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/6",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/7",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/8",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/9",
    "http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter/page/10",
  ];

  const letterScraps = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];

    const response = await fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);
    const $bodyList = $("ul.cat-list > li").children("a");

    const asyncFuncs = $bodyList.map(async (i, elem) => {
      const { title, href } = elem.attribs;
      const src = $(elem).find("img").attr("src");
      const url = encodeURI(src);

      let realTitle = title.slice(7, 11);
      realTitle = realTitle.replace(/[^0-9]/gi, "");

      await imgDownload.image({
        url,
        dest: `${process.cwd()}/public/_assets/${realTitle}.jpg`,
      });

      const data = `---\nhref: '${href}'\ntitle: '${title}'\nimg: '/_assets/${realTitle}.jpg'\n---`;

      fs.writeFile(`${process.cwd()}/public/_letter/${realTitle}.md`, data, (err) => {
        if (err) {
          throw new Error(`${realTitle}의 파일쓰기가 실패했습니다.`);
        }
      });

      return {
        href,
        title,
        img: `/_assets/${title.slice(7, 10)}.jpg`,
      };
    });

    letterScraps.push(...asyncFuncs);
  }

  await Promise.all(letterScraps);
}

export default generateLetters;
