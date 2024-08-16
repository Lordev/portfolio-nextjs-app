import { aboutData } from '@/lib/data';
import BlobCircleContainer from './BlobCircleContainer';

export default function BlobCircle() {
	return (
		<>
			{aboutData.map(data => (
				<BlobCircleContainer
					key={data.id}
					borderColor={data.borderColor}
				>
					{data.content}
				</BlobCircleContainer>
			))}
		</>
	);
}
