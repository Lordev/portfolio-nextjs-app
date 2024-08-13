import { ProjectModalData } from './ProjectModalData';
import { ProjectPostsImageData } from './ProjectPostsImageData';

export interface ProjectPostsData {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	projectTags: string[];
	imageData: ProjectPostsImageData;
	modalProps: ProjectModalData;
}
