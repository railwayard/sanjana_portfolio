import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import Image from "next/image"; 
import TalkButton from "./ui/TalkButton";
import ResumeButton from "./ui/ResumeButton";
const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex flex-col items-center text-center gap-2">

          <div className="flex justify-center py-6">
            <Image
            src="/images/sanjana_3.png"
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary"
              />

        </div>

          
            <p className="text-2xl/normal sm:text-1xl/normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            
          <FlipWords
            words={["SANJANA", "SANJANA"]}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-[var(--primaryColor)] text-[var(--primaryColor)] mb-3"
          />
          <div className="inline-flex items-center">
         
          <FlipWords
            words={["Backend Developer 💻", "Designer 🎨"]}
            className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]"
          />
          </div>
          </div>

          <p className="text-xs italic  font-thin mt-4 lg:mt-6 dark:text-[var(--textColorLight)] text-[var(--textColorLight)] text-center max-w-xl">
          “Crafting clean code and seamless designs to bring ideas to life with precision and creativity.”
          </p>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">

          <TalkButton />
          <ResumeButton/>
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;