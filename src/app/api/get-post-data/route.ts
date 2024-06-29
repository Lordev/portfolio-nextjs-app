import contentful from 'contentful';

const client = contentful.createClient({
	space: 'loekk0fdi741',
	environment: 'master', // defaults to 'master' if not set
	accessToken: '6SpD9-B3CgHPZHs1loZ3AYhd7389fsY_owS2byfUvYg',
});

export async function GET() {
	const res = await client.getEntry('');
	console.log('res client', res);
	return Response.json(res);
}
