'use client';
import ProjectInfoModal from './ProjectInfoModal';
import { useDisclosure } from '@nextui-org/modal';
import Button from '../Button/Button';

export default function ButtonModalOpen() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleOpenModal = () => {
		onOpen();
	};

	return (
		<div>
			<Button
				label="Latest Projects"
				primary={false}
				backgroundColor="var(--accent)"
				textColor="var(--primary)"
				onClick={handleOpenModal}
			/>
			<ProjectInfoModal
				handleOpenModal={handleOpenModal}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</div>
	);
}
