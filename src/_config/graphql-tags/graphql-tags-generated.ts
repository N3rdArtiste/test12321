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
    partners {
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
export const HomepageDocument = gql`
    query Homepage {
  home_page {
    id
    enter_now_section_heading
    enter_now_section_body
    enter_now_section_CTA_label
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
export const JudgeDocument = gql`
    query Judge($id: ID!) {
  judges_by_id(id: $id) {
    __typename
    name
    id
  }
}
    `;