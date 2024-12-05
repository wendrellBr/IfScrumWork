"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

export function HeroSection() {
	const plugin = React.useRef(Autoplay({ delay: 1800 }));

	const images = [
		"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/4078343/pexels-photo-4078343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	];
	// colocar em ordem aleatória o array de imagens
	images.sort(() => Math.random() - 0.5);

	return (
		<div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Domine o desenvolvimento ágil com
							<span className="text-blue-600 font-bold">
								{" "}
								SCRUM
							</span>
						</h1>
						<p className="text-xl text-muted-foreground">
							Scrum tem como foco resolver problemas complexos, promovendo uma
							comunicação eficiente e a colaboração constante entre todos os
							membros do time.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="group">
								Ver Artigos
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button size="lg" variant="outline">
								Saiba Mais
							</Button>
						</div>
					</div>
					<div className="space-y-8 flex justify-center">
						<Carousel
							plugins={[plugin.current]}
							className="w-full max-w-md"
							onMouseEnter={plugin.current.stop}
							onMouseLeave={plugin.current.reset}
						>
							<CarouselContent>
								{images.map((src, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<CarouselItem key={index}>
										<div className="relative h-[400px] md:h-[500px]">
											<Image
												src={src}
												alt="Team collaborating on a project"
												fill
												className="object-cover rounded-sm"
												priority
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>

					{/* className="relative h-[400px] md:h-[500px]"
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team collaborating on a project"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </div> */}
				</div>
			</div>
		</div>
	);
}
