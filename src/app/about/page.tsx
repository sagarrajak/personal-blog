import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ResumeComponent = () => {
	const experienceData = [
		{
			company: "Apexon (EV charging team)",
			role: "Senior React Java full stack",
			duration: "APR 2024 - AUG 2024",
			tech: "React, Spring Boot, Kafka, Elasticsearch, PostgreSQL",
			points: [
				"Worked on multi steps form, modified bootstrap component to fit the figma design, added react hooks form to edit modify and add new item feature.",
				"Backend side worked on multiple spring boot services, wrote kafka event publisher and consumer to consume event and modify table, worked on elastic search index for global search for all the tables",
				"Migrated read apis from postgres to elasticsearch for search features, and wrote the job to sync elastic index with source of truth (postgres) db.",
			],
		},
		{
			company: "Farmart (Market Linkage Team)",
			role: "Senior Software Engineer (Lead Frontend)",
			duration: "JAN 2023 - DEC 2023",
			tech: "React, NodeJS, TypeScript, MySQL, Redux, Material Component",
			points: [
				"I worked on an internal B2B ERP tool, which helped the business to grow 5x.",
				"Migrated old codebase to MVVM with controllers and model hooks for each component. Used typescript generics to build reusable small modules for tables, virtual lists, form items, etc.",
				"Build a simple abstraction that can be used as a drop in replacement in place of useState hook to save used session data in session storage or url query, which leads to users not losing the progress of work they are doing while switching pages in case of url query reloading page.",
				"Build a utility module like react-query that can be used with redux to cache apis calls in the redux state, The benefits of this were that it was strongly typed for both request, query params, response, and error.",
			],
		},
		{
			company: "Shipsy (International Logistic Team)",
			role: "Senior Full Stack Developer",
			duration: "NOV 2021 - JUL 2022",
			tech: "React, PostgreSQL, Antd, Java, Spring, Docker",
			points: [
				"Facilitated the migration of complex Postgres queries, incorporating JSON as a field in Postgres, to a separate service using MongoDB as the database and Spring.",
				"Build custom organization filterchain in spring to get organization from header, added new interceptor and custom decorator in controller for validating this request for organization on controller level autho.",
				"Wore integration test for Repository and Entity, unit test for controllers using juit5 and mokito.",
				"Rebuilt the landing page of shipsy.app from scratch using scss and react.",
				"I worked on reducing bundle size, and implementing major webpack optimizations, resulting in a substantial 70% reduction in size.",
			],
		},
		{
			company: "Talentica (Vm Team)",
			role: "Fullstack Developer",
			duration: "FEB 2020 - OCT 2021",
			tech: "React, Redux, ChartJS, Jenkins, SQS, MySQL",
			points: [
				"Worked on a data pipeline. Working as lead dev in frontend to build an admin dashboard for running pipeline, scheduling ETL job, rerunning, stopping, and showing charts and all analytics reports on the frontend using ChartJs, React, and Redux.",
				"Worked on making ETL job, making it more stable, fixing major bottlenecks in performance, Increase stability. I optimized the pipeline to reduce the time taken to run ETL from Hours to a few minutes.",
				"Optimize cron Job. Set up SQS messaging queue with Jenkins to run dashboard chart generation job which converts the raw files to report data then uploads the report to the MySQL cluster.",
				"I have written jobs in Jenkins to do major tasks in the pipeline. For example, trigger the aggregator job whenever Etl is completed. CI/CD for deploying backend, for deploying frontend, deploying ETL.",
			],
		},
		{
			company: "GST Edge",
			role: "Frontend Developer",
			duration: "SEP 2018 - FEB 2020",
			tech: "Angular 2+",
			points: [
				"In a team of 5 people, I was handling frontend (Angular 2+)",
				"Developed the whole project from scratch, from designing UI/UX components to custom form validation, building a lazy loading list with the ability to sort filter, search, etc.",
				"Worked on website performance, client-side validations, pagination building frontend according to UX, etc.",
			],
		},
	];

	return (
		<div className="w-full flex-1  bg-about-container">
			<div className="min-h-screen bg-white/70  dark:bg-gray-900/70 text-gray-900 dark:text-white ">
				<div className="container mx-auto px-4 py-8">
					{/* Header Section */}
					<div className="flex flex-col md:flex-row items-center gap-6 mb-8 animate-[fadeInDown_1s_ease-in-out]">
						<img
							src="static/images/sagar.jpg"
							alt="Profile"
							className="rounded-full w-32 h-32 object-cover border-4 border-blue-500 dark:border-blue-400 animate-[fadeIn_1.5s_ease-in-out]"
						/>
						<div className="text-center md:text-left">
							<h1 className="text-3xl text-gray-900 dark:text-white  font-bold mb-2 animate-[fadeInRight_1s_ease-in-out]">
								SAGAR RAJAK
							</h1>
							<h2 className="text-xl  text-blue-900 dark:text-blue-200 mb-2 animate-[fadeInRight_1.2s_ease-in-out]">
								Senior Software Engineer
							</h2>
							<p className="text-gray-900 dark:text-gray-300 animate-[fadeInRight_1.4s_ease-in-out]">
								With 5+ years of experience in developing client-server
								applications.
							</p>
						</div>
					</div>

					{/* Professional Experience */}
					<section className="mb-8 animate-[fadeInUp_1s_ease-in-out]">
						<h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300 dark:border-gray-700">
							PROFESSIONAL EXPERIENCE
						</h2>

						<div className="space-y-8">
							{experienceData.map((exp, index) => (
								<div
									key={index}
									className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 animate-[fadeInLeft_1s_ease-in-out]"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
										<div>
											<h3 className="text-xl font-semibold">{exp.company}</h3>
											<p className="text-blue-500 dark:text-blue-400">
												{exp.role}
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
												Tech Stack: {exp.tech}
											</p>
										</div>
										<p className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
											{exp.duration}
										</p>
									</div>
									<ul className="list-disc list-inside space-y-2 ml-4">
										{exp.points.map((point, idx) => (
											<li
												key={idx}
												className="text-sm text-gray-700 dark:text-gray-300"
											>
												{point}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					{/* Education */}
					<section
						className="animate-[fadeInUp_1s_ease-in-out]"
						style={{ animationDelay: "0.8s" }}
					>
						<h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300 dark:border-gray-700">
							EDUCATION
						</h2>
						<div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
							<h3 className="text-xl font-semibold">
								National Institute of Technology, Rourkela
							</h3>
							<p className="text-blue-500 dark:text-blue-400">
								B.Tech in Electronics and Communication Engineering
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
								JULY 2013 - APRIL 2018
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ResumeComponent;
