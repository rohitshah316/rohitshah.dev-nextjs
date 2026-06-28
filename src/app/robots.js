import { userAgent } from "next/server";
import sitemap from "./sitemap";



export default function robot(){
    return({
        rules:[
            {
                userAgent:"*",
                allow:"/"
            },
        ],
        sitemap: 'https://rohitshah.dev/sitemap.xml'
    })
}