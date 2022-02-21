import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const HeaderAndFooterDocument = gql`
    query HeaderAndFooter {
  header {
    id
    logo {
      id
      filename_disk
      description
    }
  }
  footer {
    id
    text
    copyright_text
    footer_logo {
      id
      filename_disk
      description
    }
  }
  partners {
    id
    link
    image {
      id
      filename_disk
      description
    }
  }
  our_sponsors {
    id
    image {
      filename_disk
      id
      description
    }
    link
  }
  social_media_links {
    id
    link
    image {
      id
      filename_disk
      description
    }
  }
}
    `;
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
export const AboutPageDocument = gql`
    query AboutPage {
  about_page {
    heading
    enter_now_section_CTA_label
    enter_now_section_image {
      storage
      title
      embed
      filename_disk
      filename_download
      type
      folder
      location
      metadata
    }
    challenge_section_video {
      storage
      embed
    }
    multi_level_questions {
      question {
        title
        body {
          multi_level_question_items {
            level_1_title
            level_2_title
            level_2_subtext
            level_3_text
            level_3_links {
              multi_level_question_item_links {
                label
                slug
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const HomePageDocument = gql`
    query HomePage {
  home_page {
    id
    title_bar_text
    enter_now_section_heading
    enter_now_section_sub_heading
    enter_now_section_body
    enter_now_section_CTA_label
    hero_section_youtube_video_id
    hero_section_right_side_svg {
      id
      filename_disk
      description
    }
    innovator_section_heading
    innovator_section_body
    innovator_section_CTA_label
    innovator_section_image {
      id
      filename_disk
      description
    }
    brands_section_heading
    brands_section_description
    brands_section_CTA_label
  }
}
    `;
export const InspirationPageDocument = gql`
    query InspirationPage($limit: Int, $page: Int) {
  inspiration_page {
    id
    heading
    description
    hero_image {
      id
      filename_disk
      description
    }
  }
  inspiration_articles(limit: $limit, page: $page) {
    id
    image {
      id
      filename_disk
      description
    }
    title
    body
    read_more_label
    read_more_link
  }
}
    `;
export const PastWinnersPageDocument = gql`
    query PastWinnersPage($limit: Int, $page: Int, $filterQuery: past_winners_filter) {
  past_winners_page {
    id
    heading
  }
  past_winners_categories {
    id
    category
  }
  past_winners_years {
    id
    year
  }
  past_winners(limit: $limit, page: $page, filter: $filterQuery) {
    id
    name
    image {
      id
      filename_disk
      description
    }
    short_description
    year {
      id
      past_winners_year {
        id
        year
      }
    }
    school_name
    students_name
    youtube_video_id
    project_information
    worksheets {
      id
      past_winners_worksheet {
        worksheet {
          id
          title
          filename_disk
        }
      }
    }
    categories {
      id
      past_winners_category {
        id
        category
      }
    }
  }
}
    `;