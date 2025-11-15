import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      href="SANJANA M S.pdf" 
      target="_blank"    
      className="app__outlined_btn min-w-[10rem]"
    >
      View Resume
    </Link>
  );
};

export default ResumeButton;