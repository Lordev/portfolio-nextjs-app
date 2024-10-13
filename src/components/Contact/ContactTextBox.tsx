'use client';
import HoverContainer from '../CursorEffectWrapper';
import SectionTitle from '@/components/SectionTitle';

export default function ContactTextBox() {
	return (
		<HoverContainer>
			<div className="flex flex-col gap-10 border-white/10 max-sm:px-4 px-16 py-20 border-2 opacity-90 backdrop-blur-[1.2px]">
				<div className="flex flex-row gap-8">
					<div className="flex flex-col">
						<SectionTitle
							title="Contact"
							subtitle={`Let's Create`}
						/>
						<p>
							Looking to connect or discuss a project? Reach out
							using the form below, and I{"'"}ll respond promptly.
							Whether it{"'"}s for collaboration or inquiries, I
							{"'"}m happy to chat and explore possibilities.
						</p>
					</div>
				</div>
			</div>
		</HoverContainer>
	);
}
