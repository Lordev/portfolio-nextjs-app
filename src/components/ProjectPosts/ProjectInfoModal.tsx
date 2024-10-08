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
import AnchorLink from '../Button/AnchorLink';

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
				footer: 'max-sm:flex-col',
				wrapper: 'bg-black bg-opacity-50',
			}}
		>
			<ModalContent
				className="text-secondary bg-primary 
			md:max-w-[800px] sm:max-w-[600px] xs:max-w-[350px] max-w-full "
			>
				<div className="mt-12">
					<ProjectInfoSlider sliderImages={sliderImages} />
				</div>
				<ModalHeader>{title}</ModalHeader>
				<ModalBody className="grid">
					<p>{description}</p>
				</ModalBody>
				<ModalFooter>
					<div className="grid grid-cols-2">
						<AnchorLink
							className="border-l-2 border-t-2 border-b-2 border-zinc-400 py-2 px-4 flex gap-4 justify-between w-full rounded-none"
							href={repositoryUrl}
							backgroundColor="var(--primary)"
							textColor="var(--secondary)"
							target="_blank"
						>
							Repository
							<Github width={20} height={20} />
						</AnchorLink>
						<AnchorLink
							className="border-2 border-zinc-400  py-2 px-4 flex gap-4 justify-between w-full rounded-none"
							href={websiteUrl}
							backgroundColor="var(--primary)"
							textColor="var(--secondary)"
							target="_blank"
						>
							Website
							<UrlIcon width={20} height={20} />
						</AnchorLink>
					</div>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
