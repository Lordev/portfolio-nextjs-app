'use client';
import ProjectInfoModal from './ProjectInfoModal';
import { useDisclosure } from '@nextui-org/modal';
import { useState } from 'react';
import { ProjectModalData } from '@/lib/types/ProjectModalData';
import ButtonUnderlined from '../Button/ButtonUnderlined';

interface ModalProps {
	projectData: ProjectModalData;
}

export default function Modal({ projectData }: ModalProps) {
	const [active, setActive] = useState(false) as [boolean, Function];
	const { isOpen, onOpen, onClose } = useDisclosure({
		onChange: isOpen => {
			setActive(isOpen);
		},
	});

	const handleOpenModal = () => {
		onOpen();
	};

	return (
		<div>
			<ButtonUnderlined
				label="More Info"
				onClick={handleOpenModal}
				setActive={active}
			/>
			<ProjectInfoModal
				isOpen={isOpen}
				onClose={onClose}
				projectData={projectData}
			/>
		</div>
	);
}
