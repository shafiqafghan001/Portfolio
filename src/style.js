const styles = {
  boxWidth: "xl:max-w-[1280] w-full",
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading1: "bg-red-200",
  paragraph:
    "font-poppins font-normal text-diwhite text-[12px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start flex-start",
  custombg: "bg-green-700",
  paddingX: "sm:px-16 px-6",
  paddingY: " py-8 md:py-16", //sm:py-16 py-6
  padding: " text-sm md:text-base leading-relaxed ", //sm:px-16 px-6  sm:py-12  py-4

  marginX: "sm:mx-16 mx-6",
  marginY: "sn:my-16 my-6",
};

export const layout = {
  section: ` flex md:flex-row flex-col  ${styles.paddingY} `,
  sectionRevers: `flex md:flex-row flex-col-revers ${styles.paddingY}`,
  sectionImgRevers: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0  md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
