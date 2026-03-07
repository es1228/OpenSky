import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			manifest: {
				name: "OpenSky (Weather Application)",
				short_name: "OpenSky",
				description: "An open source weather application",
				id: "/OpenSky/",
				start_url: "/OpenSky/",
				display: "standalone",
				orientation: "portrait",
				background_color: "#000",
				screenshots: [
					{
						src: "screenshot_desktop.png",
						form_factor: "wide",
						type: "image/png",
						sizes: "1919x908",
						label: "Desktop View",
					},
					{
						src: "screenshot_mobile.png",
						form_factor: "narrow",
						type: "image/png",
						sizes: "447x799",
						label: "Mobile View",
					},
				],
				icons: [
					{
						src: "partly-cloudy-day.svg",
						sizes: "any",
						type: "image/svg+xml",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
	base: "/OpenSky/",
});
