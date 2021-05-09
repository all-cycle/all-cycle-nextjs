import { useSelector } from "react-redux";
import Link from "next/link";

export default function Main() {
  const letters = useSelector((state) => state.letters);

  return (
    <div>
      <h1>animation</h1>
      <div>
        {letters.map((letter) => {
          const { href, src, title } = letter;
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
      </div>
    </div>
  );
}
