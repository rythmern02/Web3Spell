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

export const getCourseById = async (courseId, userEmail) => {
  const query = gql`
    query course {
      courseList(where: { id: "${courseId}" }) {
        chapter {
          ... on Chapter {
            id
            name
            chapterNumber
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
    userEnrollCourses(where: {courseId: "${courseId}", userEmail: "${userEmail}"}) {
    courseId
    userEmail
    id
    completedChapter {
    ... on CompletedChapter {
      chapterId
    }}
  }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const EnrollCourse = async (courseId, userEmail) => {
  const mutateQuery = gql`
  mutation EnrollCourse {
  createUserEnrollCourse(data: {courseId: "${courseId}", userEmail: "${userEmail}"}) {
    id
  }
}
`;
  const result = await request(MASTER_URL, mutateQuery);
  return result;
}

export const PublishCourse = async (id) => {
  const mutateQuery = gql`
  mutation PublishCourse {
  publishUserEnrollCourse(where: {id: "${id}"}) {
    id
  }
}
  `;
  const result = await request(MASTER_URL, mutateQuery);
  return result;
}

export const markChapterCompletedG = async (recordId, chapterNumber) => {
  const mutateQuery = gql`
mutation markChapterComplete {
  updateUserEnrollCourse(
    where: {id: "${recordId}"}
    data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "${chapterNumber}"}}}}}
  ) {
    id
  }
  publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  } 
}
  `
  const result = await request(MASTER_URL, mutateQuery);
  return result;

}