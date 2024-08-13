import { aboutData } from '@/lib/data';

export default function BlobCircle() {
	return (
		<>
			{aboutData.map(data => (
				<div
					key={data.title}
					className={`max-w-screen-sm [border-radius:_30%_70%_33%_67%_/_53%_51%_49%_47%] flex items-center justify-center p-20 -rotate-2 transform hover:rotate-x-0 hover:rotate-0 hover:scale-110 transition-transform duration-300 shadow-2xl border-2 bg-primary`}
					style={{
						borderColor: data.borderColor,
					}}
				>
					<p className="text-base md:text-normal font-jetBrains">
						{data.title}
					</p>
				</div>
			))}
		</>
	);
}
