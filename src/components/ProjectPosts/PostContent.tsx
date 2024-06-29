import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import ProjectTag from './ProjectTag';
import { z } from 'zod';

const projectSchema = z.object({
	_id: z.string(),
	title: z.string(),
	description: z.string(),
	links: z.array(z.string().url()),
	developerLanguages: z.array(z.string()),
	imageThumbnail: z.object({
		url: z.string().url(),
		description: z.string(),
		height: z.number(),
		width: z.number(),
		title: z.string(),
	}),
});

const projectsCollection = z.object({
	items: z.array(projectSchema),
});

export async function fetchContent() {
	const accessToken = 'x_OUztB_UKG02ylebGl1nP82dXldOk5YkR5D9ItWkVQ';
	const graphqlEndpoint =
		'https://graphql.contentful.com/content/v1/spaces/loekk0fdi741/environments/master';

	const response = await fetch(graphqlEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
			query: `
        query {
            projectsCollection {
                items {
                _id
                title
                description
                links
                developerLanguages
                imageThumbnail {
                    url
                    description
                    height
                    width
                    contentType 
                    title
                }
                }
            }
            }
      `,
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const { data } = await response.json();

	const parsedData = projectsCollection.parse(data.projectsCollection);

	return parsedData;
}

// const fetchContent = async () => {
// 	const data = await fetch('api/get-post-data');
// 	console.log(data);
// };

export default async function PostContent() {
	const data = await fetchContent();

	return (
		<>
			<Link
				href="#"
				className="max-w-[600px] max-h-[300px] overflow-hidden"
			>
				<Image
					src={data.items[0].imageThumbnail.url}
					width={600}
					height={300}
					alt="project"
					className="object-cover"
				/>
			</Link>
			<div className="space-y-8">
				<div className="flex justify-between bg-zinc-400/20 px-8 py-2">
					<div>
						<h4>Project name</h4>
						<h6>subtitle of the century</h6>
					</div>
					<div className="flex gap-2 border-2 border-zinc-400/40 rounded-full p-4 h-12 items-center">
						<Link href="#" className=" rounded-full p-1 h-8  ">
							<FaGithub
								size={20}
								className="text-zinc-600 hover:text-accent"
							/>
						</Link>
						<Link href="#" className=" rounded-full p-1 h-8  group">
							<FaLink
								size={20}
								className="text-zinc-600 hover:text-accent"
							/>
						</Link>
					</div>
				</div>
				<p className="px-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vero illum consequatur dolorum adipisci minus tenetur dolor
					harum aperiam.
				</p>
				<div className="px-8">
					<ul className="flex flex-wrap gap-x-2 gap-y-2">
						<ProjectTag label="React" />
						<ProjectTag label="NextJS" />
						<ProjectTag label="HTML" />
						<ProjectTag label="Tailwind" />
						<ProjectTag label="Sanity.io" />
					</ul>
				</div>
			</div>
		</>
	);
}
