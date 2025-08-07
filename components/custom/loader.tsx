// import React from "react";

// interface SpinningLoaderProps {
//   size?: number;
//   color?: string;
//   borderWidth?: number;
// }

// const SpinningLoader: React.FC<SpinningLoaderProps> = ({
//   size = 40,
//   color = "#3498db",
//   borderWidth = 4,
// }) => {
//   const loaderStyle: React.CSSProperties = {
//     width: `${size}px`,
//     height: `${size}px`,
//     border: `${borderWidth}px solid ${color}20`, // 20% opacity
//     borderTopColor: color,
//     borderRadius: "50%",
//     animation: "spin 1s linear infinite",
//   };

//   return (
//     <>
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//       <div style={loaderStyle} />
//     </>
//   );
// };

// export default SpinningLoader;

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // if using utility function

export default function Spinner({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2
        className={cn(
          " h-10 w-10 animate-spin text-muted-foreground",
          className
        )}
      />
    </div>
  );
}
