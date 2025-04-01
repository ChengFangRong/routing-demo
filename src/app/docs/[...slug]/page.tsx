export default function Docs( {
    params,
}: {
    params: { slug: string[] };
}) { 
    if (params.slug.length === 2) {//url: /docs/routing/hehe returns 'feature routing and concept hehe'
        return (<h1>
            Viewing docs for feature {params.slug[0]} and concept {params.slug[1]} 
        </h1>
        );
    } else if (params.slug.length === 1) { //url: /docs/routing returns 'feature routing'
        return <h1>
            Viewing docs for feature {params.slug[0]}
        </h1>;
        }
    return <h1>Docs home page</h1>;
}

//catchall statement -- slug in directory have double [] -> [[slug]]
//params.slug?.length -- if you have /docs, youll get default 'Docs home page'