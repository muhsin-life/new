import { Content } from "@/types/page";
import { Gap } from "./Gap";
import { ProductGrid } from "./ProductGrid";
import { PersonalizedSlider } from "./PersonalizedSlider";
import { Blog } from "./Blog";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { DynamicGrid } from "./DynamicGrid";
import { DynamicSliderGrid } from "./DynamicSliderGrid";

export const PageStructure = ({ content }: { content: Content }) => {
  const { is_section_visible } = content;

  const { hide_in_mobile_web = false, hide_in_desktop_web = false } =
    content.settings;

  const isHideInMobile = hide_in_mobile_web;
  const isHideInDesktop = hide_in_desktop_web;

  const getPageComponent = (
    supportedDeviceTypes: SupportedDeviceType[] | null
  ) => {
    switch (content.section_type) {
      case "dynamic_grid":
        return supportedDeviceTypes?.map((deviceType) => (
          <MaxWidthWrapper>
            <DynamicGrid
              key={`${content.order_id}-${deviceType}`}
              contentData={content}
              deviceType={deviceType}
            />
          </MaxWidthWrapper>
        ));
      case "dynamic_slider_grid":
        return supportedDeviceTypes?.map((deviceType) => (
          <MaxWidthWrapper>
            <DynamicSliderGrid
              key={`${content.order_id}-${deviceType}`}
              contentData={content}
              deviceType={deviceType}
            />
          </MaxWidthWrapper>
        ));
      case "gap":
        return <Gap contentData={content} />;
      case "product_grid":
        return (
          <ProductGrid
            key={`${content.order_id}`}
            contentData={content}
            supportedDeviceTypes={supportedDeviceTypes}
          />
        );

      case "personalized_slider":
        return <PersonalizedSlider contentData={content} />;
      case "blog":
        return <Blog contentData={content} />;
      default:
        return <div></div>;
    }
  };

  const getSupportedDevicetypes = (): SupportedDeviceType[] | null => {
    if (isHideInDesktop === true && isHideInMobile === true) {
      return null;
    } else if (isHideInDesktop === true && isHideInMobile === false) {
      return ["mobile"];
    } else if (isHideInDesktop === false && isHideInMobile === true) {
      return ["desktop"];
    } else {
      return ["mobile", "desktop"];
    }
  };

  return getSupportedDevicetypes() !== null ? (
    getPageComponent(getSupportedDevicetypes())
  ) : (
    <></>
  );
};
