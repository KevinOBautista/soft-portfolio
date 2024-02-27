import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "../../assets/gallery-images";

import { Autoplay, Pagination } from "swiper/modules";

const Gallery = () => {
	return (
		<div className=" w-full h-max flex relative flex-col md:flex-row justify-evenly items-center py-10 text-3xl sm:text-5xl md:text-6xl">
			<div className="image-container w-full md:w-4/12 flex justify-center items-center h-full">
				<img
					src="./viewer.svg"
					alt="viewer"
					className="w-8/12 sm:w-10/12 select-none pointer-events-none"
				/>
			</div>
			<div className="swiper-image flex flex-col justify-center items-center w-8/12 md:w-4/12">
				<h1 className="font-bold tracking-wider">GALLERY</h1>
				<Swiper
					slidesPerView={"auto"}
					centeredSlides={true}
					spaceBetween={30}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					modules={[Pagination, Autoplay]}
					className="mySwiper w-11/12 md:w-full h-max"
				>
					<SwiperSlide>
						<img
							src="./joker3.png"
							alt=""
							className="rounded-lg object-contain"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="./sweedenposter.jpg"
							alt=""
							className="rounded-lg object-contain"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="./feelings.jpg"
							alt=""
							className="rounded-lg object-contain"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="./heartbreak.jpg"
							alt=""
							className="rounded-lg object-contain"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="./AintNoBody.jpg"
							alt=""
							className="rounded-lg object-contain"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Gallery;
