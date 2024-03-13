<div class="z-[6]">
	<div
		class="w-fit flex flex-auto font-humaneSemiBold text-primary text-[8rem] sm:text-[10rem] tracking-wider pl-4"
	>
		THEMES
	</div>
	<div class="pl-4 pr-4 pb-10 -mt-16">
		<div class="columns gap-1x text">
			<div class="vertical-line mt-5 sm:mt-0"></div>
			<div class="rows themes-row">
				<h4
					class="text-primary font-humaneSemiBold text-[6rem] sm:text-[8rem] uppercase tracking-wider"
				>
					Ethics
				</h4>
				<div class="text-onPrimaryContainer -mt-16">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nemo voluptatibus
					dicta, harum ipsa cupiditate fugiat magni reprehenderit consequuntur veritatis fuga nulla
					perferendis ipsum perspiciatis maxime, cum delectus incidunt quo.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div
				id="w-node-_2f3799e2-8b86-96f6-924d-34a1fda5cec6-4ab101b8"
				class="rows themes-row align-center"
			>
				<h4
					class=" text-left lg:text-center text-primary font-humaneSemiBold text-[6rem] sm:text-[8rem] uppercase tracking-wider"
				>
					Leadership
				</h4>
				<div class=" text-left lg:text-center text-onPrimaryContainer -mt-16">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus reprehenderit unde
					vitae, accusamus quasi quas blanditiis ad, sequi quae repudiandae quidem assumenda magnam
					ipsa error, consequatur corporis eveniet quisquam non.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div
				id="w-node-_2f3799e2-8b86-96f6-924d-34a1fda5cecc-4ab101b8"
				class="rows themes-row align-bottom"
			>
				<h4
					class=" text-left lg:text-right text-primary font-humaneSemiBold text-[6rem] sm:text-[8rem] uppercase tracking-wider"
				>
					Innovation
				</h4>
				<div class="text-left lg:text-right text-onPrimaryContainer -mt-16">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nemo quaerat harum eius
					aliquid, ea dolores vel nisi excepturi maiores atque recusandae laborum beatae mollitia
					dolore illum quae, eaque nobis.
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
		top: 10px;
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
