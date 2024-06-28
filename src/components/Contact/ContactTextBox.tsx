import HoverContainer from '../HoverContainer';
import SectionTitle from '@/components/SectionTitle';

export default function ContactTextBox() {
	return (
		<HoverContainer>
			<div className="flex flex-col gap-10  border-white/10  max-sm:px-4 px-16 py-20 border-2 opacity-90 backdrop-blur-[1.2px]">
				<div className="flex flex-row gap-8 ">
					<div className="flex flex-col gap-5">
						<SectionTitle title="Contact" />
						<div>
							<h3>Let{`'`}s Create</h3>
						</div>
						<div>
							<p className="">
								Have project idea, need a consultation, or just
								want to connect? Don{"'"}t hesitate to reach
								out! Use the form below to send me a message,
								and I{"'"}ll get back to you promptly.{' '}
								<span className="font-semibold">
									Let{"'"}s turn your vision into reality!
								</span>{' '}
								Whether it{"'"}s a stunning website, a sleek web
								application, or robust backend development, I
								{"'"}m here to help.
							</p>
						</div>
					</div>
				</div>
			</div>
		</HoverContainer>
	);
}
