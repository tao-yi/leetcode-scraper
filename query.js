import { gql } from "graphql-request";

export const problemSetQuestionList = gql`
  query problemsetQuestionList(
    $categorySlug: String
    $limit: Int
    $skip: Int
    $filters: QuestionListFilterInput
  ) {
    problemsetQuestionList(
      categorySlug: $categorySlug
      limit: $limit
      skip: $skip
      filters: $filters
    ) {
      hasMore
      total
      questions {
        acRate
        difficulty
        freqBar
        frontendQuestionId
        isFavor
        paidOnly
        solutionNum
        status
        title
        titleCn
        titleSlug
        topicTags {
          name
          nameTranslated
          id
          slug
        }
        extra {
          hasVideoSolution
          topCompanyTags {
            imgUrl
            slug
            numSubscribed
          }
        }
      }
    }
  }
`;
