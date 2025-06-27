import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center">
			<div className="w-full flex bg-[#2F2F2F] p-8">
				<div className="w-1/2 flex flex-col gap-8">
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "fit-content" }}
						transition={{ duration: 1, ease: "easeInOut" }}
						viewport={{ amount: 0.5 }}
						className="w-fit bg-white whitespace-nowrap overflow-hidden"
					>
						<h1 className="px-4 py-2 text-6xl text-[#2F2F2F] font-extrabold">Mofu Mofu</h1>
					</motion.div>
					<p className="text-white">
						Mofunetive is a team for those who are interested in programming. We create things that deliver the best experience for users, such as messaging services,
						ticket systems, and more. We're looking for programmers to join us and build fun projects together. We need you — join us now!
					</p>
				</div>
				<div className="w-1/2 flex justify-center">
					<img src="https://avatars.githubusercontent.com/u/109919769?s=200&v=4" alt="team_image" className="rounded-lg" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
