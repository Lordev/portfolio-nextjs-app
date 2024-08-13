import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/modal';
import ProjectInfoSlider from './ProjectInfoSlider';
import UrlIcon from '../svg/UrlIcon';
import Github from '../svg/Github';
import { ProjectModalData } from '@/lib/types/ProjectModalData';
import Link from 'next/link';

interface ProjectInfoModalProps {
	isOpen: boolean;
	onClose: () => void;
	projectData: ProjectModalData;
}

export default function ProjectInfoModal({
	isOpen,
	onClose,
	projectData,
}: ProjectInfoModalProps) {
	const { sliderImages, title, description, repositoryUrl, websiteUrl } =
		projectData;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			placement="center"
			shouldBlockScroll={false}
			backdrop="blur"
			classNames={{
				closeButton: 'right-2 top-2 z-30',
				base: 'rounded-lg overflow-hidden ',
				wrapper: 'bg-black bg-opacity-50',
			}}
		>
			<ModalContent className="text-secondary bg-primary max-w-[800px] ">
				<div className="mt-12">
					<ProjectInfoSlider sliderImages={sliderImages} />
				</div>
				<ModalHeader>{title}</ModalHeader>
				<ModalBody className="grid">
					<p>{description}</p>
				</ModalBody>
				<ModalFooter>
					<div className="grid grid-cols-2">
						<Link
							className="border-l-2 border-t-2 border-b-2 border-zinc-400 py-2 px-4 flex gap-4 justify-between"
							href={repositoryUrl}
							target="_blank"
						>
							Repository
							<Github width={20} height={20} />
						</Link>
						<Link
							className="border-2 border-zinc-400  py-2 px-4 flex gap-4 justify-between"
							href={websiteUrl}
							target="_blank"
						>
							Website
							<UrlIcon width={20} height={20} />
						</Link>
					</div>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
