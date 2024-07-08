import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/modal';
import Image from 'next/image';

interface ProjectInfoModalProps {
	handleOpenModal: () => void;
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectInfoModal({
	isOpen,
	onClose,
}: ProjectInfoModalProps) {
	const quantity = 4;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			placement="center"
			size="sm"
			shadow="lg"
			shouldBlockScroll={false}
			backdrop="opaque"
			classNames={{
				closeButton: 'right-4 top-4',
			}}
		>
			<ModalContent className="text-secondary bg-primary max-w-screen-xl ">
				<div
					className={`overflow-hidden flex w-[1600px * ${quantity}]`}
				>
					<Image
						src={'/images/strategysphere-advisors-slide-01.png'}
						width={1600}
						height={900}
						alt="Project Image"
						className="object-cover"
						data-index={0}
					/>
					<Image
						src={'/images/strategysphere-advisors-slide-02.png'}
						width={1600}
						height={900}
						alt="Project Image"
						className="object-cover "
						data-index={1}
					/>
					<Image
						src={'/images/strategysphere-advisors-slide-03.png'}
						width={1600}
						height={900}
						alt="Project Image"
						className="object-cover "
						data-index={2}
					/>
					<Image
						src={'/images/strategysphere-advisors-slide-04.png'}
						width={1600}
						height={900}
						alt="Project Image"
						className="object-cover "
						data-index={3}
					/>
				</div>
				<div className="p-4">
					<ModalHeader>Project Info</ModalHeader>
					<ModalBody>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed quis neque eget est convallis tincidunt.
							Ut auctor, justo quis varius viverra, mi arcu
							ultricies libero, eget ullamcorper lorem libero et
							enim. Nulla facilisi. Sed ultricies, nunc at
							fermentum lacinia, nunc felis ultricies justo, nec
							varius justo mi ac nunc. Integer nec ligula mauris.
							Nulla facilisi. Sed ultricies, nunc at fermentum
							lacinia, nunc felis ultricies justo, nec varius
							justo mi ac nunc. Integer nec ligula mauris.
						</p>
					</ModalBody>
				</div>
			</ModalContent>
		</Modal>
	);
}
