import { IIconProps } from './IIconProps';

export const UserIcon = ({ className }: IIconProps) => (
  <div className={className}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33333 9.33335C8.33333 13.56 11.7733 17 16 17C20.2267 17 23.6667 13.56 23.6667 9.33335C23.6667 5.10669 20.2267 1.66669 16 1.66669C11.7733 1.66669 8.33333 5.10669 8.33333 9.33335ZM10.3333 9.33335C10.3333 6.21335 12.88 3.66669 16 3.66669C19.12 3.66669 21.6667 6.21335 21.6667 9.33335C21.6667 12.4534 19.12 15 16 15C12.88 15 10.3333 12.4534 10.3333 9.33335ZM26.4535 29.3334C26.4535 29.88 26.9069 30.3334 27.4535 30.3334C28.0002 30.3334 28.4535 29.88 28.4535 29.3334C28.4535 23.64 22.8669 19 16.0002 19C9.13354 19 3.54688 23.64 3.54688 29.3334C3.54688 29.88 4.00021 30.3334 4.54688 30.3334C5.09354 30.3334 5.54688 29.88 5.54688 29.3334C5.54688 24.7334 10.2402 21 16.0002 21C21.7602 21 26.4535 24.7334 26.4535 29.3334Z"
        fill="#333333"
      />
    </svg>
  </div>
);