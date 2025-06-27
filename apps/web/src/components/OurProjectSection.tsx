import { motion } from "framer-motion";

const OutProjectSection = () => {
	return (
		<section className="min-h-screen p-4 bg-gray-300">
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: "fit-content" }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
			>
				<h1 className="p-4 text-5xl text-white font-extrabold">Our Project</h1>
			</motion.div>
		</section>
	);
};

export default OutProjectSection;
