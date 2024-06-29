export async function GET() {
	const accessToken = 'x_OUztB_UKG02ylebGl1nP82dXldOk5YkR5D9ItWkVQ';
	const graphqlEndpoint =
		'https://graphql.contentful.com/content/v1/spaces/loekk0fdi741/environments/master';

	const response = await fetch(graphqlEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
			query: `
        query {
          projectsCollection {
            items {
              title
              description
              links
              developerLanguages
              imageThumbnail {
                url
                description
              }
            }
          }
        }
      `,
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	return data;
}
