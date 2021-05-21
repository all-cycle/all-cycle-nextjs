import NextLink from "@/components/common/NextLink";
import Badge from "@/components/common/Badge";

function BadgeCollection({ userId = "userId", badges = [] }) {
  const BADGES = [
    "glass1",
    "paper1",
    "plastic1",
    "plastic2",
    "plastic3",
    "etc",
  ];

  return (
    <>
      {BADGES.map((BADGE) => {
        const isinpocket = badges.includes(BADGE);
        return (
          <NextLink key={userId + BADGE} href={`/_quiz/${BADGE}`}>
            <Badge
              name={BADGE}
              alt={BADGE}
              width={80}
              height={80}
              isinpocket={isinpocket.toString()}
            />
          </NextLink>
        );
      })}
    </>
  );
}

export default BadgeCollection;
