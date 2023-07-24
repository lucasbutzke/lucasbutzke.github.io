import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const body = await event.request.formData();

    // log all fields
    console.log([...body]);

    return json({
        // get a specific field's value
        name: body.get('name') ?? 'world'
    });
}

/** @type {import('./$types').RequestHandler} */
export async function GET( {request} ) {
    return json({
        // retrieve a specific header
        name: 'vapo',
        last: 'algo'
    // }, {
    //     // set a header on the response
    //     last: 'algo'
    });
}