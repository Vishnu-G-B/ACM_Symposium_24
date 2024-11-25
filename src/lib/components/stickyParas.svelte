<div class="z-[6]">
	<div
		class="w-fit flex flex-auto font-basebornSans text-primary text-[4rem] sm:text-[6rem] lg:text-[5rem] xl:text-[6rem] tracking-wider pl-4"
	>
		Turinger '25
	</div>
	<div class="pl-4 pr-4 pb-10 -mt-4">
		<div class="columns gap-1x text">
			<div class="vertical-line mt-5 sm:mt-0"></div>
			<div class="rows themes-row">
				<h4
					class="text-primary font-basebornSans -mt-6 sm:-mt-0 text-[1.5rem] sm:text-[2.4rem] lg:text-[1.8rem] xl:text-[3rem] uppercase tracking-widest leading-10"
				>
					Empowering Engagement
				</h4>
				<div class="text-white font-TWK -mt-8 sm:-mt-5">
					<b>No registration fee (for MAHE students)</b> is required for any event at the tech summit, emphasizing our commitment
					to fostering inclusive and accessible engagement for all attendees, ensuring that everyone
					can participate wholeheartedly.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div class="rows themes-row align-center">
				<h4
					class=" text-left lg:text-center text-primary font-basebornSans -mt-6 sm:-mt-0 text-[1.5rem] sm:text-[2.4rem] lg:text-[1.8rem] xl:text-[3rem] uppercase"
				>
					Flagship Event
				</h4>
				<div class=" text-left lg:text-center text-white font-TWK -mt-8 sm:-mt-10">
					Turinger stands as the pinnacle event hosted by the MITB ACM Student Chapter, offering a
					platform where insightful talks and engaging competitions converge, providing attendees
					with a holistic experience aimed at igniting creativity and fostering innovation.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div class="rows themes-row align-bottom">
				<h4
					class=" text-left lg:text-right text-primary font-basebornSans -mt-6 sm:-mt-0 text-[1.5rem] sm:text-[2.4rem] lg:text-[1.8rem] xl:text-[3rem] uppercase"
				>
					ACM @MITB
				</h4>
				<div class="text-left lg:text-right text-white font-TWK -mt-8 sm:-mt-10">
					As the leading society of technological advancement at MIT Bengaluru, we curate a spectrum
					of innovative events, workshops, seminars, conferences, and the esteemed tech summit, all
					aimed at pushing the boundaries of knowledge and driving forward the
					frontiers of technology.
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.columns {
		grid-column-gap: 24px;
		grid-row-gap: 24px;
		grid-auto-flow: column;
		display: flex;
	}

	.columns.gap-1x.text {
		min-height: 900px;
		align-items: flex-start;
		position: relative;
		@media screen and (max-width: 991px) {
			min-height: auto;
			flex-direction: column;
		}
	}
	.rows {
		grid-column-gap: 24px;
		grid-row-gap: 24px;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}
	.rows.themes-row {
		position: -webkit-sticky;
		position: sticky;
		top: 60px;
	}
	.rows.themes-row.align-bottom {
		align-self: flex-end;
	}

	.rows.themes-row.align-center {
		align-self: center;
	}
	@media screen and (max-width: 991px) {
		.rows.themes-row {
			position: static;
		}
		.rows.themes-row.align-center {
			position: static;
		}
	}
	.vertical-line {
		min-height: 1px;
		min-width: 1px;
		background-color: #e2e2e5;
		align-self: stretch;
	}
</style>
