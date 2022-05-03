export async function getData(URL: string): Promise<[Array<string>, Array<string>, Array<string>] | string> {
    return await fetch(URL)
        .then((res) => res.json())
        .then((json) => {
           
            return [json,Array.from(new Set(json.map((obj: any) => obj.country)))
            // Array.from(new Set(json.map((obj: any) => obj.camp))),
            // Array.from(new Set(json.map((obj: any) => obj.school))),
            ]

        })
        .catch(err => {
            return err.message
        })

}