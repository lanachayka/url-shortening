import { BrandRecognition, DetailedRecords, FullyCustomizable } from "../Icons";

export const statisticsInfo = [
  {
    id: 1,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: "icon-brand-recognition",
  },
  {
    id: 2,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "icon-detailed-records",
  },
  {
    id: 3,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "icon-fully-customizable",
  },
];

export const getStatisticsIcon = (name: string) => {
  switch (name) {
    case "icon-brand-recognition":
      return <BrandRecognition />;
    case "icon-detailed-records":
      return <DetailedRecords />;
    case "icon-fully-customizable":
      return <FullyCustomizable />;
  }
};
