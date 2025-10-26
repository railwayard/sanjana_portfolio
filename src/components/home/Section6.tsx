"use client";

import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/form/contactform"; 

const HomeSection6 = ({ id = "contact" }: { id?: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
        <ConstrainedBox classNames="p-4 py-8">
      <SectionTitle>Get in Touch</SectionTitle> 
      <div className="mt-10"></div>
       <ContactForm />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};
export default HomeSection6;

