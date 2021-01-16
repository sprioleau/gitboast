import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
	{
		user(login: "sprioleau") {
			login
			avatarUrl
			bio
			email
			location
			login
			name
			websiteUrl
			repositories(first: 10) {
				totalCount
				nodes {
					isPrivate
					name
					nameWithOwner
					updatedAt
					url
					stargazerCount
					languages(first: 5, orderBy: { direction: DESC, field: SIZE }) {
						edges {
							size
							node {
								color
								name
							}
						}
						totalSize
						totalCount
					}
				}
			}
			followers(first: 50) {
				totalCount
				nodes {
					avatarUrl
					id
					location
					name
					url
				}
			}
			following {
				totalCount
			}
			gists {
				totalCount
			}
			status {
				emoji
			}
		}
		rateLimit {
			limit
		}
	}
`;
