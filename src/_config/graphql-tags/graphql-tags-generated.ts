import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const AllJudgesDocument = gql`
    query AllJudges($limit: Int, $page: Int) {
  judges(limit: $limit, page: $page) {
    __typename
    id
    name
  }
}
    `;
export const JudgeDocument = gql`
    query Judge($id: ID!) {
  judges_by_id(id: $id) {
    __typename
    name
    id
  }
}
    `;