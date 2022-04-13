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
      svg_code
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
      svg_code
    }
  }
  partners {
    id
    link
    image {
      id
      filename_disk
      description
      svg_code
    }
  }
  our_sponsors {
    id
    image {
      filename_disk
      id
      description
      svg_code
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
      svg_code
    }
  }
}
    `;
export const AboutPageDocument = gql`
    query AboutPage {
  about_page {
    id
    title_bar_text
    meta_description
    heading
    enter_now_section_CTA_label
    enter_now_section_image {
      id
      filename_disk
      description
      svg_code
    }
    challenge_section_youtube_video_id
    challenge_section_heading
    challenge_section_body
    judges_section_heading
    judges_section_judge {
      id
      judge {
        id
        name
        company
        image {
          id
          filename_disk
          description
          svg_code
        }
      }
    }
    judges_section_body
    judges_section_CTA_label
    brands_section_text
    multi_level_questions {
      id
      question {
        id
        title
        body {
          id
          multi_level_question_items {
            id
            level_1_title
            level_2_title
            level_2_subtext
            level_3_text
            level_3_links {
              id
              multi_level_question_item_links {
                id
                label
                url
              }
            }
          }
        }
      }
    }
    textarea_questions {
      id
      question {
        id
        title
        body
      }
    }
  }
  brands {
    id
    image {
      id
      description
      filename_disk
      svg_code
    }
  }
}
    `;
export const EnterPageDocument = gql`
    query EnterPage {
  enter_page {
    id
    meta_description
    key_dates_title
    key_dates_youtube_video_id
    timeline_section_heading
    timeline_section_image {
      id
      filename_disk
      description
      svg_code
    }
    heading
    title_bar_text
    key_dates {
      id
      dates {
        id
        date
        subtext
      }
    }
    text_area_questions {
      id
      question {
        id
        body
        title
      }
    }
    multi_level_questions {
      id
      question {
        id
        title
        body {
          id
          multi_level_question_items {
            id
            level_1_title
            level_2_title
            level_2_subtext
            level_3_text
            level_3_links {
              id
              multi_level_question_item_links {
                id
                label
                url
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
    query HomePage($limit: Int, $page: Int, $filterQuery: past_winners_filter) {
  home_page {
    id
    title_bar_text
    meta_description
    enter_now_section_heading
    enter_now_section_sub_heading
    enter_now_section_body
    enter_now_section_CTA_label
    hero_section_youtube_video_id
    hero_section_right_side_svg {
      id
      filename_disk
      description
      svg_code
    }
    innovator_section_heading
    innovator_section_body
    innovator_section_CTA_label
    innovator_section_image {
      id
      filename_disk
      description
      svg_code
    }
    brands_section_heading
    brands_section_description
    brands_section_CTA_label
    current_year_filter {
      id
      year
    }
    inspiration_articles {
      id
      inspiration_article {
        id
        title
        body
        read_more_label
        read_more_link
        image {
          id
          filename_disk
          description
          svg_code
        }
      }
    }
  }
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
  past_winners_aggregated(filter: $filterQuery, sort: ["sort", "date_created"]) {
    count {
      id
    }
  }
  past_winners(
    limit: $limit
    page: $page
    filter: $filterQuery
    sort: ["sort", "date_created"]
  ) {
    id
    name
    image {
      id
      filename_disk
      description
      svg_code
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
        id
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
  brands {
    id
    image {
      id
      description
      filename_disk
      svg_code
    }
  }
}
    `;
export const InspirationPageDocument = gql`
    query InspirationPage($limit: Int, $page: Int) {
  inspiration_page {
    id
    heading
    description
    title_bar_text
    meta_description
    hero_image {
      id
      filename_disk
      description
      svg_code
    }
  }
  inspiration_articles_aggregated {
    count {
      id
    }
  }
  inspiration_articles(limit: $limit, page: $page, sort: ["sort", "date_created"]) {
    id
    image {
      id
      filename_disk
      description
      svg_code
    }
    title
    body
    read_more_label
    read_more_link
  }
}
    `;
export const JudgesPageDocument = gql`
    query JudgesPage($limit: Int, $page: Int, $filterQuery: judges_filter) {
  judges(
    limit: $limit
    page: $page
    filter: $filterQuery
    sort: ["sort", "date_created"]
  ) {
    id
    name
    about_text
    company
    image {
      id
      filename_disk
      description
      svg_code
    }
  }
  judges_years {
    id
    year
  }
  judges_page {
    id
    heading
    title_bar_text
    meta_description
  }
  judges_aggregated(filter: $filterQuery, sort: ["sort", "date_created"]) {
    count {
      id
    }
  }
}
    `;
export const PastWinnerDetailsDocument = gql`
    query pastWinnerDetails($id: ID!, $filterQuery: past_winners_filter) {
  past_winners_by_id(id: $id) {
    id
    name
    students_name
    short_description
    youtube_video_id
    categories {
      id
      past_winners_category {
        id
        category
      }
    }
    school_name
    year {
      id
      past_winners_year {
        id
        year
      }
    }
    project_information
    short_description
    worksheets {
      id
      past_winners_worksheet {
        id
        worksheet {
          id
          filename_disk
          description
        }
      }
    }
  }
  past_winners(limit: 1, filter: $filterQuery) {
    id
  }
}
    `;
export const PastWinnersPageDocument = gql`
    query PastWinnersPage($limit: Int, $page: Int, $filterQuery: past_winners_filter) {
  past_winners_page {
    id
    heading
    title_bar_text
    meta_description
  }
  past_winners_categories {
    id
    category
  }
  past_winners_years {
    id
    year
  }
  past_winners_aggregated(filter: $filterQuery, sort: ["sort", "date_created"]) {
    count {
      id
    }
  }
  past_winners(
    limit: $limit
    page: $page
    filter: $filterQuery
    sort: ["sort", "date_created"]
  ) {
    id
    name
    image {
      id
      filename_disk
      description
      svg_code
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
        id
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