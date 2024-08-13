import {
	Modal,
	ModalHeader,
	ModalContent,
	ModalBody,
	ModalFooter,
} from '@nextui-org/modal';
import Button from '../Button/Button';
import Link from 'next/link';
import MailCircleIcon from '../svg/MailCircleIcon';
import socialLinks from '@/lib/data/socialLinks';

interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

type SocialLinkKey = keyof typeof socialLinks;

const links: SocialLinkKey[] = ['mail', 'linkedin', 'twitter'];

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
	return (
		<Modal
			isOpen={false}
			hideCloseButton={true}
			placement="center"
			shouldBlockScroll={false}
			backdrop="blur"
			classNames={{
				closeButton: 'bottom-2 left-1/2 -translate-x-1/2 z-30',
				base: 'overflow-hidden w-[500px] max-w-full bg-primary relative overflow-visible text-secondary text-center py-4',
				wrapper: 'bg-black bg-opacity-50 border-2 ',
				footer: 'flex justify-center mt-4 ',
			}}
		>
			<ModalContent>
				<ModalHeader>
					<div className="absolute -top-28 left-1/2 bg-accent -translate-x-1/2 p-8">
						<MailCircleIcon
							width={80}
							height={80}
							color="var(--primary)"
						/>
					</div>
				</ModalHeader>
				<ModalBody className="space-y-8">
					<h4>Thank you for sending this message</h4>
					<p className="px-20">
						Your message has successfully been submitted. We{"'"}
						ll try to reach back at you within 3 days.
					</p>
					<div className="space-y-4">
						<b>You can also reach me on</b>
						<div className="flex gap-4 justify-center">
							{links.map(link => {
								const { icon: Icon, href } = socialLinks[link];
								return (
									<Link
										key={link}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-full hover:border-2 hover:border-transparent border-accent border-2 transition-colors duration-150 ease-in active:border-accent active:bg-accent group bg-transparent hover:bg-accent"
									>
										<Icon
											width={20}
											height={20}
											className="text-accent group-hover:text-primary 
											group-hover:scale-150 transition-colors duration-150 ease-in trainstion-transform "
										/>
									</Link>
								);
							})}
						</div>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						label="Close"
						backgroundColor="var(--accent)"
						textColor="var(--primary)"
						primary={true}
						className="max-w-64 w-full"
						onClick={onClose}
					/>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
