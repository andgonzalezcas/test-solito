export type ImageFolder = {
   background: ImageBackground,
   icons: ImageIcons,
   image: ImageImage,
   m2studio: ImageM2studio,
};

export type ImageBackground = 
   | "WEB02";

export type ImageIcons = 
   | "border"
   | "facebook"
   | "instagram"
   | "twitter"
   | "youtube";

export type ImageImage = 
   | "profile_base_image";

export type ImageM2studio = 
   | "dark_logo"
   | "icon"
   | "light_logo";
