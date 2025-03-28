import API, { GetMembers } from "@mofunetive/api";
import { motion } from "framer-motion";
import React from "react";

const OutTeamSection = () => {
	const [members, setMembers] = React.useState<GetMembers["response"]>([]);

	React.useEffect(() => {
		const fetchMembers = async () => {
			const data = await new API().GetMembers();
			setMembers(data);
		};
		fetchMembers();
	}, []);

	return (
		<section className="min-h-screen flex flex-col gap-16 p-4 ">
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: "fit-content" }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				viewport={{ amount: 0.5 }}
				className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
			>
				s<h1 className="px-4 py-2 text-6xl text-white font-extrabold">Our Team</h1>
			</motion.div>
			{members.map((member, index: number) => (
				<div key={index} className="max-w-5xl m-auto">
					<div className=" relative flex">
						<div className="w-[40%] sm:w-[20%] bg-white"></div>
						<img
							src={`${member.html_url}/${member.login}/blob/main/resources/mofunetive/thumbnail.png?raw=true`}
							alt={member.login || "Member Avatar"}
							className="h-[100vh] w-[60%] sm:w-[80%] object-cover"
							style={{ aspectRatio: "16/9" }}
							onError={async (event) => {
								event.currentTarget.src = member.avatar_url;
							}}
						/>
						<div className="absolute flex flex-col justify-between h-full w-full px-16 pt-8">
							<div className="flex flex-col gap-2">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "fit-content" }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									viewport={{ amount: 0.5 }}
									className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
								>
									<p className="px-4 py-2 text-5xl font-bold text-white">{member.login}</p>
								</motion.div>
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "fit-content" }}
									transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
									viewport={{ amount: 0.5 }}
									className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
								>
									<p className="px-4 py-2 text-4xl font-bold text-white">{member.metadata?.role || "Member"}</p>
								</motion.div>
							</div>

							<div className="flex flex-col gap-2 font-bold text-[#2F2F2F]">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "fit-content" }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									viewport={{ amount: 0.5 }}
									className="w-fit bg-white whitespace-nowrap overflow-hidden"
								>
									<p className="px-4 py-2 text-7xl">VOL</p>
								</motion.div>
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "fit-content" }}
									transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
									viewport={{ amount: 0.5 }}
									className="w-fit bg-white whitespace-nowrap overflow-hidden"
								>
									<p className="px-4 py-2 text-6xl">{(index + 1).toString().padStart(2, "0")}</p>
								</motion.div>
							</div>

							<div className="flex flex-col gap-4 font-bold">
								<div>
									<motion.div
										// initial={{ y: 100, opacity: 0 }}
										// whileInView={{ y: 0, opacity: 1 }}
										// transition={{ duration: 0.5, ease: "easeInOut" }}
										initial={{ width: 0 }}
										whileInView={{ width: "fit-content" }}
										transition={{ duration: 0.5, ease: "easeInOut" }}
										viewport={{ amount: 0.5 }}
										className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
									>
										<p className="px-2 py-1 text-white">Github</p>
									</motion.div>
									<motion.div
										// initial={{ y: 100, opacity: 0 }}
										// whileInView={{ y: 0, opacity: 1 }}
										// transition={{ duration: 0.5, ease: "easeInOut" }}
										initial={{ width: 0 }}
										whileInView={{ width: "fit-content" }}
										transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
										viewport={{ amount: 0.5 }}
										className="w-fit bg-white whitespace-nowrap overflow-hidden"
									>
										<a href={member.html_url} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[#2F2F2F]">
											{member.login}
										</a>
									</motion.div>
								</div>

								<div>
									<motion.div
										// initial={{ y: 100, opacity: 0 }}
										// whileInView={{ y: 0, opacity: 1 }}
										// transition={{ duration: 0.5, ease: "easeInOut" }}
										initial={{ width: 0 }}
										whileInView={{ width: "fit-content" }}
										transition={{ duration: 0.5, ease: "easeInOut" }}
										viewport={{ amount: 0.5 }}
										className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
									>
										<p className="px-2 py-1 text-white">Location</p>
									</motion.div>
									<motion.div
										// initial={{ y: 100, opacity: 0 }}
										// whileInView={{ y: 0, opacity: 1 }}
										// transition={{ duration: 0.5, ease: "easeInOut" }}
										initial={{ width: 0 }}
										whileInView={{ width: "fit-content" }}
										transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
										viewport={{ amount: 0.5 }}
										className="w-fit bg-white whitespace-nowrap overflow-hidden"
									>
										<p className="px-2 py-1 text-[#2F2F2F]">{member.location || "?"}</p>
									</motion.div>
								</div>

								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "fit-content" }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									viewport={{ amount: 0.5 }}
									className="w-fit bg-white whitespace-nowrap overflow-hidden"
								>
									<p className="px-8 py-4 text-7xl text-[#2F2F2F]">{member.metadata?.type}</p>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.h1
						initial={{ width: 0 }}
						whileInView={{ width: "fit-content" }}
						transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
						viewport={{ amount: 0.5 }}
						className="mt-4 ml-24 text-2xl text-[#2F2F2F] font-bold whitespace-nowrap overflow-hidden"
					>
						{member.bio}
					</motion.h1>
				</div>
			))}
		</section>
	);
};

export default OutTeamSection;
