// Preloader.tsx
import { motion } from 'framer-motion';

export function Preloader() {
  return (
    <motion.div
      // This div covers the whole screen with a dark background
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#151515] flex items-center justify-center z-[1000] opacity-100 transition-opacity duration-500 delay-[1500ms] overflow-hidden"
    >

      <svg
        id="ak-loader-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="147"
        viewBox="0 0 1024 1007"
        preserveAspectRatio="xMidYMid slice"
        className="overflow-visible"
      >
        {/* Group for "A" animation */}
        <motion.g
          id="a-group"
          initial={{
            opacity: 0,
            transform: 'translate(-150%, -150%) rotate(-45deg) scale(0.5)',
          }}
          animate={{
            opacity: 1,
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="origin-center animate-fly-in-a"
        >
          {/* Include the paths for the A group */}
          <path fill="#FDFDFD" d="m309 277 5 1 1 2 12 14 3 2a219 219 0 0 0 18 17l7 6 10 10 12 11 10 10 8 7 9 9a134 134 0 0 0 12 10l3 4c0 4-2 7-4 11l-1 3-2 3a1402 1402 0 0 0-7 12l-9 19-10 18-4 9-2 4-1 2a644902253 644902253 0 0 0-37 74h-2v2h2a19576 19576 0 0 1 143-1c12 0 23 2 34 7l6 1-2-2 2-1c-7-4-13-4-21-4l1-2a751 751 0 0 1 23-1c16 0 16 0 21 3l6 8a732 732 0 0 0 18 25c4 4 4 6 4 12v9a4846 4846 0 0 0 0 18v134H458l-1-46-1 11-7 35h-6c-2-2-1-4-1-6v-5a2830 2830 0 0 1 0-27v-43h-2a10811 10811 0 0 1-203 1h-9l-4-1-1-6-2-1-9-4-2-1-7-5a415 415 0 0 0 33 58l8 12 8 11v7l-12 2v2l-3 3h2v3l-23-1-4-1-18-3h-6l-1 4H53l4-8 1-2 2-2 1-2 7-11 14-20a2172 2172 0 0 1 25-39 864 864 0 0 0 40-68h2l1-2 5-10 7-13 14-24 8-16 7-12 16-29 8-14 5-10 7-13 7-13a1531 1531 0 0 1 34-67h2v-2l3-8 1-2 2-3 1-3a559 559 0 0 1 17-35l2-5 5-10 1-5 1-2 4-9 1-4 1-2Z" />
          <path fill="#ADACAC" d="m223 656 1 3h42l3-1a7519 7519 0 0 1 126 0l-4 2 52 1v81h-1v-80l-35 1h-27a11285 11285 0 0 1-143 0h-9l-4-1-1-6Z" />
          <path fill="#737373" d="M340 535a116143 116143 0 0 1 150 1c28 0 28 0 36 5v4c-7-1-13-2-19-5-8-3-16-2-24-2a2962 2962 0 0 1-17-1h-13a10305 10305 0 0 0-113 0v-2Z" />
          <path fill="#8A8989" d="m223 656 1 3 53 1v1l78 1v1a22455 22455 0 0 1-117 0h-10l-4-1-1-6Z" />
          <path fill="#454445" d="M364 662h2a3283 3283 0 0 1 30 0h46v2a165621193 165621193 0 0 1-16 2l-1-1h-10l-7-1a108 108 0 0 0-9 0h-49v-1l14-1Z" />
          <path fill="#828182" d="m188 738 6 1 1 4H52l1-2 134 1 1-4Z" />
          <path fill="#EDEDED" d="M405 658h7l5 2-11 1h-2a2943 2943 0 0 1-28 0h-44v-1h2a14920 14920 0 0 0 44-1h10l17-1Z" />
          <path fill="#E4E4E4" d="m452 700 2 3 2-2c0 9-1 17-3 25v3l-1 3v2l-3 4h-2l1-2v-3l1-14 1-4v-3l1-4 1-8Z" />
          <path fill="#393837" d="m470 542 4 1v9h2c2 4 2 7 2 11h-9l1-11v-10Z" />
          <path fill="#828282" d="m188 738 6 1 1 4h-60v-1h52l1-4Z" />
          <path fill="#373635" d="M510 537c7 0 10 1 16 4v4l-17-4 1-4Z" />
          <path fill="#4D4D4D" d="m205 742 17 1v-1h6l-2 1v2h9v1c-21 0-21 0-30-2v-2Z" />
          <path fill="#ADACAD" d="m452 700 2 3 2-2-2 21h-1v-11l-1 8h-2v-7l1-3 1-9Z" />
          <path fill="#29292A" d="m199 739 9 1h2c5 1 9 1 13 3v1l-24-2v-3Z" />
          <path fill="#393736" d="M578 466h5l2 3-2 2-4 8h-1v-13Z" />
          <path fill="#393738" d="M409 663h33c-4 2-5 2-9 2h-23l-1-2Z" />
          <path fill="#585857" d="m496 536 14 1-1 3-5-1h-3l-5-3Z" />
          <path fill="#D7D7D8" d="M452 694c2 3 3 5 2 9l-4 4a1013 1013 0 0 1 1-8l1-5Z" />
          <path fill="#333434" d="m199 739 9 1-3 3-6-1v-3Z" />
          <path fill="#B3B4B4" d="M188 738h4l3 4h-8l1-4Z" />
          <path fill="#A2A2A2" d="M202 643h6v2l2 4-7-4-1 2v-4Z" />
          <path fill="#626261" d="m522 540 4 1v4l-8-1 3-1 1-3Z" />
          <path fill="#8B8989" d="m223 656 1 3 7 2-1 2-6-1-1-6Z" />
          {/* ... other path elements for "A" can be included here ... */}
        </motion.g>

        {/* Group for "K" animation */}
        <motion.g
          id="k-group"
          initial={{
            opacity: 0,
            transform: 'translate(150%, 150%) rotate(35deg) scale(0.5)',
          }}
          animate={{
            opacity: 1,
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2,
          }}
          className="origin-center animate-fly-in-k"
        >
          {/* Include the paths for the K group */}

          <path fill="#FDFDFD" d="m768 269-1 6 1 4v5c0 6 1 9 4 14l-1-3c-2-8-1-14 2-21l2-3h14v10l5 1v3l-5-1v2h-3v16h2v-8c6-4 11-5 18-4-1 3-3 5-6 7-3 1-4 2-6 5h-3v2l-1 15-2 9c-2 13-2 13-5 18l-5 2 1 2v8l-1 5-4 1-1-2 1 5 3 1 1-2 2-5 1-8v-5l4-1h2v-6l2-9 2-10 1-2 1-13 3-6 3-1 2-2 3-1 5-3c3-3 6-4 10-5 4 0 7-2 11-3l-6 2-12 1 14-15 3-4h27c-2 5-2 7-5 11l-9 15a803 803 0 0 1-42 69l-1 2a901 901 0 0 0-30 47l-6 10-12 19c-7 14-17 28-26 41 3 6 7 9 12 13l6 6 15 16a9866 9866 0 0 1 11 11l8 8 14 14 10 10 28 29 2 2a2773 2773 0 0 0 45 47l5 5 9 9 3 3a237 237 0 0 1 19 20 156 156 0 0 1 14 15c16 15 16 15 16 26v5l-1 6-5 4-2 3h-6v-8l1-1c-6 0-10 1-15 4l-1 4c5 2 9 2 14 2-5 3-7 5-13 5h-7a3810784849 3810784849 0 0 0-24-1h-8c-5-1-11-1-16-4l-2-5 15-6-1-7c-5 2-8 3-12 7-4 3-6 4-12 4-3 0-5 2-8 4l-2 5-9-4 2 2 1 5a1375 1375 0 0 1-56 1c-11 1-11 1-16-2l-8-11-4-7-2-1-3-4-7-9a430 430 0 0 0-30-38l-5-7-1-1a575 575 0 0 0-17-21l-1-2a1828 1828 0 0 1-40-51l-2-2-12-15-2-2a2309 2309 0 0 0-47-59l-3-3-2-2-3-5c-3-6-3-6-9-9h-13a633 633 0 0 0-18 0h-87V359l-4-2-16-14-7-6a976 976 0 0 1-32-29c-16-13-16-13-22-20l-12-11-2-2-3-2-1-3h234l1 207 4-7a345 345 0 0 1 10-15l1-2a1323 1323 0 0 0 12-20l15-24 6-9 2-2 2-5h2l1-2 4-8 2-3 2-3 1-3 7-10h2v-2c1-4 4-8 6-11l1-3a1145 1145 0 0 1 28-44 887 887 0 0 1 12-21l2-2 2-4 4-7 13-1h3a721 721 0 0 1 45 0Z" />
          <path fill="#333434" d="m871 719 1 7-5 3-3 2-7 1 2 1v4a85 85 0 0 0 24 3h2l5 1h27c3 0 5-1 8-3h-3l-10-2 2-6c5-3 10-5 16-4l-2 10c3 0 5 0 8-2l3-5 2 1c-4 6-7 10-13 14v2h-11l2-2h-4a7467 7467 0 0 1-54 0l-56-1h-43v-1h69l-3-5v-2l2 1 7 2 1-2c2-4 3-5 7-7h5c5-1 8-3 12-7 3-3 5-3 9-3Z" />
          <path fill="#F3F3F3" d="M775 271h14v10l5 1v3l-5-1v2h-3v2l1 8v2c0 7 0 13-4 19l-5 2-2-1v-3l-2-8-3-12-1-2c-1-7 0-13 3-19l2-3Z" />
          <path fill="#5A5A59" d="m930 726-2 10c3 0 5 0 8-2l3-5 2 1c-4 6-7 10-13 14v2h-11l2-2h-4a8257 8257 0 0 1-21 0l-36-1-1-1 1-7h-8v-1h6l1-2 2 1v4a85 85 0 0 0 24 3h2l5 1h27c3 0 5-1 8-3h-3l-10-2 2-6c5-3 10-5 16-4Z" />
          <path fill="#656362" d="m804 293-1 6-4 1-4 3-2 11-2 14-1 2-2 8a102 102 0 0 0-1 7v2l-5 1v2c1 7-1 12-5 18l-4-1-1-5 2-1v3l4-3v-14l2-1c3-1 3-1 4-4l1-4 1-2 3-17 2-17 3-1 2-2 8-6Z" />
          <path fill="#747474" d="m828 735 2 1 7 2 2-2 2 1v3l2-2h4v3h8v2h-93v-1h69l-3-5v-2Z" />
          <path fill="#545453" d="m856 732 3 1v4c6 2 12 2 19 3l15 1-2 1v2l-33-1-1-1 1-7h-8v-1h6v-2Z" />
          <path fill="#6F6E6E" d="m930 726-2 10 4 1c-14 2-14 2-20-2l2-5c5-3 10-5 16-4Z" />
          <path fill="#B3B2B2" d="M912 731v2l3 3 12 1c-5 3-7 5-13 5h-11l-16-1v-1h3c9 0 14-1 20-7l2-2Z" />
          <path fill="#303030" d="m908 744 1 5-27 1 2-2h-4l-2-1h-4l-2-1 1-2a3199 3199 0 0 1 35 0Z" />
          <path fill="#3C3B3B" d="m774 305 12 1c0 7 0 7-3 10l-2 2-1 1-4-1v-3l-2-5v-5Z" />
          <path fill="#262627" d="m871 719 1 7a377 377 0 0 1-7 4l-8 1 6-8 1-2c3-2 4-2 7-2Z" />
          <path fill="#91918F" d="M869 740h11l13 1-2 1v2h-18l-1-2-3-2Z" />
          <path fill="#474645" d="M778 347h3c2 4 2 8 1 12l-5 9-4-1-1-5 2-1v3l4-3v-14Z" />
          <path fill="#4D4B4B" d="m804 293-1 6-4 2-4 2-1 9h-2v5h-2l1-15 3-1 2-2 8-6Z" />
          <path fill="#2D2D2E" d="m939 729 2 1c-5 10-5 10-10 12h-10v-2l3-1c9-3 9-3 15-10Z" />
          <path fill="#ECECEC" d="m917 736 10 1c-5 4-7 4-13 4h-6v-3c3-2 5-2 9-2Z" />
          <path fill="#8F8E8E" d="m930 726-2 10 4 1-5 1-2-2h2l-1-4-3-1 1-3-4-1 10-1Z" />
          <path fill="#272727" d="m906 745 3 1v3l-27 1c3-3 4-2 7-2l3-1h14v-2Z" />
          <path fill="#4F4E4E" d="M768 281h3v2c0 5 0 9 2 14l-1 4c-4-7-6-12-4-20Z" />
          <path fill="#1F1F1E" d="M901 743h21l-3 2 2 2-20-3v-1Z" />
          <path fill="#8C8D8C" d="M777 310c4 1 4 1 5 4l-2 5-4-1v-7l1-1Z" />
          <path fill="#494948" d="m786 288 1 2h4v2l2 1-5 1v8h-2v-14Z" />
          <path fill="#999898" d="m912 731 1 4c-2 3-4 4-7 5l-2-2 8-7Z" />
          <path fill="#434242" d="m804 293-1 6c-3 2-4 2-7 2v-3l4-3 2-1 2-1Z" />
          <path fill="#3F3F3F" d="M928 744v2h-11c4-4 6-3 11-2Z" />
          <path fill="#383736" d="M778 347h3v10h-2l-1-10Z" />
          <path fill="gray" d="m856 732 3 1v4l3 1-5 2 1-5h-8v-1h6v-2Z" />
          <path fill="#565351" d="M785 341c2 2 2 2 2 6l-6 1-2-2h2l3-3 1-2Z" />
          <path fill="#D9D9D7" d="m859 734 5 1 2 4-7-2v-3Z" />
          <path fill="#565657" d="M914 730h2v5l2 1h-6l2-6Z" />
          <path fill="#403F3F" d="M903 744h5l-2 1v2l-6 1-2-2 3-1 2 1v-2Z" />
          <path fill="#828182" d="m939 729 2 1c-2 5-2 5-5 6h-2l5-7Z" />
          <path fill="#595A58" d="m828 735 7 4-4 1-3-3v-2Z" />
          <path fill="#4F4E4E" d="M922 733h2v2l2 1-4 2-3-1 3-4Z" />
          {/* ... include other path elements for "K" as needed ... */}
        </motion.g>
      </svg>
    </motion.div>
  );
}
