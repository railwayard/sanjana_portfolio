import Link from "next/link";

const TalkButton = () => {
  return (
    <Link
      href="#contact"
      scroll={true}
      className="app__filled_btn min-w-[10rem]"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
