import { SVGProps } from "react";

export function IconAdd({
  width = "1em",
  height = "1em",
  fill = "1em",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill={fill}
        d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"
      ></path>
    </svg>
  );
}
