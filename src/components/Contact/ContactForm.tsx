'use client';
import FormField from '@/components/Form/FormField';
import CursorEffectWrapper from '../CursorEffectWrapper';
import ButtonForm from '../Button/ButtonForm';
import SuccessModal from '../Form/SuccesModal';
import { useForm, ValidationError } from '@formspree/react';
import { useDisclosure } from '@nextui-org/modal';
import { useEffect, useRef } from 'react';

export default function Form() {
	const [state, handleSubmit] = useForm('mjkbrply');
	const formRef = useRef<HTMLFormElement>(null);
	const { isOpen, onClose, onOpen } = useDisclosure();

	useEffect(() => {
		if (state.succeeded) {
			onOpen();
			formRef.current?.reset();
		}
	}, [state.succeeded, onOpen]);

	return (
		<>
			<CursorEffectWrapper>
				<div className="flex flex-col gap-2 text-center max-sm:px-4 px-16 py-20 col border border-white/10 rounded-md backdrop-blur-[2px]">
					<form ref={formRef} onSubmit={handleSubmit}>
						<fieldset className="flex flex-col space-y-10 text-[1.3rem]">
							<FormField
								id="fname"
								name="fname"
								title="First name"
								type="text"
								placeholder=" "
								required
							/>
							<ValidationError
								prefix="First name"
								field="fname"
								errors={state.errors}
							/>
							<FormField
								id="lname"
								title="Last name"
								name="lname"
								type="text"
								placeholder=" "
								required
							/>
							<ValidationError
								prefix="Last name"
								field="lname"
								errors={state.errors}
							/>
							<FormField
								id="email"
								title="E-mail"
								name="email"
								type="email"
								required
								placeholder=" "
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<FormField
								id="telephone"
								title="Telephone"
								name="telephone"
								type="number"
								required
								placeholder=" "
							/>
							<ValidationError
								prefix="Telephone"
								field="telephone"
								errors={state.errors}
							/>
							<FormField
								id="message-box"
								title="Message"
								name="message-box"
								isTextarea={true}
								placeholder=" "
								required
							/>
							<ValidationError
								prefix="Message"
								field="message-box"
								errors={state.errors}
							/>
							<ButtonForm
								type="submit"
								label="send your message"
							/>
						</fieldset>
					</form>
				</div>
			</CursorEffectWrapper>
			<SuccessModal isOpen={isOpen} onClose={onClose} />
		</>
	);
}
