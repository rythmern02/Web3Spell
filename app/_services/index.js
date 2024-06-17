import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query courseList {
      courseLists {
        name
        banner {
          url
        }
        description
        free
        id
        spellbookLength
        createdBy {
          name
        }
        tag
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (courseId) => {
  const query = gql`
    query course {
      courseList(where: { id: "${courseId}" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            youtubleUrl
          }
        }
        description
        createdAt
        free
        name
        spellbookLength
        sourceCode
        tag
        updatedAt
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
