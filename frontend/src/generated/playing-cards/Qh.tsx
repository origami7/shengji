import * as React from "react";

function SvgQh(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="QH_svg__card"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
      {...props}
    >
      <defs>
        <path id="QH_svg__i" d="M-58-112.5H58v225H-58z" />
      </defs>
      <symbol
        id="QH_svg__h"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 01350 0v570a175 175 0 01-350 0z"
          stroke="red"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="QH_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
          fill="red"
        />
      </symbol>
      <symbol id="QH_svg__b" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#FC4"
          d="M798.125 0L996.15 316.934c30.485-16.067 60.625-26.8 98.85-11.934-29.752-93.653-66.268-185.695 11.684-305zm-303.18 58.916c-67.133 89.21-137.18 256.445-209.177 473.756l15.62-9.037-18.011 10.963c89.61 62.08 188.593 99.795 291.498 113.722 29.424 82.442 45.915 177.7 53.135 263.442 16.143 5.11 33.435 11.684 51.535 19.52 42.503 18.399 67.673 23.562 85.709 23.794 4.534-101.69 14.778-219.606 49.416-315.82l-2.072.078c63.317-13.023 126.565-34.417 188.578-64.102l-19.453-18.437c-230.692 107.476-475.364 97.05-674.77-36.377l116.442-67.357c26.774-78.128 53.873-148.546 80.726-209.178C499.403 207.077 495 168.127 495 160zM1265 515c-52.303 7.942-64.694 51.592-55 115 61.95-13.835 19.39-83.158 55-115zM245.451 568.7c-24.811 25.294-42.278 53.291-50.633 79.777-1.664 5.277-2.982 10.586-3.879 15.51-4.755-3.913-11.305-10.163-20.195-24.133-7.07 7.07-17.678 24.747-10.607 31.818-7.071-7.071-24.748 3.536-31.819 10.607 18.902 12.029 23.67 19.774 26.979 24.881-7.91.936-16.217 2.689-24.447 5.285-27.12 8.555-55.826 26.662-81.592 52.428C26.313 787.818 9.46 813.093 0 837.503v38.626a46.063 46.063 0 017.742-.945c11.409-.41 23.007 3.46 31.945 12.398 17.877 17.876 15.483 46.389-.884 62.756C28.707 960.434 13.99 965.202 0 963.184v67.808c7.375-12.243 13.046-24.57 16.836-36.584 2.13-6.75 3.689-13.55 4.885-20.703 5.225 2.775 12.545 8.394 23.27 25.246 7.07-7.07 17.678-24.747 10.607-31.818 7.07 7.07 24.747-3.537 31.818-10.608-15.693-9.986-21.644-17.02-24.803-21.869 6.161-.882 12.195-2.324 18.19-4.215 27.12-8.555 55.825-26.663 81.592-52.43 25.766-25.766 43.874-54.473 52.43-81.593 2.564-8.132 4.305-16.337 4.972-24.494 4.77 2.979 12.655 7.325 25.193 27.027 7.071-7.07 17.679-24.747 10.608-31.818 7.07 7.07 24.747-3.537 31.818-10.608-14.14-8.998-20.37-15.6-23.975-20.322 5.065-.845 10.223-2.134 15.352-3.752 14.918-4.706 30.315-12.303 45.44-22.474-155.461 181.185-124.462 482.695-166.28 612.255 0 0 17.157 27.768 22.342 13.207 10.084-28.317 15.252-61.985 20.088-99.738 7.322-57.164 12.255-123.785 22.187-192.234 19.164-132.068 56.757-268.633 159.93-356.362l-3.768-29.156 10.914-8.69-30.337-13.59c-5.902 7.842-12.634 15.636-20.137 23.14-23.013 23.012-48.756 38.774-70.236 45.55-3.507 1.107-6.837 1.963-9.866 1.955 9.74-9.077 12.905-20.866 60.166-59.39-6.481-6.482-26.516-12.375-40.658 1.767 14.142-14.142 8.25-34.176 1.768-40.658-39.746 48.76-51.035 50.583-59.948 61.477.248-3.144 1.207-7.037 2.512-11.176 6.776-21.48 22.538-47.224 45.55-70.236.65-.65 1.304-1.294 1.958-1.932zm865.963 8.847c-10.264-.134-20.856 2.108-31.414 7.453 46.04-3.573 39.697 80.56 115 60-8.118-29.83-43.32-66.928-83.586-67.453zm-79.525 25.834c-25.484 49.987-30.129 144.165-42.44 250.289l-2.142-.035c-3.41-.91-6.889-1.658-10.432-2.237-70.246-11.471-139.224 47.998-154.066 132.83-14.01 80.071 25.216 154.118 88.91 171.569 24.059-46.957 40.627-97.763 52.615-149.191-11.965 51.385-28.472 102.116-52.438 148.935l-1.916 56.03 24.17-44.64c54.857-107.168 71.63-230.669 83.096-336.74 5.733-53.035 10.082-101.791 16.54-141.345 5.873-22.7 8.516-47.91 17.87-69.008zm-822.006 71.775c10.707.12 21.425 4.046 29.804 12.426 17.877 17.876 15.483 46.389-.884 62.756-16.367 16.367-44.88 18.761-62.756.885-17.877-17.877-15.482-46.39.885-62.756 8.183-8.184 19.402-12.874 30.81-13.283a45.328 45.328 0 012.14-.028zm-58.31 62.797c-7.189 8.682-16.26 22.289-55.075 53.928 6.482 6.482 26.516 12.374 40.658-1.768-14.142 14.142-8.25 34.177-1.767 40.658 31.755-38.957 45.346-47.952 53.968-55.08-.54 3.562-1.438 7.114-2.623 10.87-6.776 21.48-22.54 47.223-45.552 70.236-23.013 23.012-48.756 38.776-70.237 45.553-3.456 1.09-6.739 1.938-9.943 2.146 8.365-8.81 13.882-21.419 58.234-57.572-6.481-6.482-26.516-12.375-40.658 1.767 14.142-14.142 8.25-34.176 1.768-40.658C42.73 854.18 30.603 858.286 22.139 867.5c.589-3.431 1.523-7.189 2.78-11.176 6.777-21.48 22.54-47.224 45.552-70.236 23.012-23.013 48.757-38.777 70.238-45.553 3.782-1.193 7.357-2.095 10.863-2.582zM1300 788.518l-198.978 184.24-5 30L1300 813.888zM165 930a15 15 0 00-15 15 15 15 0 0015 15 15 15 0 0015-15 15 15 0 00-15-15zM38.428 1047.379a15 15 0 00-15 15 15 15 0 0015 15 15 15 0 0015-15 15 15 0 00-15-15z"
        />
      </symbol>
      <symbol id="QH_svg__c" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="red"
          d="M746.04 0l206.087 341.307c15.258-7.898 29.4-16.482 43.92-24.319L798.12 0zM875 35c-31.092 8.314-41.518 4.398-53.969 1.68l57.989 92.058C885.97 109.29 893.248 89.816 905 70c-2.137-16.474 2.286-21.782 5-30-17.314 2.037-27.148-.831-35-5zm165 245c-15.296 3.824-45.217 4.723-66.084.46l23.332 36.013c26.139-13.724 51.823-23.142 82.586-16.338-15.235-5.762-30.898-11.26-39.834-20.135zm130 20c0 14.476-11.343 28.06-19.58 38.242-28.503-21.355-68.6 20.925-47.736 47.356C1092.922 393.77 1079.404 405 1065 405c14.287 0 27.703 11.049 38.06 18.709-22.705 26.03 19.185 70.555 47.391 47.26C1157.923 481.079 1170 495.064 1170 510c0-16.166 14.145-31.216 21.488-41.594 28.974 29.699 76.233-20.126 48.354-46.713C1249.627 414.217 1261.95 405 1275 405c-12.819 0-24.937-8.894-34.832-16.559 27.385-26.864-19.695-76.438-48.846-47.144C1183.665 330.7 1170 315.889 1170 300zm-.045 36.957A3 3 0 011173 340v22.623c20.775 1.516 37.86 18.602 39.377 39.377H1240a3 3 0 110 6h-27.623c-1.516 20.775-18.602 37.86-39.377 39.377V475a3 3 0 11-6 0v-27.623c-20.775-1.516-37.86-18.602-39.377-39.377H1100a3 3 0 110-6h27.623c1.516-20.775 18.602-37.86 39.377-39.377V340a3 3 0 012.955-3.043zM477.85 421.502l-56.74 32.926c169.11 93.385 326.437 62.844 482.072 15.605a716.164 716.164 0 01-32.579-46.6l-.37-.808c-134.974 39.94-257.927 61.773-392.383-1.123zm-87.26 228.133l-12.514 8.07c9.905 58.467 14.521 126.905 10.342 186.232 31.251 8.712 56.596 31.016 73.1 61.362 15.58-4.131 31.753-7.557 49.326-9.16 6.297-.575 12.65-.892 19.076-.952 23.494-.217 47.93 3.001 73.793 9.545-6.755-67.02-19.692-143.35-38.711-207.421-59.554-8.73-118.09-24.43-174.412-47.676zm504.787 20.119l-70.145 17.49c-23.969 84.299-30.937 172.324-34.76 263.524 13.062-2.38 28.422-9.19 50.66-20.2l.009-.568c14.214-27.104 34.595-48.927 58.195-63.057zM208.7 705.02a13.75 15 45 00-10.557 4.66 13.75 15 45 00-.884 20.33 13.75 15 45 0020.33-.885 13.75 15 45 00.883-20.33 13.75 15 45 00-9.772-3.775zm1047.025 36.81c14.778 7.706 29.54 15.28 44.274 22.82v-.068zM8.701 905.02A13.75 15 45 000 908.104v23.964a13.75 15 45 0017.59-2.943 13.75 15 45 00.883-20.33A13.75 15 45 008.7 905.02zM540 955a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm110 35a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10z"
        />
      </symbol>
      <symbol id="QH_svg__d" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#44F"
          d="M526.44 166.7a12.5 20.069 0 00-12.5 20.068 12.5 20.069 0 0012.5 20.068 12.5 20.069 0 0012.5-20.068 12.5 20.069 0 00-12.5-20.069zm152.38 2.474a12.5 20.069 0 00-12.5 20.068 12.5 20.069 0 0012.5 20.069 12.5 20.069 0 0012.5-20.069 12.5 20.069 0 00-12.5-20.068zM478.64 423.937l-9.702 2.424 1.211 4.852 11.538 46.148 36.535-19.015L532.6 492.13l35.806-20.461 22.602 34.314L624 478.781l26.432 31.555 29.783-30.643 30.435 27.653 23.955-31.078 29.286 26.377 25.17-38.995 37.712 23.325 20.21-35.368 38.18 19.323 6.59-15.512-6.646-9.924-4.966 11.686-37.123-18.787-19.791 34.63-37.248-23.037-24.122 37.37-28.582-25.745-23.925 31.041-29.565-26.861-28.803 29.63-25.689-30.667-32.057 26.433-21.642-32.857-34.194 19.54-14.209-33.386-34.877 18.155-8.462-33.852zm-57.342 30.381l-114.504 66.258c199.458 133.266 444.188 143.72 674.129 36.01-27.706-26.002-53.38-54.402-77.53-86.273a2203.296 2203.296 0 01-16.28 4.832l56.917 44.07 6.723 19.914c12.792 37.9-28.306 41.217-37.9 12.793l-25.899-76.73c-1.278.374-2.557.737-3.836 1.109l25.496 81.254c11.976 38.165-29.182 40.6-38.164 11.976L845 488.43l31.38-10.176a1487.8 1487.8 0 01-35.862 9.803l18.716 85.552c8.549 39.076-32.665 37.856-39.076 8.55l-18.166-83.038 33.526-9.777c-11.64 2.97-23.296 5.785-34.973 8.357l13.623 86.195c6.244 39.51-34.825 35.877-39.508 6.245l-13.27-83.957 21.436-4.766a825.32 825.32 0 01-22.482 4.174l6.445 85.217c3.017 39.886-37.624 32.932-39.887 3.017l-6.244-82.553c-1.692.193-3.385.372-5.078.551l7.045 82.852c3.389 39.856-37.314 33.28-39.855 3.388l-7.088-83.341c-.716.027-1.431.051-2.147.076v84.09c0 40-40 30-40 0v-84.225c-1.407-.059-2.814-.113-4.222-.184l-7.965 82.473c-3.846 39.815-42.701 26.015-39.817-3.846l7.95-82.289c-1.82-.244-3.64-.49-5.461-.755l-7.747 79.513c-3.878 39.812-42.721 25.98-39.812-3.879l8.103-83.175c-.896-.213-1.794-.435-2.69-.653l-20.763 79.12c-10.153 38.69-46.304 18.864-38.69-10.153l15.69-59.787-22.754 55.875c-15.086 37.046-48.361 12.698-37.046-15.086l27.298-67.031-37.216 69.73c-18.834 35.289-49.415 7.633-35.29-18.834l37.82-70.863-53.898 64c-25.766 30.595-49.92-2.821-30.595-25.768l8.572-10.18 77.584-31.167.539-1.01.908.428.006-.002-.004.004.34.16a533.276 533.276 0 01-13.078-6.987zm572.537 178.678c-32.993 14.843-65.949 26.892-98.861 36.879l4.71 196.863c20.173-11.654 42.264-17.695 64.926-16.695.5-3.37.877-6.674 1.246-9.967 8.966-79.837 12.574-152.202 27.979-207.08zm-207.227 11.195a727.27 727.27 0 01-71.587 8.604c47.184 3.226 63.19 22.539 7.044 27.49 38.722 4.926 44.1 19.55-7.064 24.715 40 4.04 53.548 23.377-1.52 32.617 34.787 4.842 43.166 22.434-.626 27.383v7.219c32.001 6.45 40.402 19.467-.409 22.535l-.148 8.133c30.463 5.043 37.389 16.297-.387 21.33l-.082 4.496c25.35 5.123 30.484 14.818-.36 19.836l-.091 5.076c25.867 5.124 31.191 14.98-.363 20.004l-.088 4.908c26.38 5.123 31.875 15.132-.365 20.162l-.016.83c21.084 5.048 24.912 13.47-.334 18.364l-.027 1.552c21.493 5.06 25.43 13.601-.336 18.512l-.098 5.385c11.78 4.053 22.058 6.944 30.756 8.763 4.052-97.405 13.957-212.672 46.101-307.914zm-184.515 7.159c30.016 86.817 45.435 181.083 51.969 269.529a632.335 632.335 0 0125.484 10.402c5.168 2.237 10.08 4.28 14.93 6.395l-.829-16.973c-41.022-2.563-48.054-16.723-1.109-22.724l-.164-3.34c-42.022-2.431-49.29-16.895-1.117-22.877l-.043-.899c-44.051-2.149-51.82-17.251-1.133-23.181l-.143-2.909c-45.028-2.01-53.083-17.414-1.136-23.31l-.063-1.268c-47.391-1.836-56.193-19.838-1.285-26.314l-.076-1.549c-51.163-1.135-61-20.483-1.307-26.764l-.115-2.379c-49.981-1.36-59.473-20.289-1.3-26.638l-.077-1.56c-56.128-.12-67.562-22.9-1.43-29.29l-.021-.408c-63.898 1.848-77.878-24.127-1.453-29.775l-.04-.786c-56.397 2.383-77.67-12.672-39.226-20.726a626.67 626.67 0 01-40.316-2.656zm653.635 90.48a4682.582 4682.582 0 0018.615 9.65A8946.55 8946.55 0 001300 764.648v-.066zm18.615 9.65l-2.242-1.156-2.881 2.416c13.96 7.24 1.865 26.483-27.957 28.852-.667.053-1.327.102-1.543.203-2.887 19.364-21.042 42.85-34.719 48.205-18.527 7.253-62.318 13.87-86.9-6.992-4.823 45.976-9.729 97.031-17.41 149.504L1300 788.188V764.87c-8.496-4.53-17.066-8.958-25.658-13.39z"
        />
      </symbol>
      <symbol id="QH_svg__e" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path d="M676.066 0L1040 600l50-30L746.035 0zM504.141 244.025c-26.872 60.49-53.972 130.909-80.924 209.14l122.219-70.97C528.428 352.774 517.232 323.927 515 315c-2.284-9.136-6.654-39.14-10.86-70.975zM259.473 548.326l-24.028 13.426c100.211 74.155 212.68 118.88 329.557 135.559 19.019 64.07 31.958 140.402 38.457 207.357a399.826 399.826 0 0124.604 7.11c-6.48-76.913-20.46-161.5-44.397-237.53-114.767-13.351-225.324-55.079-324.193-125.922zm762.296 44.68c-70.664 34.824-143.218 59.193-215.763 72.4-27.715 90.504-36.598 196.847-41.055 289.666 3.352.074 6.834-.077 10.08-.373 4.958-.452 9.93-1.355 15.475-3.94 3.79-91.19 10.757-179.216 34.726-263.515 56.386-11.548 112.816-29.494 168.602-54.248-15.405 54.878-19.013 127.243-27.979 207.08-.37 3.293-.746 6.597-1.515 9.955 3.908.225 8.22.663 12.535 1.367 3.543.58 7.021 1.327 11.543 1.979 13.378-106.17 18.029-200.09 43.47-249.996z" />
      </symbol>
      <symbol id="QH_svg__f" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          fill="none"
          d="M545.838 382.41L0 698.42m210.004 268.613L-.001 1161.482m911.897-5.941c99.387-194.166 70.757-455.581 119.993-552.16M388.457 843.949c63.517 17.707 102.744 91.752 88.735 171.823-14.842 84.832-83.82 144.302-154.066 132.831a107.894 107.894 0 01-10.432-2.237m597.286 65.205l24.17-44.638c54.857-107.17 71.63-230.67 83.096-336.74 5.733-53.036 10.082-101.792 16.54-141.346 5.873-22.7 8.517-47.91 17.87-69.007m67.842 45.306c-9.948 28.197-15.078 61.66-19.88 99.154-7.323 57.164-12.256 123.785-22.188 192.234-19.164 132.068-56.757 268.633-159.93 356.361m-539.424-655.19c9.904 58.467 14.52 126.905 10.3 186.221m-230.424 478.307c46.142-142.96 3.628-495.272 220.78-664.285l10.914-8.687m866.079 92.57c14.798 7.716 29.597 15.311 44.352 22.861M750.694 123.09c68.418 306.466 221.932 452.112 390.965 555.148m-858.282-143.64c211.008 146.18 473.964 157.356 717.8 40.635m-741.705-26.906c98.869 70.843 209.426 112.57 324.301 126.003m222.085-8.41c72.693-13.72 145.247-38.089 215.912-72.913m-40.047-36.21C750.98 664.295 506.25 653.84 306.82 520.33m794.201 452.427l198.98-184.24M895.21 669.96l4.162 196.82m-74.41-179.372c56.656-11.711 113.085-29.658 168.474-53.74m-757.992-71.916c100.21 74.155 212.68 118.88 329.731 135.112m429.056-64.539c-15.802 55.55-19.411 127.914-28.377 207.751-.37 3.293-.746 6.597-1.13 9.91M714.803 652.833l-4.7 290.744m-29.436-289.575l13.985 283.928M814.67 639.255c-34.638 96.215-44.883 214.13-49.26 315.817M574.854 648.259c29.438 82.456 45.933 177.738 53.643 263.691m162.266 37.638c3.533-90.02 10.5-178.045 34.74-262.506m-39.017-42.905c-32.022 95.256-41.929 210.524-46.152 307.883m-86-31.084c-6.807-88.543-22.226-182.809-51.944-269.704m-37.562 46.486c19.193 63.624 32.13 139.955 38.753 206.927M676.066 0L1040 600l50-30L746.035 0m206.223 341.31c48.665-25.415 87.155-57.926 142.742-36.309-29.747-93.639-66.266-185.665 11.64-304.944M996.589 316.582L798.134 0m190.377 303.785l-43.723 25.505m34.4-40.9l-43.237 25.222m33.506-40.379l-43.084 25.133m33.45-40.346l-43.36 25.293m33.968-40.648l-30.222 17.63m20.502-32.793l-22.525 13.14M1040 145c-45 15-83.59-37.436-115-15-35 25 5.62 69.69 25 60 20-10 15-40-5-40s-10 15-10 15m105-20c-35.233 31.76-8.631 91.182-43.635 107.452-39.004 18.13-57.864-39.242-39.881-51.327 18.559-12.472 42.196 6.666 32.338 24.067-9.858 17.402-17.98 1.307-17.98 1.307m-43.479-19.964c26.765-8.233 51.765-24.324 77.637-36.535m-50 25c22.594-17.664 26.08-20.229 30-35m-30 35c17.823-3.506 40-2.73 50 5m-41.76 63.595C990.16 274.298 1020 270 1045 255c10.162 20.306 32.016 34.07 50 50m-121.084-24.539c20.867 4.262 50.788 3.363 66.084-.461 8.936 8.875 24.598 14.372 40 20M821.031 36.68C833.482 39.396 843.908 43.313 875 35c7.852 4.169 17.686 7.037 35 5-2.714 8.218-7.137 13.526-5 30-11.752 19.816-19.029 39.289-25.98 58.737m18.704 30.614c4.64-23.73 2.017-48.188 32.276-69.351 1.615-29.331 6.911-59.477 13.847-89.987M421.08 454.251c169.14 93.561 326.466 63.02 482.21 15.869m-33.057-47.494c-134.974 39.939-257.926 61.772-392.671-1.225m664.281 257s16.2-16.445 18.157-18.401c5-5 27.755 2.147 39.384-13.49 16.846-22.65 34.83-5.694 17.537 13.285-14.287 15.68-36.921 27.397-36.921 27.397 10.522 34.893 5.95 67.291-10 97.808m60-140c40-50 60.47-13.562 25 20-39.863 37.719-63.642 28.302-25-20v0m5.524 35.004c52.181-37.11 61.871 3.545 18.555 26.09-48.68 25.337-68.964 9.76-18.555-26.09v0m.217 35.44c54.243-29.752 58.195 11.838 14.231 28.35-49.408 18.556-66.632.391-14.23-28.35v0m-.45 37.09c55.074-12.595 48.824 25.654 5.969 29.058-48.162 3.827-59.172-16.89-5.968-29.057v0m4.862 29.316c-3.323 19.308-21.478 42.794-35.155 48.149-18.527 7.253-62.318 13.872-86.952-6.55M586.596 977.681c6.93 1.796 14.16 3.937 21.73 6.448m-128.499-5.374a190.208 190.208 0 0115.394-4.292m345.912-43.896c-31.007 15.351-48.642 22.539-66.102 24.131-18.435 1.682-44.48-1.337-95.486-23.418-56.213-24.335-104.646-36.509-149.625-36.093-6.426.059-12.78.376-19.076.95-17.573 1.604-33.746 5.03-48.87 9.57m34.632 53.096a197.367 197.367 0 00-17.996 4.6m136.682 7.25c-11.603-3.917-22.53-7.037-32.902-9.421m64.852 21.515a578.182 578.182 0 00-7.23-2.95m105.957 33.95c-21.424-2.645-46.39-9.442-77.457-22.036m151.944 13.634c-13.177 4.666-26.135 7.843-39.976 9.105-2.448.223-4.933.389-7.462.492m-248.56-74.62c-3.208.132-6.381.341-9.526.628-13.548 1.236-26.213 3.835-38.38 7.401m173.229 19.219c-36.139-14.773-66.928-23.19-94.677-26.167m184.856 56.333c-16.313-2.725-35.18-8.014-57.935-16.804m140.076 7.78c-14.687 5.73-28.384 9.467-42.982 10.799m-259.075-73.984c-2.17.128-4.328.29-6.476.486-14.277 1.302-27.588 3.999-40.267 7.652m352.209 37.407c-17.401 7.5-32.154 12.078-47.754 13.501-24.824 2.265-56.475-2.535-110.129-25.761-40.946-17.726-76.094-28.152-107.98-31.972m362.763 206.623a25.16 25.16 0 00-4.154-1.495c-48.715-13.58-83.015-73.743-70.822-143.432 12.917-73.833 71.299-121.304 125.412-112.467 2.73.446 5.4 1.021 8.015 1.72a25.09 25.09 0 005.543.921M955 1040c-19.33 0-35-17.909-35-40s15.67-40 35-40c6.61 0 12.79 2.094 18.064 5.733m-10.56 49.114c-2.207 1.46-4.77 2.296-7.504 2.296-8.284 0-15-7.675-15-17.143s6.716-17.143 15-17.143c5.255 0 9.879 3.089 12.558 7.764m-26.719-27.254L920 915l-32.702-5L890 950l-35 15 15 40-23.182 30L880 1055l-10 40h40l5 35m5-215l20-35 35 20-12.62 60.658M975 900l10.255-10.255M910 1095l29.34-59.522M880 1055l46.217-32.354M870 1005l50.11-2.788M890 950l36.293 26.487M905 935l27.706 34.19M950 910l2.87 49.49M880 980l41.198 10.371M875 1030l46.856-16.687M900 1070l32.523-39.453M915 1130l11.12-4.448M935 1090l11.825-50.925M217.59 729.125a13.75 15 45 01-20.33.884 13.75 15 45 01.884-20.33 13.75 15 45 0120.33-.883 13.75 15 45 01-.884 20.329v0m2.216 16.294c4.253 3.004 7.236 8.202 6.69 19.5m7.176-33.906c3.393 3.897 8.956 6.415 20.555 5.094m-73.3-29.195c-3.005-4.253-8.202-7.236-19.5-6.69m33.905-7.175c-3.897-3.394-6.415-8.957-5.094-20.555m9.969 67.534c-6.355 5.552-11.804 13.412-14.732 27.695m1.768-40.658c-5.552 6.354-13.412 11.803-27.695 14.731m68.943-30.052c5.552-6.355 13.412-11.803 27.695-14.731m-40.659 1.767c6.355-5.551 11.804-13.411 14.732-27.695M213.17 752.99c.455 28.009 7.071 7.071 31.82 45.962 7.071-7.071 17.678-24.749 10.607-31.82 7.07 7.071 24.748-3.536 31.82-10.607-38.891-24.748-17.953-31.365-45.962-31.82M174.279 714.1c-28.009-.455-7.07-7.071-45.962-31.82 7.072-7.07 24.75-17.677 31.82-10.606-7.07-7.071 3.536-24.75 10.607-31.82 24.749 38.89 31.365 17.953 31.82 45.962m4.124 60.693c-15.834 41.093-14.142 14.142-71.3 84.264-6.481-6.482-12.374-26.517 1.768-40.659-14.142 14.142-34.177 8.25-40.658 1.768 70.121-57.158 43.17-55.465 84.263-71.3m54.212-2.357c41.093-15.835 14.142-14.142 84.263-71.3-6.482-6.482-26.516-12.374-40.658 1.768 14.142-14.142 8.25-34.177 1.767-40.659-57.157 70.121-55.465 43.17-71.3 84.264M-.01 908.09a13.75 15 45 0118.484.706 13.75 15 45 01-.884 20.329 13.75 15 45 01-17.597 2.958m19.814 13.336c4.252 3.004 7.235 8.202 6.69 19.499m7.175-33.905c3.393 3.897 8.956 6.415 20.555 5.094m-54.02 3.92l-.216.189m28.5-28.474c5.552-6.355 13.412-11.803 27.695-14.731m-40.659 1.767c6.355-5.551 11.804-13.411 14.732-27.695M13.17 952.99c.455 28.009 7.071 7.071 31.82 45.962 7.071-7.071 17.678-24.749 10.607-31.82 7.07 7.071 24.748-3.536 31.82-10.607-38.891-24.748-17.953-31.365-45.962-31.82M0 870.626c1.687 2.516 2.422 6.494 2.564 15.19m4.124 60.693c-2.535 6.579-4.62 11.414-6.57 15.182m34.855-43.466c41.093-15.835 14.142-14.142 84.263-71.3-6.482-6.482-26.516-12.374-40.658 1.768 14.142-14.142 8.25-34.177 1.767-40.659-57.157 70.121-55.465 43.17-71.3 84.264m13.038-24.71c.644-3.519 1.579-7.276 2.836-11.262 6.776-21.481 22.54-47.225 45.552-70.238 23.013-23.012 48.757-38.776 70.238-45.552 3.782-1.193 7.357-2.096 10.718-2.735m38.029 38.112c-.639 3.341-1.537 6.893-2.722 10.648-6.776 21.481-22.54 47.225-45.552 70.238-23.012 23.012-48.756 38.776-70.237 45.552a95.543 95.543 0 01-9.845 2.564m1.711 29.762c5.963-.902 11.998-2.344 17.992-4.235 27.12-8.555 55.826-26.664 81.592-52.43 25.767-25.766 43.875-54.472 52.43-81.592 2.565-8.132 4.306-16.338 4.989-24.34m-64.333-64.648c-8.093.665-16.4 2.417-24.63 5.013-27.12 8.555-55.826 26.664-81.593 52.43C26.29 787.843 9.406 813.148-.05 837.583m263.437-101.32c5.118-.904 10.277-2.194 15.406-3.812 14.98-4.726 30.445-12.366 45.63-22.602m-78.972-141.15c-24.812 25.295-42.278 53.292-50.632 79.777-1.665 5.278-2.983 10.587-3.89 15.85M220 670c.646-3.635 1.604-7.526 2.91-11.665 6.775-21.481 22.539-47.225 45.551-70.238.65-.65 1.302-1.294 1.956-1.932m88.892 49.505c-5.901 7.841-12.634 15.635-20.137 23.138-23.012 23.012-48.756 38.776-70.237 45.552-3.507 1.106-6.836 1.963-9.982 2.591M.097 1030.84c7.33-12.193 12.964-24.466 16.738-36.43 2.13-6.75 3.69-13.551 4.55-20.244m31.504 92.288l27.17 20.9m-77.925-59.942l29.004 22.31m7.412 27.24l28.803 22.157M0 1047.308l24.267 18.666M0 1068.846l54.647 42.036m-54.648-20.498l41.942 32.263m-41.94-10.724l29.234 22.488M0 1133.461L15 1145m1.485-149.627l88.986 68.45m-95.5-51.922l82.793 63.687M74.433 932.256L169 1005m-85.754-44.426l73.048 56.19m-90.018-47.706l77.312 59.471m-87.499-45.768l74.794 57.534m-83.75-42.885l71.043 54.648M21.042 977.34l19.76 15.2m137.231-131.36l49.281 37.908m-90.954-69.965l17.625 13.557M75.32 782.17l56.358 43.353M0 724.23l50.741 39.031m115.901 110.693l55.734 42.872M62.86 794.123l79.707 61.314M0 745.769l38.786 29.835M154.183 885.91l63.579 48.907m-105.953-81.502l18.103 13.925m-43.357-33.351l8.381 6.447m-42.963-33.05l17.659 13.584M0 767.307L28.07 788.9m112.827 108.33l72.572 55.824M98.453 864.579l17.573 13.518M42.008 821.16l16.369 12.591M0 788.846l18.156 13.966m161.273 145.595l27.689 21.3m-80.46-61.893l31.414 24.164m-72.104-55.464l15.352 11.809m-67.79-52.146l12.78 9.831M0 810.385l9.174 7.056m156.31 141.777l28.927 22.252m-83.15-63.962l37.341 28.725M74.098 888.92l10.875 8.366M26.256 852.12l7.177 5.52m60.157 67.814l88.116 67.781M63.014 901.934l2.999 2.307m151.891-120.084l40.26 30.969M60.735 663.258l65.885 50.681m86.666 88.205l37.856 29.12m-67.056-51.582l3.896 2.997m-52.575-40.442l7.903 6.079m-98.55-75.808l63.772 49.055m97.653 96.656l38.403 29.54m-73.575-56.595l10.764 8.28m-63.62-48.94l13.37 10.286M28.782 681.756l63.48 48.83m105.443 102.65l40.698 31.305m-79.398-61.075l14.515 11.165m-71.352-54.886l16.814 12.934M12.808 691.006l64.278 49.445m111.442 107.263l44.065 33.896M147.7 816.308l16.668 12.821m-40.717-31.32l6.194 4.764m-41.818-32.168l17.914 13.78M.001 702.694l63.507 48.851m212.901 13.001l5.76 4.43M108.664 635.51l44.536 34.26m105.265 102.51l15.289 11.761M92.688 644.76l41.928 32.252M252.473 789.21l13.279 10.214M76.712 654.01l70.638 54.337m133.122-26.829l14.686 11.297m-65.748-50.576l11.405 8.773m-68.247-52.497l32.545 25.035m99.447 98.036l6.377 4.905m-41.66-32.046l8.603 6.618m-55.24-42.493l4.878 3.753m-70.926-54.559l41.47 31.9m89.391 90.301l13.43 10.33M140.615 617.013l51.856 39.889m74.339 78.722l24.47 18.822M124.64 626.263l36.201 27.847m125.784-32.475l50.618 38.937m-79.315-61.01l17.907 13.773m-55.34-42.568l13.47 10.361m71.844 76.803l18.752 14.425m-77.409-59.546l17.684 13.604m-60.316-46.398l18.95 14.578m69.325 74.864l17.513 13.472m-72.787-55.99l15.668 12.052m-64.646-49.727l25.185 19.373m56.07-21.484l79.34 61.03m-112.667-86.667l8.92 6.861m388.145-53.824v84.336c0 30 40 40 40 0v-84.25m-34.66.193c19.602 54.514 14.66 94.057 14.66 94.057m16.957-94.137c-16.957 35.908-16.957 94.137-16.957 94.137m22.13-94.356l7.103 83.532c2.542 29.893 43.245 36.468 39.856-3.389l-7.062-83.055m-34.39 2.684c23.937 52.435 22.371 92.03 22.371 92.03m8.608-94.381c-13.466 37.242-8.608 94.38-8.608 94.38m17.102-95.22l6.257 82.712c2.262 29.915 42.903 36.869 39.886-3.017l-6.456-85.341m-33.997 5.145c23.185 52.377 21.264 91.676 21.264 91.676m10.318-96.448c-14.814 37.01-10.318 96.448-10.318 96.448m13.79-96.106l13.27 83.958c4.683 29.632 45.753 33.265 39.509-6.244l-13.657-86.41m-34.183 7.916c28.34 51.203 29.646 91.493 29.646 91.493m3.174-99.188c-12.848 37.976-3.174 99.188-3.174 99.188m6.018-97.774l18.165 83.036c6.41 29.307 47.624 30.528 39.076-8.548l-18.752-85.716m-33.605 10.16c31.292 49.455 34.956 89.6 34.956 89.6m-2.552-99.533c-10.767 38.647 2.552 99.532 2.552 99.532M845 488.43l25.449 81.1c8.981 28.625 50.14 26.19 38.165-11.975L883.05 476.09m-33.28 10.843c35.549 46.49 42.754 86.151 42.754 86.151M880.738 476.7c-6.091 39.41 11.787 96.384 11.787 96.384m.597-99.845C927.347 517.472 935 555 935 555m-48.124-80.039l25.976 76.96c9.594 28.425 50.692 25.107 37.9-12.792l-6.722-19.914m-22.646-25.875C924.855 524.945 935 555 935 555m-345.516-44.218l-7.952 82.325c-2.884 29.861 35.969 43.66 39.815 3.846l7.986-82.673m-33.99-2.684c13.687 55.26 5.135 93.388 5.135 93.388m25.268-90.944c-19.791 34.245-25.268 90.944-25.268 90.944m-55.911-102.482l-8.105 83.195c-2.91 29.859 35.933 43.69 39.811 3.879l7.754-79.592m-33.778-6.15c13.77 55.468 5.149 93.756 5.149 93.756m23.903-88.352c-18.649 34.419-23.903 88.352-23.903 88.352m-51.95-106.883l-21.027 80.129c-7.614 29.017 28.537 48.843 38.69 10.153l20.774-79.162m-32.813-9.202c4.677 56.708-9.844 92.96-9.844 92.96m38.697-84.792c-24.534 30.82-38.697 84.792-38.697 84.792M468.591 477.48l-30.28 74.356c-11.314 27.785 21.96 52.132 37.046 15.086l30.692-75.367m-31.291-11.422c-3.129 55.4-21.695 88.508-21.695 88.508m48.805-78.507c-28.04 27.513-48.805 78.507-48.805 78.507m-19.938-107.926l-40.022 74.988c-14.125 26.466 16.455 54.122 35.29 18.834l40.96-76.75m-31.817-14.718c-8.252 57.939-31.497 90.873-31.497 90.873m61.81-76.877c-32.93 22.767-61.81 76.877-61.81 76.877m-51.037-61.05l-8.573 10.18c-19.325 22.946 4.829 56.362 30.596 25.766l57.014-67.698m-42.491 10.893c-17.716 34.414-36.263 51.57-36.263 51.57m77.989-62.947c-37.38 14.729-77.989 62.948-77.989 62.948m-69.458 8.726C357.765 315.36 427.811 148.125 494.89 58.84M322.975 510.916C381.615 336.465 438.967 195.8 494.45 104.282M384.897 475.866c38.258-111.114 75.948-207.313 112.906-284.292m-75.03 261.61c27.396-78.251 54.495-148.669 81.236-209.663M294.41 507.17l25.69 5.929m-20.582-20.904l40.531 9.354m-35.422-24.328L360 490m-50.266-27.754l70.215 16.204m-65.1-31.177L399.9 466.9m-79.634-34.531l99.584 22.98m-94.167-37.884L427.2 440.892m-96.1-38.33l101.475 23.417m-96.058-38.322l101.431 23.408M355 375l88.578 20.441M375 365l73.457 16.952M405 355l49.424 11.406M495 0v160c0 15 15 135 20 155s55 140 110 140 105-55 105-55m88.688-44.6c-18.702 34.5-48.638 66.046-74.206 97.595m14.55-53.807c-15.634 19.882-32.92 39.142-48.285 58.457m78.833-79.437c-18.436 26.76-41.859 52.043-62.189 77.38m-22.215-27.418c-9.076 10.758-18.12 21.428-26.523 32.124m10.984-27.102c43.909-10.772 110.28-61.055 137.788-85.222m5.278 9.225c-18.102 32.621-46.062 62.632-70.576 92.554m77.601-79.265c-16.896 26.262-39.218 50.994-59.58 75.597m66.201-63.268c-14.489 20.299-31.612 39.789-47.777 59.15m54.35-47.782c-11.228 14.64-23.503 28.915-35.42 43.093m41.803-32.151c-7.28 9.034-14.832 17.952-22.312 26.82M729.83 416.67c-11.94 14.34-24.202 28.453-35.376 42.606m-36.653-10.35a666.274 666.274 0 00-9.627 11.977m33.944-23.174c-6.462 7.691-12.814 15.354-18.833 23.032m-53.144-8.58c-1.593 1.96-3.17 3.92-4.726 5.88m17.553-3.193a605.677 605.677 0 00-3.623 4.546m19.54-5.682a608.54 608.54 0 00-5.26 6.596m-51.908-28.06c-5.382 6.38-10.726 12.735-15.904 19.088m24.389-11.343a996.648 996.648 0 00-11.618 14.091m21.032-7.381a785.313 785.313 0 00-7.715 9.474m-32.475-51.225c-9.958 12.364-20.427 24.51-30.531 36.603m37.588-26.894c-8.48 10.227-17.156 20.333-25.52 30.414M573.86 423.8c-6.976 8.29-13.982 16.52-20.74 24.74m-32.697-51.127c-8.275 10.612-17.048 21.042-25.781 31.391m51.28-45.391c-12.251 17.089-26.347 33.608-40.14 49.965m46.87-38.843c-11.217 14.597-23.464 28.834-35.349 42.975m434.533-96.443c.341.003.682.005 1.022.005m-133.76-11.22c20.893 12.03 50.768 29.65 82.543 42.24m-93.536-66.847c19.392 11.125 47.337 27.799 77.55 40.593m-87.182-64.415c17.874 10.23 43.358 25.484 71.283 38.005m-80.076-61.346c16.217 9.277 38.761 22.745 63.729 34.55m-71.779-57.466c14.452 8.277 33.813 19.78 55.389 30.465m-62.738-52.978c12.52 7.188 28.534 16.627 46.387 25.83m-53.057-47.95c10.195 5.869 22.532 13.074 36.188 20.377m-42.706-42.409c7.698 4.44 16.523 9.556 26.15 14.859m44.061 171.802c22.314 12.875 53.544 30.934 86.189 42.926m-72.234-16.609c23.509 13.53 55.244 31.31 87.845 42.304m-71.42-14.595c24.235 13.772 55.35 30.38 86.795 39.998m-68.754-11.465c24.445 13.544 54.298 28.516 84.03 36.62m-62.558-6.42c23.594 12.455 50.834 24.925 77.645 31.298m-51.848.64c21.16 10.225 44.229 19.437 66.764 23.968m-37.614 8.53c17.168 7.153 35.02 12.997 52.416 15.817m-22.306 14.482c12.582 4.83 25.423 8.823 38.088 11.325m202.427-143.577C1236.706 426.652 1255 405 1275 405c-20 0-38.294-21.652-48.232-25.404C1215.863 375.48 1200 380 1185 390c10-15 14.52-30.863 10.404-41.768C1191.652 338.294 1170 320 1170 300c0 20-21.652 38.294-25.404 48.232C1140.48 359.137 1145 375 1155 390c-15-10-30.863-14.52-41.768-10.404C1103.294 383.348 1085 405 1065 405c20 0 38.294 21.652 48.232 25.404C1124.137 434.52 1140 430 1155 420c-10 15-14.52 30.863-10.404 41.768C1148.348 471.706 1170 490 1170 510c0-20 21.652-38.294 25.404-48.232C1199.52 450.863 1195 435 1185 420c15 10 30.863 14.52 41.768 10.404v0m-124.474-45.294c-20.475-25.944 19.622-68.223 47.576-46.852m90.07 49.894c27.614-26.575-19.467-76.149-48.46-46.66m-88.184 82.198c-22.94 26.05 18.95 70.574 47.362 47.43m89.149-49.4c27.915 26.56-19.345 76.385-48.38 46.734M1155 390l-35-35m65 35l35-35m-65 65l-35 35m65-35l35 35m-59.622 31.42c3.809 80.774 35.137 104.712 35.054 161.946m-19.827-157.71c4.324 71.5 30.452 97.51 34.343 145.385M1195 645c-10.187-37.433-63.023-86.315-115-60 46.04-3.573 39.697 80.56 115 60v0m.433 3.14c-17.506-27.477-38.918-38.03-60.433-48.14m75 30c-9.694-63.408 2.697-107.058 55-115-35.61 31.842 6.95 101.165-55 115v0m0 0c4.92-31.947 12.783-59.341 25-80M622.943.046c18.255 56.905 55.479 84.504 107.51 89.228M640.659 0c16.19 35.09 41.58 55.964 74.705 64.889M663.881.359c9.369 15.133 20.915 26.902 34.463 35.577m-203.04 66.147C564.838 63.14 569.96 31.777 578.602 0M495.05 78.346c46.125-29.016 57.405-53.931 64.472-78.35M494.86 48.322C518.368 31.112 530.154 15.28 537.251 0M605 330s-5-20-15-20-20.05-3.94-20.05-18.94c0-10 23.76-81.566 15.05-141.06-27.24-19.336-56.037-29.644-90-10 1.71-.37 3.469.159 5.129-.376C530 130 558.259 130.437 585 150m35 0c35.938-42.84 75.413-22.42 115 0-37.611-16.488-75-35-109.474.184-1.149 1.173-4.275-1.36-5.526-.184v0m10 120c30.367-1.01 25 35 10 35-6.55 0-13.363-8.168-18.664-8.617C605 295 605 305 625 300m-50 50v10l5-5-5-5v0m95-5v10l-5-5 5-5m-90 10c11.947 6.27 14.485-4.753 20-5 5 0 10.657 4.697 15.657 4.697s12.828-6.161 17.828-6.161C651.3 359.487 652.82 350.434 665 350m-70 25c13.061 15.592 28.645 10.896 45 0-13.51 8.031-29.041 5.167-45 0v0m-95-190c3.605-9.012 14.375-17.166 25.371-17.095C544.877 168.03 560 190 575 190m-77.197 1.574c3.295 9.632 14.682 13.09 27.197 13.426 21.488 1.047 35-10 50-15m55 0c21.97-.786 30.609-17.601 45-20 30-5 50 20 65 20m-90-5c-5 15 16.983 24.908 30 25 19.153.135 45-20 60-20M283.377 534.597c211.008 146.18 473.964 157.356 717.8 40.635M180 945a15 15 0 01-15 15 15 15 0 01-15-15 15 15 0 0115-15 15 15 0 0115 15v0m0 0a15 15 0 01-15 15 15 15 0 01-15-15 15 15 0 0115-15 15 15 0 0115 15v0M53.428 1062.38a15 15 0 01-15 15 15 15 0 01-15-15 15 15 0 0115-15 15 15 0 0115 15v0m1042.593-59.622l203.98-188.87M540 1005c-36.79 22.232-13.096-13.806-10-30-16.194 3.096-52.232 26.79-30-10-1.381-2.286-2.538-4.339-3.488-6.177-14.342-27.748 18.3-6.727 33.488-3.823-3.096-16.194-26.79-52.232 10-30 36.79-22.232 13.096 13.806 10 30 15.566-2.976 49.463-24.98 32.331 5.983A121.933 121.933 0 01580 965c22.232 36.79-13.806 13.096-30 10 3.096 16.194 26.79 52.232-10 30v0m90 29.641c-42.977.859-4.439-18.504 6.34-30.98-15.573-5.416-58.63-2.916-20.981-23.661-.859-42.977 18.504-4.439 30.98 6.34 5.416-15.573 2.916-58.63 23.661-20.981 42.977-.859 4.439 18.504-6.34 30.98 15.573 5.416 58.63 2.916 20.981 23.661.859 42.977-18.504 4.439-30.98-6.34-5.416 15.573-2.916 58.63-23.661 20.981v0M1170 387.5c9.31 0 17.5 8.19 17.5 17.5s-8.19 17.5-17.5 17.5-17.5-8.19-17.5-17.5 8.19-17.5 17.5-17.5v0"
        />
      </symbol>
      <symbol id="QH_svg__g" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
          d="M1197.865 650c10.058 2.915 25.508-8.838 25.508-8.838M1217.16 665c12.84 5 12.84 20 12.84 20m-11.178 8.408c10.346 9.102 5.2 23.192 5.2 23.192M1220 730c9.376 10.098 2.837 23.597 2.837 23.597m-7.435 5.012c9.283 10.184 2.62 23.622 2.62 23.622M1240 645c5.043 2.357 8.78 5.46 10 10m-7.063 30.789c4.259 3.584 7.063 7.55 7.063 12.252m-7.114 23.876c3.69 4.167 5.886 8.5 5.2 13.151m-6.908 24.304c1.898 5.233 2.345 10.07 0 14.142M595 405c12.683-6.06 25.889-7.25 40 0M495 165c20-20 45-20 60-5m-35 70c20 5 40-15 40-15m90-50c30-15 60 0 75 15v0m-55 50c35 0 55-20 55-20m-183.473-37.665c1.533 3.506 2.412 7.594 2.412 11.958 0 13.026-7.835 23.586-17.5 23.586s-17.5-10.56-17.5-23.586c0-4.902 1.11-9.454 3.009-13.226m180.912.076c3.02 4.238 4.875 9.993 4.875 16.332 0 13.026-7.835 23.586-17.5 23.586s-17.5-10.56-17.5-23.586c0-5.637 1.468-10.813 3.916-14.87"
        />
        <use
          xlinkHref="#QH_svg__a"
          height={75}
          transform="scale(1 .793) rotate(30 -2224.465 2502.958)"
        />
        <use
          xlinkHref="#QH_svg__a"
          height={75}
          transform="scale(1 .793) rotate(15 -4444.61 4397.99)"
        />
        <use
          xlinkHref="#QH_svg__a"
          height={75}
          transform="scale(1 .793) rotate(3 -21436.436 19783.054)"
        />
        <use
          xlinkHref="#QH_svg__a"
          height={75}
          transform="matrix(.9962 .06911 -.08716 .78998 1020.366 784.213)"
        />
        <use
          xlinkHref="#QH_svg__a"
          height={75}
          transform="scale(1 .793) rotate(10 -4273.627 6351.423)"
        />
      </symbol>
      <rect
        width={211}
        height={328}
        x={-105.5}
        y={-164}
        rx={12}
        ry={12}
        fill="#fff"
        stroke="#000"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__b" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__b"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__c" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__c"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__d" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__d"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__e" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__e"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__f" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__f"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QH_svg__g" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QH_svg__g"
      />
      <use xlinkHref="#QH_svg__h" height={50} x={-104} y={-152.5} />
      <use xlinkHref="#QH_svg__a" height={41.827} x={-99.913} y={-97.5} />
      <use xlinkHref="#QH_svg__a" height={38.6} x={-62.434} y={-109.3} />
      <g transform="rotate(180)">
        <use xlinkHref="#QH_svg__h" height={50} x={-104} y={-152.5} />
        <use xlinkHref="#QH_svg__a" height={41.827} x={-99.913} y={-97.5} />
        <use xlinkHref="#QH_svg__a" height={38.6} x={-62.434} y={-109.3} />
      </g>
      <use xlinkHref="#QH_svg__i" stroke="#44F" fill="none" />
    </svg>
  );
}

export default SvgQh;
