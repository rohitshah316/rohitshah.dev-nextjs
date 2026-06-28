import { projects } from "@/data/projects";



export default function sitemap() {
    const baseURL = 'https://rohitshah.dev';


    const staticPages = [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseURL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseURL}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseURL}/skills`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseURL}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];



    const projectPages=projects.filter((p)=>!p.slug.startsWith('//'))

    .map((project)=>({
        url:`${baseURL}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency:"monthly",
        priority: 0.7,
    }));


    return[...staticPages,...projectPages];
}