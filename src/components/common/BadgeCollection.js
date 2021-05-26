import NextLink from "@/components/common/NextLink";
import Badge from "@/components/common/Badge";

function BadgeCollection({ userId = "userId", badges = [] }) {
  const BADGES = [
    "etc",
    "glass1",
    "paper1",
    "plastic1",
    "plastic2",
    "plastic3",
  ];

  return (
    <>
      {BADGES.map((BADGE, index) => {
        const isinpocket = badges.includes(BADGE);
        return (
          <NextLink key={userId + BADGE} href={`/_quiz/${BADGE}`}>
            <Badge
              name={BADGE}
              alt={BADGE}
              width={100}
              height={index === 1 || index === 3 ? 100 : 110}
              isinpocket={isinpocket.toString()}
            />
          </NextLink>
        );
      })}
    </>
  );
}

export default BadgeCollection;
