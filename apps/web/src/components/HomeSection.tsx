import { motion } from "framer-motion";

const HomeSection = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center">
			<div>
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: "fit-content" }}
					transition={{ duration: 1, ease: "easeInOut" }}
					viewport={{ amount: 0.5 }}
					className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
				>
					<h1 className="px-4 py-2 text-6xl text-white font-extrabold">Hello from</h1>
				</motion.div>
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: "fit-content" }}
					transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
					viewport={{ amount: 0.5 }}
					className="mt-4 ml-16 w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
				>
					<h1 className="px-4 py-2 text-6xl text-white font-extrabold">MofuNetive</h1>
				</motion.div>
			</div>
		</section>
	);
};

export default HomeSection;
