import Generator from "react-router-sitemap-generator";
import { appRouter } from "./routes";

const generator = new Generator(
  "https://react-router-sitemap-generator.com",
  appRouter(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: "monthly",
    priority: 0.8,
  }
);
generator.save("build/sitemap.xml");
