import errImg from "../../public/errorImg.png";
export const ErrorImg = (event: any) => {
  event.currentTarget.onerror = null || ""; // Prevents looping
  event.currentTarget.src = errImg;
};
