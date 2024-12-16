import "../styles/globals.css";
import "../styles/satoshi.css";
import { Inter, Kanit } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({weight:["100","200","300","400","500","600","700","800","900"], subsets:["latin"]});

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body
				className={`${kanit.className} flex min-h-screen flex-col bg-[#030516]`}
			>
				{children}
			</body>
		</html>
	);
};

export default layout;
