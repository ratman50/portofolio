import { Html } from "@react-three/drei";
import { LoaderSvg } from "../assets/icons";

const Loader = () => {
     return (
          <Html>
               <div className="flex justify-center items-center">
                    <LoaderSvg width="10em" height="10em" fill="#ff0000" />
               </div>
          </Html>
     );
};

export default Loader;
