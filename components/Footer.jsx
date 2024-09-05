const Footer = () => {
  return (
    <footer class="border-t relative rounded-t-3xl z-10 border-white/5 bg-background overflow-hidden">
      <div
        aria-hidden="true"
        class="-top-1 left-1/2 h-[200px] w-full max-w-[400px] user-select-none center pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div class="px-8 mx-auto max-w-[1400px] w-full py-20">
        <div class="max-md:flex-col gap-4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M19.8308 7.18664L19.8974 7.13597L19.9201 7.05535C20.0601 6.55836 19.893 6.114 19.5267 5.89081C19.168 5.67229 18.6838 5.70539 18.2599 6.00739L8.24975 13.1386L8.24974 13.1386C7.79238 13.4644 7.58302 13.9648 7.63196 14.4064C7.65653 14.6281 7.74774 14.8409 7.91379 14.9996C8.08212 15.1605 8.31097 15.25 8.5786 15.25H11.2145H11.4645V15.2304L17.131 15.249C17.1135 15.2858 17.0911 15.3193 17.0644 15.3507C16.9836 15.4457 16.8528 15.5326 16.6643 15.6079C16.2834 15.76 15.7463 15.8347 15.1565 15.8858C14.9555 15.9032 14.7472 15.9179 14.5399 15.9325C14.1583 15.9594 13.7803 15.986 13.458 16.0289C13.2064 16.0624 12.9697 16.1078 12.7744 16.1774C12.5858 16.2445 12.3926 16.3491 12.285 16.5303C12.1452 16.7658 11.9384 17.2937 11.7132 17.9217C11.4842 18.5603 11.2265 19.331 10.985 20.0736C10.7434 20.8166 10.5175 21.533 10.3521 22.0635C10.2693 22.3288 10.2017 22.5477 10.1547 22.7004L10.1004 22.8771L10.0862 22.9235L10.0826 22.9355L10.0817 22.9385L10.0814 22.9393L10.0814 22.9395L10.3205 23.0124L10.0813 22.9395L10.0798 22.9447C9.93999 23.4417 10.1071 23.886 10.4734 24.1092C10.832 24.3277 11.3162 24.2946 11.7401 23.9926L11.7606 23.978L11.7777 23.9596C14.4892 21.0555 15.8854 19.562 17.1444 18.6537C18.385 17.7586 19.493 17.4318 21.6646 16.9007L21.7112 16.8893L21.7503 16.8615C22.2077 16.5356 22.417 16.0352 22.3681 15.5936C22.3435 15.3719 22.2523 15.1591 22.0862 15.0004C21.9179 14.8395 21.689 14.75 21.4214 14.75H17.4879C16.5708 14.2464 15.9474 13.7759 15.5914 13.3053C15.2401 12.8407 15.1478 12.3756 15.3029 11.8451C15.4642 11.2933 15.8988 10.6527 16.6569 9.87814C17.4113 9.10736 18.4647 8.22487 19.8308 7.18664ZM29.75 15C29.75 23.1462 23.1462 29.75 15 29.75C6.85377 29.75 0.25 23.1462 0.25 15C0.25 6.85377 6.85377 0.25 15 0.25C23.1462 0.25 29.75 6.85377 29.75 15Z"
              fill="url(#paint0_linear_294_930)"
              stroke="url(#paint1_linear_294_930)"
              stroke-width="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_294_930"
                x1="15"
                y1="-1.39691e-09"
                x2="14.5"
                y2="30.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.29" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_294_930"
                x1="15"
                y1="0"
                x2="15.5"
                y2="27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#999999" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1">
              <p class="text-foreground font-medium text-sm">
                Elevating the design with dark buttons.
              </p>
              <span class="text-foreground text-nowrap font-medium text-sm">
                Made by{" "}
                <a
                  href="https://github.com/JhojanGgarcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary/90 duration-200"
                >
                  Rous.
                </a>
              </span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="text-sm flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
