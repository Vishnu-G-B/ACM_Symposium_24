<div class="z-[6]">
	<div
		class="w-fit flex flex-auto font-basebornSans text-primary text-[4rem] sm:text-[6rem] lg:text-[5rem] xl:text-[6rem] tracking-wider pl-4"
	>
		THEMES
	</div>
	<div class="pl-4 pr-4 pb-10 -mt-6">
		<div class="columns gap-1x text">
			<div class="vertical-line mt-5 sm:mt-0"></div>
			<div class="rows themes-row">
				<h4
					class="text-primary font-basebornSans -mt-6 sm:-mt-0 text-[2.5rem] sm:text-[4rem] lg:text-[3rem] xl:text-[5rem] uppercase tracking-widest"
				>
					Ethics
				</h4>
				<div class="text-white font-TWK -mt-8 sm:-mt-10">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nemo voluptatibus
					dicta, harum ipsa cupiditate fugiat magni reprehenderit consequuntur veritatis fuga nulla
					perferendis ipsum perspiciatis maxime, cum delectus incidunt quo.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div class="rows themes-row align-center">
				<h4
					class=" text-left lg:text-center text-primary font-basebornSans -mt-6 sm:-mt-0 text-[2.5rem] sm:text-[4rem] lg:text-[3rem] xl:text-[5rem] uppercase"
				>
					Leadership
				</h4>
				<div class=" text-left lg:text-center text-white font-TWK -mt-8 sm:-mt-10">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus reprehenderit unde
					vitae, accusamus quasi quas blanditiis ad, sequi quae repudiandae quidem assumenda magnam
					ipsa error, consequatur corporis eveniet quisquam non.
				</div>
			</div>
			<div class="vertical-line"></div>
			<div class="rows themes-row align-bottom">
				<h4
					class=" text-left lg:text-right text-primary font-basebornSans -mt-6 sm:-mt-0 text-[2.5rem] sm:text-[4rem] lg:text-[3rem] xl:text-[5rem] uppercase"
				>
					Innovation
				</h4>
				<div class="text-left lg:text-right text-white font-TWK -mt-8 sm:-mt-10">
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
		top: 30px;
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
