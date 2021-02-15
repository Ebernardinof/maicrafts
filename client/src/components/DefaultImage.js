import React from "react";

const DefaultImage = ({
  avatar,
  altAvatar,
  width,
  height,
  maxWidth,
  maxHeight,
  className,
}) => {
  if (!avatar) {
    avatar =
      "https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613332371/cfr7def1r4cobrovfh92.jpg";
  }
  const style = {
    objectFit: "cover",
    width: `${width}`,
    height: `${height}`,
    maxWidth: `${maxWidth}`,
    maxHeight: `${maxHeight}`,
    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%),
    url(${avatar})`,
    backgroundSize: "cover",
  };
  return (
    <div
      className={`avatar-img ${className}`}
      alt={altAvatar}
      style={style}
    ></div>
  );
};

DefaultImage.defaultProps = {
  avatar:
    "https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613332371/cfr7def1r4cobrovfh92.jpg",
  width: "100%",
  height: "100%",
  maxWidth: "250px",
  maxHeight: "250px",
  className: "",
};
export default DefaultImage;
