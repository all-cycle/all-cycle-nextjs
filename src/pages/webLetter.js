import Link from "next/link";
import cheerio from "cheerio";

export default function WebLetter({ letters }) {
  return (
    <div>
      <h1>Letter</h1>
      <ul>
        {letters.map((letter) => {
          const {
            href,
            title,
            src,
          } = letter;

          return (
            <Link
              key={href}
              href={href}
            >
              <div>
                <img
                  src={src}
                  alt={title.slice(13)}
                />
                <div>
                  {title}
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://ecoseoul.or.kr/archives/category/%ec%9e%90%eb%a3%8c/webletter");
  const html = await res.text();
  const $ = cheerio.load(html);
  const $bodyList = $("ul.cat-list > li").children("a");

  const letters = [];

  $bodyList.each((i, elem) => {
    const { title } = elem.attribs;
    const { href } = elem.attribs;
    const src = $(elem).find("img").attr("src");

    letters.push({
      href,
      title,
      src,
    });
  });

  if (!letters.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { letters }, // will be passed to the page component as props
    revalidate: 60 * 60 * 1000 * 7,
  };
}
